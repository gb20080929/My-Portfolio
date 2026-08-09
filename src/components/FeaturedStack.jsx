import { stack } from "../data";

export default function FeaturedStack() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
          Featured Stack
        </p>
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">What I Use Most</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {stack.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-indigo-500/30 hover:bg-white/[0.04]"
            >
              <h3 className="mb-1 text-xl font-semibold text-white">{item.name}</h3>
              <p className="mb-3 text-sm font-medium text-indigo-400">{item.role}</p>
              <p className="text-sm leading-relaxed text-[#9494a8]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
