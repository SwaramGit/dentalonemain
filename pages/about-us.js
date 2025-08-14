import SEO from '../components/SEO';
import Layout from '../components/Layout';

export default function Page() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || '';
  const url = base + '/about-us';
  const canonical = base ? base + '/about-us' : undefined;
  const schema = null;
  return (
    <Layout>
      <SEO title="About Us" description="Dental One simplifies daily operations and gives patients clarity and control." url={url} canonical={canonical} type="website" schema={schema} />
      <section className="text-center">
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Us</h1>
  <p className="text-gray-600 max-w-2xl mx-auto mt-3">We’re building practical tools so clinics run smoother and patients always know what’s next.</p>
</section>

<section className="grid md:grid-cols-3 gap-5 mt-8">
  <div className="card"><h3 className="font-semibold text-lg">Who we are</h3><p className="text-sm text-gray-600 mt-1">Clinic-first team focused on secure data handling and outcome‑driven design.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">What we do</h3><p className="text-sm text-gray-600 mt-1">Keep appointments, treatment plans, and billing information in sync.</p></div>
  <div className="card"><h3 className="font-semibold text-lg">Data retention</h3><p className="text-sm text-gray-600 mt-1">Encrypted media with 7‑year retention and automatic purge.</p></div>
</section>

    </Layout>
  );
}
