function Journey({ language }) {
  const isEnglish = language === "en"

  const content = {
    ar: {
      label: "MY_JOURNEY",
      title: "رحلتي حتى الآن",
      subtitle:
        "كل مرحلة أضافت لي شيئًا جديدًا، من الدراسة إلى المشاريع والأندية والمعسكرات والتجارب التقنية.",
      current: "المحطة الحالية",
      continue: "والرحلة مستمرة...",
    },

    en: {
      label: "MY_JOURNEY",
      title: "My journey so far",
      subtitle:
        "Every stage has added something new to my journey, from university and projects to clubs, bootcamps and technical experiences.",
      current: "CURRENT CHAPTER",
      continue: "And the journey continues...",
    },
  }

  const journey = [
    {
      number: "01",
      year: "UNIVERSITY",
      icon: "⌘",
      arTitle: "علوم الحاسب",
      enTitle: "Computer Science",
      arDescription:
        "بدأت رحلتي الأكاديمية في تخصص علوم الحاسب بجامعة نجران، وتعرّفت خلالها على مجالات متنوعة في البرمجة والتقنية.",
      enDescription:
        "I began my academic journey in Computer Science at Najran University, exploring different areas of programming and technology.",
      tags: ["Computer Science", "Najran University"],
    },

    {
      number: "02",
      year: "EXPLORE",
      icon: "</>",
      arTitle: "التجربة وبناء المشاريع",
      enTitle: "Exploring & Building",
      arDescription:
        "بدأت أحوّل ما أتعلمه إلى مشاريع وتجارب فعلية، من تطوير المواقع إلى البرمجة وتصميم التجارب الرقمية.",
      enDescription:
        "I started turning what I learn into real projects, from web development and programming to digital experience design.",
      tags: ["Web", "Programming", "Projects"],
    },

    {
      number: "03",
      year: "COMMUNITY",
      icon: "✦",
      arTitle: "الأندية والمشاركة",
      enTitle: "Clubs & Community",
      arDescription:
        "شاركت في الأنشطة والأندية التقنية، وخضت تجارب في التنظيم والإعلام والتسويق والعمل ضمن فرق مختلفة.",
      enDescription:
        "I became involved in technical clubs and activities, gaining experience in organization, media, marketing and teamwork.",
      tags: ["Clubs", "Media", "Teamwork"],
    },

    {
      number: "04",
      year: "LEARN",
      icon: "▣",
      arTitle: "الدورات والمعسكرات",
      enTitle: "Courses & Bootcamps",
      arDescription:
        "وسّعت معرفتي من خلال دورات ومعسكرات في تطوير الويب، الذكاء الاصطناعي، الأمن السيبراني، لينكس والبرمجة.",
      enDescription:
        "I expanded my knowledge through courses and bootcamps in web development, AI, cybersecurity, Linux and programming.",
      tags: ["AI", "Cybersecurity", "Web"],
    },

    {
      number: "05",
      year: "1ST PLACE",
      icon: "★",
      arTitle: "أفضل مشروع في معسكر TairAlfa",
      enTitle: "Best Project at TairAlfa Bootcamp",
      arDescription:
        "حققت المركز الأول كأفضل مشروع في معسكر TairAlfa لتطوير ألعاب 2D، وكانت من أبرز المحطات في رحلتي.",
      enDescription:
        "Achieved 1st place for Best Project at the TairAlfa 2D Game Development Bootcamp, one of the highlights of my journey.",
      tags: ["1st Place", "2D Games", "TairAlfa"],
      winner: true,
    },

    {
      number: "06",
      year: "NOW",
      icon: "→",
      arTitle: "أتعلم وأبني أكثر",
      enTitle: "Learning & Building More",
      arDescription:
        "أواصل تطوير مهاراتي، تجربة أفكار جديدة، وبناء مشاريع تجمع بين التقنية والتصميم والإبداع.",
      enDescription:
        "I continue developing my skills, exploring new ideas and building projects that combine technology, design and creativity.",
      tags: ["Learn", "Build", "Grow"],
      current: true,
    },
  ]

  const c = content[language]

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#EAF6FF]/40 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* background pixels */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <span className="absolute left-[7%] top-[13%] h-4 w-4 bg-[#D8EFFF]" />
        <span className="absolute right-[8%] top-[18%] h-3 w-3 bg-[#FFC46B]" />
        <span className="absolute bottom-[14%] left-[12%] h-3 w-3 bg-[#5CA9DC]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* Heading */}
        <div className="mb-16 text-center">
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

        {/* Timeline */}
        <div className="relative">

          {/* center line */}
          <div className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-[#A8D8F5]/60 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((item, index) => (
              <div
                key={item.number}
                className={`relative grid md:grid-cols-2 md:gap-16 ${
                  index % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-7 z-20 flex h-12 w-12 items-center justify-center border-2 font-mono text-lg font-bold shadow-[4px_4px_0_#D8EFFF] md:left-1/2 md:-translate-x-1/2 ${
                    item.winner
                      ? "border-[#FFC46B] bg-[#FFC46B] text-[#123D67]"
                      : item.current
                      ? "border-[#5CA9DC] bg-[#5CA9DC] text-white"
                      : "border-[#5CA9DC] bg-white text-[#246B9E]"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className={`ms-16 md:ms-0 ${
                    index % 2 === 0
                      ? "md:col-start-1"
                      : "md:col-start-2"
                  }`}
                >
                  <article
                    dir={isEnglish ? "ltr" : "rtl"}
                    className={`relative rounded-[24px] border p-6 transition duration-300 hover:-translate-y-1 lg:p-7 ${
                      item.winner
                        ? "border-[#FFC46B] bg-[#FFF9EC] shadow-[7px_7px_0_#FFE3A8]"
                        : "border-[#A8D8F5]/60 bg-white/80 shadow-[7px_7px_0_#D8EFFF]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`font-mono text-[10px] font-bold tracking-[0.18em] ${
                          item.winner
                            ? "text-[#D9962E]"
                            : "text-[#5CA9DC]"
                        }`}
                      >
                        {item.year}
                      </span>

                      <span className="font-mono text-[10px] text-[#123D67]/30">
                        {item.number}
                      </span>
                    </div>

                    {item.winner && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFC46B]/30 px-3 py-1.5 text-xs font-bold text-[#9B6519]">
                        🥇
                        {isEnglish
                          ? "1st Place"
                          : "المركز الأول"}
                      </div>
                    )}

                    {item.current && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D8EFFF] px-3 py-1.5 text-xs font-bold text-[#246B9E]">
                        <span className="h-2 w-2 rounded-full bg-[#5CA9DC]" />
                        {c.current}
                      </div>
                    )}

                    <h3 className="mt-4 text-xl font-bold text-[#123D67] lg:text-2xl">
                      {isEnglish
                        ? item.enTitle
                        : item.arTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#123D67]/60">
                      {isEnglish
                        ? item.enDescription
                        : item.arDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-[#A8D8F5]/50 bg-[#F5FBFF] px-2.5 py-1.5 font-mono text-[9px] font-semibold text-[#246B9E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 border border-[#5CA9DC]/40 bg-[#123D67] px-5 py-3 font-mono text-xs text-[#D8EFFF] shadow-[5px_5px_0_#A8D8F5]">
            <span>&gt;</span>
            <span>{c.continue}</span>
            <span className="blink h-4 w-2 bg-[#A8D8F5]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey