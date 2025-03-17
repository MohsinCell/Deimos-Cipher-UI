"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
import ColourfulText from "@/components/ui/colourful-text";

export function EncryptPage() {
  const [activeMode, setActiveMode] = useState<"text" | "image" | "video">("text");
  const [key, setKey] = useState("");
  const [plainText, setPlainText] = useState("");
//   const [file, setFile] = useState<File | null>(null);
const [_file, setFile] = useState<File | null>(null);
//   const [encryptedText, setEncryptedText] = useState("");
const [_encryptedText, setEncryptedText] = useState("");

  // Function to generate a random key
  const generateRandomKey = () => {
    const randomKey = Math.random().toString(36).substring(2, 12).toUpperCase();
    setKey(randomKey);
  };

  // Function to handle form submission (for text encryption)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!key || !plainText) {
      alert("Please enter both an encryption key and text.");
      return;
    }

    // Mock encryption logic (replace with actual encryption later)
    const encrypted = btoa(plainText + key);
    setEncryptedText(encrypted);
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Full-Screen Dotted Background */}
      <div className="absolute inset-0">
        <DotPatternBackground />
      </div>

      {/* Page Content */}
      <div className="relative flex flex-col items-center justify-center flex-grow px-6 z-10">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-2">Encrypt</h1>
        <p className="text-gray-400 mb-6">
          with <ColourfulText text="Deimos Cipher" />
        </p>

        {/* Selection Options (Text, Image, Video) */}
        <div className="flex space-x-4 mb-6">
          <Button
            onClick={() => setActiveMode("text")}
            className={`px-6 py-2 rounded-lg transition ${
              activeMode === "text" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Text
          </Button>
          <Button
            onClick={() => setActiveMode("image")}
            className={`px-6 py-2 rounded-lg transition ${
              activeMode === "image" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Image
          </Button>
          <Button
            onClick={() => setActiveMode("video")}
            className={`px-6 py-2 rounded-lg transition ${
              activeMode === "video" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Video
          </Button>
        </div>

        {/* Forms Container */}
        <div className="w-full max-w-md p-6 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-800">
          {/* Generate Key Button */}
          <Button
            type="button"
            onClick={generateRandomKey}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg mb-4"
          >
            Generate Key
          </Button>

          {/* Encryption Form Based on Selected Mode */}
          {activeMode === "text" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Encryption Key</label>
                <Input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter or generate key"
                  className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Plain Text</label>
                <textarea
                  value={plainText}
                  onChange={(e) => setPlainText(e.target.value)}
                  placeholder="Enter text to encrypt"
                  className="w-full h-32 bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 resize-none focus:border-blue-500"
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg">
                Encrypt
              </Button>
            </form>
          )}

          {activeMode === "image" && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Upload Image (Max: 5MB)</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-blue-500"
              />

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Encryption Key</label>
                <Input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter or generate key"
                  className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-blue-500"
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg">
                Encrypt Image
              </Button>
            </div>
          )}

          {activeMode === "video" && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Upload Video (Max: 10MB)</p>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-blue-500"
              />

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Encryption Key</label>
                <Input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter or generate key"
                  className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-blue-500"
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg">
                Encrypt Video
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
