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
  const [encryptedText, setEncryptedText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [encryptedFilename, setEncryptedFilename] = useState<string | null>(null);

  // ✅ Generate a random 16-byte hex string
  const generateRandomHex = () => {
    return [...crypto.getRandomValues(new Uint8Array(16))]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  // 🔹 Encrypt TEXT
  const handleEncryptText = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!key || !plainText) {
      alert("Please enter both the encryption key and plaintext.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/encrypt-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: plainText, password: key }),
      });

      if (!response.ok) throw new Error("Encryption failed.");
      const data = await response.json();
      setEncryptedText(data.encryptedText);
    } catch (error) {
      alert("Encryption failed. Please try again.");
      setEncryptedText("");
    }
  };

  // 🔹 Encrypt IMAGE / VIDEO
  const handleEncryptFile = async () => {
    if (!file || !key) {
      alert("Please select a file and enter the encryption key.");
      return;
    }

    setIsLoading(true);
    setEncryptedFilename(null); // Reset previous filename

    const formData = new FormData();
    const fieldName = activeMode === "image" ? "image" : "video"; // Set correct field name
    formData.append(fieldName, file);
    formData.append("password", key);
    const randomHexFilename = generateRandomHex() + ".txt"; // 🔥 Generate random filename

    try {
      const response = await fetch(`http://localhost:5000/encrypt-${activeMode}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Encryption failed.");
      const blob = await response.blob();

      setEncryptedFilename(randomHexFilename); // ✅ Set the new filename

      // ✅ Auto-download file with random name
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = randomHexFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Encryption failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="absolute inset-0">
        <DotPatternBackground />
      </div>

      <div className="relative flex flex-col items-center justify-center flex-grow px-6 z-10">
        <h1 className="text-4xl font-bold mb-2">Encrypt</h1>
        <p className="text-gray-400 mb-6">with <ColourfulText text="Deimos Cipher" /></p>

        {/* 🔥 Mode Selector */}
        <div className="flex space-x-4 mb-6">
          {(["text", "image", "video"] as const).map(mode => (
            <Button key={mode} onClick={() => setActiveMode(mode)}
              className={`px-6 py-2 rounded-lg transition ${activeMode === mode ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"}`}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Button>
          ))}
        </div>

        {/* 🔥 Main Input Section */}
        <div className="w-full max-w-md p-6 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-800">
          
          {/* ✅ TEXT Encryption */}
          {activeMode === "text" && (
            <form onSubmit={handleEncryptText} className="space-y-4">
              <label className="block text-gray-300 text-sm font-medium mb-1">Encryption Key</label>
              <Input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter encryption key"
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500" />
              <label className="block text-gray-300 text-sm font-medium mb-1">Plaintext</label>
              <textarea value={plainText} onChange={(e) => setPlainText(e.target.value)} placeholder="Enter plaintext"
                className="w-full h-32 bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 resize-none focus:border-red-500" />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg">Encrypt</Button>
            </form>
          )}

          {/* ✅ IMAGE / VIDEO Encryption */}
          {activeMode !== "text" && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Upload {activeMode.charAt(0).toUpperCase() + activeMode.slice(1)} (Max: 1GB)</p>
              <input type="file" accept={activeMode === "image" ? "image/*" : "video/*"} onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500" />
              <label className="block text-gray-300 text-sm font-medium mb-1">Encryption Key</label>
              <Input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter encryption key"
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 focus:border-red-500" />
              <Button onClick={handleEncryptFile} disabled={isLoading}
                className={`w-full font-semibold py-2 rounded-lg transition ${isLoading ? "bg-gray-500" : "bg-red-600 hover:bg-red-500 text-white"}`}>
                {isLoading ? "Encrypting..." : `Encrypt ${activeMode.charAt(0).toUpperCase() + activeMode.slice(1)}`}
              </Button>
            </div>
          )}
        </div>

        {/* 🔥 Encrypted File Output */}
        {activeMode !== "text" && encryptedFilename && (
          <div className="mt-4 text-green-400">
            ✅ Encrypted file downloaded: <span className="font-mono text-white">{encryptedFilename}</span>
          </div>
        )}

        {/* 🔥 Encrypted Text Output Box */}
        {activeMode === "text" && encryptedText && (
          <div className="w-full max-w-md mt-6 p-6 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-3">Encrypted Output</h3>
            <pre className="bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-auto text-red-400 text-sm whitespace-pre-wrap break-all font-mono">{encryptedText}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
