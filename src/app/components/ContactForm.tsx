"use client"
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Backend submission logic here
  };
  return (
    <div className='h-[150vh] flex items-center justify-center w-full'>
      <div className="flex flex-col md:flex-row items-stretch justify-center h-[100vh] rounded-2xl shadow-xl p-6 md:p-10 max-w-8xl mx-auto">
      {/* Left Section */}
      <div className="w-full h-[117vh] md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-900 rounded-xl p-10 text-white flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Let's Talk Marketing</h2>
        <p className="text-md leading-relaxed">
          Whether you're looking to scale up your social media, launch targeted ad campaigns,
          or build an SEO strategy — we're here to help your brand grow.
        </p>
      </div>

      {/* Right Section - Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 h-[90vh] bg-black text-white p-6 md:p-10 space-y-5"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-[20px] mb-1">Full Name *</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-[20px] mb-1">Email Address *</label>
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
            <label className="block text-[20px] mb-1">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-[20px] mb-1">Company / Brand</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-[20px] mb-1">Interested Services *</label>
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
            <label className="block text-[20px] mb-1">Project Details</label>
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
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 text-[20px] rounded transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactForm