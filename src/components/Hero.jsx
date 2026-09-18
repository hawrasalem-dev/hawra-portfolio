import BackgroundElements from "./BackgroundElements"
import avatar from "../assets/hawra-avatar.jpeg"

function PixelCat({ className = "" }) {
  return (
    <div
      className={`relative h-12 w-12 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-[6px] top-[7px] h-[9px] w-[9px] rotate-45 border-l-[3px] border-t-[3px] border-[#123D67] bg-white" />
      <div className="absolute right-[6px] top-[7px] h-[9px] w-[9px] rotate-45 border-r-[3px] border-t-[3px] border-[#123D67] bg-white" />

      <div className="absolute inset-x-[5px] bottom-[4px] top-[10px] rounded-[8px] border-[3px] border-[#123D67] bg-white shadow-[3px_3px_0_#A8D8F5]">
        <span className="absolute left-[8px] top-[11px] h-[4px] w-[4px] bg-[#123D67]" />
        <span className="absolute right-[8px] top-[11px] h-[4px] w-[4px] bg-[#123D67]" />

        <span className="absolute left-[4px] top-[16px] h-[5px] w-[5px] bg-[#FF9E9E]" />
        <span className="absolute right-[4px] top-[16px] h-[5px] w-[5px] bg-[#FF9E9E]" />

        <span className="absolute left-1/2 top-[17px] h-[3px] w-[3px] -translate-x-1/2 bg-[#123D67]" />
      </div>
    </div>
  )
}

function Hero({ t }) {
  const isEnglish = document.documentElement.lang === "en"

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-14 pt-28 sm:px-7 md:px-8 lg:px-12 lg:pt-32"
    >
      <BackgroundElements />

      {/* MAIN HERO */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-8 md:grid-cols-[0.92fr_1.08fr] lg:gap-14">

        {/* =========================
            TEXT SIDE
        ========================== */}
        <div className="order-2 md:order-1">

          {/* Greeting */}
          <div className="mb-5 flex items-center gap-4 lg:mb-7">
            <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2.5 shadow-[0_8px_25px_rgba(47,131,189,0.10)] lg:px-5 lg:py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5CA9DC]" />

              <span className="whitespace-nowrap text-xs font-semibold text-[#123D67] lg:text-sm">
                {t.hero.greeting}
              </span>
            </div>

            <PixelCat className="float" />
          </div>

          {/* Main Heading */}
          <h1 className="max-w-[650px] text-3xl font-bold leading-[1.35] text-[#123D67] sm:text-4xl lg:text-[58px]">
            {t.hero.title}
          </h1>

          {/* Blue Heading */}
          <h2 className="mt-2 max-w-[650px] text-3xl font-bold leading-[1.35] text-[#5CA9DC] sm:text-4xl lg:mt-3 lg:text-[55px]">
            {t.hero.highlight}
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[590px] text-sm leading-7 text-[#123D67]/70 lg:mt-7 lg:text-base lg:leading-8">
            {t.hero.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2 lg:mt-7 lg:gap-3">
            {[
              ["</>", "برمجة", "Code"],
              ["◉", "تصميم", "Design"],
              ["⚙", "تقنية", "Tech"],
              ["✦", "إبداع", "Creative"],
            ].map(([icon, ar, en]) => (
              <div
                key={en}
                className="glass flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-[#123D67] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#5CA9DC]/50 lg:px-4 lg:text-sm"
              >
                <span className="text-[#2F83BD]">{icon}</span>
                {isEnglish ? en : ar}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3 lg:mt-8 lg:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#246B9E] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(36,107,158,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-[#123D67] lg:px-7 lg:py-4 lg:text-base"
            >
              {t.hero.projectsButton}

              <span className="transition duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </a>

            <a
              href="#about"
              className="glass inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-bold text-[#123D67] transition duration-300 hover:-translate-y-1 hover:bg-white lg:px-7 lg:py-4 lg:text-base"
            >
              <span>♙</span>
              {t.hero.aboutButton}
            </a>
          </div>

          {/* Terminal */}
          <div className="relative mt-9 w-full max-w-[300px] lg:mt-12 lg:max-w-[315px]">
            <div className="pixel-shadow border border-[#5CA9DC]/40 bg-[#164F7D] p-4 font-mono text-[11px] leading-6 text-white shadow-[7px_7px_0_#A8D8F5] lg:text-[12px]">
              <p className="text-[#D8EFFF]">
                Currently exploring..
              </p>

              <p>&gt; AI</p>
              <p>&gt; Creative Technology</p>

              <p>
                &gt; A better me ...
                <span className="blink ms-1 inline-block h-3 w-2 bg-[#A8D8F5]" />
              </p>
            </div>

            <PixelCat className="absolute -bottom-7 -right-7 scale-75" />
          </div>
        </div>

        {/* =========================
            AVATAR SIDE
        ========================== */}
        <div className="order-1 flex min-w-0 justify-center md:order-2">
          <div className="relative w-full max-w-[520px]">

            {/* Code Bubble */}
            <div className="float absolute right-0 top-[9%] z-30 border-2 border-[#5CA9DC] bg-white px-3 py-2 font-mono text-[10px] font-bold text-[#123D67] shadow-[4px_4px_0_#D8EFFF] sm:px-4 sm:text-xs lg:px-5 lg:py-3 lg:text-sm">
              {"< code />"}

              <span className="absolute -bottom-[8px] right-6 h-3.5 w-3.5 rotate-45 border-b-2 border-r-2 border-[#5CA9DC] bg-white" />
            </div>

            {/* Avatar */}
            <div className="relative mx-auto aspect-square w-[88%] max-w-[500px]">

              {/* Blue circle */}
              <div className="absolute inset-0 rounded-full bg-[#8CC9EB] shadow-[0_30px_70px_rgba(47,131,189,0.18)]" />

              {/* Image */}
              <div className="absolute inset-[7px] overflow-hidden rounded-full border-[5px] border-white shadow-[0_15px_45px_rgba(18,61,103,0.15)]">
                <img
                  src={avatar}
                  alt="Hawra pixel art avatar"
                  className="pixel h-full w-full object-cover"
                />
              </div>

              {/* Pixel Decorations */}
              <span className="absolute -left-3 top-[26%] h-3 w-3 bg-[#5CA9DC] lg:h-4 lg:w-4" />

              <span className="absolute left-[9%] top-[8%] h-3 w-3 bg-[#FFC46B]" />

              <span className="absolute -right-2 bottom-[26%] h-3 w-3 bg-[#D8EFFF] lg:h-4 lg:w-4" />

              <span className="absolute right-[4%] top-[28%] h-2.5 w-2.5 bg-[#5CA9DC]" />

              {/* Signature */}
              <div className="absolute -bottom-5 right-[4%] rotate-[-8deg] font-serif text-4xl italic text-[#5CA9DC] sm:text-5xl lg:text-6xl">
                Hawra
                <span className="ms-1 text-xl lg:text-2xl">♥</span>
              </div>
            </div>

            {/* Exploring Card */}
            <div className="glass relative mx-auto mt-12 flex max-w-[430px] items-center justify-between gap-4 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(47,131,189,0.10)] lg:mt-16 lg:px-5 lg:py-4">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-[#2F83BD] lg:text-xs">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5CA9DC]" />
                  {t.hero.exploring}
                </div>

                <p className="mt-1 text-xs font-bold text-[#123D67] lg:text-base">
                  {t.hero.exploringTopics}
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#5CA9DC] text-lg text-white shadow-md lg:h-10 lg:w-10 lg:text-xl">
                →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM DETAILS
      ========================== */}
      <div className="relative z-10 mx-auto mt-12 flex max-w-[1400px] items-end justify-between pb-4 text-[#5CA9DC] lg:mt-16">

        {/* Left detail */}
        <div className="hidden items-end gap-4 md:flex">
          <div className="text-4xl">♧</div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span>♡</span>

              <span className="inline-block w-24 border-t-2 border-dotted border-[#5CA9DC]/50 lg:w-32" />
            </div>

            <p className="font-mono text-[9px] tracking-[0.3em] text-[#2F83BD]/60 lg:text-[10px]">
              SMALL STEPS
              <br />
              BIG PROGRESS
            </p>
          </div>
        </div>

        {/* Scroll */}
        <a
          href="#about"
          className="mx-auto flex flex-col items-center gap-1 text-xs font-semibold text-[#2F83BD]/70 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <div className="flex h-9 w-6 justify-center rounded-full border-2 border-[#2F83BD] pt-1">
            <span className="h-2 w-1 rounded-full bg-[#2F83BD]" />
          </div>

          <span>
            {isEnglish ? "Scroll down" : "مرر للأسفل"}
          </span>

          <span className="text-lg">⌄</span>
        </a>

        {/* Right detail */}
        <div className="hidden font-mono text-[9px] tracking-[0.45em] text-[#2F83BD]/50 md:block lg:text-[10px]">
          01 . 01 . 01 ...
        </div>
      </div>
    </section>
  )
}

export default Hero