'use client';

import { useState } from 'react';

type Plan = {
  name: string;
  monthly: string;
  annual: string | null;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Basic',
    monthly: 'Free',
    annual: 'Still Free',
    features: [
      'Track income and expenses',
      'Set financial goals',
      'Community support',
      'Custom categories',
    ],
  },
  {
    name: 'Pro',
    monthly: '$9.99/mo',
    annual: '$99.99/yr - 27% off',
    features: [
      'All features of Basic',
      'Advanced budgeting tools',
      'AI overview',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: 'Contact us',
    annual: null,
    features: [
      'All features of Pro',
      'Collaboration features',
      'Dedicated account manager',
      'Dedicated enterprise management',
      'Premium support',
    ],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 md:px-20">
      {/* Header & Toggle */}
      <div className="max-w-screen-2xl mx-auto text-center mb-12 space-y-4">
        <h2 className="text-5xl font-bold text-white">
          Choose the right plan for you
        </h2>
        <div className="flex justify-center items-center gap-4 text-gray-400">
          <span className={!annual ? 'text-white font-semibold' : ''}>
            Billed Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle billing period"
            className={`relative w-12 h-6 rounded-full transition-colors ${
              annual ? 'bg-teal-500' : 'bg-gray-700'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                annual ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={annual ? 'text-white font-semibold' : ''}>
            Billed Yearly
          </span>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="max-w-screen-2xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => {
          const isContact = plan.name === 'Enterprise';
          const price = isContact
            ? plan.monthly
            : annual && plan.annual
            ? plan.annual
            : plan.monthly;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl bg-[#112427] border ${
                plan.highlighted ? 'border-teal-500' : 'border-[#1f2025]'
              } shadow-2xl drop-shadow-teal-glow`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 right-6 bg-teal-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded">
                  Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-white mb-6">{price}</p>
              <ul className="space-y-3 mb-8 text-gray-300 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start">
                    <span className="mt-1 mr-2 text-teal-400">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href={isContact ? '/contact' : '/download'}
                className={`text-base font-semibold px-6 py-3 rounded-full text-center transition ${
                  plan.highlighted
                    ? 'bg-teal-500 hover:bg-teal-600 text-white'
                    : 'bg-transparent border border-gray-700 text-gray-300 hover:border-teal-500 hover:text-white hover:bg-teal-500'
                }`}
              >
                {isContact ? 'Contact us' : 'Get Started'}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}