import Head from 'next/head';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen px-6 py-12 max-w-3xl mx-auto text-gray-800">
      <Head>
        <title>Privacy Policy – Dental One</title>
        <meta name="description" content="Review Dental One's privacy policy to understand how we collect, use, and protect your personal and health data." />
        <meta name="keywords" content="Dental One privacy, patient data protection, healthcare privacy policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="mt-4">
        <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
      </div>
    </div>
  );
}
