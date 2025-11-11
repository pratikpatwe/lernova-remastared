"use client"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white pt-24 pb-16 px-6 md:px-12 flex flex-col items-center justify-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">Transform Learning</h1>

        {/* Subheading with Momo Signature font */}
        <div className="mb-6">
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FF5F02] to-[#FF7A2B] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-momo-signature), serif" }}
          >
            with Lernova
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Effortlessly manage learning progress,
          <br />
          enhancing engagement and student success.
        </p>

        {/* CTA Button */}
        <button className="bg-[#FF5F02] hover:bg-[#E54E00] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 mb-16 shadow-lg hover:shadow-xl hover:cursor-pointer">
          Get Started
        </button>

        {/* Screenshot with curved corners */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/learning-management-system-dashboard-with-charts-a.jpg"
              alt="Lernova LMS Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
