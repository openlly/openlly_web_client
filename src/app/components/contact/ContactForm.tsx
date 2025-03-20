"use client";
import React, { useState } from "react";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { ContactFormProps } from "@/app/types";

interface Props {
  onSubmit: (data: ContactFormProps) => Promise<boolean>; // Passed from the server
}

type QueryStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<QueryStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await onSubmit(formData); // Call the passed `onSubmit`
      if (result) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-[#ee0979] to-[#ff6a00] text-white py-2 rounded-lg
          hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <LoadingSpinner />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "success" && (
        <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
