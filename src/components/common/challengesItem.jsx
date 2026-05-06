import { useState } from "react";
import CommonButton from "./commonButton";
import styles from "../../styles/sections/challenges.module.css";

// Notice we use the specific prop names here instead of 'item'
const ChallengesItem = ({ item }) => {
  console.log(item)
  const { id, text, img } = item
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group border-t border-white/20 py-3 md:py-2 cursor-pointer transition-all duration-700 ease-in-out ${styles.glowContainer} ${isOpen ? 'bg-white/5' : 'hover:bg-white/5'}`}
    >
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 px-4">
        {/* ID Number - Fixed from item.id to id */}
        <div className="text-white font-mono text-normal md:text-xl opacity-80 shrink-0">
          [ {id}
        </div>

        {/* Image - Fixed from item.img to img */}
        <div className={`relative overflow-hidden transition-all duration-700 rounded-md shrink-0 
          ${isOpen ? 'w-full md:w-80 h-48 opacity-100' : 'w-48 h-16 md:h-20'}`}
        >
          <img
            src={img}
            alt="challenge"
            className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-500"
          />
          {!isOpen && <div className={`absolute inset-0 ${styles.imageOverlay}`} />}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start gap-4">
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              {text}
            </p>
            <div
              className={`text-white text-2xl transition-transform duration-300 ${isOpen
                  ? 'rotate-45'
                  : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                }`}
            >
              ↗
            </div>
          </div>

          {/* Expanded Section (Button) */}
          <div className={`mt-6 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
            <button className={`px-8 py-2 text-white font-medium ${styles.learnMoreBtn}`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesItem;