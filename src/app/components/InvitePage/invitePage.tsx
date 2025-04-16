'use client';

import { useState } from 'react';
import '@/app/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, AlertTriangle, CheckCircle, Send, Star } from 'lucide-react';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const INVITE_LIMIT = 50;

  interface InvitePageComponentProps {
    initialSentInvites?: number;
    onInvite?: (email: string) => Promise<{
        status: string;
        message: string;
    }>;
    isLimitReached?: boolean;
  }

export default function InvitePageComponent({ initialSentInvites = 0, onInvite, isLimitReached = false }: InvitePageComponentProps) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const remainingInvites = INVITE_LIMIT - initialSentInvites;
    const handleInvite = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (!email || isLimitReached || isLoading) {
            if (!email) setError('Please enter a valid email address.');
            return;
        }

        setIsLoading(true);
        try {
                const message = await onInvite?.(email);
                if(message?.status === 'success'){
                    setEmail('');
                    setSuccessMessage("Thanks for your interest! We'll email you when you get access.");
                }else{
                    setError(message?.message || 'Failed to send invite. Please try again.');
                }
        } catch (error) {
            console.error('Error sending invite:', error);
            setError('Failed to send invite. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-900 via-black to-purple-900 opacity-20 blur-2xl animate-pulse" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-lg bg-gradient-to-br from-indigo-900/60 via-black/40 to-purple-900/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-[0_0_60px_rgba(100,100,255,0.25)]"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4 relative">
            <Users className="w-12 h-12 text-indigo-400 animate-bounce" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
              <Star className="w-3 h-3" /> Premium Alpha
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold text-center text-white mb-2 tracking-tight"
          >
            🚀 You're Invited!
          </motion.h1>

          <motion.p variants={itemVariants} className="text-center text-indigo-200 mb-6 text-lg">
            Help shape the future — <strong className="text-white">{INVITE_LIMIT} early access</strong> spots only.
          </motion.p>

          <motion.div variants={itemVariants} className="text-center mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={remainingInvites}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className={`text-lg font-bold ${
                  isLimitReached ? 'text-red-400' : 'text-lime-400'
                }`}
              >
                {remainingInvites > 0
                  ? `✨ ${remainingInvites} VIP Spots Left`
                  : 'Invite Limit Reached!'}
              </motion.p>
            </AnimatePresence>
            {isLimitReached && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-1 text-sm text-gray-400"
              >
                Follow us for future access drops!
              </motion.p>
            )}
          </motion.div>

          <motion.form variants={itemVariants} onSubmit={handleInvite} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@amazingmail.com"
              required
              disabled={isLimitReached || isLoading}
              className="block w-full px-4 py-3 border border-gray-700 rounded-lg bg-black/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-800/40 disabled:text-gray-500 disabled:cursor-not-allowed transition"
            />

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center text-sm text-red-400"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {error}
                </motion.p>
              )}
              {successMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center text-sm text-green-400"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {successMessage}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLimitReached || isLoading || !email}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl text-base font-bold text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-40 transition"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Get Early Access
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    );
}