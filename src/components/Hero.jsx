import { stats, social } from "../data";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Animated premium background */}
      <HeroBackground />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-6xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div>
            {/* Intro */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
              Hey, I&apos;m
            </p>

            {/* Name */}
            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vasudevan
            </h1>

            {/* Role */}
            <h2 className="mb-6 max-w-2xl text-2xl font-semibold leading-tight text-zinc-300 sm:text-3xl">
              I build things for the{" "}
              <span className="text-indigo-400">
                web.
              </span>
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-base leading-8 text-[#9494a8] sm:text-lg">
              A passionate web developer focused on creating
              futuristic, responsive, and elegant digital
              experiences. I turn ideas into clean and
              functional websites using HTML, CSS,
              JavaScript, and Python.
            </p>

            {/* =========================
                BUTTONS
            ========================= */}
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-xl bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-indigo-500/30"
              >
                View My Work

                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* =========================
                SOCIAL LINKS
            ========================= */}
            <div className="flex flex-wrap items-center gap-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#666679]">
                Find me on
              </span>

              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9494a8] transition-colors duration-300 hover:text-white"
              >
                GitHub
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9494a8] transition-colors duration-300 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${social.email}`}
                className="text-sm text-[#9494a8] transition-colors duration-300 hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL CARD
          ========================= */}
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-sm">

              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-indigo-500/10 blur-2xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">

                {/* =========================
                    WINDOW HEADER
                ========================= */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="text-xs text-[#666679]">
                    developer.js
                  </span>
                </div>

                {/* =========================
                    CODE
                ========================= */}
                <div className="space-y-4 font-mono text-sm">

                  <p>
                    <span className="text-indigo-400">
                      const
                    </span>{" "}
                    <span className="text-white">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-[#9494a8]">
                      name:
                    </span>{" "}
                    <span className="text-emerald-300">
                      &quot;Vasudevan&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#9494a8]">
                      role:
                    </span>{" "}
                    <span className="text-emerald-300">
                      &quot;Web Developer&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#9494a8]">
                      focus:
                    </span>{" "}
                    <span className="text-emerald-300">
                      &quot;Modern Web&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-[#9494a8]">
                      passion:
                    </span>{" "}
                    <span className="text-emerald-300">
                      &quot;Building&quot;
                    </span>
                  </p>

                  <p>
                    {"};"}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/10" />

                  <p>
                    <span className="text-indigo-400">
                      while
                    </span>{" "}
                    <span className="text-white">
                      (learning)
                    </span>{" "}
                    {"{"}
                  </p>

                  <p className="pl-5 text-indigo-300">
                    build
                    <span className="text-white">
                      ();
                    </span>
                  </p>

                  <p className="pl-5 text-indigo-300">
                    improve
                    <span className="text-white">
                      ();
                    </span>
                  </p>

                  <p className="pl-5 text-indigo-300">
                    create
                    <span className="text-white">
                      ();
                    </span>
                  </p>

                  <p>
                    {"}"}
                  </p>
                </div>

                {/* =========================
                    STATS
                ========================= */}
                <div className="mt-8 grid grid-cols-2 gap-3">

                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-xl font-bold text-white">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-wider text-[#666679]">
                        {stat.label}
                      </p>
                    </div>
                  ))}

                  {/* Core Skills */}
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xl font-bold text-white">
                      3+
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-[#666679]">
                      Core Skills
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}