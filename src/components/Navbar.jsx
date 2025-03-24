import { FaHome, FaSearch, FaHeart, FaUser, FaShoppingCart, FaCog, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../Context";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { filters, setFilters } = useContext(FiltersContext);

  useEffect(() => {
    const path = location.pathname;
    const matchedRoute = 
      path === "/" ? "Home" : 
      path.includes("favorite") ? "Favorite" : 
      path.includes("profile") ? "Profile" : 
      path.includes("cart") ? "Cart" : 
      path.includes("settings") ? "Settings" : "Home";
    
    setActive(matchedRoute);
  }, [location.pathname]);

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-[var(--primary)] bg-opacity-80 backdrop-blur-xl fixed top-0 w-full border-b border-white/10 z-50"
      >
        
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-12 h-16">
          
          {/* Logo & Search Icon (for sm/xs) */}
          <div className="flex items-center max-md:w-full">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-white text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg"
            >
              Food <span className="text-yellow-300">Hub</span>
            </motion.h1>

            {/* Search Icon for sm/xs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="md:hidden text-white text-2xl cursor-pointer hover:text-yellow-300 transition-all duration-300 ml-auto"
              onClick={() => { setSearchBar((prev) => !prev); window.scrollTo(0, 0) }}
            >
              <FaSearch />
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative w-72 hidden lg:block group"
          >
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-yellow-300" />
            <motion.input
              whileFocus={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(252, 211, 77, 0.4)" }}
              type="search"
              className="w-full h-9 pl-10 pr-4 py-1 rounded-md bg-white text-gray-700 shadow-md focus:ring-2 focus:ring-yellow-300 outline-none transition-all duration-300 group-hover:shadow-2xl"
              placeholder="Search for delicious food..."
            />
          </motion.div>

          {/* Navigation Icons */}
          <div className="hidden md:flex gap-8 text-white text-xl">
            {[
              { icon: FaHome, label: "Home", path: "/" },
              { icon: FaHeart, label: "Favorite", path: "/favorite" },
              { icon: FaUser, label: "Profile", path: "/profile" },
              { icon: FaShoppingCart, label: "Cart", path: "/cart" },
              { icon: FaCog, label: "Settings", path: "/settings" },
            ].map(({ icon: Icon, label, path }, index) => (
              <Link to={path} passHref key={index}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  className="flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]"
                >
                  <Icon className="text-2xl" />
                  <p className="text-xs font-semibold">{label}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Bottom Navbar (Only for sm & xs) */}
      <motion.div
         initial={{ y: 80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 1.2, ease: "easeOut" }}
         className="fixed bottom-0 w-full bg-[var(--primary)] bg-opacity-90 backdrop-blur-lg shadow-xl border-t-16 border-white z-50 md:hidden flex justify-around py-2"
       >
         {[
           { icon: FaHome, label: "Home" },
           { icon: FaHeart, label: "Favorite" },
           { icon: FaUser, label: "Profile" },
           { icon: FaShoppingCart, label: "Cart" },
           { icon: FaCog, label: "Settings" },
         ].map(({ icon: Icon, label }, index) => (
          <motion.div
            key={index}
            className={`${
              label.toLowerCase() === active.toLowerCase() ? "active" : ""
            } flex flex-col items-center text-white transition-all duration-300 transform hover:text-yellow-300 w-10 h-10`}
            onClick={() => {
              navigate(label === "Home" ? "/" : `/${label.toLowerCase()}`);
            }}
          >
            <Icon className="text-2xl" />
            <p className="text-xs font-semibold">{label}</p>
          </motion.div>        
         ))}
       </motion.div>

      {/*  Search Bar on sm/xs */}
      {(searchBar || (window.matchMedia("(min-width: 768px) and (max-width:1023px)").matches)) && (
          <div className={`relative z-30 top-20 drop-shadow-xl my-2 pb-8 flex items-center gap-2 sm:gap-6 justify-between px-4 sm:px-8 ${(filters && window.matchMedia("(min-width: 768px) and (max-width:1023px)").matches) && 'ml-[250px]'}`}>
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="relative w-full group"
              >
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-[var(--secondary)]" />
                  <motion.input
                      whileFocus={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(252, 211, 77, 0.4)" }}
                      type="search"
                      className="w-full pl-10 pr-4 py-1 rounded-full bg-white text-gray-700 shadow-[2px_2px_7px_#00000055] focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all duration-300 group-hover:shadow-2xl"
                      placeholder="Search for delicious food..."
                  />
              </motion.div>

              {/* Filter Button (Only visible on md screens) */}
              <button onClick={()=>setFilters(prev => !prev)} className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-full shadow-md hover:bg-[var(--secondary)] transition">
                  <FaFilter />
                  Filters
              </button>
          </div>
      )}
    </>
  );
};

export default Navbar;
