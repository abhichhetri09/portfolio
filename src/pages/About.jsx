import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";
import { CTA } from "../components/CTA";
import React from "react";
import { pp } from "../assets/images/index";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-6 md:gap-10 rounded-md bg-slate-800 w-full max-w-5xl mx-auto">
        <img
          src={pp}
          alt="Profile"
          className="rounded-md h-48 w-36 sm:h-60 sm:w-48 md:h-72 md:w-60 object-cover"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center md:text-left">
          👋 Hello, I'm
          <span className="blue-gradient_text block font-semibold drop-shadow ml-2">
            Abhishek Khati Chhetri
          </span>{" "}
        </h1>
      </div>

      <div className="mt-5 text-slate-300 text-sm sm:text-base">
        <h1 className="text-white font-semibold">
          🔭 Frontend Developer | Eventti
        </h1>
        <p>
          Maintained and enhanced the company's website using Laravel, PHP, and
          MySQL. 👯 I’m looking to collaborate on innovative web and mobile
          development projects, especially those leveraging modern frontend
          technologies like React and TypeScript. 🤝 I’m looking for help with
          expanding my cloud knowledge (AWS, Azure) and backend skills. 🌱
          Currently learning more about cloud platforms and data management
          solutions. 💬 Ask me about scalable web apps, Java-based applications,
          or frontend development. ⚡ I love experimenting with new tech stacks
          in my spare time!
        </p>
      </div>

      <div className="py-10">
        <h3 className="subhead-text text-white text-center sm:text-left">
          My Skills
        </h3>
        <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-16 h-16 sm:w-20 sm:h-20 "
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-2/3 h-2/3 sm:w-1/2 sm:h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text text-white text-center sm:text-left">
          Work Experience
        </h3>
        <div className="mt-5 text-slate-300 text-sm sm:text-base">
          <p className="text-center sm:text-left">
            I've had the privilege of working with amazing companies and
            individuals. Here are a few of them.
          </p>
        </div>
        <div className="mt-12">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                dateClassName="date-text text-black-800 font-medium text-sm"
              >
                <div>
                  <h3 className="text-black text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/100 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200 my-6" />
      <CTA />
    </section>
  );
};

export { About };
