"use client";
import { useRouter } from 'next/navigation';

export const ErrorState = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-white dark:bg-black">
      <div className="text-center p-6 md:p-8 rounded-xl bg-red-500 dark:bg-red-600 text-white shadow-2xl animate-fade-in">
        <h1 className="text-3xl font-extrabold mb-2">Whoops, something went wrong!</h1>
        <p className="text-lg mb-4">Looks like this link is broken or no longer exists.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-2 px-6 py-2 bg-white text-red-600 font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-200 transition duration-300"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};
