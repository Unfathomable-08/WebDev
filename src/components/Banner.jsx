import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import FoodModel from "./FoodModel";

const Banner = () => {
  return (
    <div className="relative w-full h-[420px] max-sm:pt-10 sm:h-[480px] md:h-screen bg-black text-white flex overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute scale-x-[-1] inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/banner.jpg')",
          filter: "brightness(70%) contrast(120%)",
        }}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      ></motion.div>

      {/* Left Section - Glassmorphism Content */}
      <motion.div
        className="morphism relative z-10 w-1/2 min-w-[50%] h-full flex items-center justify-center p-4 max-xs:pe-0 sm:p-6 md:p-8 lg:p-10 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-white/10 backdrop-blur-lg p-3 sm:p-5 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl w-full max-w-md">
          {/* Heading */}
          <motion.h1
            className="text-md sm:text-xl md:text-3xl font-bold text-yellow-300 drop-shadow-2xl"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            A Feast For Your Delight!
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-1 sm:mt-3 text-sm sm:text-sm md:text-lg text-white max-w-md mx-auto"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Bringing you the perfect blend of taste, technology, and tradition.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="mt-2 sm:mt-5 flex flex-col sm:flex-row justify-center space-y-1 sm:space-y-0 sm:space-x-2 w-full"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            {/* Find Nearby Restaurants Button */}
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-300 text-black md:font-medium px-5 sm:px-4 sm:py-2.5 py-1.5 rounded-full shadow-md whitespace-nowrap text-sm"
            >
              Nearby Restaurants
            </button>

            {/* View Menu & Order Button */}
            <button
              className="w-full sm:w-auto border border-yellow-300 text-yellow-300 md:font-medium px-5 sm:px-4 sm:py-2.5 py-1.5 rounded-full hover:bg-yellow-300 hover:text-black transition-transform whitespace-nowrap text-sm"
            >
              View Menu
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - 3D Model */}
      <div className="w-1/2 flex items-center justify-center me-24 sm:mb-16 mb-10">
        <Canvas>
          <Suspense fallback={null}>
            <Stage intensity={1.2}>
              <FoodModel />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={6} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Banner;
