// app/download/page.tsx
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Download FinSync',
  description: 'Get the FinSync desktop app for Windows or macOS',
};

export default function DownloadPage() {
  return (
    <div>
        <section className="min-h-screen flex items-center justify-center bg-transparent px-6 md:px-20">
          <div className="max-w-screen-md w-full text-center space-y-8">
            <h1 className="text-5xl font-bold text-white">Download FinSync</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Choose your platform below to get started:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="https://github.com/tigokraft/PSI1623R_TiagoOliveira_2223234/releases/download/Beta11/FinSync-Setup.msi"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base px-8 py-3 rounded-full transition"
              >
                Download for Windows
              </Link>
              <Link
                href="https://github.com/tigokraft/PSI1623R_TiagoOliveira_2223234/releases/download/Beta11/FinSync-Setup.msi"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base px-8 py-3 rounded-full transition"
              >
                Download for macOS
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Once downloaded, run the installer and follow the prompts to install FinSync on your desktop.
            </p>
          </div>
        </section>
        <Footer />
    </div>
  );
}
