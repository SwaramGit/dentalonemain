import SEO from '../components/SEO';
import Layout from '../components/Layout';

export default function Page() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || '';
  const url = base + '/';
  const canonical = base ? base + '/' : undefined;
  const schema = null;
  return (
    <Layout>
      <SEO title="Dental One – Modern Dental Operations" description="Run a smoother clinic. Give patients clarity. Appointments, treatment plans, costs, and reminders in one place." url={url} canonical={canonical} type="website" schema={schema} />
      <section className="text-center py-10">
  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Run a smoother clinic. Give patients clarity.</h1>
  <p className="text-gray-600 max-w-2xl mx-auto mt-3">Appointments, treatment plans, costs, and reminders—all in one place and always in sync.</p>
  <div className="mt-6 flex items-center justify-center gap-3">
    <a href="/services" className="btn">Explore Services</a>
    <a href="/what-we-offer" className="btn-outline">See Benefits</a>
  </div>
</section>

<section className="grid md:grid-cols-3 gap-5">
  <div className="card">
    <h3 className="font-semibold text-lg">Clear treatment info</h3>
    <p className="text-sm text-gray-600 mt-1">Patients see what’s planned, what’s done, and what it costs—no surprises.</p>
  </div>
  <div className="card">
    <h3 className="font-semibold text-lg">Fewer no-shows</h3>
    <p className="text-sm text-gray-600 mt-1">Smart reminders for upcoming visits, unscheduled treatments, and unused benefits.</p>
  </div>
  <div className="card">
    <h3 className="font-semibold text-lg">Reliable operations</h3>
    <p className="text-sm text-gray-600 mt-1">Centralize schedules, billing, and data with secure retention policies.</p>
  </div>
</section>

    </Layout>
  );
}
