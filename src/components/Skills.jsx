function Skills({ language }) {
  const isEnglish = language === "en"

  const content = {
    ar: {
      label: "MY_SKILLS",
      title: "أدوات أبني بها أفكاري",
      subtitle:
        "تقنيات وأدوات اكتسبتها من الدراسة، المشاريع، الدورات والتجربة المستمرة.",
      footer: "وما زلت أتعلم...",
    },

    en: {
      label: "MY_SKILLS",
      title: "Tools I use to build ideas",
      subtitle:
        "Technologies and tools I've explored through university, projects, courses and continuous practice.",
      footer: "Still learning...",
    },
  }

  const groups = [
    {
      number: "01",
      symbol: "</>",
      arTitle: "البرمجة",
      enTitle: "Programming",
      skills: ["Java", "Python", "C++", "C#", "JavaScript"],
    },
    {
      number: "02",
      symbol: "▣",
      arTitle: "تطوير الويب",
      enTitle: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"],
    },
    {
      number: "03",
      symbol: "◈",
      arTitle: "التصميم",
      enTitle: "Design",
      skills: ["UI/UX", "Canva", "Responsive Design", "Visual Design"],
    },
    {
      number: "04",
      symbol: "✦",
      arTitle: "تقنية واستكشاف",
      enTitle: "Tech & Exploration",
      skills: [
        "Artificial Intelligence",
        "Prompt Engineering",
        "Cybersecurity",
        "Linux",
        "CTF",
      ],
    },
  ]

  const c = content[language]

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#EAF6FF]/45 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* background decoration */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute left-[5%] top-[12%] h-4 w-4 bg-[#5CA9DC]/30" />
        <span className="absolute right-[7%] top-[18%] h-3 w-3 bg-[#FFC46B]/80" />
        <span className="absolute bottom-[12%] left-[10%] h-3 w-3 bg-[#5CA9DC]/40" />

        <div className="absolute -right-8 bottom-10 grid grid-cols-3 gap-1 opacity-30">
          <span className="h-8 w-8 bg-[#A8D8F5]" />
          <span className="h-8 w-8 bg-[#D8EFFF]" />
          <span />
          <span />
          <span className="h-8 w-8 bg-[#A8D8F5]" />
          <span />
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

        {/* Dashboard */}
        <div className="overflow-hidden rounded-[28px] border border-[#A8D8F5]/60 bg-white/70 shadow-[0_20px_60px_rgba(47,131,189,0.08)] backdrop-blur-xl">

          {/* fake window header */}
          <div className="flex items-center justify-between border-b border-[#A8D8F5]/50 bg-white/80 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF9E9E]" />
              <span className="h-3 w-3 rounded-full bg-[#FFC46B]" />
              <span className="h-3 w-3 rounded-full bg-[#5CA9DC]" />
            </div>

            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#123D67]/40">
              HAWRA_SKILL_STACK
            </span>

            <span className="font-mono text-xs text-[#5CA9DC]">
              ✦
            </span>
          </div>

          {/* Skill groups */}
          <div className="grid md:grid-cols-2">
            {groups.map((group, index) => (
              <div
                key={group.number}
                className={`group relative min-h-[280px] p-7 transition duration-300 hover:bg-[#F5FBFF] lg:p-9 ${
                  index % 2 === 0
                    ? "md:border-e md:border-[#A8D8F5]/40"
                    : ""
                } ${
                  index < 2
                    ? "border-b border-[#A8D8F5]/40"
                    : ""
                }`}
              >
                {/* number */}
                <span className="absolute end-6 top-6 font-mono text-[10px] tracking-[0.2em] text-[#5CA9DC]/50">
                  {group.number}
                </span>

                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center border-2 border-[#5CA9DC] bg-[#EAF6FF] font-mono text-lg font-bold text-[#246B9E] shadow-[4px_4px_0_#D8EFFF] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-[-3deg]">
                  {group.symbol}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#123D67]">
                  {isEnglish ? group.enTitle : group.arTitle}
                </h3>

                {/* skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[#A8D8F5]/60 bg-[#F5FBFF] px-3 py-2 font-mono text-[11px] font-semibold text-[#246B9E] transition duration-300 hover:border-[#5CA9DC] hover:bg-[#D8EFFF]/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* fake progress decoration */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1.5 w-[42%] rounded-full bg-[#5CA9DC]" />
                  <span className="h-1.5 w-[22%] rounded-full bg-[#A8D8F5]" />
                  <span className="h-1.5 w-[8%] rounded-full bg-[#FFC46B]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom terminal */}
        <div className="mx-auto mt-10 flex max-w-md items-center justify-between border border-[#5CA9DC]/40 bg-[#123D67] px-5 py-3 font-mono text-xs shadow-[6px_6px_0_#A8D8F5]">
          <span className="text-[#D8EFFF]">
            &gt; {c.footer}
          </span>

          <span className="blink h-4 w-2 bg-[#A8D8F5]" />
        </div>
      </div>
    </section>
  )
}

export default Skills