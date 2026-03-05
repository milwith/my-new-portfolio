import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] w-full max-w-full flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10 top-10 right-20" />

      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-light text-slate-700 dark:text-slate-300">
          This is your designer/Engineer
        </h2>

        <h1 className="text-5xl md:text-6xl font-bold text-blue-500 mt-4">
          Milan Withanage
        </h1>

        <p className="text-slate-600 dark:text-slate-400 mt-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit.
        </p>

        <div className="flex flex-wrap gap-6 mt-8">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white">
            Discuss for Projects
          </Link>

          <a
            href="/Milan%20Withanage.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            View Resume <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-12 md:mt-0 w-full flex justify-center md:justify-end">
        <div className="relative w-full max-w-[600px]">
          <Image src="/milan.png" alt="Milan" width={700} height={800} className="w-full h-auto" />

          <div className="absolute inset-0 bg-linear-to-t from-slate-50 dark:from-[#0b0f19] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
