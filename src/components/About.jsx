export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
          About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A little about me<span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main About Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-xl font-bold text-indigo-300">
                <img
                  src={`${import.meta.env.BASE_URL}vasu.png`}
                  alt="Vasudevan Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Vasudevan
                </h3>
                <p className="text-sm text-indigo-400">
                  Web Developer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#9494a8]">
              <p>
                I have more than 1 year of experience in website development.
                I enjoy turning creative ideas into functional and elegant
                websites that look great across different devices.
              </p>

              <p>
                My goal is to combine clean design with seamless user
                experiences, creating digital solutions that are simple, fast,
                and memorable.
              </p>

              <p>
                When I am not coding, I explore new technologies and think
                about real-world problems that I can solve with software.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30">
              <div className="mb-4 flex items-center justify-between"> 
                <span className="text-xs uppercase tracking-[0.2em] text-indigo-400">
                  Experience
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                1+ Year
              </h3>

              <p className="text-sm leading-6 text-[#9494a8]">
                Building websites and improving my development skills through
                practical projects.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30">
              <div className="mb-4 flex items-center justify-between">
                
                <span className="text-xs uppercase tracking-[0.2em] text-indigo-400">
                  Mindset
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                Always Learning
              </h3>

              <p className="text-sm leading-6 text-[#9494a8]">
                Exploring new technologies and looking for better ways to
                solve real-world problems with software.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30">
              <div className="mb-4 flex items-center justify-between">
                
                <span className="text-xs uppercase tracking-[0.2em] text-indigo-400">
                  Focus
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                Web Development
              </h3>

              <p className="text-sm leading-6 text-[#9494a8]">
                Creating clean, responsive, functional, and memorable digital
                experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-8 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.04] px-6 py-5 text-center">
          <p className="text-sm text-[#9494a8]">
            &quot;Turning ideas into clean and functional digital
            experiences.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}