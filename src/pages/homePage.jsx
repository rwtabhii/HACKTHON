import Hero from '../components/sections/hero.jsx';
import Navbar from '../components/layout/navbar.jsx';
import About from '../components/sections/about.jsx';
import Footer from '../components/layout/footer.jsx';
import HowToParticipate from '../components/sections/howToParticipate.jsx';
import Challenges from '../components/sections/challenges.jsx';
import Schedules from '../components/sections/schedules.jsx';
import Rewards from "../components/sections/rewards.jsx"
import FAQS from "../components/sections/faqs.jsx"
import styles from "../styles/pages/homePage.module.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <HowToParticipate/>
      <Challenges/>
      <Schedules/>
      <div className={styles.brainSectionWrapper}>
        <Rewards />
        <FAQS />
      </div>
      <Footer/>
      {/* You can add more sections below (About, Challenges, etc.) */}
    </>
  );
};

export default HomePage;