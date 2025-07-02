'use client';

interface Feature {
  title: string;
  description: string;
  img: string;
}

const features: Feature[] = [
  {
    title: 'Track Incomes & Expenses',
    description:
      'Create, view and filter all your financial transactions in one place—gain real-time insight into where every dollar is going.',
    img: 'Expenses.png',
  },
  {
    title: 'Visualize Financial Goals',
    description:
      'Set saving targets, see progress bars, and stay motivated by watching your goals come to life.',
    img: 'goals-chart.png',
  },
  {
    title: 'Modern Desktop Client',
    description:
      'A sleek Windows Forms app powered by Guna.UI2—everything in a single, polished desktop experience.',
    img: 'ui.png',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 md:px-20">
      <div className="max-w-screen-2xl mx-auto space-y-24">
        {features.map((f, i) => {
          const isEven = i % 2 === 1;
          return (
            <div
              key={f.title}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Image */}
              <div
                className={`w-full lg:w-6/12 ${
                  isEven ? 'lg:order-last' : ''
                } flex justify-center`}
              >
                <div className="rounded-2xl border border-[#1f2025] bg-[#112427] shadow-2xl drop-shadow-teal-glow overflow-visible">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="block w-auto max-w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-6/12 space-y-6">
                <h3 className="text-5xl font-bold text-white">{f.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}