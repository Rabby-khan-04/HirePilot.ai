import { MdPsychology } from "react-icons/md";

const insights = [
  {
    num: "01",
    title: "Strengthen GraphQL knowledge",
    desc: "Target job emphasizes complex data fetching. Focus on Apollo Client and schema design.",
  },
  {
    num: "02",
    title: "Quantify Performance Wins",
    desc: "Resume lacks hard metrics on frontend optimization. Include lighthouse score improvements.",
  },
];

export default function AiInsights() {
  return (
    <div className="col-span-12 bg-surface-container-low border border-outline-variant/30 p-8 rounded-lg">
      <div className="font-mono-label text-mono-label text-on-surface-variant mb-6 flex items-center gap-2">
        <MdPsychology className="text-primary" size={20} />
        AI STRATEGIC INSIGHTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {insights.map((item) => (
          <div
            key={item.num}
            className="flex gap-4 p-4 border border-outline-variant/20 bg-white/50"
          >
            <span className="font-display-xl text-3xl text-primary/20">
              {item.num}
            </span>
            <div>
              <h4 className="font-body-md font-bold mb-1">{item.title}</h4>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
