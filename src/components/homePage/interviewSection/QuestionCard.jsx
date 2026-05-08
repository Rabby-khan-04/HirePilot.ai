import QuestionItem from "./QuestionItem";

export default function QuestionCard({ icon: Icon, title, questions }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col gap-8 hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
        <Icon size={20} className="text-primary" />
        <h3 className="font-headline-md text-headline-md text-primary">
          {title}
        </h3>
      </div>
      {questions.map((q) => (
        <QuestionItem key={q.id + q.question} {...q} />
      ))}
    </div>
  );
}
