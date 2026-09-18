function Projects({ language }) {
  const isEnglish = language === "en"

  const content = {
    ar: {
      label: "SELECTED_WORK",
      title: "مشاريع صنعتها بشغف",
      subtitle:
        "مجموعة من المشاريع التي عملت عليها، من تطوير الويب إلى تصميم التجارب والألعاب.",
      view: "استكشف المشروع",
      live: "LIVE PROJECT",
      footer: "أبني • أجرّب • أتعلم • أطور",
    },

    en: {
      label: "SELECTED_WORK",
      title: "Projects built with passion",
      subtitle:
        "A selection of projects I've worked on, from web development to digital experiences and games.",
      view: "Explore Project",
      live: "LIVE PROJECT",
      footer: "BUILD • EXPERIMENT • LEARN • GROW",
    },
  }

  const projects = [
    {
      number: "01",
      name: "Masar",
      arTitle: "منصة مسار",
      enTitle: "Masar Platform",
      arDescription:
        "منصة تساعد المستخدم على اكتشاف الدورات والمعسكرات واختيار المسار التدريبي المناسب حسب المجال.",
      enDescription:
        "A platform that helps users discover courses and bootcamps and explore suitable learning paths.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://hawrasalem-dev.github.io/Masar/",
      symbol: "M",
      featured: true,
    },

    {
      number: "02",
      name: "Dream Land",
      arTitle: "لعبة Dream Land",
      enTitle: "Dream Land Game",
      arDescription:
        "مشروع لعبة ثنائية الأبعاد يجمع بين البرمجة، تصميم العالم والتجربة التفاعلية.",
      enDescription:
        "A 2D game project combining programming, world design and interactive gameplay.",
      technologies: ["2D Game", "Game Design", "Development"],
      url: "https://hawra-salem.itch.io/dream-land",
      symbol: "★",
      featured: false,
    },

    {
      number: "03",
      name: "Web Project",
      arTitle: "مشروع ويب",
      enTitle: "Web Project",
      arDescription:
        "تجربة ويب تفاعلية طورتها كجزء من رحلتي في بناء المشاريع واستكشاف أفكار جديدة.",
      enDescription:
        "An interactive web experience developed as part of my journey of building and exploring new ideas.",
      technologies: ["Web", "UI", "Development"],
      url: "https://ripe-green-module--hssmms2005.replit.app/",
      symbol: "</>",
      featured: false,
    },
  ]

  const c = content[language]

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <span className="absolute left-[6%] top-[12%] h-4 w-4 bg-[#D8EFFF]" />
        <span className="absolute right-[9%] top-[16%] h-3 w-3 bg-[#FFC46B]" />
        <span className="absolute bottom-[15%] left-[8%] h-3 w-3 bg-[#5CA9DC]/40" />

        <div className="absolute right-[3%] top-[45%] font-mono text-[9px] tracking-[0.5em] text-[#5CA9DC]/25">
          010101
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-[#5CA9DC]">
            <span className="h-2 w-2 bg-[#5CA9DC]" />
            {c.label}
          </div>

          <h2 className="text-4xl font-bold text-[#123D67] sm:text-5xl">
            {c.title}
            <span className="text-[#5CA9DC]">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#123D67]/60 sm:text-base">
            {c.subtitle}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-7">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group relative grid overflow-hidden rounded-[28px] border border-[#A8D8F5]/60 bg-white/70 shadow-[0_15px_45px_rgba(47,131,189,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#5CA9DC] hover:shadow-[0_20px_55px_rgba(47,131,189,0.13)] md:grid-cols-[0.85fr_1.15fr] ${
                index % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Visual */}
              <div
                className={`relative flex min-h-[280px] items-center justify-center overflow-hidden ${
                  project.featured
                    ? "bg-[#123D67]"
                    : index === 1
                    ? "bg-[#D8EFFF]"
                    : "bg-[#EAF6FF]"
                }`}
              >
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.10]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#5CA9DC 1px, transparent 1px), linear-gradient(90deg, #5CA9DC 1px, transparent 1px)",
                    backgroundSize: "25px 25px",
                  }}
                />

                {/* Main visual icon */}
                <div
                  className={`relative z-10 flex h-28 w-28 items-center justify-center border-2 font-mono text-4xl font-black shadow-[8px_8px_0_#5CA9DC] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-4deg] sm:h-32 sm:w-32 ${
                    project.featured
                      ? "border-white bg-[#246B9E] text-white"
                      : "border-[#5CA9DC] bg-white text-[#246B9E]"
                  }`}
                >
                  {project.symbol}

                  <span className="absolute -right-2 -top-2 h-4 w-4 bg-[#FFC46B]" />
                  <span className="absolute -bottom-3 -left-3 h-5 w-5 bg-[#5CA9DC]" />
                </div>

                {/* Browser style decoration */}
                <div className="absolute left-5 top-5 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF9E9E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFC46B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5CA9DC]" />
                </div>

                <span
                  className={`absolute bottom-5 right-5 font-mono text-[9px] tracking-[0.25em] ${
                    project.featured
                      ? "text-white/40"
                      : "text-[#123D67]/35"
                  }`}
                >
                  PROJECT_{project.number}
                </span>
              </div>

              {/* Content */}
              <div
                className="flex min-h-[280px] flex-col justify-center p-7 md:[direction:ltr] lg:p-10"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#5CA9DC]">
                    {project.number}
                  </span>

                  <span className="h-[1px] w-10 bg-[#A8D8F5]" />

                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#5CA9DC]/60">
                    {c.live}
                  </span>
                </div>

                <p className="mt-5 font-mono text-xs font-bold text-[#5CA9DC]">
                  {project.name}
                </p>

                <h3 className="mt-1 text-2xl font-bold text-[#123D67] sm:text-3xl">
                  {isEnglish
                    ? project.enTitle
                    : project.arTitle}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#123D67]/60">
                  {isEnglish
                    ? project.enDescription
                    : project.arDescription}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#A8D8F5]/60 bg-[#F5FBFF] px-3 py-1.5 font-mono text-[10px] font-semibold text-[#246B9E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project button */}
                <div className="mt-7">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex items-center gap-3 rounded-xl bg-[#246B9E] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(36,107,158,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#123D67]"
                  >
                    {c.view}

                    <span className="font-mono transition duration-300 group-hover/button:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-[#A8D8F5]" />

          <span className="font-mono text-[9px] tracking-[0.25em] text-[#5CA9DC]/60">
            {c.footer}
          </span>

          <span className="h-[1px] w-12 bg-[#A8D8F5]" />
        </div>
      </div>
    </section>
  )
}

export default Projects