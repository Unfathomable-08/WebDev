import { useGLTF } from "@react-three/drei";

// 3D Model: "RedVelvet" by jjagdishwar (https://skfb.ly/6SJUS);
// Licensed under CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/);

const FoodModel = () => {
  const { scene } = useGLTF("/model/scene.gltf"); // Path to your model

  return <primitive object={scene} scale={2.5} position={[0, -1, 0]} />; 
};

export default FoodModel;