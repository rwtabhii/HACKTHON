import bg from "../../assets/heroBg.svg";
import femaleIcon from "../../assets/heroIcon.svg";
import CommonButton from "../common/commonButton";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-black">
            {/* Background image - with fallback solid color */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundColor: "#1a1a2e", // fallback if image fails
                }}
            ></div>

            {/* Optional: semi-transparent overlay to ensure text readability if you add content later */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-row   space-between gap-12 lg:gap-16 w-full min-h-screen px-6  py-16 max-w-7xl mx-auto ">
                {/* Left side: Image */}
                <div className="flex-1 flex flex-col items-start w-full mt-30 relative">
                    <h1 className="
                  absolute
                 top-0
                   left-35
                   font-satoshi
                  font-black
                   text-white
                   text-[6rem]
                  leading-none
                  uppercase
                    whitespace-nowrap
                   z-20
                  ">
                        CODE THE
                    </h1>
                    <h1
                        className="
        absolute
        top-20
        left-55
        font-satoshi
        font-black
        text-transparent
        text-[6rem]
        leading-none
        uppercase
        whitespace-nowrap
        z-10
        [-webkit-text-stroke:4.66px_#7C3AED]
    "
                    >
                        FUTURE
                    </h1>

                    <img
                        src={femaleIcon}
                        alt="Hero visual"
                        className="w-70 max-w-full h-auto object-contain relative z-30"
                    />

                    <p className="w-70 font-satoshi text-white font-bold text-[0.7rem] leading-none tracking-[0.07em] uppercase mt-3 text-center">
                        Where Innovation Becomes Reality
                    </p>
                </div>

                {/* Right side: Register button */}
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