import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <CirclesWithBar
        color="#ffffff"
        secondaryColor="#ffffff"
        height={60}
        visible={true}
        speed={1}
      />
    </div>
  );
};

export { Loader };
