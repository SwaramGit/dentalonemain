import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dental One – Modern Dental Operations</title>
        <meta name="description" content="Run a smoother clinic. Give patients clarity. Appointments, treatment plans, costs, and reminders in one place." />
      </Head>

      <section className="hero">
        <h1 className="h1">Run a smoother clinic. Give patients clarity.</h1>
        <p className="lead">Appointments, treatment plans, costs, and reminders—all in one place and always in sync.</p>
        <div style={{marginTop:'1rem'}}>
          <Link href="/services" className="btn">Explore Services</Link>
          <span style={{margin:'0 0.5rem'}}></span>
          <Link href="/what-we-offer" className="btn" style={{background:'transparent', color:'var(--brand)'}}>See Benefits</Link>
        </div>
      </section>

      <section className="section grid grid-3">
        <div className="card">
          <h3>Clear treatment info</h3>
          <p className="small">Patients see what’s planned, what’s done, and what it costs—no surprises.</p>
        </div>
        <div className="card">
          <h3>Fewer no‑shows</h3>
          <p className="small">Smart reminders for upcoming visits, unscheduled treatments, and unused benefits.</p>
        </div>
        <div className="card">
          <h3>Reliable operations</h3>
          <p className="small">Centralize schedules, billing, and data with secure retention policies.</p>
        </div>
      </section>
    </Layout>
  );
}
