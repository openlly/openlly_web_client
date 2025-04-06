"use client";
import { QuestionCardProps } from '@/app/types';
import { User, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function QuestionCard({ title, content, username, profileImg }: QuestionCardProps) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const handleProfileImageTap = () => {
    if (profileImg) {
      setIsImageViewerOpen(true);
    }
  };

  const handleImageViewerClose = () => {
    setIsImageViewerOpen(false);
  };

  return (
    <div 
      className="p-4 sm:p-6 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg w-full animate-slide-up"
      style={{
        backgroundColor: 'white'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="overflow-hidden rounded-full border-2 border-black" onTouchStart={handleProfileImageTap} onClick={handleProfileImageTap}>
          <div className="bg-white h-8 w-8 flex items-center justify-center">
            {profileImg ? (
              <Image
                src={profileImg}
                alt={username}
                className="rounded-full"
                width={32}
                height={32}
                priority
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
                <User size={16} className="text-black" />
              </div>
            )}
          </div>
        </div>
        <span className="text-black text-sm font-medium">@{username}</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-black/70 mb-2 sm:mb-3">{title}</h2>
      <p className="text-black/90 text-base sm:text-lg">{content}</p>
      {isImageViewerOpen && profileImg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleImageViewerClose}>
          <div className="absolute top-4 right-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black bg-opacity-50">
              <X size={24} className="text-white" onClick={handleImageViewerClose} />
            </div>
          </div>
          <Image 
            src={profileImg} 
            className="w-full h-full object-contain"
            alt={username}
            width={800}
            height={800}
            priority
          />
        </div>
      )}
    </div>
  );
}