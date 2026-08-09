import { social } from "../data";

const contacts = [
  {
    name: "Email",
    logo: "/gmail.png",
    href: `mailto:${social.email}`,
  },
  {
    name: "GitHub",
    logo: "/github.png",
    href: social.github,
  },
  {
    name: "LinkedIn",
    logo: "/linkedin.png",
    href: social.linkedin,
  },
  {
    name: "Instagram",
    logo: "/instagram.png",
    href: social.instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-14">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-7 text-center">
          <p className="text-sm text-indigo-400">
            Contact
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Let&apos;s talk.
          </h2>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target={
                contact.name === "Email"
                  ? undefined
                  : "_blank"
              }
              rel={
                contact.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <img
                src={contact.logo}
                alt={`${contact.name} logo`}
                loading="lazy"
                decoding="async"
                width="28"
                height="28"
                className="h-7 w-7 object-contain"
              />

              <span className="text-sm font-medium text-white">
                {contact.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}