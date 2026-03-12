import { Link } from "react-router-dom";

import { CTA } from "../components/CTA";
import { arrow } from "../assets/icons/index";
import { projects } from "../constants/index";
import { Section } from "../components/Section";
const Projects = () => {
  return (
    <Section className=" min-h-screen ">
      <Section className="container max-w-5xl mx-auto px-2">
        <h1 className="head-text text-slate-900">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              className="group w-full p-6 rounded-3xl bg-slate-800 border border-slate-400/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400/70 transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden"
              key={project.name}
            >
              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/20" />

              <div className="relative block-container w-12 h-12 project-icon">
                <div
                  className={`btn-back rounded-xl ${project.theme || ""} group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="btn-front rounded-xl flex justify-center items-center group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col flex-grow">
                <h4 className="text-lg sm:text-xl font-poppins text-slate-50 font-semibold leading-snug group-hover:text-white transition-colors">
                  {project.name}
                </h4>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 font-poppins">
                  {project.link && (
                    <div className="flex items-center gap-2">
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-200/10 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/20 hover:text-white transition-colors"
                      >
                        Live Demo
                      </Link>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Link
                      to={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-200 hover:bg-blue-400/20 hover:text-white transition-colors"
                    >
                      Source Code
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain group-hover:translate-x-0.5 transition-transform"
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
