import { FaHome, FaSearch, FaHeart, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-[var(--primary)] bg-opacity-80 backdrop-blur-xl fixed top-0 w-full shadow-2xl border-b border-white/10 z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-12 h-16">
          
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-white text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg"
          >
            Food <span className="text-yellow-300">Hub</span>
          </motion.h1>

          {/* Search Bar (Hidden on md and below) */}
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
              className="w-full pl-10 pr-4 py-1 rounded-full bg-white text-gray-700 shadow-md focus:ring-2 focus:ring-yellow-300 outline-none transition-all duration-300 group-hover:shadow-2xl"
              placeholder="Search for delicious food..."
            />
          </motion.div>

          {/* Navigation Icons (Visible on md and larger) */}
          <div className="hidden md:flex gap-8 text-white text-xl">
            {[
              { icon: FaHome, label: "Home" },
              { icon: FaHeart, label: "Favorite" },
              { icon: FaUser, label: "Profile" },
              { icon: FaShoppingCart, label: "Cart" },
              { icon: FaCog, label: "Settings" },
            ].map(({ icon: Icon, label }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
                whileHover={{ scale: 1.15, rotate: 3 }}
                className="flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]"
              >
                <Icon className="text-2xl" />
                <p className="text-xs font-semibold">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Bottom Navbar (Only for sm & xs) */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed bottom-0 w-full bg-[var(--primary)] bg-opacity-90 backdrop-blur-lg shadow-xl border-t border-white/10 z-50 md:hidden flex justify-around py-2"
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
            whileTap={{ scale: 0.9 }}
            className={`${label == "Home" ? "active" : ""} flex flex-col items-center text-white transition-all duration-300 transform hover:text-yellow-300 w-10 h-10`}
          >
            <Icon className="text-2xl" />
            <p className="text-xs font-semibold">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
