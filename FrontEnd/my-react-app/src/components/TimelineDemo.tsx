import React, { useRef } from "react";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-white text-sm md:text-base font-normal mb-6">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            className="rounded-lg object-cover h-24 md:h-48 lg:h-64 w-full shadow-md"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            className="rounded-lg object-cover h-24 md:h-48 lg:h-64 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-white text-sm md:text-base font-normal mb-6">
          Developed and tested various UI components.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            className="rounded-lg object-cover h-24 md:h-48 lg:h-64 w-full shadow-md"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            className="rounded-lg object-cover h-24 md:h-48 lg:h-64 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Deimos Cipher - Current Advancements",
    content: (
      <div>
        <p className="text-white text-sm md:text-base font-normal mb-2">
          Deimos Cipher is an advanced symmetric encryption algorithm, optimized for high entropy, strong diffusion, and key sensitivity.
        </p>
        <p className="text-white text-sm md:text-base font-normal mb-3">
          It integrates XChaCha20 for encryption, BLAKE2b for key expansion, and HMAC-SHA-512 for authentication, ensuring a highly secure cryptographic process.
        </p>
        <p className="text-white text-sm md:text-base font-semibold mb-2">
          Key Findings:
        </p>
        <ul className="list-none pl-5 text-white text-sm md:text-base font-normal mb-3">
          <li>Entropy tests confirm highly randomized ciphertext, surpassing industry security benchmarks.</li>
          <li>The avalanche effect ensures a 50.18% average bit change, demonstrating strong diffusion.</li>
          <li>Key sensitivity analysis reveals a 50.54% ciphertext variation for minimal key modifications, preventing differential cryptanalysis.</li>
        </ul>
        <p className="text-white text-sm md:text-base font-semibold mb-2">
          Practical Impact:
        </p>
        <p className="text-white text-sm md:text-base font-normal mb-2">
          Compared to traditional ciphers like AES and ChaCha20, Deimos Cipher provides superior randomness, stronger diffusion, and enhanced key sensitivity, making it an ideal solution for secure communication and data protection.
        </p>
        <p className="text-white text-sm md:text-base font-normal mb-6">
          Its robust security model positions it as a modern alternative to existing cryptographic standards, addressing key limitations of traditional encryption approaches.
        </p>
      </div>
    ),
  },
];

export const TimelineDemo: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full mt-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Project Timeline</h2>

      <div className="relative border-l-4 border-white pl-6" ref={timelineRef}>
        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div key={index} className="mb-16 relative">
            <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
            <div className="mt-2">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
