// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// // import { LandingPage } from "@/pages/LandingPage";
// // import { LandingPage } from "../pages/LandingPage";
// import LandingPage from "@/pages/LandingPage.tsx";



// function App() {
//   return <LandingPage />;
// }

// export default App;
// import LandingPage from "@/pages/LandingPage.tsx";

// function App() {
//   return (
  
//     <div className="w-screen h-screen bg-black flex items-center justify-center">
//       <LandingPage />
//     </div>
    
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import {EncryptPage} from "@/pages/Encrypt";
import { DecryptPage } from "./pages/Decrypt";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-black">
        {/* Navbar stays fixed on all pages */}
        {/* <Navbar /> */}

        {/* Page content changes dynamically */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/encrypt" element={<EncryptPage/>} />
          <Route path="/decrypt" element={<DecryptPage/>} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


