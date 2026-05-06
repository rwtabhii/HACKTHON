import { lazy, Suspense, useEffect } from 'react';
import Hero from '../components/sections/hero.jsx';
import Navbar from '../components/layout/navbar.jsx';
import styles from "../styles/pages/homePage.module.css";

const About = lazy(() => import('../components/sections/about.jsx'));
const HowToParticipate = lazy(() => import('../components/sections/howToParticipate.jsx'));
const Challenges = lazy(() => import('../components/sections/challenges.jsx'));
const Schedules = lazy(() => import('../components/sections/schedules.jsx'));
const Rewards = lazy(() => import('../components/sections/rewards.jsx'));
const FAQS = lazy(() => import('../components/sections/faqs.jsx'));
const Footer = lazy(() => import('../components/layout/footer.jsx'));

const HomePage = () => {
  // Enable smooth scrolling globally (only once)
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
    return () => { html.style.scrollBehavior = ''; };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className={styles.loadingFallback}>Loading...</div>}>
        {/* Each section gets an id matching navbar href + scroll margin */}
        <div id="about" className="scroll-mt-20 md:scroll-mt-24">
          <About />
        </div>
        <div id="how-to-participate" className="scroll-mt-20 md:scroll-mt-24">
          <HowToParticipate />
        </div>
        <div id="challenges" className="scroll-mt-20 md:scroll-mt-24">
          <Challenges />
        </div>
        <div id="schedules" className="scroll-mt-20 md:scroll-mt-24">
          <Schedules />
        </div>
        <div className={styles.brainSectionWrapper}>
          <div id="rewards" className="scroll-mt-20 md:scroll-mt-24">
            <Rewards />
          </div>
          <div id="faqs" className="scroll-mt-20 md:scroll-mt-24">
            <FAQS />
          </div>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;