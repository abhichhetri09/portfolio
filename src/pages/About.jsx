import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills, socialLinks } from "../constants";
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
            <p className="lg:text-2xl mt-4 text-white">Full Stack Developer</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {socialLinks
                .filter((link) => link.name !== "Contact")
                .map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300 group"
                  >
                    <img
                      src={link.iconUrl}
                      alt={link.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-5 container text-slate-300 text-sm sm:text-base">
        <h1 className="text-white font-semibold">
          Full Stack Developer | Hoviber
        </h1>
        <p>
          As a Full Stack Developer at Hoviber, I contribute to the planning and
          execution of digital product development in close collaboration with
          the CEO and development team. Alongside building and maintaining
          full-stack solutions, I support project workflows and help align
          product priorities with business goals, ensuring efficient delivery
          and high-quality implementation across digital platforms.
        </p>
      </Section>

      <Section className="container">
        <h3 className="subhead-text text-white text-center sm:text-left">
          My Skills
        </h3>
        <div className="mt-8">
          {/* Group skills by type */}
          {Array.from(new Set(skills.map((skill) => skill.type))).map(
            (type) => (
              <div key={type} className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">
                  {type}
                </h4>
                <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
                  {skills
                    .filter((skill) => skill.type === type)
                    .map((skill) => (
                      <div
                        className="group relative block-container w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 hover:scale-110"
                        key={skill.name}
                      >
                        <div className="btn-back rounded-xl" />
                        <div className="btn-front rounded-xl flex flex-col justify-center items-center p-2">
                          <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-1/2 h-1/2 object-contain mb-1"
                          />
                          <span className="text-xs text-white font-medium text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
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
