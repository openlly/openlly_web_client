"use client";
import React from "react";
import { cn } from "../utils/cn";

import { Layout } from "../components/Layout";
import { appConfig } from "../utils/constants";
import { motion } from "framer-motion";
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const email = appConfig.CONTACT_EMAIL_ADDRESS;
const address = appConfig.CONTACT_ADDRESS;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      items: [
        "Email address (for authentication and notifications)",
        "IP addresses (for spam detection and platform security)",
        "Device information (for security and optimization)",
        "Content and interactions, such as questions and answers",
      ],
    },
    {
      title: "How We Use Your Information",
      items: [
        "Authentication and account management",
        "Sending notifications about message statuses",
        "Preventing spam and abuse",
        "Improving our services and user experience",
        "Providing customer support and troubleshooting",
      ],
    },
    {
      title: "Data Storage and Security",
      paragraphs: [
        "We request storage permissions to enable:",
      ],
      items: [
        "Downloading and saving images",
        "Storing user preferences",
        "Caching data for offline access",
      ],
      extra: "We store your data securely on cloud servers and use encryption to protect it from unauthorized access. Your data will be retained as long as necessary for providing our services, after which it will be deleted.",
    },
    {
      title: "Your Rights",
      paragraphs: [
        "You have the right to:",
      ],
      items: [
        "Request a copy of your data",
        "Request deletion of your data",
        "Opt-out of notifications",
        "Update your information",
        "Withdraw your consent for data processing, where applicable",
      ],
    },
    {
      title: "Data Deletion Requests",
      paragraphs: [
        `To request deletion of your data, please email us at <a href="mailto:${email}" class="text-blue-600 hover:underline">${email}</a> with:`,
      ],
      items: [
        "Your username",
        "Registered email address",
        "Reason for deletion (optional)",
      ],
      extra: "We will process your request within 30 days. Please note that once your data is deleted, it cannot be recovered.",
    },
    {
      title: "Third-Party Services",
      paragraphs: [
        "Openlly may use third-party services to help provide our platform. These third-party services may have access to your personal data, but they are obligated to keep it confidential and secure. We encourage you to review the privacy policies of these third-party services to understand how they handle your data.",
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      paragraphs: [
        "We use cookies and similar tracking technologies to enhance your experience. These technologies help us analyze how users interact with Openlly, keep you logged in, and improve our services. You can manage your cookie preferences through your browser settings, but please note that disabling cookies may affect the functionality of the platform.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      paragraphs: [
        "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
      ],
    },
    {
      title: "Contact Us",
      items: [
        `Email: <a href="mailto:${email}" class="text-blue-600 hover:underline">${email}</a>`,
        `Address: ${address}`,
      ],
    },
  ];

  return (
    <Layout>
<div className="max-w-3xl mx-auto px-4 py-16  text-white">
<motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Privacy Policy
        </motion.h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
             <Card className="bg-[#1a1a1a] border border-[#333] text-white shadow-sm">
  <CardContent className="p-6">
    <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>

    {section.paragraphs?.map((p, i) => (
      <p
        key={i}
        className="text-sm text-gray-400 mb-3"
        dangerouslySetInnerHTML={{ __html: p }}
      />
    ))}

    {section.items && (
      <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
        {section.items.map((item, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    )}

    {section.extra && (
      <p className="text-sm text-gray-400 mt-4">{section.extra}</p>
    )}
  </CardContent>
</Card> 
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

