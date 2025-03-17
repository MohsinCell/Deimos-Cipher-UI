// import React, { useEffect } from "react";
// import { motion } from "motion/react";
// import { LampContainer } from "@/components/ui/lamp";
// import TransparentNavbar from "@/components/TransparentNavbar"; // Ensure Navbar remains consistent across pages

// const About = () => {
//   // Scroll to top when the page loads
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-[#030405] text-white">
//       {/* Navbar */}
//       <TransparentNavbar />
  
//       {/* Main About Section */}
//       <section className="flex flex-col items-center justify-center w-full px-0 pt-20">
//       <LampContainer className="mt-[-80px]">
//   <motion.div
//     initial={{ opacity: 0.5, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//     className="mt-[10px] bg-gradient-to-br from-gray-300 to-gray-500 py-4  bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-8xl"
//   >
//     About
//   </motion.div>

//   <motion.div
//     initial={{ opacity: 0.5, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//     className="mt-[20px] bg-gradient-to-br from-gray-300 to-gray-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
//   >
//    Deimos Cipher
//   </motion.div>
// </LampContainer>

  
//         {/* Overview */}
//         <div className="max-w-3xl w-full text-center mt-6 px-4">
//           <p className="text-lg text-gray-300">
//             Deimos Cipher is an encryption algorithm designed to maximize security, entropy, and efficiency.
//             Built with modern cryptographic principles, it ensures top-tier confidentiality and integrity for sensitive data.
//           </p>
//         </div>
  
//         {/* Features */}
//         <div className="mt-8 max-w-2xl w-full px-4 space-y-4">
//           <h2 className="text-2xl font-semibold text-gray-300">Key Features</h2>
//           <ul className="text-gray-400 space-y-2 text-lg">
//             <li>✅ High Entropy Output – 7.99998 bits/byte randomness</li>
//             <li>✅ 50.18% Avalanche Effect – Every bit change alters the ciphertext</li>
//             <li>✅ Extreme Key Sensitivity – 50.54% different ciphertext per bit change</li>
//             <li>✅ Secure Key Expansion – Uses HKDF with BLAKE2b</li>
//             <li>✅ XChaCha20 Stream Encryption – 192-bit nonce security</li>
//             <li>✅ HMAC-SHA256 Authentication – Ensures integrity and authenticity</li>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
  
// };

// export default About;

// import React, { useEffect } from "react";
// import { motion } from "motion/react";
// import { LampContainer } from "@/components/ui/lamp";
// import TransparentNavbar from "@/components/TransparentNavbar"; 
// import { GlowingEffectDemo } from "@/components/GlowingEffectDemo"; // Import the cards section

// const About = () => {
//   // Scroll to top when the page loads
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black text-white">
//       {/* Navbar */}
//       <TransparentNavbar />

//       {/* Main About Section */}
//       <section className="flex flex-col items-center justify-center w-full px-0 pt-20">
//         <LampContainer className="mt-[-80px]">
//           <motion.div
//             initial={{ opacity: 0.5, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//             className="mt-[10px] bg-gradient-to-br from-gray-300 to-gray-500 py-4  bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-8xl"
//           >
//             About
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0.5, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//             className="mt-[20px] bg-gradient-to-br from-gray-300 to-gray-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
//           >
//             Deimos Cipher
//           </motion.div>
//         </LampContainer>

//         {/* Cards Section */}
//         <div className="mt-12 px-4 w-full max-w-6xl bg-black">
//           <GlowingEffectDemo />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import  { useEffect } from "react";
import { motion } from "framer-motion"; // Use framer-motion for animations
import { LampContainer } from "@/components/ui/lamp";
import TransparentNavbar from "@/components/TransparentNavbar";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo"; // Import the cards section
import { TimelineDemo } from "@/components/TimelineDemo"; // Import the Timeline component

const About = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white">
      {/* Navbar */}
      <TransparentNavbar />

      {/* Main About Section */}
      <section className="flex flex-col items-center justify-center w-full px-0 pt-20">
        <LampContainer className="mt-[-80px]">
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-[10px] bg-gradient-to-br from-gray-300 to-gray-500 py-4 bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-8xl"
          >
            About
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-[20px] bg-gradient-to-br from-gray-300 to-gray-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
          >
            Deimos Cipher
          </motion.div>
        </LampContainer>

        {/* Cards Section */}
        <div className="mt-12 px-4 w-full max-w-6xl bg-black">
          <GlowingEffectDemo />
        </div>

        {/* Timeline Section */}
        <div className="mt-16 px-6 w-full max-w-6xl">
          <TimelineDemo />
        </div>
      </section>
    </div>
  );
};

export default About;
