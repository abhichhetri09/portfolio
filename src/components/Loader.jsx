import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-primary-90 border-t-primary-90 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export { Loader };
