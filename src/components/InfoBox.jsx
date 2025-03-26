import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded w-80 bg-neutral-600">
      <p className="text-white text-lg font-medium">{text}</p>
      {link && (
        <Link to={link}>
          <Button variant="ghost" size="md" title={btnText} />
        </Link>
      )}
    </div>
  );
};
export { InfoBox };
