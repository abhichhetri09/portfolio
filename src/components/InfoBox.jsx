import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded w-80 bg-slate-800">
      <p className="text-white text-lg font-medium">{text}</p>
      {link && (
        <Link
          to={link}
          className="bg-white text-slate-800 px-4 py-2 mt-4 rounded"
        >
          {btnText}
        </Link>
      )}
    </div>
  );
};
export { InfoBox };
