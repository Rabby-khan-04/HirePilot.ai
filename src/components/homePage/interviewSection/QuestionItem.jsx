export default function QuestionItem({ id, question, intent, answer }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <span className="font-mono-label text-mono-label bg-surface-container px-2 py-1 rounded shrink-0">
          {id}
        </span>
        <p className="font-body-md text-body-md font-semibold text-primary">
          {question}
        </p>
      </div>
      <div className="pl-10 space-y-3">
        <div>
          <p className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">
            Interviewers Intent
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {intent}
          </p>
        </div>
        <div className="bg-surface-container/50 p-4 border-l-2 border-primary">
          <p className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">
            AI Guided Answer
          </p>
          <p className="font-body-md text-body-md text-on-surface italic">
            {`"`}
            {answer}
            {`"`}
          </p>
        </div>
      </div>
    </div>
  );
}
