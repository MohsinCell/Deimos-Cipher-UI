"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
import ColourfulText from "@/components/ui/colourful-text";

export function DecryptPage() {
  const [activeMode, setActiveMode] = useState<"text" | "image" | "video">("text");
  const [key, setKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [decryptedUrl, setDecryptedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    return () => {
      if (decryptedUrl) URL.revokeObjectURL(decryptedUrl);
    };
  }, [decryptedUrl]);

  const handleDecryptText = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!key || !cipherText) return alert("Please enter both the decryption key and ciphertext.");

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/decrypt-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ciphertext: cipherText, password: key }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Decryption failed.");
      setDecryptedText(data.decryptedText);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Decryption failed.");
    } finally {
      setIsLoading(false);
    }
  }, [cipherText, key]);

  const handleDecryptFile = useCallback(async (type: "image" | "video") => {
    if (!file || !key) return alert("Please select a file and enter the decryption key.");

    setIsLoading(true);
    const formData = new FormData();
    formData.append("textfile", file);
    formData.append("password", key);

    try {
      const response = await fetch(`http://localhost:5000/decrypt-${type}`, { method: "POST", body: formData });
      if (!response.ok) throw new Error(await response.text());

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDecryptedUrl(url);

      if (type === "video" && videoRef.current) {
        videoRef.current.src = url;
        videoRef.current.load();
        videoRef.current.play();
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "Decryption failed.");
    } finally {
      setIsLoading(false);
    }
  }, [file, key]);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="absolute inset-0">
        <DotPatternBackground />
      </div>
      <div className="relative flex flex-col items-center justify-center flex-grow px-6 z-10">
        <h1 className="text-4xl font-bold mb-2">Decrypt</h1>
        <p className="text-gray-400 mb-6">with <ColourfulText text="Deimos Cipher" /></p>

        {/* Mode Selection */}
        <div className="flex space-x-4 mb-6">
          {["text", "image", "video"].map(mode => (
            <Button key={mode} onClick={() => setActiveMode(mode as "text" | "image" | "video")}
              className={`px-6 py-2 rounded-lg transition ${activeMode === mode ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"}`}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Button>
          ))}
        </div>

        {/* Decryption Forms */}
        <div className="w-full max-w-md p-6 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-800">
          {activeMode === "text" ? (
            <form onSubmit={handleDecryptText} className="space-y-4">
              <label className="block text-gray-300 text-sm font-medium">Decryption Key</label>
              <Input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter decryption key"
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2" />
              <label className="block text-gray-300 text-sm font-medium">Ciphertext</label>
              <textarea value={cipherText} onChange={(e) => setCipherText(e.target.value)} placeholder="Enter ciphertext"
                className="w-full h-32 bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2 resize-none" />
              <Button type="submit" disabled={isLoading}
                className={`w-full ${isLoading ? "bg-gray-600" : "bg-red-600 hover:bg-red-500"} text-white py-2 rounded-lg`}>
                {isLoading ? "Decrypting..." : "Decrypt"}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Upload {activeMode === "image" ? "Image" : "Video"}</p>
              <input type="file" accept={activeMode === "image" ? "image/*" : "video/*"} onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2" />
              <label className="block text-gray-300 text-sm font-medium">Decryption Key</label>
              <Input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter decryption key"
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg px-4 py-2" />
              <Button onClick={() => handleDecryptFile(activeMode)} disabled={isLoading}
                className={`w-full ${isLoading ? "bg-gray-600" : "bg-red-600 hover:bg-red-500"} text-white py-2 rounded-lg`}>
                {isLoading ? "Decrypting..." : `Decrypt ${activeMode.charAt(0).toUpperCase() + activeMode.slice(1)}`}
              </Button>
            </div>
          )}
        </div>

        {/* Display Decrypted Text */}
        {activeMode === "text" && decryptedText && (
          <div className="w-full max-w-md mt-6 p-6 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-800">
            <h3 className="text-lg font-semibold mb-3">Decrypted Output</h3>
            <pre className="bg-gray-800 border border-gray-700 p-4 text-green-400 rounded-lg max-h-48 overflow-auto whitespace-pre-wrap">{decryptedText}</pre>
          </div>
        )}

        {/* Display Decrypted Image */}
{decryptedUrl && activeMode === "image" && (
  <div className="relative mt-6">
    <img
      src={decryptedUrl}
      alt="Decrypted"
      className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => window.open(decryptedUrl, "_blank")} // Opens full image in a new tab
    />
    <p className="text-sm text-gray-400 mt-2 text-center">Click to view full image</p>
  </div>
)}

{/* Display Decrypted Video */}
{decryptedUrl && activeMode === "video" && (
  <div className="relative mt-6">
    <video ref={videoRef} controls className="rounded-lg shadow-lg w-full max-w-2xl">
      <source src={decryptedUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="flex justify-center mt-2 space-x-4">
      <Button onClick={() => videoRef.current?.play()} className="bg-green-600 hover:bg-green-500">▶ Play</Button>
      <Button onClick={() => videoRef.current?.pause()} className="bg-yellow-600 hover:bg-yellow-500">⏸ Pause</Button>
      <Button onClick={() => videoRef.current?.requestFullscreen()} className="bg-blue-600 hover:bg-blue-500">⛶ Fullscreen</Button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
