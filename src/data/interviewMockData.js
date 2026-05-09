export const TECHNICAL_QUESTIONS = [
  {
    id: "Q1",
    question:
      "Explain the difference between authentication and authorization.",
    intent:
      "To verify the candidate understands fundamental security principles and the distinction between identity and permissions.",
    answer:
      "Authentication is confirming who a user is (e.g., login credentials), while authorization is determining what they're allowed to do (e.g., admin vs. guest roles).",
  },
  {
    id: "Q2",
    question: "What problem does useEffect solve in React?",
    intent:
      "To assess the candidate's mastery of React's lifecycle and side-effect management in functional components.",
    answer:
      "useEffect allows functional components to perform side effects—like data fetching or subscriptions—that were previously handled in lifecycle methods like componentDidMount.",
  },
];

export const BEHAVIORAL_QUESTIONS = [
  {
    id: "Q1",
    question: "Tell me about a time you solved a difficult bug.",
    intent:
      "To observe problem-solving methodology, persistence, and the ability to articulate technical challenges to others.",
    answer:
      "Use the STAR method: Describe a race condition in the checkout flow, explain the logging tools used to isolate it, and highlight the architectural fix that prevented recurrence.",
  },
  {
    id: "Q2",
    question: "How do you handle tight deadlines during a project?",
    intent:
      "To evaluate time management skills, prioritization under pressure, and communication with stakeholders during crunch periods.",
    answer:
      "Focus on ruthless prioritization and transparency. Explain how you break down tasks and communicate early if a deliverable's scope needs adjustment to meet the core deadline.",
  },
];

export const BOTTOM_FEATURES = [
  "Personalized interview preparation",
  "Technical and behavioral questions",
  "AI-generated answer guidance",
  "Role-specific preparation flow",
];
