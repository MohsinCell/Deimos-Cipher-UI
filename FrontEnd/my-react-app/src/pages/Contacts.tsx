"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (formData.name.length < 4) {
      newErrors.name = "Name must be at least 4 characters.";
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      {/* Ensure no extra scrolling */}
      <style>{`
        html, body {
          overflow: hidden;
          height: 100%;
        }
      `}</style>

      <div className="relative h-screen flex flex-col">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
          <Navbar />
        </div>

        {/* Main Content */}
        <WavyBackground className="flex-grow flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col items-center px-6 w-full"
          >
            {/* Heading */}
            <h1 className="text-xl md:text-4xl font-bold text-white text-center">
              Contact Us
            </h1>
            <p className="font-light text-sm md:text-lg text-gray-300 text-center mb-6">
              Leave us a message
            </p>

            
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-[#242424] py-6 px-10 min-w-lg rounded-lg shadow-lg w-full max-w-3xl transition-all duration-300"
            >
              {/* Name Field */}
              <div className="mb-3">
                <label className="block text-white font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="flex h-10 w-full border-none bg-[#2E2E2E] text-gray-300 shadow-input rounded-md px-3 py-2 text-sm  
                    placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-500
                    hover:border-blue-500 transition-all duration-300"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label className="block text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="flex h-10 w-full border-none bg-[#2E2E2E] text-gray-300 shadow-input rounded-md px-3 py-2 text-sm  
                    placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-500
                    hover:border-blue-500 transition-all duration-300"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="mb-5">
                <label className="block text-white font-medium mb-1">Message</label>
                <textarea
                  className="flex h-40 w-full border-none bg-[#2E2E2E] text-gray-300 shadow-input rounded-md px-3 py-2 text-sm  
                    placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-500
                    hover:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md text-sm transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </WavyBackground>
      </div>
    </>
  );
}
