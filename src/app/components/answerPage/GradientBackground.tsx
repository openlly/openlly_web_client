"use client";

import { useEffect, useRef } from 'react';
import { Scene, OrthographicCamera, WebGLRenderer, ShaderMaterial, Color, PlaneGeometry, Mesh } from 'three'; // Import only required parts of THREE
import { vertexShader, fragmentShader } from '@/app/shaders/background';
import { GRADIENTS } from '../../utils/constants';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export function GradientBackground({ children }: GradientBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
const cameraRef = useRef<OrthographicCamera | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  useEffect(() => {
    if (!mountRef.current) return;
  
    // Copy the mountRef.current value to a local variable for cleanup
    const mountNode = mountRef.current;
  
    // Setup Scene, Camera, Renderer
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;
    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  
    // Append renderer to DOM
    mountNode.appendChild(renderer.domElement);
  
    // Create Shader Material
    const material = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new Color(GRADIENTS.primary.from) },
        uColor2: { value: new Color(GRADIENTS.primary.to) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });
  
    // Create Geometry and Mesh
    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
  
    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    materialRef.current = material;
  
    // Animation Loop
    const animate = () => {
      if (!materialRef.current || !renderer || !scene || !camera) return;
  
      materialRef.current.uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };
  
    animate();
  
    // Handle Resize
    const handleResize = () => {
      if (!renderer || !camera) return;
  
      renderer.setSize(window.innerWidth, window.innerHeight);
      const aspect = window.innerWidth / window.innerHeight;
  
      if (aspect > 1) {
        camera.left = -aspect;
        camera.right = aspect;
        camera.top = 1;
        camera.bottom = -1;
      } else {
        camera.left = -1;
        camera.right = 1;
        camera.top = 1 / aspect;
        camera.bottom = -1 / aspect;
      }
  
      camera.updateProjectionMatrix();
    };
  
    // Debounce Resize Handling
    const debouncedResize = (() => {
      let resizeTimeout: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
      };
    })();
  
    window.addEventListener('resize', debouncedResize);
    handleResize();
  
    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
  
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
  
      if (renderer && mountNode) {
        mountNode.removeChild(renderer.domElement);
        renderer.dispose();
      }
  
      material?.dispose();
      geometry.dispose();
    scene.clear();
    };
  }, []);
  

  return (
    <div className="relative min-h-screen">
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
