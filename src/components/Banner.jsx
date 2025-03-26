import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import FoodModel from "./FoodModel";

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex overflow-hidden">
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
        className="relative z-10 w-1/2 flex items-center justify-center p-10 mx-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20 shadow-2xl text-center">
          <motion.h1
            className="text-4xl font-extrabold text-yellow-300 drop-shadow-2xl"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            A Feast For Your Delight!
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-white max-w-2xl mx-auto"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Bringing you the perfect blend of taste, technology, and tradition.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="mt-6 flex justify-center space-x-6"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            <button
              className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-medium px-6 py-2 rounded-full shadow-lg"
            >
              Find Nearby Resturants
            </button>
            <button
              className="border-2 border-yellow-300 text-yellow-300 font-medium px-8 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition-transform"
            >
              View Menu & Order
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - 3D Model */}
      <div className="w-1/2 flex items-center justify-center me-24 mb-16">
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
