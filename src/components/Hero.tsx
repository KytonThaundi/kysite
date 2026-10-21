import React from 'react';
import { ArrowDown, ArrowRight, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[82vh] items-center overflow-hidden pt-24 pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900" />
      <div className="absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-700/10" />

      <div className="container mx-auto px-4 text-center md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-medium text-purple-800 shadow-sm dark:border-purple-800 dark:bg-gray-900/70 dark:text-purple-200">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Business analysis <span aria-hidden="true">·</span> Digital health experience <span aria-hidden="true">·</span> Open to remote work
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl">
            Business analyst turning complex needs into workable systems
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl">
            I help teams across industries turn business needs into dependable systems. My experience spans requirements, process analysis, implementation, and delivery, with deep experience in digital health.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-600 dark:hover:bg-purple-500"
            >
              Discuss a role or project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white/70 px-6 py-3.5 font-semibold text-gray-800 transition-colors hover:border-purple-400 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:border-purple-500 dark:hover:text-purple-200"
            >
              Explore selected impact
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-gray-950 dark:text-white">5 modules</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">across quarterly EMR releases</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-950 dark:text-white">1,000+</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">healthcare workers trained</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-950 dark:text-white">96% uptime</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">across 49 health facilities</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to selected work"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-500 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-300 md:block"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;