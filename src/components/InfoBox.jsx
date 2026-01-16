import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
  // Determine icon based on text content
  const getIcon = () => {
    if (
      text?.toLowerCase().includes("hi") ||
      text?.toLowerCase().includes("hello")
    ) {
      return (
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    } else if (text?.toLowerCase().includes("developer")) {
      return (
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
    } else if (
      text?.toLowerCase().includes("years") ||
      text?.toLowerCase().includes("working")
    ) {
      return (
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    } else if (
      text?.toLowerCase().includes("opportunities") ||
      text?.toLowerCase().includes("reach")
    ) {
      return (
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    }
    // Default icon
    return (
      <svg
        className="w-5 h-5 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl w-full max-w-lg mx-auto bg-white border-2 border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] hover:border-blue-300/50 hover:-translate-y-0.5 overflow-hidden group">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

      {/* Left border accent */}
      <div className="absolute left-0 top-0.5 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-transparent to-transparent opacity-50"></div>

      {/* Corner decorative elements */}
      <div className="absolute top-2 right-2 opacity-15 group-hover:opacity-30 transition-opacity">
        <svg
          className="w-5 h-5 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-100/20 rounded-full blur-xl"></div>
      </div>

      {/* Content wrapper with structure */}
      <div className="relative z-10 w-full flex flex-col gap-3">
        {/* Text content with icon */}
        <div className="flex items-center gap-3 w-full">
          {/* Icon container with background */}
          <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 group-hover:scale-105 transition-transform duration-300">
            {getIcon()}
          </div>
          <p className="text-slate-800 text-sm sm:text-base font-medium font-poppins leading-snug flex-1">
            {text}
          </p>
        </div>

        {/* Divider line with decorative dots */}
        {link && (
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex-1 border-t border-slate-200"></div>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-400/40"></div>
              <div className="w-1 h-1 rounded-full bg-cyan-400/40"></div>
              <div className="w-1 h-1 rounded-full bg-blue-400/40"></div>
            </div>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>
        )}

        {/* Button */}
        {link && (
          <div className="flex justify-center w-full">
            <Link
              to={link}
              className="relative overflow-hidden bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-5 py-2 rounded-lg font-semibold font-poppins text-xs sm:text-sm transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,114,255,0.4)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00c6ff] focus:ring-offset-2 group/btn"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {btnText}
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </Link>
          </div>
        )}
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-1.5 left-3 opacity-8 group-hover:opacity-15 transition-opacity">
        <svg
          className="w-8 h-8 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </div>
    </div>
  );
};
export { InfoBox };
