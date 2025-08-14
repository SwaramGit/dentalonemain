import Head from 'next/head';
import Image from 'next/image';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen px-6 py-12 max-w-3xl mx-auto text-gray-800">
      <Head>
        <title>Terms and Conditions – Dental One</title>
        <meta name="description" content="Read the terms and conditions for using Dental One's services and mobile application." />
        <meta name="keywords" content="Dental One terms, dental app policies, user agreement, conditions of use" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="mt-4">
        <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
      </div>
    </div>
  );
}
