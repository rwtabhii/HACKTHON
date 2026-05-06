import React from 'react';
import styles from "../../styles/sections/HowToParticipate.module.css";
import edit from "../../assets/edit.svg";
import group from "../../assets/group.svg";
import idea from "../../assets/idea.svg";
import mountain from "../../assets/mountain.svg";
import shuttle from "../../assets/shuttle.svg";

const steps = [
  {
    title: "Register for Hackathon",
    desc: "Sign up now to participate in the hackathon.",
    icon: edit
  },
  {
    title: "Form your Teams",
    desc: "Collaborate with like-minded individuals to form teams.",
    icon: group
  },
  {
    title: "Choose a Challenge",
    desc: "Select from the list of challenges provided.",
    icon: mountain
  },
  {
    title: "Innovate and Develop",
    desc: "Work on your solutions, supported by resources and mentorship.",
    icon: shuttle
  },
  {
    title: "Submit Your Solution",
    desc: "Present your innovative ideas for evaluation.",
    icon: idea
  }
];

const HowToParticipate = () => {
  return (
    <section aria-labelledby="how-to-participate" className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className={styles.rightPanel}>
          <div className={styles.blurCircleRight} />
          <h2 className="text-center text-purple-500 text-xl font-bold tracking-widest uppercase mb-12">
            How to Participate?
          </h2>

          {/* Flexbox Container */}
          <div className="flex flex-wrap justify-center gap-8 lg:justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center md:items-start max-w-50 text-center md:text-left">

                {/* Icon Container with Module CSS */}
                <div className={`${styles.iconWrapper} mb-6`}>
                  <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
                </div>

                <h3 className="text-lg  mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;