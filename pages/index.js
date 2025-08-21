import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="mb-6 text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              The Future is Physical
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We're building the next generation of AI that doesn't just think—it acts, moves, and interacts with the physical world around us.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <Contact email={globalData.contactEmail} />

        {/* Team Section */}
        <Team />
        
      </main>
      
      <Footer copyrightText={globalData.footerText} contactEmail={globalData.contactEmail} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
