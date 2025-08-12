"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Backend submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-4 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-stretch justify-center max-w-7xl w-full gap-8 md:gap-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-900 rounded-l-3xl rounded-r-none p-8 sm:p-12 text-white flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Talk Marketing</h2>
          <p className="text-md sm:text-lg leading-relaxed max-w-lg">
            Whether you're looking to scale up your social media, launch targeted ad campaigns,
            or build an SEO strategy — we're here to help your brand grow.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-black rounded-r-3xl rounded-l-none p-8 sm:p-12 space-y-6 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-lg sm:text-xl mb-1 font-semibold">Full Name *</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl mb-1 font-semibold">Email Address *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl mb-1 font-semibold">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl mb-1 font-semibold">Company / Brand</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl mb-1 font-semibold">Interested Services *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">-- Select a Service --</option>
                <option value="seo">SEO Strategy</option>
                <option value="ads">Targeted Ad Campaigns</option>
                <option value="social">Social Media Scaling</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-lg sm:text-xl mb-1 font-semibold">Project Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 text-lg rounded transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
