import bg from "../../assets/heroBg.svg";
import femaleIcon from "../../assets/heroIcon.svg";
import CommonButton from "../common/commonButton";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden">
            {/* Background image – optimized with will-change and reduced repaint */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundColor: "#1a1a2e",
                }}
                aria-hidden="true"
            ></div>

            {/* Lighter overlay – removed if not needed, kept for readability but using lower opacity if possible */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Hero Content – exact positioning preserved */}
            <div className="relative z-10 flex flex-row items-stretch gap-12 lg:gap-16 w-full min-h-screen px-6 py-16 max-w-7xl mx-auto">
                {/* Left side: Image and headings */}
                <div className="flex-1 flex flex-col items-start w-full mt-30 relative">
                    {/* Use responsive classes that keep the original look on desktop, but prevent overflow on mobile */}
                    <h1 className="
                        absolute
                        top-0
                        left-8 sm:left-35
                        font-satoshi font-black text-white
                        text-5xl sm:text-7xl md:text-8xl lg:text-[6rem]
                        leading-none uppercase
                        whitespace-nowrap
                        z-20
                    ">
                        CODE THE
                    </h1>
                    <h1 className="
                        absolute
                        top-12 sm:top-20
                        left-20 sm:left-55
                        font-satoshi font-black
                        text-transparent
                        text-5xl sm:text-7xl md:text-8xl lg:text-[6rem]
                        leading-none uppercase
                        whitespace-nowrap
                        z-10
                        [-webkit-text-stroke:2px_#7C3AED] sm:[-webkit-text-stroke:3px_#7C3AED] lg:[-webkit-text-stroke:4.66px_#7C3AED]
                    ">
                        FUTURE
                    </h1>

                    <img
                        src={femaleIcon}
                        alt="Hero visual"
                        className="w-48 sm:w-60 md:w-70 max-w-full h-auto object-contain relative z-30"
                        loading="eager"
                        width="280"
                        height="auto"
                    />

                    <p className="w-48 sm:w-60 md:w-70 font-satoshi text-white font-bold text-[0.7rem] leading-none tracking-[0.07em] uppercase mt-3 text-center">
                        Where Innovation Becomes Reality
                    </p>
                </div>

                {/* Right side: Register button – unchanged */}
                <div className="flex-1 flex flex-col w-full">
                    <div className="mt-auto ml-auto mb-15">
                        <CommonButton
                            bgClass="bg-[linear-gradient(131.57deg,#7C3AED_2.28%,#A78BFA_53.69%,#EEE7FB_150%)]"
                        >
                            Register Now
                        </CommonButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;