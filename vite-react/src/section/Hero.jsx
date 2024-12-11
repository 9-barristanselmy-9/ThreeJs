import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Hero = () => {
  const x = useControls("HackerRoom", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -15,
      max: 15,
    },
    scale: {
      value: 1,
      min: 0,
      max: 2,
    },
  });

  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isTablet = useMediaQuery({
    query: " (min-width :768) and(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const sizes = calculateSizes(isMobile, isTablet, isSmall);
  return (
    <div className="min-h-screen flex flex-col relative w-full">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Barristan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building high quality applications & 3D models
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            //rotation on y-axis is 3.15 ~~ PI value in radians
            <HackerRoom
              scale={sizes.deskScale}
              //   position={[0, -7, 0]}
              //   rotation={[0, 90, 0]}
              position={sizes.deskPosition}
              rotation={[0, -3.15, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
