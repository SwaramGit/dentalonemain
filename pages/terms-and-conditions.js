import Image from 'next/image';
import logo from '../public/logo.jpeg';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Logo at the top */}
      <div className="flex justify-center mb-6">
        <Image src={logo} alt="Dental One Logo" width={150} height={150} />
      </div>

      <h1 className="text-2xl font-bold mb-4">Terms of Use</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Eligibility</h2>
      <ul className="list-disc pl-6">
        <li>Users must be 18 years or older to independently access the app.</li>
        <li>Minors require access via guardian-managed accounts.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. Account Creation</h2>
      <ul className="list-disc pl-6">
        <li>Accounts are created through Dentrix by clinic staff.</li>
        <li>Patients are responsible for keeping credentials secure.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. App Usage</h2>
      <p>Users must comply with all applicable laws.</p>
      <p>Prohibited: hacking, data scraping, malware injection, impersonation, or interfering with app functionality.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Appointment Policies</h2>
      <ul className="list-disc pl-6">
        <li>Appointments must be booked at least 3 days in advance via the app.</li>
        <li>Rescheduling/cancellation requires a 48-hour notice. Failure may incur fees.</li>
        <li>Repeated missed appointments may result in account restrictions.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Treatment Approvals</h2>
      <ul className="list-disc pl-6">
        <li>Users may approve or reject recommended treatments through the app.</li>
        <li>Rejected treatments must include a valid reaso
