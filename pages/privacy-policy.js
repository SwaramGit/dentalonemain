export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Data We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal Information: Name, DOB, gender, email, phone, address.</li>
        <li>Health & Dental Records: Medical history, allergies, treatments, prescriptions.</li>
        <li>Appointments: Booking times, doctor, procedure info.</li>
        <li>Insurance Data: Policy, coverage, estimates.</li>
        <li>Usage Data: Activity logs, crashes, login attempts.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Sync with Dentrix</li>
        <li>Schedule/manage appointments</li>
        <li>Display treatment & insurance info</li>
        <li>Send reminders & alerts</li>
        <li>Family account access</li>
      </ul>
      <p className="mb-4">We do not use your data for marketing without your consent.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Dentrix system</li>
        <li>Gabucan Dentistry staff</li>
        <li>Guardians & dependents</li>
        <li>Firebase, AWS, Prometheus/Grafana</li>
      </ul>
      <p className="mb-4">We do not sell or rent your data.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Role-based access control (RBAC)</li>
        <li>Secure cloud hosting</li>
        <li>OTP login & periodic audits</li>
      </ul>
      <p className="mb-4">You are responsible for keeping your credentials secure.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Access, review, correct or delete personal data</li>
        <li>Withdraw consent</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Children’s Privacy</h2>
      <p className="mb-4">Minors' accounts are managed by guardians. Ownership transfers at age 18.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Data Retention</h2>
      <p className="mb-4">We retain your data while your account is active or as legally required.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Updates to this Policy</h2>
      <p className="mb-4">Changes will be posted in the app.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
      <p>Email: info@gabucandentistry.com<br/>Phone: +1 408 945 8880</p>
    </div>
  );
}
