"use client";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!" + JSON.stringify(form));
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
      <input
        name="name"
        onChange={handleChange}
        value={form.name}
        placeholder="Name"
        className="border p-2 rounded"
        required
      />
      <input
        name="email"
        onChange={handleChange}
        value={form.email}
        placeholder="Email"
        className="border p-2 rounded"
        required
      />
      <textarea
        name="message"
        onChange={handleChange}
        value={form.message}
        placeholder="Message"
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
