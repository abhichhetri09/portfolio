import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const sky = useGLTF(planeScene);

  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export { Plane };
