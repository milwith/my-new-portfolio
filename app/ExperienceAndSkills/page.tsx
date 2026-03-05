const skillGroups = [
  {
    title: "Languages",
    items: ["Java (Spring Boot)", "C#", "JavaScript(React, Next.js)", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (S3 bucket, Lambda)", "Docker", "Kubernetes", "CI/CD (Jenkins)"],
  },
  {
    title: "Architecture",
    items: ["RESTful APIs", "Microservices", "Serverless", "Event-driven systems"],
  },
  {
    title: "Databases",
    items: ["Oracle SQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Methodologies",
    items: ["TDD", "OOP", "System Design", "Agile / Scrum"],
  },
];

const workHistory = [
  {
    role: "Software Engineer – Sitecore",
    company: "IGT1 Lanka (Port City, Colombo)",
    period: "Dec 2025 - Feb 2026",
    highlights: [
      "Develop and maintain Sitecore-based enterprise web applications by customizing components and platform features.",
      "Monitor application performance using Grafana and Elasticsearch (Kibana) for log analysis and production issue troubleshooting.",
      "Support microservices-based systems by analyzing logs and metrics to diagnose runtime and performance issues.",
      "Collaborate with cross-functional teams to resolve production incidents and improve system stability.",
      "Enhance application observability and reliability through proactive monitoring and log-based diagnostics.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Central Finance Co PLC(Colombo)",
    period: "Jun 2024 - Dec 2025",
    highlights: [
      "Developed a fintech savings system using Java, Spring Boot, Angular, and Oracle SQL across the full development lifecycle.",
      "Built a centralized integration platform to streamline client onboarding while following enterprise architecture standards.",
      "Optimized backend services and database operations while implementing secure authentication using Spring Security.",
      "Implemented microservice communication using FeignClient and developed Oracle SQL stored procedures for efficient data operations.",
      "Designed and implemented an End-of-Day (EOD) processing system using Spring Scheduler and multithreading.",
      "Developed a 360° customer view feature enabling access to transaction history, account details, document viewing, and slip printing with role-based access control.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "EPIC Lanka Technologies Pvt Ltd (Colombo)",
    period: "Jan 2023 - Jul 2023",
    highlights: [
      "Developed a Credit Card Management System using Spring Boot, Angular, Hibernate, Liquibase, and MySQL.",
      "Implemented secure authentication and authorization using JWT with email verification for credential updates.",
      "Designed user-friendly front-end interfaces and integrated REST APIs for seamless frontend-backend communication.",
      "Built backend services and business logic ensuring reliable system performance and data management.",
      "Implemented Spring Batch with Apache POI to process and upload large Excel datasets into the database efficiently.",
    ],
  },
];

const ServicePage = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold text-emerald-600 dark:text-emerald-400 md:text-5xl">
          Experience & Skills
        </h1>

        <article className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-8">
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Profile</p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
            Software Engineer with 2+ years of experience building scalable and reliable full-stack applications,
             particularly in fintech environments. Skilled in Java, Spring Boot, Angular, React, and AWS, with
              hands-on experience developing cloud-native solutions and production-ready platforms. Passionate 
              about writing clean, maintainable code and improving system performance through modern engineering practices.
          </p>
        </article>

        <h2 className="mt-12 text-center text-xl font-bold text-slate-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60"
            >
              <h3 className="text-sm font-semibold text-sky-600 dark:text-sky-400">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-sky-700 dark:border-sky-700/50 dark:bg-sky-950/40 dark:text-sky-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-14 text-center text-xl font-bold text-slate-900 dark:text-white">
          Work History
        </h2>
        <div className="relative mx-auto mt-8 max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-emerald-500/40" />
          <div className="space-y-6">
            {workHistory.map((job) => (
              <div key={job.role} className="relative">
                <span className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-500 bg-white shadow-sm dark:bg-slate-900" />
                <article className="ml-12 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {job.company}
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>

        <article className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">Education</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            Bachelor of Science Honours in Information Technology
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            University of Moratuwa | 2020 - 2024
          </p>
        </article>
      </div>
    </section>
  );
};

export default ServicePage;
