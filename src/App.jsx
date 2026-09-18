import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { translations } from "./data/translations"
import About from "./components/About"
import Interests from "./components/Interests"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Journey from "./components/Journey"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
function App() {
  const [language, setLanguage] = useState("ar")

  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5FBFF]">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main>
        <Hero t={t} />
        <About language={language} />
        <Interests language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Journey language={language} />
        <Achievements language={language} />
        <Contact language={language} />
      </main>
    </div>
  )
}

export default App