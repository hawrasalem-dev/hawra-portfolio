function Achievements({ language }) {
  const isEnglish = language === "en"

  const content = {
    ar: {
      label: "ACHIEVEMENTS",
      title: "محطات أفتخر بها",
      subtitle:
        "إنجازات وتجارب صنعت جزءًا مهمًا من رحلتي، وكل واحدة منها كانت خطوة جديدة للتعلّم والتطور.",
      firstPlace: "المركز الأول",
      bestProject: "أفضل مشروع في معسكر TairAlfa",
      winnerDescription:
        "حققت المركز الأول كأفضل مشروع في معسكر TairAlfa لتطوير ألعاب 2D، بعد تجربة جمعت بين البرمجة والتصميم وتطوير الألعاب.",
      category: "تطوير ألعاب 2D",
      winner: "1ST PLACE • BEST PROJECT",
      more: "والمزيد من التعلّم قادم...",
    },

    en: {
      label: "ACHIEVEMENTS",
      title: "Milestones I'm proud of",
      subtitle:
        "Achievements and experiences that became an important part of my journey, each representing another step in learning and growth.",
      firstPlace: "1st Place",
      bestProject: "Best Project at TairAlfa Bootcamp",
      winnerDescription:
        "Achieved 1st place for Best Project at the TairAlfa 2D Game Development Bootcamp through an experience combining programming, design and game development.",
      category: "2D Game Development",
      winner: "1ST PLACE • BEST PROJECT",
      more: "More learning ahead...",
    },
  }

  const achievements = [
    {
      icon: "✦",
      arTitle: "معسكر CTF",
      enTitle: "CTF Bootcamp",
      arDescription:
        "تجربة تدريبية مكثفة في تحديات الأمن السيبراني ومهارات CTF.",
      enDescription:
        "An intensive training experience focused on cybersecurity and CTF challenges.",
      meta: "24 HOURS",
    },
    {
      icon: "</>",
      arTitle: "أساسيات لغة Java",
      enTitle: "Java Fundamentals",
      arDescription:
        "برنامج تدريبي في أساسيات البرمجة باستخدام لغة Java.",
      enDescription:
        "A training program focused on programming fundamentals using Java.",
      meta: "30 HOURS",
    },
    {
      icon: "AI",
      arTitle: "أساسيات الذكاء الاصطناعي",
      enTitle: "AI Fundamentals",
      arDescription:
        "تجارب ودورات ساعدتني على بناء أساس في مفاهيم وأدوات الذكاء الاصطناعي.",
      enDescription:
        "Learning experiences that helped me build a foundation in AI concepts and tools.",
      meta: "AI",
    },
    {
      icon: "⌘",
      arTitle: "مشاركات تطوعية وتقنية",
      enTitle: "Technical Volunteering",
      arDescription:
        "مساهمات في الأندية والفعاليات التقنية والعمل ضمن فرق التنظيم والإعلام.",
      enDescription:
        "Contributions to technical clubs and events through organization, media and teamwork.",
      meta: "COMMUNITY",
    },
  ]

  const c = content[language]

  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* decorations */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <span className="absolute left-[6%] top-[14%] h-4 w-4 bg-[#FFC46B]/70" />
        <span className="absolute right-[8%] top-[12%] h-3 w-3 bg-[#5CA9DC]/50" />
        <span className="absolute bottom-[10%] left-[12%] h-3 w-3 bg-[#D8EFFF]" />
        <span className="absolute bottom-[18%] right-[7%] h-4 w-4 bg-[#FFC46B]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* heading */}
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

        {/* MAIN WINNER CARD */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#FFC46B] bg-[#FFF9EC] shadow-[10px_10px_0_#FFE3A8]">

          {/* top bar */}
          <div className="flex items-center justify-between border-b border-[#FFC46B]/50 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF9E9E]" />
              <span className="h-3 w-3 rounded-full bg-[#FFC46B]" />
              <span className="h-3 w-3 rounded-full bg-[#5CA9DC]" />
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#A86F1B] sm:text-[10px]">
              {c.winner}
            </span>

            <span className="font-mono text-xs text-[#D9962E]">
              #01
            </span>
          </div>

          <div className="grid items-center gap-10 p-7 md:grid-cols-[0.75fr_1.25fr] lg:p-12">

            {/* Trophy */}
            <div className="relative flex min-h-[260px] items-center justify-center">
              <div className="absolute h-52 w-52 rounded-full bg-[#FFC46B]/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-40 w-40 items-center justify-center border-2 border-[#D9962E] bg-white text-7xl shadow-[9px_9px_0_#FFC46B] transition duration-300 hover:-translate-y-2 hover:rotate-[-3deg] sm:h-44 sm:w-44">
                  🏆
                </div>

                <span className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center bg-[#123D67] font-mono text-lg font-black text-white shadow-[4px_4px_0_#5CA9DC]">
                  #1
                </span>

                <span className="absolute -bottom-3 -left-3 h-5 w-5 bg-[#5CA9DC]" />
                <span className="absolute -right-7 bottom-8 h-4 w-4 bg-[#FFC46B]" />
              </div>
            </div>

            {/* winner info */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFC46B]/30 px-4 py-2 text-sm font-bold text-[#9B6519]">
                <span>🥇</span>
                {c.firstPlace}
              </div>

              <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-[#123D67] sm:text-4xl lg:text-5xl">
                {c.bestProject}
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#123D67]/65 sm:text-base sm:leading-8">
                {c.winnerDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-lg border border-[#FFC46B] bg-white px-3 py-2 font-mono text-[10px] font-bold text-[#A86F1B]">
                  TairAlfa
                </span>

                <span className="rounded-lg border border-[#FFC46B] bg-white px-3 py-2 font-mono text-[10px] font-bold text-[#A86F1B]">
                  {c.category}
                </span>

                <span className="rounded-lg border border-[#FFC46B] bg-white px-3 py-2 font-mono text-[10px] font-bold text-[#A86F1B]">
                  BEST PROJECT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other achievements */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {achievements.map((item, index) => (
            <article
              key={item.enTitle}
              className="group relative min-h-[220px] overflow-hidden rounded-[24px] border border-[#A8D8F5]/60 bg-white/70 p-6 shadow-[0_12px_35px_rgba(47,131,189,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#5CA9DC] hover:bg-white"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-[#5CA9DC] bg-[#EAF6FF] font-mono text-lg font-black text-[#246B9E] shadow-[4px_4px_0_#D8EFFF]">
                  {item.icon}
                </div>

                <span className="font-mono text-[9px] tracking-[0.18em] text-[#5CA9DC]/50">
                  0{index + 2}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#123D67]">
                {isEnglish ? item.enTitle : item.arTitle}
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-[#123D67]/60">
                {isEnglish
                  ? item.enDescription
                  : item.arDescription}
              </p>

              <div className="mt-5 inline-flex rounded-lg bg-[#EAF6FF] px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.15em] text-[#2F83BD]">
                {item.meta}
              </div>

              <span className="absolute -bottom-2 -right-2 h-6 w-6 bg-[#D8EFFF] transition duration-300 group-hover:bg-[#5CA9DC]/30" />
            </article>
          ))}
        </div>

        {/* end terminal */}
        <div className="mx-auto mt-12 flex max-w-sm items-center justify-center gap-3 border border-[#5CA9DC]/40 bg-[#123D67] px-5 py-3 font-mono text-xs text-[#D8EFFF] shadow-[5px_5px_0_#A8D8F5]">
          <span>&gt;</span>
          <span>{c.more}</span>
          <span className="blink h-4 w-2 bg-[#A8D8F5]" />
        </div>
      </div>
    </section>
  )
}

export default Achievements