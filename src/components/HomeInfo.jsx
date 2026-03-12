import React from "react";
import { InfoBox } from "./InfoBox";

const HomeInfo = ({ currentStage }) => {
  const renderContent = {
    1: {
      text: "Hi, I’m Abhishek Khati Chhetri — a full‑stack software engineer based in Helsinki, focused on building reliable web and mobile products.",
    },
    2: {
      text: "I turn product ideas into shipped features using React, React Native, TypeScript, Node.js, PostgreSQL, and modern tooling.",
      btnText: "More about my background",
      link: "/about",
    },
    3: {
      text: "With over three years of hands‑on experience, I’ve contributed to production systems for companies like Hoviber and Vesko.",
      btnText: "See selected projects",
      link: "/projects",
    },
    4: {
      text: "I’m open to full‑time roles, contract work, and collaborations where I can help ship thoughtful, user‑centric software.",
      btnText: "Let’s talk",
      link: "/contact",
    },
  };

  return (
    <div>
      {renderContent[currentStage] && (
        <InfoBox {...renderContent[currentStage]} />
      )}
    </div>
  );
};

export { HomeInfo };
