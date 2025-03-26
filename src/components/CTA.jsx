import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <section className="cta">
      <p className="cta-text text-white">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Button
        variant="primary"
        size="lg"
        title="Get in touch"
        onClick={handleClick}
      />
    </section>
  );
};

export { CTA };
