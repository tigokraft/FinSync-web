'use client';

export default function GoalsSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-transparent">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Image/Chart */}
        <div className="lg:col-span-7">
          <div className="bg-[#111827] border border-[#1f2025] rounded-2xl shadow-2xl drop-shadow-teal-glow overflow-hidden">
            <img
              src="/goals-chart.png"
              alt="Goals chart preview"
              className="w-full"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="lg:col-span-5">
          <h2 className="text-5xl font-bold text-white mb-4">
            Visualize your financial goals
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Set, track, and achieve your financial goals. Stay motivated and
            visually monitor your progress as you work towards your objectives.
          </p>
          <a
            href="/download"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full px-8 py-3 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
