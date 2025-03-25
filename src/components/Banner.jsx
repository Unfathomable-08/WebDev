import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Suspense } from "react";
import FoodModel from "./FoodModel"; 

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg')",
        }}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      ></motion.div>

      {/* Floating 3D Food Model */}
      <div className="absolute z-10 w-full h-full flex items-center justify-center">
        <Canvas>
          <Suspense fallback={null}>
            <Stage intensity={1}>
              <FoodModel />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Box */}
      <motion.div
        className="relative z-5 text-center px-10 py-12 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-yellow-300 drop-shadow-2xl"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          3D Food Experience!
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Taste the future with stunning visuals and flavors.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-6 flex justify-center space-x-6"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <Button
            variant="contained"
            size="large"
            className="!bg-gradient-to-r !from-yellow-500 !to-yellow-300 !text-black !font-bold !px-8 !py-4 !rounded-full !shadow-lg hover:scale-110 transition-transform"
          >
            Order Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            className="!border-2 !border-yellow-300 !text-yellow-300 !font-bold !px-8 !py-4 !rounded-full hover:scale-110 hover:bg-yellow-300 hover:text-black transition-transform"
          >
            View Menu
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
