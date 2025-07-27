import React from "react";
import ContactForm from "../components/ContactForm";

export default function page() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-[#718096] mb-4">
        Feel free to reach out via email or the form below. I look forward to hearing from you! 
      </p>
      <ContactForm />
    </section>
  );
}
