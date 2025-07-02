'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050B0C] border-t border-[#1f2025] py-12 px-6 md:px-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">FinSync</h2>
          <p className="text-gray-400">
            A modern desktop finance manager—track your income, expenses, and
            financial goals in a single polished app.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#features" className="text-gray-400 hover:text-teal-400 transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-400 hover:text-teal-400 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/download" className="text-gray-400 hover:text-teal-400 transition">
                Download
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <p className="text-gray-400">Email us at <a href="mailto:support@finsync.com" className="text-teal-400 hover:underline">support@finsync.com</a></p>
          <div className="flex items-center gap-4">
            {/* Replace hrefs with real social links */}
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-teal-400 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.15a4.92 4.92 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616v.062a4.92 4.92 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 4.93 4.93 0 0 0 4.604 3.417A9.868 9.868 0 0 1 .96 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.016 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.59z"/></svg>
            </a>
            <a href="https://github.com/tigokraft/PSI1623R_TiagoOliveira_2223234" aria-label="GitHub" className="text-gray-400 hover:text-teal-400 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297a12 12 0 0 0-3.802 23.412c.6.111.82-.261.82-.577v-2.234c-3.338.725-4.042-1.61-4.042-1.61a3.186 3.186 0 0 0-1.335-1.756c-1.089-.745.084-.73.084-.73a2.528 2.528 0 0 1 1.845 1.243 2.56 2.56 0 0 0 3.494.998 2.56 2.56 0 0 1 .764-1.605c-2.665-.306-5.467-1.332-5.467-5.932a4.63 4.63 0 0 1 1.234-3.214 4.305 4.305 0 0 1 .117-3.176s1.005-.322 3.3 1.23a11.46 11.46 0 0 1 6 0c2.292-1.553 3.296-1.23 3.296-1.23a4.305 4.305 0 0 1 .12 3.176 4.62 4.62 0 0 1 1.232 3.214c0 4.61-2.805 5.624-5.475 5.922a2.872 2.872 0 0 1 .818 2.223v3.293c0 .319.218.694.826.576A12.003 12.003 0 0 0 12 .297Z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-[#1f2025] pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FinSync. All rights reserved.
      </div>
    </footer>
  );
}
