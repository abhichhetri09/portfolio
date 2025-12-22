import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl w-full max-w-lg mx-auto bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border border-slate-700/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] hover:border-slate-600/70">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#00c6ff] to-transparent rounded-full"></div>

      <p className="text-white text-lg sm:text-xl font-medium font-poppins text-center leading-relaxed mb-6 px-2">
        {text}
      </p>

      {link && (
        <Link
          to={link}
          className="relative overflow-hidden bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold font-poppins text-sm sm:text-base transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,114,255,0.4)] hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#00c6ff] focus:ring-offset-2 focus:ring-offset-slate-800 group"
        >
          <span className="relative z-10">{btnText}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0072ff] to-[#00c6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      )}
    </div>
  );
};
export { InfoBox };
