function About({ language }) {
  const isEnglish = language === "en"

  const content = {
    ar: {
      eyebrow: "ABOUT_ME.exe",
      title: "أكثر من مجرد كود",
      subtitle: "أتعلم، أصمم، أجرّب.. وأحوّل الأفكار إلى شيء حقيقي.",
      paragraph1:
        "أنا حوراء سالم، طالبة علوم حاسب في جامعة نجران، أستمتع باستكشاف المساحة التي تجمع بين البرمجة والتصميم والإبداع.",
      paragraph2:
        "أحب بناء المشاريع والتجارب الرقمية، وتطوير مهاراتي في مجالات مختلفة من التقنية، من تطوير الويب والذكاء الاصطناعي إلى الأمن السيبراني وتصميم التجارب.",
      study: "علوم الحاسب",
      university: "جامعة نجران",
      focus: "تقنية × تصميم",
      status: "دائمًا أتعلم",
      quote: "كل مشروع جديد هو فرصة لأتعلم شيئًا جديدًا.",
    },

    en: {
      eyebrow: "ABOUT_ME.exe",
      title: "More than just code",
      subtitle: "I learn, design, experiment, and turn ideas into something real.",
      paragraph1:
        "I'm Hawra Salem, a Computer Science student at Najran University who enjoys exploring the space where programming, design and creativity meet.",
      paragraph2:
        "I love building digital projects and experiences while growing across different areas of technology, from web development and AI to cybersecurity and experience design.",
      study: "Computer Science",
      university: "Najran University",
      focus: "Tech × Design",
      status: "Always Learning",
      quote: "Every new project is a chance to learn something new.",
    },
  }

  const c = content[language]

  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* background pixels */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <span className="absolute left-[6%] top-[15%] h-4 w-4 bg-[#D8EFFF]" />
        <span className="absolute right-[8%] top-[20%] h-3 w-3 bg-[#5CA9DC]/50" />
        <span className="absolute bottom-[15%] left-[15%] h-3 w-3 bg-[#FFC46B]/80" />
        <span className="absolute bottom-[12%] right-[13%] h-5 w-5 bg-[#D8EFFF]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* section heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-[#5CA9DC]">
            <span className="h-2 w-2 bg-[#5CA9DC]" />
            {c.eyebrow}
          </div>

          <h2 className="text-4xl font-bold text-[#123D67] sm:text-5xl">
            {c.title}
            <span className="text-[#5CA9DC]">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#123D67]/60 sm:text-base">
            {c.subtitle}
          </p>
        </div>

        {/* two columns */}
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">

          {/* Pixel computer window */}
          <div className="relative mx-auto w-full max-w-[520px]">

            <div className="shadow-[9px_9px_0_#D8EFFF]">

              {/* window top */}
              <div className="flex h-12 items-center justify-between border border-[#A8D8F5] bg-[#EAF6FF] px-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 bg-[#FF9E9E]" />
                  <span className="h-3 w-3 bg-[#FFC46B]" />
                  <span className="h-3 w-3 bg-[#5CA9DC]" />
                </div>

                <span className="font-mono text-[11px] font-bold text-[#123D67]/60">
                  hawra.js
                </span>
              </div>

              {/* editor */}
              <div
                dir="ltr"
                className="min-h-[350px] border-x border-b border-[#A8D8F5] bg-[#123D67] p-6 font-mono text-xs leading-7 sm:text-sm"
              >
                <p>
                  <span className="text-[#A8D8F5]">const</span>{" "}
                  <span className="text-white">hawra</span>{" "}
                  <span className="text-[#FFC46B]">=</span>{" "}
                  <span className="text-white">{"{"}</span>
                </p>

                <p className="ps-5">
                  <span className="text-[#5CA9DC]">name:</span>{" "}
                  <span className="text-[#FFC9DD]">
                    "Hawra Salem"
                  </span>
                  ,
                </p>

                <p className="ps-5">
                  <span className="text-[#5CA9DC]">major:</span>{" "}
                  <span className="text-[#FFC9DD]">
                    "Computer Science"
                  </span>
                  ,
                </p>

                <p className="ps-5">
                  <span className="text-[#5CA9DC]">university:</span>{" "}
                  <span className="text-[#FFC9DD]">
                    "Najran University"
                  </span>
                  ,
                </p>

                <p className="ps-5">
                  <span className="text-[#5CA9DC]">loves:</span>{" "}
                  <span className="text-white">[</span>
                </p>

                <p className="ps-10 text-[#FFC9DD]">
                  "Code",
                </p>

                <p className="ps-10 text-[#FFC9DD]">
                  "Design",
                </p>

                <p className="ps-10 text-[#FFC9DD]">
                  "Creativity",
                </p>

                <p className="ps-5">
                  <span className="text-white">]</span>,
                </p>

                <p className="ps-5">
                  <span className="text-[#5CA9DC]">currently:</span>{" "}
                  <span className="text-[#FFC9DD]">
                    "building & learning"
                  </span>
                </p>

                <p className="text-white">
                  {"}"}
                  <span className="blink ms-1 inline-block h-4 w-2 bg-[#A8D8F5]" />
                </p>
              </div>
            </div>

            {/* floating label */}
            <div className="float absolute -bottom-5 -right-3 bg-white px-4 py-2 font-mono text-xs font-bold text-[#2F83BD] shadow-[4px_4px_0_#A8D8F5]">
              {"</about>"}
            </div>
          </div>

          {/* About text */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#5CA9DC]">
                02.
              </span>

              <span className="h-[1px] w-16 bg-[#A8D8F5]" />

              <span className="font-mono text-xs text-[#123D67]/40">
                who_am_i?
              </span>
            </div>

            <p className="text-base leading-8 text-[#123D67]/75 sm:text-lg">
              {c.paragraph1}
            </p>

            <p className="mt-4 text-base leading-8 text-[#123D67]/60">
              {c.paragraph2}
            </p>

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["01", c.study],
                ["02", c.university],
                ["03", c.focus],
                ["04", c.status],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="glass group rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-[#5CA9DC]/60 hover:bg-white"
                >
                  <span className="font-mono text-[10px] text-[#5CA9DC]">
                    {number}
                  </span>

                  <p className="mt-1 text-sm font-bold text-[#123D67] sm:text-base">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-6 flex gap-4 border-s-2 border-[#5CA9DC] bg-[#EAF6FF]/60 px-5 py-4">
              <span className="text-xl text-[#5CA9DC]">
                ✦
              </span>

              <p className="text-sm font-medium leading-6 text-[#123D67]/70">
                {c.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About