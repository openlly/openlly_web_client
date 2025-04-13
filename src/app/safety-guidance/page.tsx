"use client";

import { Layout } from "@/app/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const safetySections = [
  <>
    <h2 className="text-xl font-semibold mb-3">1. Your Privacy, First</h2>
    <p>
      At Openlly, we prioritize your privacy above all else. Our platform has been designed with one goal in mind: to protect your personal information and allow you to engage anonymously, should you choose to do so. We believe that privacy is not just a feature; it is a fundamental right.
    </p>
    <p>
      Every interaction on Openlly is secured with advanced encryption, ensuring that your messages, data, and activities are shielded from unauthorized access. Whether you are sending messages or simply browsing content, you can rest assured that your privacy remains intact.
    </p>
    <p>
      It's important to note that while Openlly protects your data by default, you have the option to share certain details if you choose to. We encourage transparency, but only to the extent that you are comfortable with. You can control who sees your activity and what data you provide at any time through our settings.
    </p>
    <p>
      To learn more about how we handle your data and what measures are in place to keep it safe, we encourage you to read our <Link href="/privacy" className="text-blue-600">Privacy Policy</Link>, where we go into further detail about our privacy practices and your rights as a user.
    </p>
  </>,
  <>
    <h2 className="text-xl font-semibold mb-3">2. Report Harmful Content</h2>
    <p>
      One of our core principles at Openlly is to foster a respectful and positive environment. We believe that every user should feel safe when interacting on the platform. However, sometimes, harmful or inappropriate content may slip through the cracks. When this happens, we rely on you, our users, to help us maintain the integrity of the platform.
    </p>
    <p>
      Reporting harmful content is simple and efficient. If you encounter offensive, abusive, or inappropriate content—whether it’s a message, comment, or post—there is a report button located next to the content that you can use to flag it. Once reported, our moderation team will swiftly review the situation and take appropriate action to ensure the community remains safe.
    </p>
    <p>
      We understand that not all harmful content is immediately obvious, and some of it may involve subtle or indirect behavior. In these cases, we encourage you to report the content, even if you're unsure, so our team can investigate. Your reports are confidential, and we take them seriously.
    </p>
    <p>
      In addition to reporting content, we also provide you with the option to block users who may be persistently sending harmful messages. Once blocked, these users can no longer interact with you. This is a powerful tool for maintaining control over your personal space on Openlly.
    </p>
    <p>
      To learn more about how reporting works, and what we consider harmful content, visit our <Link href="/terms" className="text-blue-600">Terms of Service</Link> and familiarize yourself with the guidelines we follow when moderating content.
    </p>
  </>,
  <>
    <h2 className="text-xl font-semibold mb-3">3. Blocking Abusers</h2>
    <p>
      No one should have to tolerate harassment, spam, or abusive behavior while using Openlly. That’s why we’ve made it easy for you to block any user who makes you feel uncomfortable or unsafe. Whether it's offensive language, unsolicited messages, or any form of harassment, you have the ability to block anyone at any time.
    </p>
    <p>
      The blocking feature on Openlly is designed to be straightforward and efficient. When you block a user, they can no longer message you or view your content. This immediate action provides you with the freedom to interact with others on your terms, without the fear of unwanted interactions.
    </p>
    <p>
      Blocking is reversible, meaning that you can unblock someone if you change your mind. However, please note that blocking someone is a serious decision—one that ensures your peace of mind and safety on the platform. It’s not just about protecting yourself from offensive behavior; it’s about creating an environment where you feel in control of your social interactions.
    </p>
    <p>
      You can manage your blocked users list through your account settings, and if you ever feel the need for more extensive assistance, our support team is here to help. We offer guidance and resources for anyone dealing with harassment or other unsafe behavior.
    </p>
    <p>
      For further details on how blocking works and when it’s appropriate to use this feature, please consult our <Link href="/help" className="text-blue-600">Help Center</Link>, where we provide step-by-step instructions and FAQs about blocking users.
    </p>
  </>,
  <>
    <h2 className="text-xl font-semibold mb-3">4. Control What You Share</h2>
    <p>
      Openlly provides you with complete control over what you share. Whether you want to remain entirely anonymous or choose to disclose some personal information, the choice is always yours. We give you the flexibility to determine what details you share with others on the platform.
    </p>
    <p>
      You have the power to customize your profile, manage your activity status, and even choose which information is visible to others. For example, if you want to stay anonymous while responding to messages or sharing posts, you can do so with ease. You’re never required to reveal anything you don’t want to share.
    </p>
    <p>
      Additionally, Openlly allows you to adjust your privacy settings at any time. This means that if you decide to change the level of information you're comfortable sharing, you can do so in just a few clicks. Whether you want to limit the visibility of your posts or restrict who can message you, Openlly makes it simple to tailor your experience to your needs.
    </p>
    <p>
      We encourage users to think carefully about what personal details they disclose online. Protecting your identity is crucial, and by using Openlly’s privacy settings, you can ensure that your information stays secure. Remember: sharing less is often more when it comes to online interactions.
    </p>
    <p>
      For more tips on maintaining your privacy and understanding what information is safe to share, take a look at our <Link href="/privacy-tips" className="text-blue-600">Privacy Tips</Link> page.
    </p>
  </>,
  <>
    <h2 className="text-xl font-semibold mb-3">5. Open & Transparent</h2>
    <p>
      Openlly is committed to maintaining transparency with our users, especially when it comes to safety and privacy. We believe that trust is earned through openness, which is why we ensure that all of our safety actions are documented and available for review. Every time a report is made, or a user is blocked, it’s logged to provide full accountability.
    </p>
    <p>
      We regularly update our users on any changes to our safety policies, platform rules, or privacy practices. These updates are communicated clearly, so you’re always in the know about any important changes that might affect how you use the platform.
    </p>
    <p>
      We understand the importance of keeping you informed, which is why we also provide resources like our blog and newsletter, where you can find out about new features, updates, and best practices for staying safe online.
    </p>
    <p>
      Transparency is also reflected in our approach to community feedback. We actively seek input from our users to improve the safety and usability of Openlly. Your suggestions matter, and we take every piece of feedback into consideration when making improvements.
    </p>
    <p>
      If you’d like to learn more about how we ensure transparency in our platform, please visit our <Link href="/about" className="text-blue-600">About Us</Link> page.
    </p>
  </>,
  <>
    <h2 className="text-xl font-semibold mb-3">6. User Safety Resources</h2>
    <p>
      In addition to our core safety features like blocking and reporting, Openlly provides a variety of user resources to ensure that everyone can access the help they need when they need it. Our resources include safety tips, educational content, and support channels to guide you through any safety concerns you might have.
    </p>
    <p>
      We believe that everyone should have the knowledge and tools to protect themselves online. That’s why we’ve created a comprehensive safety guide, covering everything from protecting your identity to avoiding scams and online threats. Our guide is available for free and can be accessed at any time from the settings menu.
    </p>
    <p>
      If you ever feel unsafe or need immediate assistance, our support team is available 24/7 to provide help. You can contact them directly through our live chat feature or by submitting a support request through your account dashboard.
    </p>
    <p>
      For additional information on the resources available to you, be sure to check out our <Link href="/safety-resources" className="text-blue-600">Safety Resources</Link> page.
    </p>
  </>,
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SafetyPage() {
  return (
    <Layout>
      <motion.div
        className="max-w-3xl mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1 className="text-3xl font-bold mb-8" variants={fadeInUp}>
          Safety Guidance
        </motion.h1>

        <div className="space-y-12">
          {safetySections.map((section, i) => (
            <motion.section
              key={i}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              {section}
            </motion.section>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
