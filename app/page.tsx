const skills: [string, string[]][] = [
  ["Front-end", ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]],
  ["Back-end", ["Node.js", "Prisma"]],
  ["Database", ["SQL", "PostgreSQL"]],
  ["Tools", ["Git", "GitHub"]],
];

const projects = [
  {
    name: "MPPS",
    title: "Muqdisho Market Price System",
    text: "A web application for managing and showing market prices.",
    stack: "Next.js, TypeScript, React, Tailwind CSS, Prisma, PostgreSQL",
    image: "/work/mmps.png",
    demo: "https://mmps-one.vercel.app",
    github: "https://github.com/Hanaabdikadir/mmps",
  },
  {
    name: "Flight Airline",
    title: "Flight Airline",
    text: "A site for flights and routes.",
    stack: "HTML, CSS, JavaScript",
    image: "/work/flight.png",
    demo: "",
    github: "https://github.com/Hanaabdikadir/flight-airline",
  },
  {
    name: "Sahan",
    title: "Sahan",
    text: "Restaurant site. Menu, visit, and contact.",
    stack: "Next.js, React",
    image: "/work/sahan.png",
    demo: "",
    github: "https://github.com/Hanaabdikadir/sahan",
  },
];

const more = [
  ["Noted", "Reviews of places. A category, then a name, then the photo and the note.", "https://github.com/Hanaabdikadir/noted"],
  ["Dayax Library", "A library site for browsing the collection and planning a visit.", "https://github.com/Hanaabdikadir/dayax-library"],
  ["Fish market", "A Somali fish market.", "https://github.com/Hanaabdikadir/fish-market"],
  ["Magaalooyinka", "A guide to Somali cities, with a page for each city.", "https://github.com/Hanaabdikadir/magaalooyinka"],
  ["Agriculture Marketplace", "A marketplace for crops and farm produce.", "https://github.com/Hanaabdikadir/Agriculture-Marketplace"],
  ["Market cap", "A calculator for market cap.", "https://github.com/Hanaabdikadir/mcup"],
];

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-10 border-b border-[#e6e1da] bg-[#f6f4f1]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-medium">
            Hana Abdikadir
          </a>
          <nav className="flex gap-5 text-sm text-[#3d3d3d]">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div>
            <p className="text-sm text-[#6a645c]">Mogadishu</p>
            <h1 className="mt-3 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Hi, I&apos;m Hana Abdikadir
            </h1>
            <p className="mt-4 text-lg">Front-End Developer · Computer Science & IT Graduate</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3c3834]">
              I build modern, responsive web applications with Next.js, React, and TypeScript.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="border border-[#1a1a1a] px-5 py-2.5 text-sm text-[#1a1a1a]">
                View my projects
              </a>
              <a href="/Hana-Abdikadir-CV.pdf" download className="border border-[#1a1a1a] px-5 py-2.5 text-sm text-[#1a1a1a]">
                Download CV
              </a>
            </div>
          </div>
          <img
            src="/hana.jpg"
            alt="Hana Abdikadir"
            className="aspect-[4/5] w-full max-w-sm justify-self-start object-cover object-[center_18%] md:justify-self-end"
          />
        </section>

        <section id="about" className="border-t border-[#e6e1da] py-16">
          <h2 className="font-serif text-3xl">About</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-[#333]">
            <p>
              I am a Computer Science and IT graduate. I work on the front end:
              Next.js, React, TypeScript, JavaScript, and Tailwind CSS.
            </p>
            <p>
              I am learning the back end as well, including Node.js, Prisma, and
              databases, so I can work as a full-stack developer.
            </p>
          </div>
          <p className="mt-8 text-sm text-[#5c564f]">
            HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind CSS
          </p>
          <p className="mt-2 text-sm text-[#5c564f]">Front-end developer, moving toward full-stack.</p>
        </section>

        <section className="border-t border-[#e6e1da] py-16">
          <h2 className="font-serif text-3xl">Skills</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-medium">{group}</h3>
                <ul className="mt-3 space-y-1 text-[#3c3834]">
                  {(items as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-[#e6e1da] py-16">
          <h2 className="font-serif text-3xl">Projects</h2>
          <div className="mt-10 space-y-16">
            {projects.map((project) => (
              <article key={project.name}>
                <img src={project.image} alt="" className="shot" />
                <h3 className="mt-5 font-serif text-2xl">{project.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-[#333]">{project.text}</p>
                <p className="mt-3 text-sm text-[#5c564f]">{project.stack}</p>
                <p className="mt-4 flex gap-4 text-sm">
                  {project.demo ? (
                    <a className="underline underline-offset-4" href={project.demo}>
                      Live demo
                    </a>
                  ) : null}
                  <a className="underline underline-offset-4" href={project.github}>
                    GitHub
                  </a>
                </p>
              </article>
            ))}
          </div>
          <ul className="mt-14 divide-y divide-[#e6e1da] border-t border-[#e6e1da]">
            {more.map(([name, text, href]) => (
              <li key={name}>
                <a href={href} className="block py-4">
                  <span className="text-lg">{name}</span>
                  <span className="mt-1 block text-sm text-[#5c564f]">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[#e6e1da] py-16">
          <h2 className="font-serif text-3xl">Education</h2>
          <p className="mt-4 text-lg">BSc in Computer Science & IT</p>
          <p className="mt-1 text-[#5c564f]">Jazeera University, Mogadishu</p>
        </section>

        <section id="contact" className="border-t border-[#e6e1da] py-16">
          <h2 className="font-serif text-3xl">Contact</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">
            I am open to work, collaboration, and new projects.
          </p>
          <ul className="mt-6 space-y-2">
            <li>
              <a className="underline underline-offset-4" href="mailto:haniabdikadir100@gmail.com">
                haniabdikadir100@gmail.com
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://github.com/Hanaabdikadir">
                github.com/Hanaabdikadir
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://www.linkedin.com/in/hana-abdikadir-a38287441">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="tel:+252683754695">+252 68 3754695</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
