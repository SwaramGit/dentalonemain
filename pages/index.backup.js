import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white-50 flex flex-col min-h-screen justify-between items-center text-center">
      <Head>
        <title>Dental One – App Landing Page</title>
        <meta name="description" content="Dental One's official mobile app for managing appointments, dental records, and communication with your clinic." />
        <meta name="keywords" content="Dental One, dental app, dentist appointment, dental care, clinic app, patient portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="mt-8">
        <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
      </div>

      <div className="flex justify-center items-center gap-8 my-16">
        <Image src="/app.png" alt="App Icon 1" width={240} height={60} />
        <Image src="/play.png" alt="App Icon 2" width={240} height={60} />
      </div>

      <footer className="mb-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
          <Link href="/contact-us" className="underline hover:text-blue-600">Contact Us</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms-and-conditions" className="underline hover:text-blue-600">Terms and Conditions</Link>
        </div>
      </footer>
    

      <section className="section">
        <h2>Quick Links</h2>
        <p className="small">Jump into the key pages:</p>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/what-we-offer">What We Offer</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </section>

    </div>
  );
}
