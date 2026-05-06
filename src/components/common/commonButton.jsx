
const handleRegister = () => {

}

const CommonButton = ({
  children,
  onClick,
  bgClass = "from-purple-600/80 to-purple-400/60",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        font-manrope
        relative w-55 h-16
         text-white text-xl
         font-normal
         bg-linear-to-r 
         ${bgClass} backdrop-blur-md 
         border border-white/40 shadow-lg 
         overflow-hidden 
         transition-all duration-300 
         hover:scale-105 hover:shadow-purple-500/30
      `}
    >
      <span className="relative z-10">{children}</span>

      {/* Corner Borders */}
      <span className="absolute top-0 left-0 w-5 h-0.5 bg-white"></span>
      <span className="absolute top-0 left-0 h-10 w-0.5 bg-white"></span>

      <span className="absolute top-0 right-0 w-5 h-0.5 bg-white"></span>
      <span className="absolute top-0 right-0 h-10 w-0.5 bg-white"></span>

      <span className="absolute bottom-0 left-0 w-5 h-0.5 bg-white"></span>
      <span className="absolute bottom-0 left-0 h-10 w-0.5 bg-white"></span>

      <span className="absolute bottom-0 right-0 w-5 h-0.5 bg-white"></span>
      <span className="absolute bottom-0 right-0 h-10 w-0.5 bg-white"></span>
    </button>
  );
};

export default CommonButton;
