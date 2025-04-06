

"use client";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { Layout } from "../components/Layout";
import { onSubmitContactDetails } from "./lib/onSubmitEmail";

export default function ContactPage() {
  return (
    <Layout>
      <div className="text-white max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm onSubmit={onSubmitContactDetails} />
        </div>
      </div>
    </Layout>
  );
}

