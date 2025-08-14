import Image from 'next/image';
import logo from '../public/logo.jpeg';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Logo at the top */}
      <div className="flex justify-center mb-6">
        <Image src={logo} alt="Dental One Logo" width={150} height={150} />
      </div>

      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

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
      <p className="mt-2">We do not use your data for marketing without your consent.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Sharing</h2>
      <ul className="list-disc pl-6">
        <li>Dentrix system</li>
        <li>Gabucan Dentistry staff</li>
        <li>Guardians & dependents</li>
        <li>Firebase, AWS, Prometheus/Grafana</li>
      </ul>
      <p className="mt-2">We do not sell or rent your data.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Data Security</h2>
      <ul className="list-disc pl-6">
        <li>Role-based access control (RBAC)</li>
        <li>Secure cloud hosting</li>
        <li>OTP login & periodic audits</li>
      </ul>
      <p className="mt-2">You are responsible for keeping your credentials secure.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6">
