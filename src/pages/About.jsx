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
    <section className="max-container bg-slate-900 ">
      <div className="flex flex-row items-center justify-center p-4 gap-10 rounded-md bg-slate-800">
        <img src={pp} alt="Profile" className="rounded-md h-72 w-60" />
        <h1 className="head-text text-white">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Abhishek khati chhetri{" "}
          </span>{" "}
          👋
        </h1>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-slate-300">
        <p>
          🔭 Frontend Developer | Eventti Maintained and enhanced the company's
          website using Laravel, PHP, and MySQL. 👯 I’m looking to collaborate
          on innovative web development and mobile development projects,
          especially those that leverage modern frontend technologies like React
          and TypeScript. 🤝 I’m looking for help with expanding my knowledge in
          cloud technologies (AWS, Azure) and improving my backend development
          skills. 🌱 I’m currently learning more about cloud platforms and
          backend technologies, while also working on data management solutions.
          💬 Ask me about building scalable web applications, Java-based
          applications, or anything related to frontend development. ⚡I love
          experimenting with new tech stacks in my spare time!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-white">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-white">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p>
            I've had the privilege of working with some amazing companies and
            individuals. Here are a few of them.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
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
                  <h3 className="text-black text-xl font-poppins font-semibold">
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
                      className="text-black-500/50 font-normal pl-1 text-sm"
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

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export { About };
