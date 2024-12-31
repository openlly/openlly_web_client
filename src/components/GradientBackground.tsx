import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from '../shaders/background';
import { GRADIENTS } from '../utils/constants';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export function GradientBackground({ children }: GradientBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    cameraRef.current.position.z = 1;

    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(rendererRef.current.domElement);

    // Material
    materialRef.current = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(GRADIENTS.primary.from) },
        uColor2: { value: new THREE.Color(GRADIENTS.primary.to) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    // Mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, materialRef.current);
    sceneRef.current.add(mesh);

    // Animation
    const animate = () => {
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      materialRef.current.uniforms.uTime.value += 0.01;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return;

      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      const aspect = window.innerWidth / window.innerHeight;

      if (aspect > 1) {
        cameraRef.current.left = -aspect;
        cameraRef.current.right = aspect;
        cameraRef.current.top = 1;
        cameraRef.current.bottom = -1;
      } else {
        cameraRef.current.left = -1;
        cameraRef.current.right = 1;
        cameraRef.current.top = 1 / aspect;
        cameraRef.current.bottom = -1 / aspect;
      }

      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      if (materialRef.current) {
        materialRef.current.dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}