"use client";
import { QuestionCardProps } from '@/app/types';
import { User, X } from 'lucide-react';
import Image from 'next/image';

export function QuestionCard({ title, content, username, profileImg }: QuestionCardProps) {
 

  return (
    <div 
    className="p-4 sm:p-6 bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg w-full animate-slide-up"
 
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="overflow-hidden rounded-full border-2 border-black">
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
              <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <User size={16} className="text-black dark:text-white" />
            </div>
            )}
          </div>
        </div>
        <span className="text-black dark:text-white text-sm font-medium">@{username}</span>
        </div>
        <h2 className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{title}</h2>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg">{content}</p>
      
    </div>
  );
}