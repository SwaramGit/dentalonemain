import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="container-px flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
  <Image src="/logo.jpeg" alt="Logo" width={36} height={36} className="rounded-md cursor-pointer" />
  <span className="font-extrabold tracking-tight">Dental One</span>
</Link>

          </div>
          <nav className="flex items-center gap-5 font-semibold text-sm">
            <Link href="/about-us" className="hover:text-sky-600">About</Link>
            <Link href="/services" className="hover:text-sky-600">Services</Link>
            <Link href="/what-we-offer" className="hover:text-sky-600">What We Offer</Link>
            <Link href="/faq" className="hover:text-sky-600">FAQ</Link>
            <Link href="/contact-us" className="hover:text-sky-600">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="container-px py-10">{children}</main>
      <footer className="border-t border-gray-100 mt-8">
        <div className="container-px py-8 text-sm text-gray-600 text-center">
  <div className="space-x-4 mb-2">
    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
    <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
    <Link href="/contact-us" className="hover:underline">Contact Us</Link>
  </div>
  <p>© {new Date().getFullYear()} Dental One. All rights reserved.</p>
</div>

      </footer>
    </div>
  );
}
