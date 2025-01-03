import { Layout } from '../components/Layout';

export function PrivacyPolicy() {
    const email = import.meta.env.VITE_CONTACT_EMAIL
    const address = import.meta.env.VITE_COMPANY_ADDRESS
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email address (for authentication and notifications)</li>
              <li>IP addresses (for spam detection and platform security)</li>
              <li>Device information (for security and optimization)</li>
              <li>Content and interactions, such as questions and answers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Authentication and account management</li>
              <li>Sending notifications about message statuses</li>
              <li>Preventing spam and abuse</li>
              <li>Improving our services and user experience</li>
              <li>Providing customer support and troubleshooting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Storage and Security</h2>
            <p>We request storage permissions to enable:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Downloading and saving images</li>
              <li>Storing user preferences</li>
              <li>Caching data for offline access</li>
            </ul>
            <p>We store your data securely on cloud servers and use encryption to protect it from unauthorized access. Your data will be retained as long as necessary for providing our services, after which it will be deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request a copy of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of notifications</li>
              <li>Update your information</li>
              <li>Withdraw your consent for data processing, where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Deletion Requests</h2>
            <p>To request deletion of your data, please email us at <a href={`mailto:${email}`} className="text-blue-600">{email}</a> with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your username</li>
              <li>Registered email address</li>
              <li>Reason for deletion (optional)</li>
            </ul>
            <p className="mt-2">We will process your request within 30 days. Please note that once your data is deleted, it cannot be recovered.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p>Openlly may use third-party services to help provide our platform. These third-party services may have access to your personal data, but they are obligated to keep it confidential and secure. We encourage you to review the privacy policies of these third-party services to understand how they handle your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience. These technologies help us analyze how users interact with Openlly, keep you logged in, and improve our services. You can manage your cookie preferences through your browser settings, but please note that disabling cookies may affect the functionality of the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email: <a href={`mailto:${email}`} className="text-blue-600">{email}</a></li>
              <li>Address: {address}</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
