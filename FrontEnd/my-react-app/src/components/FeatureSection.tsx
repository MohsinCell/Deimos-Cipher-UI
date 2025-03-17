import { GlareCard } from "@/components/ui/glare-card";

export default function FeatureSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-8">
      {/* Section Header */}
      <h2 className="text-4xl font-bold mb-12">Feature Section</h2>

      {/* Feature Cards Container */}
      <div className="flex flex-wrap justify-center gap-10">
        <GlareCardDemo title="Encryption" description="Secure your data with cutting-edge encryption." />
        <GlareCardDemo title="Decryption" description="Seamless decryption for secure access." />
        <GlareCardDemo title="Real-Time Security" description="Advanced security monitoring in real-time." />
      </div>
    </section>
  );
}

function GlareCardDemo({ title, description }:{ title: string; description: string }) {
    return (
      <GlareCard className="relative flex flex-col items-center justify-center bg-[#030405]  shadow-lg hover:shadow-xl transition-all">
        {/* Icon */}
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white mb-4"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="10"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
  
        {/* Content Wrapper (Prevents Border on Text) */}
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <p className="text-xl font-bold text-white">{title}</p>
  
          {/* Description */}
          <p className="text-gray-400 mt-2 text-sm max-w-[80%]">
            {description}
          </p>
        </div>
      </GlareCard>
    );
  }
  