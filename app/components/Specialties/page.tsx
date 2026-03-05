const Specialties = () => {
  return (
    <section className="px-10 py-24 text-center">

      {/* Section Label */}
      <p className="text-slate-500 dark:text-slate-400 tracking-widest uppercase">
        Speciality
      </p>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        My <span className="text-blue-500">specialities</span>
      </h2>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-xl mx-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {/* Card 1 */}
        <div className="bg-slate-100 dark:bg-[#111827] p-8 rounded-xl border border-slate-200 dark:border-gray-800 hover:border-blue-500 transition duration-300">
          <h3 className="text-xl font-semibold mb-4">
            Email Marketing
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-100 dark:bg-[#111827] p-8 rounded-xl border border-slate-200 dark:border-gray-800 hover:border-blue-500 transition duration-300">
          <h3 className="text-xl font-semibold mb-4">
            Market Analysis
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-100 dark:bg-[#111827] p-8 rounded-xl border border-slate-200 dark:border-gray-800 hover:border-blue-500 transition duration-300">
          <h3 className="text-xl font-semibold mb-4">
            Keyword Research
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Specialties
