import ChallengesItem from "../common/challengesItem";
import styles from "../../styles/sections/challenges.module.css";
import one from "../../assets/challengesImages/one.jpg";
import two from "../../assets/challengesImages/two.jpg";
import three from "../../assets/challengesImages/three.jpg";
import four from "../../assets/challengesImages/four.jpg";
import five from "../../assets/challengesImages/five.jpg";
import six from "../../assets/challengesImages/six.jpg";
import seven from "../../assets/challengesImages/seven.jpg";
import eight from "../../assets/challengesImages/eight.jpg";
import nine from "../../assets/challengesImages/nine.jpg";
import ten from "../../assets/challengesImages/ten.jpg";
import eleven from "../../assets/challengesImages/eleven.jpg";
import twelve from "../../assets/challengesImages/twelve.jpg";

const challengeData = [
    { id: '01', text: 'Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.', img: one },
    { id: '02', text: 'Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.', img: two },
    { id: '03', text: 'Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.', img: three },
    { id: '04', text: 'Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.', img: four },
    { id: '05', text: 'Create a decentralized platform that allows institutions to issue and verify digital certificates securely.', img: five },
    { id: '06', text: 'Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals.', img: six },
    { id: '07', text: 'Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.', img: seven },
    { id: '08', text: "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet", img: eight },
    { id: '09', text: 'Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages.', img: nine },
    { id: '10', text: 'Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises.', img: ten },
    { id: '11', text: 'Build a pipeline that processes aerial imagery to detect crop diseases and recommend corrective actions.', img: eleven },
    { id: '12', text: 'Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues.', img: twelve },


];

const Challenges = () => {
    // Helper to slice data by ID ranges
    const getRange = (start, end) => 
        challengeData.filter(item => {
            const id = parseInt(item.id);
            return id >= start && id <= end;
        });

    return (
        <section className="bg-black min-h-screen py-20 px-6 font-sans overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-center text-indigo-500 tracking-[0.4em] uppercase mb-16 text-2xl font-bold">
                    CHALLENGES
                </h2>

                <div className="flex flex-col">
                    
                    {/* SECTION 1: IDs 1-3 (Left Blur) */}
                    <div className="relative">
                        <div className={styles.blurCircleLeft} style={{ top: '20%' }} />
                        {getRange(1, 3).map((item) => (
                            <ChallengesItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* SECTION 2: IDs 4-5 (Right Blur) */}
                    {/* (Note: We start from 4 since 3 was in the previous block) */}
                    <div className="relative">
                        <div className={styles.blurCircleRight} style={{ top: '50%' }} />
                        {getRange(4, 5).map((item) => (
                            <ChallengesItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* SECTION 3: IDs 6 (No blur or transition) */}
                    {getRange(6, 6).map((item) => (
                        <ChallengesItem key={item.id} item={item} />
                    ))}

                    {/* SECTION 4: IDs 7-9 (Left Blur) */}
                    <div className="relative">
                        <div className={styles.blurCircleLeft} style={{ top: '30%' }} />
                        {getRange(7, 9).map((item) => (
                            <ChallengesItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* SECTION 5: IDs 10-11 (Right Blur) */}
                    <div className="relative">
                        <div className={styles.blurCircleRight} style={{ top: '50%' }} />
                        {getRange(10, 11).map((item) => (
                            <ChallengesItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* SECTION 6: ID 12 (Remainder) */}
                    {getRange(12, 12).map((item) => (
                        <ChallengesItem key={item.id} item={item} />
                    ))}
                    
                    <div className="border-t border-white/20 w-full" />
                </div>
            </div>
        </section>
    );
};

export default Challenges;