import styles from "../../styles/sections/about.module.css";
import two from "../../assets/image2.svg";
import one from "../../assets/image1.svg";
import three from "../../assets/image3.svg";
import four from "../../assets/image4.svg";
import five from "../../assets/image5.svg";
import astronaut from "../../assets/astronaut.svg";
import CommonButton from "../common/commonButton";

const About = () => {
    // Static countdown – you can replace with dynamic state later
    const countdown = { days: 16, hours: 12, minutes: 42, seconds: 31 };

    return (
        <section aria-labelledby="about-heading" className={styles.aboutSection}>
            <div className="w-full">

                {/* ABOUT HACKATHON heading */}
                <div className="text-center mb-1">
                    <h2
                        id="about-heading"
                        style={{ fontFamily: 'Manrope' }}
                        className=" font-medium text-xl sm:text-3xl md:text-2xl leading-none tracking-normal text-purple-600 inline-block px-4 py-2"
                    >
                        ABOUT HACKATHON
                    </h2>
                </div>

                {/* Main content grid: left (text) + right (image later) */}
                <div className="flex flex-col lg:flex-col">
                    <div className="flex flex-col text-center m-auto">
                        <h2
                            style={{ fontFamily: 'Manrope' }}
                            className=" font-medium  sm:text-3xl md:text-4xl leading-none tracking-normal text-white px-4 py-2"
                        >
                            WHO CAN
                        </h2>
                        <h2
                            style={{ fontFamily: 'Manrope' }}
                            className=" font-medium sm:text-3xl md:text-4xl leading-none tracking-normal text-white  px-4 py-2"
                        >
                            PARTICIPATE?
                        </h2>
                    </div>

                    {/* Left column: text content */}
                    <div className="w-full space-y-8">
                        {/* Welcome paragraph */}
                        <div className={styles.participateRow}>
                            <div className={styles.pattern}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <p className={styles.description}>
                                Welcome to the Lorem Ipsum innovation Hackathon, an exhilarating platform designed
                                to foster innovation and creativity in the domain of advanced technology and
                                futuristic solutions. Organized by the National Center for Applied Research and
                                supported by Hack2Skill, this hackathon invites undergraduate students,
                                graduate/postgraduate students, and PhD researchers to collaborate and solve
                                critical challenges.
                            </p>

                            <div className={`${styles.pattern} ${styles.rightPattern}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        {/* Apply Now button */}
                        <div className="text-center mb-17">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-4xl transition duration-300">
                                Apply Now
                            </button>
                        </div>

                        {/* WHO CAN PARTICIPATE? section */}
                        <div className="text-center">
                            <h2
                                id="about-heading"
                                style={{ fontFamily: 'Manrope' }}
                                className=" font-medium text-xl sm:text-3xl md:text-2xl leading-none tracking-normal text-purple-600 inline-block px-4 py-2"
                            >
                                WHO CAN PARTICIPATE?
                            </h2>
                            <div className="space-y-2 text-white text-base sm:text-lg flex flex-wrap  items-center justify-around">
                                <div className={styles.participantCard}>
                                    <h4>Undergraduate<br />Students</h4>
                                </div>
                                <div className={styles.participantCard}>
                                    <h4>Graduate/Postgraduate<br />Students</h4>
                                </div>
                                <div className={styles.participantCard}>
                                    <h4>PhD Students/<br />Research Scholars</h4>
                                </div>
                            </div>
                            <p className="text-white text-sm sm:text-base mt-4">
                                Note: Working Professionals are not eligible to participate in the hackathon.
                            </p>
                        </div>

                        {/* WHAT IS THE HACKATHON? section */}
                        <div className="flex flex-wrap justify-around mt-30">
                            <div className={styles.leftPanel}>
                                <div className={styles.blurCircleLeft} />
                                <div className="flex flex-col max-w-md">
                                    <h3 className="text-white text-xl sm:text-3xl  mb-16">WHAT IS THE <br />HACKATHON?</h3>
                                    <p className="text-white text-base sm:text-lg leading-relaxed">
                                        The Lorem Ipsum Innovation Hackathon is a flagship event crafted to uncover pioneering ideas in science, technology, and system design. As technological advancements accelerate globally, this initiative aims to bridge academic knowledge with practical implementation.
                                    </p>

                                    <p className="text-white text-base sm:text-lg leading-relaxed mt-4 mb-20 break-words sm:break-words">
                                        Participants will work on challenge statements designed by leading R&D units, applying theoretical expertise to build innovative prototypes and solutions with potential real-world application.
                                    </p>
                                    <p className="text-white text-base sm:text-lg leading-relaxed tracking-wide">Submission Closing In:</p>
                                    {/* Countdown timer */}
                                    <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-4 mt-2">
                                        <CommonButton bgClass={styles.countdown}>
                                            {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                                        </CommonButton>
                                        <CommonButton bgClass={styles.register}>
                                            Register Now
                                        </CommonButton>
                                    </div>
                                </div>
                            </div>
                            <div className=" min-h-screen p-4 md:p-10 flex items-center justify-center w-170">
                                <div className={styles.rightPanel}>
                                    <div className={styles.blurCircleRight} />
                                    <div className="relative w-full grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-2 items-center">

                                        {/* Image 1: Top Left Vertical */}
                                        <div className="col-span-1 md:col-span-5 md:col-start-2 -translate-y-15 self-end relative group transition-all duration-300 hover:scale-105 hover:z-20">
                                            <img
                                                src={five}
                                                alt="Working"
                                                className="w-35 h-56  md:h-56 object-cover border border-white/10"
                                            />
                                        </div>

                                        {/* Image 2 */}
                                        <div className="col-span-1 md:col-span-5 md:col-start-7 -translate-y-15 -translate-x-10 self-end relative group transition-all duration-300 hover:scale-110 hover:z-30">
                                            <img
                                                src={one}
                                                alt="Globe"
                                                className="w-full h-50 md:h-70 object-cover border border-white/10"
                                            />
                                        </div>

                                        {/* Image 3: Middle Left (VR) */}
                                        <div className="col-span-2 md:col-span-5 md:col-start-1 -translate-y-5 md:-mt-13  relative group transition-all duration-300 hover:scale-105 hover:z-20">
                                            <img
                                                src={four}
                                                alt="VR"
                                                className="w-150 h-41 md:h-auto object-cover ml-5 border border-white/10"
                                            />
                                        </div>

                                        {/* Image 4: Bottom Left (Meeting) */}
                                        <div className="col-span-1 md:col-span-4 md:col-start-2 md:-mt-4 -translate-y-3 translate-x-6  relative group transition-all duration-300 hover:scale-105 hover:z-20">
                                            <img
                                                src={three}
                                                alt="Meeting"
                                                className="w-full h-48 md:h-auto object-cover -ml-1 border border-white/10"
                                            />
                                        </div>

                                        {/* Image 5: Bottom Right (Audience) */}

                                        <div className="col-span-1 md:col-span-5 md:col-start-6 md:-mt-20 -translate-y-3 translate-x-3 relative group transition-all duration-300 hover:scale-105 hover:z-20">
                                            <img
                                                src={two}
                                                alt="Audience"
                                                className="w-full h-48 md:h-auto object-cover border border-white/10"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {astronaut */}
                <div className="relative mt-12">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-10">
                        WHY PARTICIPATE?
                    </h3>

                    {/* Three column layout: left (2 cards) | center (astronaut) | right (2 cards) */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 xl:gap-8 w-full lg-w-80">

                        {/* ========== LEFT COLUMN – two cards aligned left ========== */}
                        <div className="relative bg-[#7c3aed] w-full md:w-100 lg:w-auto lg:max-w-sm xl:max-w-md py-6 px-8 md:px-12 xl:px-20 text-right overflow-visible z-10">
                            <div className="space-y-12 lg:space-y-8 xl:space-y-16 relative z-10">
                                {/* Card 1: Mentorship */}
                                <div className="max-w-md ml-auto">
                                    <h4 className="text-white text-lg lg:text-base xl:text-xl font-bold mb-3 lg:mb-2 xl:mb-4">Mentorship from Experts</h4>
                                    <p className="text-white/90 text-base lg:text-sm xl:text-xl leading-relaxed lg:leading-tight xl:leading-relaxed">
                                        Gain invaluable insights and guidance from experienced technologists and domain experts.
                                    </p>
                                </div>
                                {/* Card 2: Networking */}
                                <div className="max-w-md ml-auto">
                                    <h4 className="text-white text-lg lg:text-base xl:text-xl font-bold mb-3 lg:mb-2 xl:mb-4">Networking</h4>
                                    <p className="text-white/90 text-base lg:text-sm xl:text-xl leading-relaxed lg:leading-tight xl:leading-relaxed">
                                        Connect with peers, professionals, and innovation leaders from across the nation.
                                    </p>
                                </div>
                            </div>
                            {/* Decorative accents */}
                            <div className={styles.accentContainer}>
                                <div className={styles.accentBar} style={{ top: '15%' }}></div>
                                <div className={styles.accentBar} style={{ top: '65%' }}></div>
                            </div>
                        </div>

                        {/* ========== CENTER COLUMN – multi‑ring astronaut (floating) ========== */}
                        <div className="flex justify-center items-center shrink-0 scale-90 lg:scale-75 xl:scale-100">
                            <div className={styles.astronautCenter}>
                                <div className={styles.astronautMultiRingContainer}>
                                    {/* Concentric rings (low opacity, no animation) - now uncommented */}
                                    <div className={`${styles.ringBase} ${styles.ring1}`}></div>
                                    <div className={`${styles.ringBase} ${styles.ring2}`}></div>
                                    <div className={`${styles.ringBase} ${styles.ring3}`}></div>
                                    <div className={`${styles.ringBase} ${styles.ring4}`}></div>
                                    {/* optional fifth ring - uncomment if you have ring5 class */}
                                    {/* <div className={`${styles.ringBase} ${styles.ring5}`}></div> */}

                                    {/* Astronaut image (rotated + floating) */}
                                    <div className={`${styles.astronautRotatedMulti} ${styles.floatGroup}`}>
                                        <img src={astronaut} alt="Floating Astronaut" className={styles.astronautImgMulti} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== RIGHT COLUMN – two cards aligned right ========== */}
                        <div className="relative bg-[#7c3aed] w-full sm:w-100 lg:w-auto lg:max-w-sm xl:max-w-md py-6 px-8 md:px-12 xl:px-20 text-left overflow-visible">
                            <div className="space-y-12 lg:space-y-8 xl:space-y-16 relative z-10">
                                {/* Card 3: Internship */}
                                <div className="max-w-md ml-auto">
                                    <h4 className="text-white text-lg lg:text-base xl:text-xl font-bold mb-3 lg:mb-2 xl:mb-4">Internship Opportunities</h4>
                                    <p className="text-white/90 text-base lg:text-sm xl:text-xl leading-relaxed lg:leading-tight xl:leading-relaxed">
                                        Stand a chance to secure internships at top institutions and innovation labs.
                                    </p>
                                </div>
                                {/* Card 4: Real-World Impact */}
                                <div className="max-w-md ml-auto">
                                    <h4 className="text-white text-lg lg:text-base xl:text-xl font-bold mb-3 lg:mb-2 xl:mb-4">Real-World Impact</h4>
                                    <p className="text-white/90 text-base lg:text-sm xl:text-xl leading-relaxed lg:leading-tight xl:leading-relaxed">
                                        Contribute to meaningful challenges that aim to improve lives and systems at scale.
                                    </p>
                                </div>
                            </div>
                            {/* Accents flipped to left side */}
                            <div className={styles.accentContainerLeft}>
                                <div className={styles.accentBarLeft} style={{ top: '15%' }}></div>
                                <div className={styles.accentBarLeft} style={{ top: '65%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;