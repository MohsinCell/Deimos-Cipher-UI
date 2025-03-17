// // import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";

// // export default function LandingPage() {
// //   return (
// //     <div className="relative flex h-screen w-full flex-col items-center justify-center text-center ">
// //       {/* Background */}
// //       <DotPatternBackground />

// //       {/* Content */}
// //       <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
// //   <div className="text-7xl font-bold text-white drop-shadow-lg">
// //     Deimos Cipher
// //   </div>
// //   <p className="mt-7 text-2xl text-gray-300 max-w-2xl">
// //     Secure, encrypted communication with next-generation cryptography.
// //   </p>
// // </div>

// //     </div>
// //   );
// // }

// // import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
// // import { TextAnimate } from "@/components/magicui/text-animate";

// // export default function LandingPage() {
// //   return (
// //     <div className="relative flex h-screen w-full flex-col items-center justify-center text-center">
// //       {/* Background */}
// //       <DotPatternBackground />

// //       {/* Content */}
// //       <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
// //         <div className="text-7xl font-bold text-white drop-shadow-lg">
// //           Deimos Cipher
// //         </div>
// //         <TextAnimate animation="blurInUp" by="character" duration={3} className="mt-7 text-2xl text-gray-300 max-w-2xl">
// //           Secure, encrypted communication with next-generation cryptography.
// //         </TextAnimate>
// //       </div>
// //     </div>
// //   );
// // }


// import Navbar from "@/components/Navbar";
// import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import FeatureSection from "@/components/FeatureSection"; // Ensure correct path

// export default function LandingPage() {
//   return (
//     <div className="relative flex flex-col h-screen w-full items-center justify-center text-center">
//       {/* Navbar */}
//       <Navbar />

//       {/* Background */}
//       <DotPatternBackground />

//       {/* Content */}
//       <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
//         <div className="text-7xl font-bold text-white drop-shadow-lg">
//           Deimos Cipher
//         </div>
//         <TextAnimate animation="blurIn" as="p" className="mt-7 text-2xl text-gray-300 max-w-2xl">
//           Secure, encrypted communication with next-generation cryptography.
//         </TextAnimate>
//       </div>
       
//     </div>
//   );
// }

// import Navbar from "@/components/Navbar";
// import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import FeatureSection from "@/components/FeatureSection"; // Ensure correct path

// export default function LandingPage() {
//   return (
//     <div className="relative flex flex-col w-full text-center bg-black">
//       {/* Navbar */}
//       <Navbar />

//       {/* Landing Section */}
//       <div className="relative flex h-screen w-full items-center justify-center bg-black">
//         {/* Background */}
//         <DotPatternBackground />

//         {/* Content */}
//         <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
//           <div className="text-7xl font-bold text-white drop-shadow-lg">
//             Deimos Cipher
//           </div>
//           <TextAnimate
//             animation="blurIn"
//             as="p"
//             className="mt-7 text-2xl text-gray-300 max-w-2xl"
//           >
//             Secure, encrypted communication with next-generation cryptography.
//           </TextAnimate>
//         </div>
//       </div>

//       {/* Feature Section - Appears AFTER Landing Page */}
//       <section className="min-h-screen flex flex-col justify-center items-center bg-black">
//         <FeatureSection />
//       </section>
//     </div>
//   );
// }

// import Navbar from "@/components/Navbar";
// import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import FeatureSection from "@/components/FeatureSection";
// import { useEffect, useState } from "react";

// export default function LandingPage() {
//   // Track if animation has already played
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHasAnimated(true); // Mark as animated after first animation completes
//     }, 3000); // Adjust timing to match animation duration

//     return () => clearTimeout(timer); // Cleanup to avoid memory leaks
//   }, []);

//   return (
//     <div className="relative flex flex-col w-full text-center bg-black">
//       {/* Navbar */}
//       <Navbar />

//       {/* Landing Section */}
//       <div className="relative flex h-screen w-full items-center justify-center bg-black">
//         {/* Background */}
//         <DotPatternBackground />

//         {/* Content */}
//         <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
//           <div className="text-7xl font-bold text-white drop-shadow-lg">
//             Deimos Cipher
//           </div>

//           {/* Show animated text first, then static text */}
//           {!hasAnimated ? (
//             <TextAnimate
//               animation="blurIn"
//               as="p"
//               className="mt-7 text-2xl text-gray-300 max-w-2xl"
//             >
//               Secure, encrypted communication with next-generation cryptography.
//             </TextAnimate>
//           ) : (
//             <p className="mt-7 text-2xl text-gray-300 max-w-2xl">
//               Secure, encrypted communication with next-generation cryptography.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Feature Section - Appears AFTER Landing Page */}
//       <section className="min-h-screen flex flex-col justify-center items-center bg-black">
//         <FeatureSection />
//       </section>
//     </div>
//   );
// }

// import Navbar from "@/components/Navbar";
// import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import FeatureSection from "@/components/FeatureSection";
// import { useEffect, useState } from "react";

// export default function LandingPage() {
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHasAnimated(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);


//   return (
//     <div className="relative flex flex-col w-full text-center bg-black">
//       {/* Navbar */}
//       <Navbar />

//       {/* Landing Section */}
//       <div className="relative flex h-screen w-full items-center justify-center bg-black">
//         {/* Background */}
//         <DotPatternBackground />

//         {/* Content */}
//         <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
//           <div className="text-7xl font-bold text-white drop-shadow-lg">
//             Deimos Cipher
//           </div>

//           {/* Show animated text first, then static text */}
//           {!hasAnimated ? (
//             <TextAnimate
//               animation="blurIn"
//               as="p"
//               className="mt-7 text-2xl text-gray-300 max-w-2xl"
//             >
//               Secure, encrypted communication with next-generation cryptography.
//             </TextAnimate>
//           ) : (
//             <p className="mt-7 text-2xl text-gray-300 max-w-2xl">
//               Secure, encrypted communication with next-generation cryptography.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Feature Section */}
//       <section className="min-h-screen flex flex-col justify-center items-center bg-black">
//         <FeatureSection />
//       </section>

      
//     </div>
//   );
// }

import Navbar from "@/components/Navbar";
import { DotPatternBackground } from "@/components/magicui/DotPatternBackground";
import { TextAnimate } from "@/components/magicui/text-animate";
import FeatureSection from "@/components/FeatureSection";
import PotentialApplications from "@/components/PotentialApplications"; // Import the new section
import { useEffect, useState } from "react";
import {Footer} from "@/components/Footer";

export default function LandingPage() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col w-full text-center bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Landing Section */}
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        {/* Background */}
        <DotPatternBackground />

        {/* Content */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <div className="text-7xl font-bold text-white drop-shadow-lg">
            Deimos Cipher
          </div>

          {/* Show animated text first, then static text */}
          {!hasAnimated ? (
            <TextAnimate
              animation="blurIn"
              as="p"
              className="mt-7 text-2xl text-gray-300 max-w-2xl"
            >
              Secure, encrypted communication with next-generation cryptography.
            </TextAnimate>
          ) : (
            <p className="mt-7 text-2xl text-gray-300 max-w-2xl">
              Secure, encrypted communication with next-generation cryptography.
            </p>
          )}
        </div>
      </div>

      {/* Feature Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-black">
        <FeatureSection />
      </section>

      {/* Potential Applications Section */}
      <PotentialApplications />
      <Footer/>
    </div>
    
  );
}
