import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="bg-white-50 flex flex-col min-h-screen justify-between items-center text-center">
      <Head>
        <title>Contact Us – Dental One</title>
        <meta name="description" content="Get in touch with Dental One for support, inquiries, or appointments." />
        <meta name="keywords" content="Dental One contact, dental support, customer service, dental clinic contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="mt-8">
        <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 my-16 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg">📧 <a href="mailto:info@gabucandentistry.com" className="underline text-gray-600">info@gabucandentistry.com</a></p>
        <p className="text-lg">📞 <a href="tel:+14089458880" className="underline text-gray-600">+1 408 945 8880</a></p>
      </div>
      <Link href="/" className="text-blue-600 underline">← Back to Home</Link>
      <footer className="mb-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
          <Link href="/contact-us" className="underline hover:text-blue-600">Contact Us</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms-and-conditions" className="underline hover:text-blue-600">Terms and Conditions</Link>
        </div>
      </footer>
    </div>
  );
}
