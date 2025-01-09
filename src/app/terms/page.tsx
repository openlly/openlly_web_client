"use client";

import { Layout } from "@/app/components/Layout";
import { appConfig } from "@/app/utils/constants";
import Link from "next/link";


export default function Terms() {
  const supportEmail = appConfig.CONTACT_EMAIL_ADDRESS;
  const address = appConfig.CONTACT_ADDRESS;
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Openlly (the "Service"), you agree to comply with these Terms of Service. If you do not agree to these terms, you must refrain from using the Service.</p>
            <p>Your continued use of the Service constitutes your acceptance of these terms. We may update or revise these terms at any time, and such changes will be effective upon posting on the website. You are encouraged to review these terms periodically to stay informed of any updates.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. User Conduct</h2>
            <p>As a user of Openlly, you agree to the following terms of conduct:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Do not post harmful, abusive, or offensive content that could damage the experience of others.</li>
              <li>Do not impersonate any individual or entity, or misrepresent your relationship with any person or organization.</li>
              <li>Do not send unsolicited or spam messages to other users.</li>
              <li>Do not attempt to circumvent or violate any security or access control measures of the Service.</li>
              <li>Do not engage in any form of harassment, hate speech, or discrimination against others.</li>
              <li>Do not share any content that violates any laws or regulations.</li>
            </ul>
            <p>Failure to comply with these rules may result in the termination of your account and access to the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Collection</h2>
            <p>To provide and improve our services, we collect and process certain data. This includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>IP addresses:</strong> We collect IP addresses to help prevent spam, track usage, and ensure the security of the platform.</li>
              <li><strong>Email addresses:</strong> We require email addresses for account creation, authentication, and communication related to account activity.</li>
              <li><strong>Device information:</strong> To optimize the performance of Openlly, we collect information about the device you use to access the Service, such as device type, operating system, and browser version.</li>
              <li><strong>Content and interactions:</strong> We collect the content you submit to the platform (questions, answers) and your interactions with other users to improve the Service and provide personalized experiences.</li>
            </ul>
            <p>For more details on how we process your data, please refer to our <Link href="/privacy" className="text-blue-600">Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Storage Permissions</h2>
            <p>To provide a smooth and functional experience, we request the following permissions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Storage permissions:</strong> These permissions allow Openlly to store images that you upload, save user preferences, and cache data for offline access.</li>
              <li><strong>Location permissions (if applicable):</strong> We may request location access to enhance the user experience, such as providing region-based content or features.</li>
              <li><strong>Camera permissions (if applicable):</strong> If you choose to upload images via your device's camera, we will request permission to access it.</li>
            </ul>
            <p>By granting these permissions, you allow Openlly to use them to provide the functionality as described. You can revoke permissions at any time through your device settings, though some features may not function properly without them.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. User Content and Rights</h2>
            <p>By submitting content (such as questions, answers, or any other materials) to Openlly, you retain ownership of your content. However, by submitting content, you grant Openlly a non-exclusive, royalty-free, worldwide license to use, display, distribute, and process your content to operate and improve the Service.</p>
            <p>You agree not to upload or share content that violates the intellectual property rights of others, including copyrighted material, trademarks, or other proprietary content without authorization.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Prohibited Activities</h2>
            <p>You agree not to engage in the following activities:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Interfering with or disrupting the Service or servers connected to the Service.</li>
              <li>Using automated scripts or bots to access or collect data from Openlly without our permission.</li>
              <li>Creating false or misleading accounts.</li>
              <li>Engaging in any activity that could cause harm to the platform or its users.</li>
            </ul>
            <p>Any violation of these terms may result in the suspension or termination of your account, along with possible legal action.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Termination and Suspension</h2>
            <p>We reserve the right to suspend or terminate your access to Openlly at our discretion, without prior notice, for any reason, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violation of these Terms of Service.</li>
              <li>Inactivity or failure to comply with user conduct rules.</li>
              <li>Any other reason that Openlly deems necessary for the protection of the platform and its users.</li>
            </ul>
            <p>Upon termination, your account and all associated data may be deleted, and you may no longer be able to access your content or information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p>Openlly is not liable for any damages, loss of data, or other negative outcomes resulting from your use or inability to use the Service. The Service is provided "as is," and we make no warranties regarding the accuracy, reliability, or availability of the platform.</p>
            <p>You agree to indemnify and hold harmless Openlly, its employees, affiliates, and partners from any claims, losses, or damages arising from your use of the Service or violation of these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Governing Law and Dispute Resolution</h2>
            <p>These Terms of Service are governed by the laws of [Your Jurisdiction]. Any disputes arising out of or related to these terms shall be resolved through binding arbitration, rather than in court, in accordance with the rules of [Arbitration Institution].</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <ul className="list-disc pl-5 space-y-2 pt-2">
              <li>Email: <Link href={`mailto:${supportEmail}`} className="text-blue-600">{supportEmail}</Link></li>
              <li>Address: {address}</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
