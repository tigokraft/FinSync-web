'use client';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-6 md:px-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">FinSync</div>

        {/* Links */}
        <ul className="flex items-center gap-6 md:gap-12 text-base font-medium">
          <li>
            <a href="#features" scroll={false} className="text-white hover:text-teal-300 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" scroll={false} className="text-white hover:text-teal-300 transition">
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/download"
              className="bg-teal-500 hover:bg-teal-600 text-white text-base font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full transition"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
