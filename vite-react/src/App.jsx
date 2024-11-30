import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#0077b6" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableDamping enablePan enableZoom enableRotate />
      <directionalLight position={[0, 0, 5]} intensity={10} color={0x9CDBA6} />
      <color attach="background" args={["#F0F0F0"]} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;
