"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can handle backend submission here
  };

  return (
    <div className="flex flex-col md:flex-row bg-black rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-900 p-10 text-white flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Talk Marketing</h2>
        <p className="text-md leading-relaxed">
          Whether you're looking to scale up your social media, launch targeted ad campaigns,
          or build an SEO strategy — we're here to help your brand grow.
        </p>
      </div>

      {/* Right Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-black text-white p-10 space-y-5"
      >
        <div>
          <label className="block text-sm mb-1">Full Name *</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email Address *</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Company / Brand</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Interested Services *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
          >
            <option value="">-- Select a Service --</option>
            <option value="seo">SEO Strategy</option>
            <option value="ads">Targeted Ad Campaigns</option>
            <option value="social">Social Media Scaling</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Project Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
