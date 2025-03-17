"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
import ColourfulText from "@/components/ui/colourful-text";

export function DecryptPage() {
  const [activeMode, setActiveMode] = useState<"text" | "image" | "video">("text");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
//   const [file, setFile] = useState<File | null>(null);
const [_file, setFile] = useState<File | null>(null);

  // Function to handle decryption (For Text)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!key || !encryptedText) {
      alert("Please enter both the encryption key and encrypted text.");
      return;
    }

    try {
      // Mock decryption logic (replace with actual decryption)
      const decrypted = atob(encryptedText).replace(key, ""); // Assuming base64
      setDecryptedText(decrypted);
    } catch (error) {
      alert("Invalid encrypted text or key!");
      setDecryptedText("");
    }
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
        <h1 className="text-4xl font-bold mb-2">Decrypt</h1>
        <p className="text-gray-400 mb-6">
          with <ColourfulText text="Deimos Cipher" />
        </p>

        {/* Selection Options (Text, Image, Video) */}
        <div className="flex space-x-4 mb-6">
          <Button
            onClick={() => setActiveMode("text")}
            className={`px-6 py-2 rounded-lg transition ${
              activeMode === "text" ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Text
          </Button>
          <Button
            onClick={() => setActiveMode("image")}
            className={`px-6 py-2 rounded-lg transition ${
              activeMode === "image" ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Image
          </Button>
          <Button
            onClick={() => setActiveMode("video")}
            className={`px-6 py-2 rounded-lg transition ${
              activeMode === "video" ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Video
          </Button>
        </div>

        {/* Forms Container */}
        <div className="w-full max-w-md p-6 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-800">
          {/* Decryption Form Based on Selected Mode */}
          {activeMode === "text" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Decryption Key</label>
                <Input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter the decryption key"
                  className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Encrypted Text</label>
                <textarea
                  value={encryptedText}
                  onChange={(e) => setEncryptedText(e.target.value)}
                  placeholder="Enter encrypted text"
                  className="w-full h-32 bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 resize-none focus:border-red-500"
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg">
                Decrypt
              </Button>

              {/* Display Decrypted Text */}
              {decryptedText && (
                <div className="mt-4 p-3 bg-gray-800 text-white text-sm rounded-lg border border-gray-700">
                  <strong>Decrypted Text:</strong> {decryptedText}
                </div>
              )}
            </form>
          )}

          {activeMode === "image" && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Upload Encrypted Image (Max: 5MB)</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500"
              />

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Decryption Key</label>
                <Input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter decryption key"
                  className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500"
                />
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg">
                Decrypt Image
              </Button>
            </div>
          )}

          {activeMode === "video" && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Upload Encrypted Video (Max: 10MB)</p>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500"
              />

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Decryption Key</label>
                <Input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter decryption key"
                  className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500"
                />
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg">
                Decrypt Video
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
