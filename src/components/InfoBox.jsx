import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
  const lower = text?.toLowerCase() || "";

  const getIcon = () => {
    if (lower.includes("hi") || lower.includes("hello")) {
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
    }

    if (lower.includes("full‑stack") || lower.includes("developer")) {
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
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      );
    }

    if (lower.includes("experience") || lower.includes("years")) {
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    }

    if (lower.includes("opportunities") || lower.includes("open")) {
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
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-white/95 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300/80 transition-all duration-200 px-5 py-4 sm:px-6 sm:py-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
            {text}
          </p>

          {link && (
            <div className="mt-4">
              <Link
                to={link}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              >
                {btnText}
                <svg
                  className="w-3.5 h-3.5"
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
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { InfoBox };
