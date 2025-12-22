import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../components/Loader";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";
import { Island } from "../models/Island";
import { useRef } from "react";
import { HomeInfo } from "../components/HomeInfo";
const Home = () => {
  const [isRotating, setIsRotating] = React.useState(false);
  const [currentStage, setCurrentStage] = React.useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const ref = useRef();

  const handleScrollRight = () => {
    window.scrollTo({
      left: window.scrollX + window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {currentStage && (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <HomeInfo currentStage={currentStage} />
        </div>
      )}

      {/* Scroll Indicator - Right Side */}
      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-row items-center gap-3 animate-bounce cursor-pointer group"
        onClick={handleScrollRight}
      >
        <span className="text-white/70 text-sm font-medium font-poppins group-hover:text-white transition-colors whitespace-nowrap">
          Scroll to explore
        </span>
        <div className="flex flex-row items-center gap-2">
          <div className="w-10 h-6 rounded-full border-2 border-white/50 flex items-center justify-end p-2 group-hover:border-white transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:bg-white animate-pulse"></div>
          </div>
          <svg
            className="w-5 h-5 text-white/70 group-hover:text-white transition-colors rotate-[-90deg]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        ref={ref}
        camera={{ near: 0.1, far: 1000 }}
      >
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        <Sky isRotating={isRotating} />
        <Bird />
        <Island
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          position={islandPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
          setCurrentStage={setCurrentStage}
        />
        <Plane
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />
      </Canvas>
    </section>
  );
};

export { Home };
