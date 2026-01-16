import { Link } from "react-router-dom";

import { CTA } from "../components/CTA";
import { arrow } from "../assets/icons/index";
import { projects } from "../constants/index";
import { Section } from "../components/Section";
const Projects = () => {
  return (
    <Section>
      <Section className="container">
        <h1 className="head-text text-slate-800">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-600 mt-2 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>

        <div className="flex flex-wrap p-2 gap-10 justify-center sm:justify-start">
          {projects.map((project) => (
            <div
              className="lg:w-[320px] h-[420px] p-6 rounded-md bg-white border border-slate-200 shadow-md w-full hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
              key={project.name}
            >
              <div className="block-container w-12 h-12 project-icon">
                <div className={`btn-back rounded-xl `} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col flex-grow">
                <h4 className="text-2xl font-poppins text-slate-800 font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-600 flex-grow">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-col gap-2 font-poppins">
                  {project.link && (
                    <div className="flex items-center gap-2">
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-green-500 hover:text-green-400 transition-colors"
                      >
                        Live Demo
                      </Link>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Link
                      to={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Source Code
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-300 mt-10" />
      </Section>
      <CTA />
    </Section>
  );
};

export { Projects };
