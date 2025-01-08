"use client";
import { useRouter } from 'next/navigation';
export const ErrorState = () => {
    const router = useRouter();
  
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="animate-bounce text-center p-4 bg-red-500 rounded-lg shadow-lg">
          <p className="text-2xl font-bold">Whoops, something went wrong!</p>
          <p className="text-xl">It does look like link is broken </p>
          <button
            className="mt-4 px-4 py-2 bg-white hover:bg-gray-100 rounded text-black transition duration-300 ease-in-out"
            onClick={() => {
              // navigate to home
              router.push('/');
              
            }}
          >
            Go back
          </button>
        </div>
      </div>
    );
  };