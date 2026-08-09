import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            03. Featured Projects
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Things I&apos;ve Built
          </h2>

          <p className="max-w-2xl text-base leading-7 text-[#9494a8]">
            A selection of projects where I&apos;ve explored ideas, solved
            problems, and practiced building modern web applications.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Top glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition duration-500 group-hover:bg-indigo-500/20" />

              <div className="relative">
                {/* Project header */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-indigo-400">
                    0{index + 1}
                  </span>

                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  </div>
                </div>

                {/* Project icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-2xl text-indigo-300 transition duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                  {index === 0 ? "◈" : "⌘"}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-indigo-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-7 min-h-[84px] text-sm leading-7 text-[#9494a8]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-[#b5b5c5] transition group-hover:border-indigo-400/20 group-hover:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400"
                  >
                    View Project
                    <span className="ml-2">↗</span>
                  </a>

                  <a
                    href="#contact"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-[#b5b5c5] transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                  >
                    Discuss Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#666679]">
            More projects will be added as I continue building.
          </p>
        </div>
      </div>
    </section>
  );
}