"use client";

import { Layout } from "@/app/components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RequestDataDeletion() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <Layout>
      <motion.div
        className="max-w-3xl mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1 className="text-3xl font-bold mb-8" variants={fadeInUp}>
          Request Data Deletion
        </motion.h1>

        <motion.section
          className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <p>
            At Openlly, we respect your privacy and provide you full control over your personal data. If you wish to delete your account and associated data, you can do so anytime through the app's settings.
          </p>

          <p>
            When you choose to delete your account, all your personal information, content submissions, and user history will be permanently deleted from our servers within 30 days.
          </p>

          <p>
            If you change your mind within this 30-day period and wish to recover your account, please contact us immediately through our{" "}
            <Link href="/contact" className="text-blue-600 underline">
              contact page
            </Link>{" "}
            so we can assist you in restoring your account before the deletion process is completed.
          </p>

          <p>
            For any questions or concerns regarding data deletion, feel free to reach out to us at:
          </p>

        </motion.section>
      </motion.div>
    </Layout>
  );
}
