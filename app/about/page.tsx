import Image from "next/image";
import Link from "next/link";

const BIRTH_YEAR = 1997;
const BIRTH_MONTH_INDEX = 2;
const BIRTH_DAY = 24;

const getCurrentAge = () => {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_YEAR;

  const hasBirthdayPassed =
    today.getMonth() > BIRTH_MONTH_INDEX ||
    (today.getMonth() === BIRTH_MONTH_INDEX && today.getDate() >= BIRTH_DAY);

  if (!hasBirthdayPassed) age -= 1;
  return age;
};

const aboutItems = (age: number) => [
  { label: "Name", value: "Milan" },
  { label: "Age", value: `${age} Years` },
  { label: "Email", value: "milanwithana97@gmail.com" },
  { label: "Phone", value: "+94 76 450 69 36" },
  { label: "Location", value: "Sri Lanka" },
  { label: "Languages", value: "English, Sinhala" },
];

const AboutPage = () => {
  const age = getCurrentAge();

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-6">
          <Image
            src="/milan.png"
            alt="Milan"
            width={620}
            height={760}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-7 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-10">
          <p className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:text-slate-300">
            About Me
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
            About <span className="text-indigo-700 dark:text-indigo-400">Milan</span>
          </h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            IT Graduate | University of Moratuwa
          </p>

          <h2 className="mt-9 text-3xl font-semibold text-slate-900 dark:text-white">My Vision</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            As a graduate full-stack software engineer, my vision goes beyond simply
            strengthening technical expertise. I strive to become a driver of innovation,
            applying my skills and experience to design meaningful and scalable software
            solutions. Guided by a strong collaborative mindset, I seek to contribute within
            diverse teams where shared knowledge and collective creativity help solve complex
            problems and deliver high-impact results.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {aboutItems(age).map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-800 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200 min-w-0"
              >
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-[11px] text-white">
                  <i className="fa-solid fa-microchip" aria-hidden="true" />
                </span>
                <p className="min-w-0">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{item.label}:</span>{" "}
                  <span className="break-words text-indigo-700 dark:text-indigo-400">
                    {item.value}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/Milan%20Withanage.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-indigo-700 px-7 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 dark:border-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-950/40"
            >
              View Resume
            </a>
            <Link
              href="https://www.linkedin.com/in/milan-withanage"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              View LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
