
import { NavLink, useLocation } from "react-router-dom";

const TransparentNavbar = () => {
  const location = useLocation(); // Get current URL path

  return (
    <nav className="bg-transparent text-white py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left Side - Brand Name */}
      <div className="text-2xl font-bold">Deimos Cipher</div>

      {/* Right Side - Navigation Links */}
      <div className="flex space-x-6">
        {["Home", "About", "Encrypt", "Decrypt", "Contact"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path; // Check if current path matches

          return (
            <NavLink
              key={item}
              to={path}
              end
              className={`relative text-white transition-all duration-300 px-4 py-2 
                ${
                  isActive
                    ? "after:content-[''] after:block after:w-[60%] after:h-[1.5px] after:bg-gray-400 after:mx-auto after:mt-1.5" 
                    : ""
                }
                hover:bg-white hover:text-black hover:shadow-[0_0_10px_#ffffff99]
              `}
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default TransparentNavbar;

