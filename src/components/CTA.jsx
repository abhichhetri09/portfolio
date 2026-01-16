import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Section } from "./Section";

const CTA = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <Section>
      <div className="container py-8 bg-slate-200 px-12 rounded-xl flex flex-col gap-4 md:flex-row shadow-md">
        <p className="cta-text text-slate-800">
          Have a project in mind? <br className="sm:block hidden" />
          Let&apos;s build something together!
        </p>
        <Button
          variant="primary"
          size="lg"
          title="Get in touch"
          onClick={handleClick}
        />
      </div>
    </Section>
  );
};

export { CTA };
