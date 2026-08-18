const base = import.meta.env.BASE_URL;

const contactLinks = [
  {
    name: "Email",
    image: `${base}gmail.png`,
    href: "https://mail.google.com/mail/u/1/#inbox?compose=new",
    alt: "Gmail",
  },
  {
    name: "GitHub",
    image: `${base}github.png`,
    href: "https://github.com/gb20080929",
    alt: "GitHub",
  },
  {
    name: "LinkedIn",
    image: `${base}linkedin.png`,
    href: "https://www.linkedin.com/in/good-boy-3bb598347/",
    alt: "LinkedIn",
  },
  {
    name: "Instagram",
    image: `${base}instagram.png`,
    href: "https://www.instagram.com/ll000020000ll/",
    alt: "Instagram",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-sky-500/15 bg-transparent py-20 sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s talk.
          </h2>
        </div>

        {/* Contact buttons */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9 object-contain"
                />
              </div>

              <span className="text-sm font-medium text-white transition-colors group-hover:text-zinc-200 sm:text-base">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}