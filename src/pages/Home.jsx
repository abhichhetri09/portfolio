import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../components/Loader";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";
import { Island } from "../models/Island";
const Home = () => {
  const [isRotating, setIsRotating] = React.useState(false);

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

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
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
          <Sky />
          <Bird />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export { Home };
