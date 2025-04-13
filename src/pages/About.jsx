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
    <Section>
      <Section>
        <div className="container flex flex-col md:flex-row items-center justify-between px-6 py-8 gap-10">
          {/* Profile Image */}
          <img
            src={pp}
            alt="Profile"
            className="rounded-md w-44 h-44 md:w-96 md:h-96 object-cover object-top mx-auto md:mx-0"
          />
          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-semibold text-white">
              👋 Hello, I'm
              <span className="blue-gradient_text block font-semibold drop-shadow ml-2">
                Abhishek Khati Chhetri
              </span>
            </h1>
            <p className="lg:text-2xl mt-4 text-white">
              Full-stack Developer, Freelancer.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mt-5 container text-slate-300 text-sm sm:text-base">
        <h1 className="text-white font-semibold">
          🔭 Frontend Developer | Vesko
        </h1>
        <p>
          At Vesko, I started as a Frontend Web Developer, contributing to the
          company's digital transformation by building scalable and responsive
          web applications using React, Vite, TypeScript, and Tailwind CSS. One
          of my key projects included developing Vesko's official business
          website, focusing on performance, accessibility, and modern UI design.
          Since January 2025, I transitioned into the Mobile Development Team,
          where I'm currently working on building Vesko’s mobile application
          using Expo, React Native, and TypeScript. I collaborate closely with
          designers and stakeholders to implement intuitive user experiences and
          scalable architecture for cross-platform apps. Key responsibilities:
          Developed and deployed Vesko’s business website with a modern frontend
          stack Built reusable UI components and integrated responsive design
          principles Contributed to the mobile app architecture and feature
          development Participated in code reviews, sprint planning, and team
          meetings Used tools like Figma, Jira, and Git for design collaboration
          and agile development
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
                      className="w-3/4 h-3/4 object-contain"
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
    </Section>
  );
};

export { About };
