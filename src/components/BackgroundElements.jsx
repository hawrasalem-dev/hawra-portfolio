function BackgroundElements() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* pixel corners */}
      <div className="absolute left-0 top-28 h-5 w-5 bg-[#D8EFFF]" />
      <div className="absolute left-5 top-24 h-3 w-3 bg-[#5CA9DC]" />

      <div className="absolute right-[7%] top-[17%] h-4 w-4 bg-[#D8EFFF]" />
      <div className="absolute right-[12%] top-[25%] h-3 w-3 bg-[#5CA9DC]" />

      <div className="absolute left-[46%] top-[22%] h-4 w-4 bg-[#5CA9DC]" />
      <div className="absolute left-[49%] top-[29%] h-3 w-3 bg-[#D8EFFF]" />

      <div className="absolute bottom-[22%] left-[4%] h-5 w-5 bg-[#D8EFFF]" />
      <div className="absolute bottom-[31%] left-[51%] h-3 w-3 bg-[#5CA9DC]" />

      <div className="absolute bottom-[18%] right-[9%] h-4 w-4 bg-[#5CA9DC]" />

      {/* orange accent pixels */}
      <div className="float absolute right-[18%] top-[18%] h-3 w-3 bg-[#FFC46B]" />
      <div className="float-slow absolute bottom-[25%] right-[36%] h-4 w-4 bg-[#FFC46B]" />

      {/* soft pixel decorations */}
      <div className="absolute -left-3 bottom-24 grid grid-cols-3 gap-1 opacity-40">
        <div className="h-8 w-8 bg-[#D8EFFF]" />
        <div className="h-8 w-8 bg-[#D8EFFF]" />
        <div />
        <div />
        <div className="h-8 w-8 bg-[#D8EFFF]" />
        <div />
      </div>

      <div className="absolute -right-4 top-44 grid grid-cols-2 gap-1 opacity-40">
        <div className="h-8 w-8 bg-[#D8EFFF]" />
        <div />
        <div className="h-8 w-8 bg-[#D8EFFF]" />
        <div className="h-8 w-8 bg-[#D8EFFF]" />
      </div>

      <div className="absolute bottom-[7%] right-[12%] font-mono text-xs tracking-[0.6em] text-[#5CA9DC]/50">
        01 . 01 . 01 ...
      </div>
    </div>
  )
}

export default BackgroundElements