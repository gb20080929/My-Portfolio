import { skills } from "../data";

const skillLevels = {
  "HTML & CSS": 90,
  JavaScript: 80,
  Python: 75,
};

const skillIcons = {
  "HTML & CSS": "</>",
  JavaScript: "JS",
  Python: "Py",
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            02. My Skills
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="max-w-2xl text-base leading-7 text-[#9494a8]">
            I enjoy learning and working with technologies that help me build
            responsive, useful, and modern digital experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const level = skillLevels[skill.name] || 70;
            const icon = skillIcons[skill.name] || "{}";

            return (
              <article
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 font-mono text-sm font-bold text-indigo-300 transition group-hover:scale-110">
                      {icon}
                    </div>

                    <span className="text-xs font-medium text-[#666679]">
                      {level}%
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 min-h-[72px] text-sm leading-6 text-[#9494a8]">
                    {skill.description}
                  </p>

                  {/* Skill bar */}
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-[#666679]">Proficiency</span>
                      <span className="text-indigo-300">{level}%</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 transition-all duration-1000 group-hover:from-indigo-400 group-hover:to-violet-300"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom technology note */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
          <p className="text-sm text-[#9494a8]">
            Always learning, always building.
            <span className="ml-2 text-indigo-400">
              More technologies coming soon →
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}