"use client";

import { useMemo, useState } from "react";

const categories = ["All", "Web App", "Research", "IoT", "UI/UX", "Hardware"];

const projects = [
  {
    title: "WeatherSnap",
    tag: "Web App",
    description:
      "WeatherSnap is a dynamic weather checking application that delivers real-time weather updates when a city is entered.",
    imageClass: "from-slate-600 via-slate-500 to-slate-700",
  },
  {
    title: "InfoHub UoM",
    tag: "IoT",
    description:
      "A centralized display system developed using Raspberry Pi, specifically tailored for the Faculty of Information Technology.",
    imageClass: "from-emerald-700 via-emerald-500 to-slate-700",
  },
  {
    title: "AzureSense",
    tag: "IoT",
    description:
      "A research-driven project integrating Raspberry Pi with Azure IoT Hub for real-time sensor data transmission.",
    imageClass: "from-sky-600 via-indigo-500 to-slate-600",
  },
  {
    title: "Smart Canteen",
    tag: "Research",
    description:
      "A smart canteen prototype with data collection and analytics to optimize operations and improve service speed.",
    imageClass: "from-orange-500 via-rose-500 to-violet-600",
  },
  {
    title: "Portfolio Revamp",
    tag: "UI/UX",
    description:
      "A modern portfolio redesign focused on accessibility, cleaner visual hierarchy, and faster user flows.",
    imageClass: "from-cyan-500 via-blue-600 to-indigo-700",
  },
  {
    title: "HR Dashboard",
    tag: "Web App",
    description:
      "A management dashboard to track vacancies, performance, and hiring workflows with clean reporting views.",
    imageClass: "from-zinc-500 via-slate-500 to-zinc-700",
  },
  {
    title: "Edge Device Controller",
    tag: "Hardware",
    description:
      "A custom embedded controller prototype for sensor communication, local processing, and field diagnostics.",
    imageClass: "from-amber-600 via-orange-500 to-stone-700",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.tag === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative mx-auto max-w-6xl">
        <p className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:text-slate-300">
          Projects
        </p>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          Selected work and experiments
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          A collection of software, IoT, research, and product design projects built to
          solve real problems with practical engineering decisions.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl border px-5 py-2 text-sm font-semibold transition ${
                category === activeCategory
                  ? "border-indigo-700 bg-indigo-700 text-white dark:border-indigo-500 dark:bg-indigo-500"
                  : "border-slate-300 bg-white/80 text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-slate-500"
            >
              <div
                className={`relative h-52 rounded-2xl bg-gradient-to-br ${project.imageClass} p-4`}
              >
                <div className="absolute inset-0 rounded-2xl bg-black/10" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                  {project.tag}
                </div>
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-indigo-700 opacity-80 transition group-hover:opacity-100 dark:text-indigo-400">
                View project
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
