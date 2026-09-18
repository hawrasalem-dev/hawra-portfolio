import { useState } from "react"

function Navbar({ language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.interests, href: "#interests" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.achievements, href: "#achievements" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const changeLanguage = () => {
    const newLanguage = language === "ar" ? "en" : "ar"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    setMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between rounded-[24px] border border-[#A8D8F5]/60 bg-white/75 px-5 shadow-[0_10px_35px_rgba(47,131,189,0.10)] backdrop-blur-xl lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group shrink-0 font-mono text-xl font-black tracking-tight text-[#123D67] sm:text-2xl"
        >
          Hawra
          <span className="text-[#5CA9DC]">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-sm font-semibold text-[#123D67]/80 transition hover:text-[#123D67]"
            >
              {link.label}

              <span
                className={`absolute -bottom-1 left-1/2 h-1 -translate-x-1/2 rounded-full bg-[#5CA9DC] transition-all duration-300 ${
                  index === 0
                    ? "w-1"
                    : "w-0 group-hover:w-1"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex shrink-0 items-center gap-2">

          {/* Theme switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="hidden h-10 items-center gap-1 rounded-full border border-[#A8D8F5] bg-[#F5FBFF] p-1 sm:flex"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition ${
                !darkMode
                  ? "bg-white text-[#2F83BD] shadow-sm"
                  : "text-[#5CA9DC]"
              }`}
            >
              ☼
            </span>

            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition ${
                darkMode
                  ? "bg-[#D8EFFF] text-[#123D67] shadow-sm"
                  : "text-[#5CA9DC]"
              }`}
            >
              ☾
            </span>
          </button>

          {/* Language */}
          <button
            onClick={changeLanguage}
            className="h-10 min-w-[58px] rounded-xl bg-[#5CA9DC] px-3 text-sm font-bold text-white shadow-[0_5px_15px_rgba(92,169,220,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F83BD]"
          >
            {t.nav.language}
          </button>

          {/* Mobile / tablet menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A8D8F5]/70 bg-[#F5FBFF] text-lg font-bold text-[#123D67] xl:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1400px] xl:hidden">
          <div className="ml-auto w-full max-w-[350px] rounded-[22px] border border-[#A8D8F5]/60 bg-white/95 p-3 shadow-[0_15px_40px_rgba(18,61,103,0.12)] backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[#123D67] transition hover:bg-[#EAF6FF] hover:text-[#2F83BD]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar