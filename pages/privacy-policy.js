import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/">
        <Image src="/logo.jpeg" alt="Logo" width={150} height={50} className="mb-6 cursor-pointer" />
      </Link>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <h2 className="text-xl font-semibold mt-4 mb-2">1. Data We Collect</h2>
      <ul className="list-disc pl-6">
        <li>Personal Information: Name, DOB, gender, email, phone, address.</li>
        <li>Health & Dental Records: Medical history, allergies, treatments, prescriptions.</li>
        <li>Appointments: Booking times, doctor, procedure info.</li>
        <li>Insurance Data: Policy, coverage, estimates.</li>
        <li>Usage Data: Activity logs, crashes, login attempts.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6">
        <li>Sync with Dentrix</li>
        <li>Schedule/manage appointments</li>
        <li>Display treatment & insurance info</li>
        <li>Send reminders & alerts</li>
        <li>Family account access</li>
      </ul>
      <p>We do not use your data for marketing without your consent.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Sharing</h2>
      <ul className="list-disc pl-6">
        <li>Dentrix system</li>
        <li>Gabucan Dentistry staff</li>
        <li>Guardians & dependents</li>
        <li>Firebase, AWS, Prometheus/Grafana</li>
      </ul>
      <p>We do not sell or rent your data.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Data Security</h2>
      <ul className="list-disc pl-6">
        <li>Role-based access control (RBAC)</li>
        <li>Secure cloud hosting</li>
        <li>OTP login & periodic audits</li>
      </ul>
      <p>You are responsible for keeping your credentials secure.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6">
        <li>Access, review, correct or delete personal data</li>
        <li>Withdraw consent</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Children’s Privacy</h2>
      <p>Minors' accounts are managed by guardians. Ownership transfers at age 18.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Data Retention</h2>
      <p>We retain your data while your account is active or as legally required.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">8. Updates to this Policy</h2>
      <p>Changes will be posted in the app.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">9. Contact</h2>
      <p>Email: info@gabucandentistry.com</p>
      <p>Phone: +1 408 945 8880</p>
    </div>
  );
}
