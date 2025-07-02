'use client';

export default function Hero() {
  return (
    <section
      className="
        relative h-screen overflow-hidden flex items-center
        bg-gradient-to-br from-[#0b0d0f] to-[#131d25]
        px-6 md:px-20
      "
    >
      {/* TEXT BLOCK */}
      <div className="w-full lg:w-5/12">
        <h1 className="text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
          Manage your <br /> finances with ease
        </h1>
        <p className="text-gray-500 text-xl leading-snug mb-8">
          Track expenses, set financial goals,<br />
          and make informed decisions with FinSync.
        </p>
        <a
          href="/download"
          className="
            inline-block bg-teal-500 hover:bg-teal-600 text-white
            font-semibold rounded-full px-8 py-4 transition-shadow
          "
        >
          Get Started
        </a>
      </div>

      {/* IMAGE PREVIEW */}
      <div className="hidden lg:block lg:w-7/12 relative h-full">
        <img
          src="/landing.png"
          alt="FinSync app preview"
          className="
            absolute top-1/2 right-0 w-[950px] max-w-none
            -translate-y-1/2 translate-x-1/4
            rounded-2xl shadow-2xl drop-shadow-teal-glow
            border border-[#1f2025]
          "
        />
      </div>
    </section>
  );
}
