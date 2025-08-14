import SEO from '../components/SEO';
import Layout from '../components/Layout';

export default function Page() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || '';
  const url = base + '/services';
  const canonical = base ? base + '/services' : undefined;
  const schema = null;
  return (
    <Layout>
      <SEO title="Services" description="Explore the services we provide for clinics and patients." url={url} canonical={canonical} type="website" schema={schema} />
      <section className="text-center">
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Services</h1>
  <p className="text-gray-600 max-w-2xl mx-auto mt-3">Operational and digital services that support your clinic end‑to‑end.</p>
</section>
<section className="grid md:grid-cols-3 gap-5 mt-8">
  <div className="card"><h3 className="font-semibold text-lg">Treatment Transparency</h3><p className="text-sm text-gray-600 mt-1">Clear visibility into current plans and completed procedures.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Appointment Management</h3><p className="text-sm text-gray-600 mt-1">Patients can book, reschedule, or cancel directly.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Cost Estimates & Insurance</h3><p className="text-sm text-gray-600 mt-1">Show insurance breakdowns and estimated out‑of‑pocket before treatment.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Smart Reminders</h3><p className="text-sm text-gray-600 mt-1">Upcoming visits, unscheduled treatments, and unused benefits.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Dependent Management</h3><p className="text-sm text-gray-600 mt-1">Manage family members and appointments in one place.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">3D Dental Model Viewer</h3><p className="text-sm text-gray-600 mt-1">Interactive view of completed and pending procedures.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Secure Storage & Retention</h3><p className="text-sm text-gray-600 mt-1">Encrypted media with 7‑year retention and auto‑purge.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Integrations</h3><p className="text-sm text-gray-600 mt-1">SMS, email, payment gateways, printer/KOT, and more.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Onboarding & Training</h3><p className="text-sm text-gray-600 mt-1">Team onboarding, SOPs, and ongoing support.</p></div>
</section>

    </Layout>
  );
}
