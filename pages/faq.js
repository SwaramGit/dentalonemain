import Head from 'next/head';
import Layout from '../components/Layout';

const faqs = [
  { q: 'How often should I see the dentist?', a: 'Every 6 months for a checkup and cleaning, or as recommended.' },
  { q: 'What kind of toothbrush and toothpaste should I use?', a: 'A soft-bristled toothbrush and fluoride toothpaste are usually recommended.' },
  { q: 'Is flossing necessary?', a: 'Yes—flossing removes plaque and food particles between teeth where brushes can’t reach.' },
  { q: 'Why do I have bad breath even after brushing?', a: 'It could be due to plaque, gum disease, dry mouth, or other health issues.' },
  { q: 'Does dental cleaning hurt?', a: 'Cleanings typically aren’t painful but may cause slight discomfort if you have gum sensitivity or tartar buildup.' },
  { q: 'What’s the difference between a filling, a crown, and a root canal?', a: 'Filling repairs small cavities; a crown covers damaged teeth; a root canal removes infected pulp.' },
  { q: 'How long do dental procedures usually take?', a: 'Cleanings 30–60 min; fillings ~30–45 min; crowns and root canals can take longer or multiple visits.' },
  { q: 'Why are my teeth sensitive to cold or hot?', a: 'Common causes include enamel wear, gum recession, cavities, or cracked teeth.' },
  { q: 'What should I do in a dental emergency?', a: 'Call your dentist right away. For knocked-out teeth, preserve the tooth in milk and get to a dentist within 30–60 minutes.' },
  { q: 'Is teeth whitening safe?', a: 'Yes, when done professionally or using dentist-recommended products.' },
  { q: 'How long does whitening last?', a: 'Typically 6 months to 2 years, depending on diet and oral hygiene.' },
  { q: 'Can I fix crooked or gapped teeth without braces?', a: 'Options like Invisalign or veneers may work, depending on your case.' },
  { q: 'Do you accept my insurance?', a: 'Please check directly with the office or your insurance provider.' },
  { q: 'What will my treatment cost?', a: 'An estimate can be given after a dental exam and insurance verification.' },
  { q: 'Do you offer payment plans or financing?', a: 'Many offices offer third-party financing or in-house plans.' },
];

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <title>FAQ – Dental One</title>
        <meta name="description" content="Answers to common questions about dental care, procedures, and costs." />
      </Head>

      <section className="hero">
        <h1 className="h1">Frequently Asked Questions</h1>
        <p className="lead">Clear, simple answers to the questions we hear most often.</p>
      </section>

      <section className="section">
        {faqs.map((item, i) => (
          <details key={i} className="card" style={{marginBottom: '0.75rem'}}>
            <summary style={{fontWeight:600}}>{item.q}</summary>
            <p className="small" style={{marginTop: '0.5rem'}}>{item.a}</p>
          </details>
        ))}
      </section>
    </Layout>
  );
}
