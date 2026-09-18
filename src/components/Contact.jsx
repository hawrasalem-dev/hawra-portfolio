import { useState } from "react"
import avatar from "../assets/hawra-avatar.jpeg"

const FORM_ENDPOINT = "https://formspree.io/f/xwlpkdrd"

function Contact({ language }) {
  const isEnglish = language === "en"

  const [status, setStatus] = useState("idle")
  const [feedback, setFeedback] = useState("")

  const content = {
    ar: {
      label: "LET'S_CONNECT",
      title: "خلّنا نتواصل",
      subtitle:
        "تلقوني هنا، ويسعدني دائمًا التواصل ومشاركة الأفكار والتجارب الجديدة.",

      socialTitle: "حساباتي",
      socialSubtitle: "اضغط على الكرت للانتقال إلى الحساب",

      formTitle: "أرسل رسالة",
      email: "البريد الإلكتروني",
      emailPlaceholder: "example@email.com",
      subject: "الموضوع",
      subjectPlaceholder: "عن ماذا تريد التحدث؟",
      message: "الرسالة",
      messagePlaceholder: "اكتب رسالتك هنا...",

      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",

      success: "تم إرسال رسالتك بنجاح ✦",
      successSub: "وصلت الرسالة، شكرًا لتواصلك.",
      error: "تعذر إرسال الرسالة. حاولي مرة أخرى.",
    },

    en: {
      label: "LET'S_CONNECT",
      title: "Let's connect",
      subtitle:
        "You can find me here. I'm always happy to connect, share ideas and explore new experiences.",

      socialTitle: "Find me online",
      socialSubtitle: "Click a card to visit my account",

      formTitle: "Send a message",
      email: "Email",
      emailPlaceholder: "example@email.com",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      message: "Message",
      messagePlaceholder: "Write your message here...",

      send: "Send Message",
      sending: "Sending...",

      success: "Your message was sent successfully ✦",
      successSub: "Message received. Thank you for reaching out.",
      error: "Something went wrong. Please try again.",
    },
  }

  const c = content[language]

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus("sending")
    setFeedback("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        setFeedback(c.success)
        form.reset()
        return
      }

      const data = await response.json().catch(() => null)

      let errorMessage = c.error

      if (data?.errors?.length) {
        errorMessage = data.errors
          .map((error) => error.message)
          .join(" ")
      }

      setStatus("error")
      setFeedback(errorMessage)
    } catch {
      setStatus("error")
      setFeedback(c.error)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#EAF6FF]/45 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <span className="absolute left-[6%] top-[14%] h-4 w-4 bg-[#5CA9DC]/40" />
        <span className="absolute right-[8%] top-[18%] h-3 w-3 bg-[#FFC46B]" />
        <span className="absolute bottom-[13%] left-[11%] h-3 w-3 bg-[#D8EFFF]" />
        <span className="absolute bottom-[18%] right-[9%] h-4 w-4 bg-[#5CA9DC]/30" />
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

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* SOCIALS */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#123D67]">
                {c.socialTitle}
              </h3>

              <p className="mt-2 text-sm text-[#123D67]/50">
                {c.socialSubtitle}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

              {/* X */}
              <a
                href="https://x.com/0hxull?s=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hawra on X"
                className="group relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#A8D8F5]/70 bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(47,131,189,0.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#5CA9DC] hover:shadow-[0_22px_55px_rgba(47,131,189,0.16)]"
              >
                <div className="absolute left-5 top-5 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF9E9E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFC46B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5CA9DC]" />
                </div>

                <span className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.15em] text-[#5CA9DC]/45">
                  01
                </span>

                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-[#D8EFFF] transition duration-300 group-hover:scale-110" />

                  <div className="relative h-36 w-36 overflow-hidden rounded-full border-[5px] border-white shadow-[0_12px_30px_rgba(18,61,103,0.16)]">
                    <img
                      src={avatar}
                      alt="Hawra avatar"
                      className="pixel h-full w-full object-cover"
                    />
                  </div>

                  <span className="absolute -right-2 top-5 h-4 w-4 bg-[#FFC46B]" />
                  <span className="absolute -bottom-1 left-2 h-3 w-3 bg-[#5CA9DC]" />
                </div>

                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123D67] font-sans text-2xl font-bold text-white shadow-[4px_4px_0_#A8D8F5] transition duration-300 group-hover:scale-110">
                  𝕏
                </div>

                <span className="absolute bottom-5 right-5 text-lg text-[#5CA9DC] opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  ↗
                </span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/uxzvll"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hawra on Telegram"
                className="group relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#A8D8F5]/70 bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(47,131,189,0.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#5CA9DC] hover:shadow-[0_22px_55px_rgba(47,131,189,0.16)]"
              >
                <div className="absolute left-5 top-5 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF9E9E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFC46B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5CA9DC]" />
                </div>

                <span className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.15em] text-[#5CA9DC]/45">
                  02
                </span>

                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-[#D8EFFF] transition duration-300 group-hover:scale-110" />

                  <div className="relative h-36 w-36 overflow-hidden rounded-full border-[5px] border-white shadow-[0_12px_30px_rgba(18,61,103,0.16)]">
                    <img
                      src={avatar}
                      alt="Hawra avatar"
                      className="pixel h-full w-full object-cover"
                    />
                  </div>

                  <span className="absolute -left-2 top-6 h-4 w-4 bg-[#5CA9DC]" />
                  <span className="absolute -bottom-1 right-3 h-3 w-3 bg-[#FFC46B]" />
                </div>

                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#5CA9DC] text-2xl font-bold text-white shadow-[4px_4px_0_#D8EFFF] transition duration-300 group-hover:scale-110">
                  ➤
                </div>

                <span className="absolute bottom-5 right-5 text-lg text-[#5CA9DC] opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="overflow-hidden rounded-[28px] border border-[#A8D8F5]/60 bg-white/80 shadow-[0_18px_50px_rgba(47,131,189,0.09)] backdrop-blur-xl">

            {/* Window header */}
            <div className="flex items-center justify-between border-b border-[#A8D8F5]/50 bg-[#F5FBFF] px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF9E9E]" />
                <span className="h-3 w-3 rounded-full bg-[#FFC46B]" />
                <span className="h-3 w-3 rounded-full bg-[#5CA9DC]" />
              </div>

              <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#123D67]/45">
                NEW_MESSAGE
              </span>

              <span className="text-[#5CA9DC]">✦</span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8"
            >
              <h3 className="mb-7 text-2xl font-bold text-[#123D67]">
                {c.formTitle}
              </h3>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-bold text-[#123D67]"
                >
                  {c.email}
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={c.emailPlaceholder}
                  className="w-full rounded-xl border border-[#A8D8F5]/70 bg-[#F5FBFF] px-4 py-3 text-sm text-[#123D67] outline-none transition placeholder:text-[#123D67]/30 focus:border-[#5CA9DC] focus:ring-4 focus:ring-[#D8EFFF]/70"
                />
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-bold text-[#123D67]"
                >
                  {c.subject}
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  maxLength="150"
                  placeholder={c.subjectPlaceholder}
                  className="w-full rounded-xl border border-[#A8D8F5]/70 bg-[#F5FBFF] px-4 py-3 text-sm text-[#123D67] outline-none transition placeholder:text-[#123D67]/30 focus:border-[#5CA9DC] focus:ring-4 focus:ring-[#D8EFFF]/70"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-[#123D67]"
                >
                  {c.message}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength="5000"
                  rows="8"
                  placeholder={c.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-[#A8D8F5]/70 bg-[#F5FBFF] px-4 py-3 text-sm leading-6 text-[#123D67] outline-none transition placeholder:text-[#123D67]/30 focus:border-[#5CA9DC] focus:ring-4 focus:ring-[#D8EFFF]/70"
                />
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  role="status"
                  className={`mt-6 rounded-xl border px-4 py-4 ${
                    status === "success"
                      ? "border-[#8ED3B1] bg-[#EFFBF5] text-[#267A55]"
                      : "border-[#FFB3B3] bg-[#FFF4F4] text-[#A54848]"
                  }`}
                >
                  <p className="text-sm font-bold">
                    {feedback}
                  </p>

                  {status === "success" && (
                    <p className="mt-1 text-xs opacity-70">
                      {c.successSub}
                    </p>
                  )}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#123D67] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(18,61,103,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#246B9E] disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    {c.sending}
                  </>
                ) : (
                  <>
                    {c.send}
                    <span>→</span>
                  </>
                )}
              </button>

              <p className="mt-4 text-center font-mono text-[9px] tracking-[0.1em] text-[#123D67]/35">
                SECURE CONTACT • FORMSPREE
              </p>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-[#A8D8F5]/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <a
              href="#home"
              className="font-mono text-xl font-black text-[#123D67]"
            >
              Hawra<span className="text-[#5CA9DC]">.</span>
            </a>

            <p className="text-center font-mono text-[10px] tracking-[0.12em] text-[#123D67]/45">
              {isEnglish
                ? "DESIGNED & BUILT BY HAWRA SALEM"
                : "صُمم وطُوّر بواسطة حوراء سالم"}
            </p>

            <a
              href="#home"
              className="flex h-10 w-10 items-center justify-center border border-[#5CA9DC] bg-white font-mono text-[#246B9E] shadow-[3px_3px_0_#D8EFFF] transition hover:-translate-y-1"
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact