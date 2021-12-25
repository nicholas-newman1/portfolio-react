import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio - Nicholas Newman</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Hero />
      <Packages />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
