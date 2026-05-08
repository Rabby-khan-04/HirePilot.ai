import { MdOutlineChatBubble } from "react-icons/md";

export default function InterviewPrepCard() {
  return (
    <div className="col-span-3 row-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded shadow-sm hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <span className=" text-primary/60">
          <MdOutlineChatBubble size={24} />
        </span>

        <span className="font-mono-label text-mono-label text-primary/60 uppercase">
          Interview Prep
        </span>
      </div>

      <p className="font-body-md text-body-md italic text-on-surface">
        {`"`}How would you optimize a high-traffic API that serves real-time
        data?{`"`}
      </p>
    </div>
  );
}
