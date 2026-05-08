const Features = () => {
  const FEATURES = [
    {
      tag: "Precision Analysis",
      title: "Resume Parsing Engine",
      desc: "Our deep-learning models dissect your experience against 50k+ job descriptions to find exact match percentages.",
    },
    {
      tag: "Adaptive Learning",
      title: "Personalized Roadmaps",
      desc: "We don't just find gaps; we fill them with curated resources and daily engineering challenges tailored to you.",
    },
    {
      tag: "Simulation Lab",
      title: "Mock Interview AI",
      desc: "Practice with our conversational AI that specializes in behavioral and technical system design rounds.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
      {FEATURES.map(({ tag, title, desc }) => (
        <div key={title} className="md:col-span-4">
          <div className="h-full border-l border-primary/20 pl-6 py-4">
            <span className="font-mono-label text-mono-label text-primary/40 uppercase block mb-4">
              {tag}
            </span>

            <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>

            <p className="text-on-surface-variant">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
