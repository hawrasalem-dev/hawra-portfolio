function Interests({ language }) {
  const isEnglish = language === "en"

  const content = {
    ar: {
      label: "MY_INTERESTS",
      title: "أشياء أحب أستكشفها",
      subtitle:
        "مساحات مختلفة تجمع بين التقنية والإبداع، وكل واحدة منها تضيف لي منظورًا جديدًا.",
    },

    en: {
      label: "MY_INTERESTS",
      title: "Things I love exploring",
      subtitle:
        "Different spaces where technology and creativity meet, each adding a new perspective to my journey.",
    },
  }

  const interests = [
    {
      number: "01",
      icon: "</>",
      ar: "البرمجة",
      en: "Programming",
      arDescription: "بناء الأفكار وتحويلها إلى تجارب ومشاريع حقيقية.",
      enDescription: "Turning ideas into real digital projects and experiences.",
      tag: "CODE",
    },
    {
      number: "02",
      icon: "◈",
      ar: "التصميم",
      en: "Design",
      arDescription: "أحب التفاصيل البصرية وصناعة واجهات جميلة وواضحة.",
      enDescription: "Creating thoughtful, beautiful and clear visual experiences.",
      tag: "DESIGN",
    },
    {
      number: "03",
      icon: "✦",
      ar: "الذكاء الاصطناعي",
      en: "Artificial Intelligence",
      arDescription: "أستكشف أدوات الذكاء الاصطناعي وكيف يمكن توظيفها بإبداع.",
      enDescription: "Exploring AI tools and how they can be used creatively.",
      tag: "AI",
    },
    {
      number: "04",
      icon: "⌁",
      ar: "الأمن السيبراني",
      en: "Cybersecurity",
      arDescription: "مجال يثير فضولي من الأنظمة إلى الأمن والتحديات التقنية.",
      enDescription: "Exploring systems, security and technical challenges.",
      tag: "CYBER",
    },
    {
      number: "05",
      icon: "▣",
      ar: "تطوير الويب",
      en: "Web Development",
      arDescription: "أستمتع ببناء مواقع تجمع بين الكود والتصميم والتفاعل.",
      enDescription: "Building websites where code, design and interaction meet.",
      tag: "WEB",
    },
    {
      number: "06",
      icon: "♡",
      ar: "الإبداع",
      en: "Creativity",
      arDescription: "التصوير وصناعة المحتوى والأفكار البصرية جزء من عالمي.",
      enDescription: "Photography, content and visual ideas are part of my world.",
      tag: "CREATE",
    },
  ]

  const c = content[language]

  return (
    <section
      id="interests"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Decorations */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <span className="absolute left-[7%] top-[16%] h-3 w-3 bg-[#5CA9DC]/50" />
        <span className="absolute right-[8%] top-[12%] h-5 w-5 bg-[#D8EFFF]" />
        <span className="absolute bottom-[15%] left-[10%] h-4 w-4 bg-[#FFC46B]/80" />
        <span className="absolute bottom-[10%] right-[12%] h-3 w-3 bg-[#5CA9DC]/40" />
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

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item, index) => (
            <article
              key={item.number}
              className="group relative min-h-[230px] overflow-hidden rounded-[24px] border border-[#A8D8F5]/55 bg-white/65 p-6 shadow-[0_12px_35px_rgba(47,131,189,0.07)] backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-[#5CA9DC] hover:bg-white hover:shadow-[0_18px_45px_rgba(47,131,189,0.14)]"
            >
              {/* Number */}
              <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.2em] text-[#5CA9DC]/60">
                {item.number}
              </span>

              {/* Pixel Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center border-2 border-[#5CA9DC] bg-[#EAF6FF] font-mono text-xl font-bold text-[#246B9E] shadow-[4px_4px_0_#D8EFFF] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-[-3deg]">
                {item.icon}

                <span className="absolute -right-1 -top-1 h-2 w-2 bg-[#FFC46B]" />
              </div>

              {/* Text */}
              <h3 className="mt-6 text-xl font-bold text-[#123D67]">
                {isEnglish ? item.en : item.ar}
              </h3>

              <p className="mt-2 max-w-[320px] text-sm leading-6 text-[#123D67]/60">
                {isEnglish
                  ? item.enDescription
                  : item.arDescription}
              </p>

              {/* Tag */}
              <div className="absolute bottom-5 right-5 font-mono text-[9px] tracking-[0.25em] text-[#5CA9DC]/45">
                {item.tag}
              </div>

              {/* Hover pixels */}
              <div className="absolute -bottom-3 -left-3 grid grid-cols-2 gap-1 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="h-4 w-4 bg-[#D8EFFF]" />
                <span className="h-4 w-4 bg-[#5CA9DC]/40" />
                <span className="h-4 w-4 bg-[#5CA9DC]/40" />
                <span className="h-4 w-4 bg-[#D8EFFF]" />
              </div>

              {/* tiny decoration */}
              {index === 0 && (
                <span className="absolute bottom-5 left-6 font-mono text-xs text-[#5CA9DC]/30">
                  {"{ }"}
                </span>
              )}
            </article>
          ))}
        </div>

        {/* Bottom tiny line */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-14 bg-[#A8D8F5]" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#5CA9DC]/60">
            KEEP EXPLORING
          </span>
          <span className="h-[1px] w-14 bg-[#A8D8F5]" />
        </div>
      </div>
    </section>
  )
}

export default Interests