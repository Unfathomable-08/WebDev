import { useGLTF } from "@react-three/drei";

const FoodModel = () => {
  const { scene } = useGLTF("/model/scene.gltf"); // Path to your model
  console.log("Loaded Model:", scene);
  return <primitive object={scene} scale={3} position={[0, -1, 0]} />;
};

export default FoodModel;