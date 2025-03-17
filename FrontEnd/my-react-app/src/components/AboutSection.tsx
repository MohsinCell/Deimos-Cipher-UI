"use client";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-[#030405] text-white px-6">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-10 bg-gradient-to-br from-gray-300 to-gray-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About Deimos Cipher
        </motion.h1>
      </LampContainer>

      {/* Overview */}
      <div className="max-w-3xl text-center mt-6">
        <p className="text-lg text-gray-300">
          Deimos Cipher is an encryption algorithm designed to maximize security, entropy, and efficiency.
          Built with modern cryptographic principles, it ensures top-tier confidentiality and integrity for sensitive data.
        </p>
      </div>

      {/* Features */}
      <div className="mt-8 max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-gray-300">Key Features</h2>
        <ul className="text-gray-400 space-y-2 text-lg">
          <li>High Entropy Output – 7.99998 bits/byte randomness</li>
          <li>50.18% Avalanche Effect – Every bit change alters the ciphertext</li>
          <li>Extreme Key Sensitivity – 50.54% different ciphertext per bit change</li>
          <li>Secure Key Expansion – Uses HKDF with BLAKE2b</li>
          <li>XChaCha20 Stream Encryption – 192-bit nonce security</li>
          <li>HMAC-SHA256 Authentication – Ensures integrity and authenticity</li>
        </ul>
      </div>
    </section>
  );
}
