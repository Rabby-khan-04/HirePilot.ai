const VECTORS = [
  { id: "01", label: "Resume Understanding" },
  { id: "02", label: "Smart Job Matching" },
  { id: "03", label: "Personalized Recommendations" },
  { id: "04", label: "Adaptive Learning Plans" },
];

export default function AboutNeuralCore() {
  return (
    <section className="px-margin-page py-section-padding bg-primary text-on-primary">
      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg">
              Neural Core Intelligence
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container">
              HirePilot AI combines resume parsing, job-role comparison, skill
              evaluation, and personalized learning systems to create a unified
              career vector for every user.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VECTORS.map((vector) => (
              <div
                key={vector.id}
                className="p-6 bg-white/5 border border-white/10 rounded-lg"
              >
                <h4 className="font-mono-label text-mono-label mb-2 uppercase opacity-50">
                  Vector {vector.id}
                </h4>
                <p className="font-headline-md text-headline-md text-lg">
                  {vector.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
