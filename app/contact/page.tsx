const contactCards = [
  {
    label: "Email",
    value: "milanwithana97@gmail.com",
    href: "mailto:milanwithana97@gmail.com",
    icon: "fa-envelope-circle-check",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    label: "Phone",
    value: "+94 76 450 69 36",
    href: "tel:+94764506936",
    icon: "fa-mobile-screen-button",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    label: "LinkedIn",
    value: "milan-withanage",
    href: "https://www.linkedin.com/in/milan-withanage",
    icon: "fa-brands fa-linkedin-in",
    accent: "from-indigo-500 to-blue-500",
  },
];

const ContactPage = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/10" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-7 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-10">
          <p className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Contact Milan
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Connect with me as a Software Engineer.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            I am open to software engineering roles, technical collaborations, and
            professional networking. Feel free to reach out for career opportunities,
            engineering discussions, or general inquiries.
          </p>

          <div className="mt-8 space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.label === "LinkedIn" ? "_blank" : undefined}
                rel={card.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950/50 dark:hover:border-slate-500"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-lg text-white ${card.accent}`}
                >
                  <i className={card.icon} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {card.label}
                  </span>
                  <span className="block truncate text-base font-medium text-slate-800 dark:text-slate-100">
                    {card.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-100/90 p-7 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send me a message</h2>
          

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Milan Withanage"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@email.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-600 dark:hover:bg-cyan-500"
            >
              Send Message
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
