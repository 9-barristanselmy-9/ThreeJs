import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import Navbar from "./section/Navbar";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
      // meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#0077b6" />
      <Sparkles
        count={100}
        speed={0.001}
        size={6}
        noise={0.2}
        scale={1}
        color="#FFA500"
      />
    </mesh>
  );
};

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      {/* <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OrbitControls enableDamping enablePan enableZoom enableRotate />
        <directionalLight
          position={[0, 0, 5]}
          intensity={10}
          color={0x9cdba6}
        />
        <color attach="background" args={["#F0F0F0"]} />
        <RotatingCube />
      </Canvas> */}
    </main>
  );
};

export default App;
