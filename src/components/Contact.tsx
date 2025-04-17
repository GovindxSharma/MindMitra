import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { PiXLogoBold } from "react-icons/pi";


const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">Contact MindMitra</h2>
      <p className="mb-8 text-gray-200">We’d love to hear your feedback or questions. Reach out anytime!</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 mt-1 text-black"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 mt-1 text-black"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full resize-none border rounded p-2 mt-1 text-black"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-purple-700 cursor-pointer text-white px-4 py-2 rounded hover:bg-purple-800"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-green-600">Thank you! Your message has been sent.</p>
          )}
        </form>

        {/* Contact Info & Links */}
        <div className="bg-white p-6 shadow rounded-lg text-gray-700 space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-700" />
            <a href="mailto:support@mindmitra.com" className="hover:underline">
              support@mindmitra.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-purple-700" />
            <a href="tel:+1234567890" className="hover:underline">
              +1 234 567 890
            </a>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Follow us</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-purple-700 text-4xl hover:text-purple-900" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <PiXLogoBold className="text-purple-700 text-4xl hover:text-purple-900" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="text-purple-700 text-4xl hover:text-purple-900" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
