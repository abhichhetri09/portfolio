import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";
import { CTA } from "../components/CTA";
import React from "react";
import { pp } from "../assets/images/index";

import "react-vertical-timeline-component/style.min.css";
import { Section } from "../components/Section";

const About = () => {
  return (
    <main className="bg-slate-800">
      <Section>
        <div className="container flex items-center justify-between px-6 py-10 gap-10">
          <img
            src={pp}
            alt="Profile"
            className="rounded-md w-52 md:h-96 md:w-96 object-cover object-top"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-semibold text-white">
              👋 Hello, I'm
              <span className="blue-gradient_text block font-semibold drop-shadow ml-2">
                Abhishek Khati Chhetri
              </span>{" "}
            </h1>
            <p className="lg:text-2xl mt-4 text-white">
              Full-stack Developer, Freelancer.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mt-5 container text-slate-300 text-sm sm:text-base">
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
      </Section>

      <Section className="container">
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
      </Section>

      <Section className="container">
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
      </Section>

      <CTA />
    </main>
  );
};

export { About };
