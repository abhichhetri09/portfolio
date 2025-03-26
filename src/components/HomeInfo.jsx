import React from "react";
import { InfoBox } from "./InfoBox";

const HomeInfo = ({ currentStage }) => {
  const renderContent = {
    1: {
      text: "Hi, I am Abhishek khati chhetri",
    },
    2: {
      text: "I am a full stack developer",
      btnText: "About Me",
      link: "/about",
    },
    3: {
      text: "I have been working on Web and Mobile Development for 3 years",
      btnText: "Visit my portfolio",
      link: "/projects",
    },
    4: {
      text: "I am always looking for new opportunities. Please feel free to reach out to me.",
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
