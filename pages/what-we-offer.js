import SEO from '../components/SEO';
import Layout from '../components/Layout';

export default function Page() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || '';
  const url = base + '/what-we-offer';
  const canonical = base ? base + '/what-we-offer' : undefined;
  const schema = null;
  return (
    <Layout>
      <SEO title="What We Offer" description="Benefits for patients and dental teams using Dental One." url={url} canonical={canonical} type="website" schema={schema} />
      <section className="text-center">
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">What We Offer</h1>
  <p className="text-gray-600 max-w-2xl mx-auto mt-3">Tangible benefits for both patients and practice teams.</p>
</section>

<section className="mt-8">
  <h2 className="text-xl font-bold">For Patients</h2>
  <div className="grid md:grid-cols-3 gap-5 mt-3">
    <div className="card"><h3 className="font-semibold text-lg">Clarity & Confidence</h3><p className="text-sm text-gray-600 mt-1">Understand procedures, timelines, and costs before you commit.</p></div>
    <div className="card"><h3 className="font-semibold text-lg">Fewer Missed Visits</h3><p className="text-sm text-gray-600 mt-1">Smart reminders reduce no‑shows and help you use benefits on time.</p></div>
    <div className="card"><h3 className="font-semibold text-lg">Family‑friendly</h3><p className="text-sm text-gray-600 mt-1">Manage dependents and appointments from one account.</p></div>
  </div>
</section>

<section className="mt-8">
  <h2 className="text-xl font-bold">For Dental Teams</h2>
  <div className="grid md:grid-cols-3 gap-5 mt-3">
    <div className="card"><h3 className="font-semibold text-lg">Operational Visibility</h3><p className="text-sm text-gray-600 mt-1">Centralize treatment plans, schedules, and billing.</p></div>
    <div className="card"><h3 className="font-semibold text-lg">Filled Schedules</h3><p className="text-sm text-gray-600 mt-1">Proactive nudges keep chairs utilized.</p></div>
    <div className="card"><h3 className="font-semibold text-lg">Trust & Acceptance</h3><p className="text-sm text-gray-600 mt-1">Clear information helps patients accept recommended care.</p></div>
  </div>
</section>

    </Layout>
  );
}
