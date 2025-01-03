import { Layout } from '../components/Layout';
import { ContactInfo } from '../components/Contact/ContactInfo';
import { ContactForm } from '../components/Contact/ContactForm';


export function Contact() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}