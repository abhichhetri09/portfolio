import React from "react";
import { InfoBox } from "./InfoBox";

const HomeInfo = ({ currentStage }) => {
  const renderContent = {
    1: {
      text: "Hi, I'm Abhishek Khati Chhetri 👋 — a Full Stack Software Engineer based in Helsinki.",
    },
    2: {
      text: "I design and build scalable web and mobile applications using modern technologies like React, React Native, TypeScript, and Node.js.",
      btnText: "About Me",
      link: "/about",
    },
    3: {
      text: "With 3+ years of hands-on experience, I’ve delivered production-ready solutions across startups and real-world client projects.",
      btnText: "View My Projects",
      link: "/projects",
    },
    4: {
      text: "Open to new opportunities and collaborations. Let’s connect and build something impactful together.",
      btnText: "Contact Me",
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
