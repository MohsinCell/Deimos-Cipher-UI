import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"; // Ensure correct import

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t pt-10 mt-10 border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
        {/* Left Section: About Deimos Cipher */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white">Deimos Cipher</h2>
          <p className="text-gray-400 mt-2">
            A modern encryption tool designed to secure your text, images, and videos with cutting-edge cryptographic methods.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="md:w-1/3 grid grid-cols-2 gap-4 text-gray-400">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/encrypt" className="hover:text-white transition">Encrypt</a></li>
              <li><a href="/decrypt" className="hover:text-white transition">Decrypt</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/docs" className="hover:text-white transition">Documentation</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="md:w-1/3 flex flex-col md:items-end">
          <h3 className="text-lg font-semibold text-white mb-2">Connect with Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://github.com/razasoneji" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/razasoneji" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-white transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section (Slightly Larger Text & Different Background Shade) */}
      <div className="text-center text-gray-400 py-4 text-md bg-[#111]">
        © {new Date().getFullYear()} <span className="font-semibold text-lg">Deimos Cipher</span>. All rights reserved.
      </div>
    </footer>
  );
}
