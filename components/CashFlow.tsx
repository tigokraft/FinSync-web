'use client';

export default function CashFlow() {
  return (
    <section className="py-24 px-6 md:px-20 bg-transparent">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & CTA */}
        <div className="lg:col-span-5">
          <h2 className="text-5xl font-bold text-white mb-4">
            Monitor your cash flow
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Easily track your income and expenses to stay on top of your cash
            flow and make budget-driven decisions.
          </p>
          <a
            href="/download"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full px-8 py-3 transition"
          >
            Get Started
          </a>
        </div>

        {/* Right: Table Preview */}
        <div className="lg:col-span-7">
          <div className="bg-[#112427] border border-[#1f2025] rounded-2xl shadow-2xl drop-shadow-teal-glow overflow-hidden">
            {/* Top: Incomes Table */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-semibold text-lg">
                  Incomes
                </span>
                <button className="text-gray-400 text-sm hover:text-white transition">
                  Preview
                </button>
              </div>
              <table className="w-full text-left text-gray-300 text-sm">
                <thead>
                  <tr>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Source</th>
                    <th className="pb-2">Description</th>
                    <th className="pb-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-t border-[#2a2d32] pt-2">
                    <td className="py-2">Jun 23</td>
                    <td className="py-2">Faul Brack</td>
                    <td className="py-2">Processing</td>
                    <td className="py-2">$3,400</td>
                  </tr>
                  <tr className="border-t border-[#2a2d32]">
                    <td className="py-2">May 12</td>
                    <td className="py-2">Current Collart</td>
                    <td className="py-2">Revenues</td>
                    <td className="py-2">$400</td>
                  </tr>
                  <tr className="border-t border-[#2a2d32]">
                    <td className="py-2">Aug 24</td>
                    <td className="py-2">Frank-Bernettis</td>
                    <td className="py-2">Purchases</td>
                    <td className="py-2">$300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom: Metrics Cards */}
            <div className="flex flex-col md:flex-row divide-y md:divide-x divide-[#2a2d32]">
              <div className="flex-1 p-6 flex items-center justify-between">
                <span className="text-gray-400">Expenses</span>
                <span className="text-white font-semibold text-2xl">
                  23,398
                </span>
              </div>
              <div className="flex-1 p-6 flex items-center justify-between">
                <span className="text-gray-400">Takeaway</span>
                <span className="text-teal-400 font-semibold text-2xl">
                  20.10%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
