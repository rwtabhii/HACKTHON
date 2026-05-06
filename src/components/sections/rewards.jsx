import styles from "../../styles/sections/rewards.module.css"

const Rewards = () => {
    const rewards = [
        { title: "Mentorship from \n Experts", desc: "Work under the guidance of \n domain professionals and \n technology mentors." },
        { title: "Recognition and Internship Opportunities", desc: "Outstanding performers may \n receive offers for internships or \n collaboration opportunities." }
    ];

    return (
        <section className="pt-15 px-20 w-full relative z-10 bg-transparent">
            <h2 className="text-center text-[#7b61ff]  uppercase mb-10 text-2xl">
                REWARDS AND BENEFITS
            </h2>
            <div className="text-white text-base sm:text-lg flex flex-wrap items-start justify-start gap-8">
                {rewards.map((item, index) => (
                    <div key={index} className={styles.rewardCard}>
                        <h3 className="text-[#a78bfa] text-xl font-semibold mb-4 whitespace-pre-line">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed whitespace-pre-line">{item.desc}</p>
                    </div>
                ))}
            </div>
    </section >
  );
};

export default Rewards;