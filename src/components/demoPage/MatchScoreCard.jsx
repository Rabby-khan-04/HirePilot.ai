export default function MatchScoreCard() {
  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const matchPercent = 85;
  const offset = circumference - (matchPercent / 100) * circumference;

  return (
    <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant/50 p-8 rounded-lg flex flex-col items-center justify-center text-center">
      <div className="font-mono-label text-mono-label text-on-surface-variant mb-8 self-start">
        SYSTEM ANALYSIS RESULT
      </div>
      <div className="relative w-48 h-48 flex items-center justify-center mb-6">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 192 192"
        >
          <circle
            className="text-surface-container"
            cx="96"
            cy="96"
            fill="transparent"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
          />
          <circle
            className="text-success/80"
            cx="96"
            cy="96"
            fill="transparent"
            r={radius}
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="font-display-xl text-5xl font-bold">
            {matchPercent}%
          </span>
          <span className="font-mono-label text-mono-label text-green-600">
            MATCH
          </span>
        </div>
      </div>
      <h3 className="font-headline-md text-headline-md mb-2">
        High Compatibility
      </h3>
      <p className="text-on-surface-variant font-body-md">
        Candidate profile strongly aligns with core architectural requirements.
      </p>
    </div>
  );
}
