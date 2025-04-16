import '@/app/globals.css';
import { Layout } from '@/app/components/Layout';
import InvitePageComponent from '../components/InvitePage/invitePage';
import { Suspense } from 'react';
import { appConfig } from '../utils/constants';

// This runs on the server during initial render
const getInviteCount = async (): Promise<number> => {
  try {
    // Use next specific fetch options for better caching/revalidation if needed
    const response = await fetch(`${appConfig.CLIENT_BASE_URL}/api/invite`, { cache: 'no-store' });
     if (!response.ok) {
      console.error("Failed to fetch invite count:", response.statusText);
      return 0; // Return a default or handle error appropriately
    }
    const data = await response.json();
    return data.count ?? 0; // Provide default if count is missing
  } catch (error) {
     console.error("Error fetching invite count:", error);
     return 0; // Return default on error
  }
};

// Define this as a Server Action
async function handleInvite(email: string): Promise<{ status: string; message: string; }> {
  'use server'; // <-- Add this directive

  // No need for outer try...catch here as it's handled inside the component now
  // The logic remains the same
  try {
      const response = await fetch(`${appConfig.CLIENT_BASE_URL}/api/invite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        cache: 'no-store' // Ensure fresh data on POST
      });

      const data = await response.json();

      if (response.ok) {
        // Revalidate data if necessary after successful invite
        // revalidatePath('/invite'); // Example if using Next.js caching
        return { status: 'success', message: data.message || "Invite sent successfully!" };
      } else {
         console.error("API Error:", data.error);
        return { status: 'error', message: data.error || 'Failed to send invite' };
      }
    } catch (error: any) {
      console.error("Server Action Error:", error);
      return { status: 'error', message: error?.message || 'An unexpected server error occurred' };
    }
}

// This remains a Server Component
export default async function InvitePage() {
 const inviteCount = await getInviteCount();
 const isLimitReached = inviteCount >= 50;

  return (
    <Layout isHomePage={false}>
      <Suspense fallback={<LoadingState />}>
        <InvitePageComponent
          initialSentInvites={inviteCount}
          isLimitReached={isLimitReached}
          onInvite={handleInvite} // Pass the Server Action directly
        />
      </Suspense>
    </Layout>
  );
}

// Simple Loading state (consider styling it)
const LoadingState = () => {
  // You might want a skeleton loader matching InvitePageComponent's layout
  return (
     <div className="min-h-screen flex items-center justify-center bg-black text-white">
       Loading Invite Portal...
     </div>
  );
};