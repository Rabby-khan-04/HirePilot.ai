// Matches TLearningRoadmap shape from Mongoose schema
export const MOCK_ROADMAP = {
  _id: "rdmp-fe-2024",
  title: "Frontend Engineer Preparation Roadmap",
  duration: "4 Weeks",
  progress: {
    totalTasks: 35,
    completedTasks: 24,
    percentage: 68,
  },
  roadmap: [
    {
      week: 1,
      focus: "React & TypeScript Foundations",
      days: [
        {
          day: 1,
          title: "Advanced React Hooks",
          tasks: [
            {
              _id: "t1",
              text: "Learn useMemo and useCallback",
              resource: "",
              isCompleted: true,
            },
            {
              _id: "t2",
              text: "Practice custom hooks",
              resource: "",
              isCompleted: true,
            },
            {
              _id: "t3",
              text: "Build reusable UI logic",
              resource: "https://react.dev/reference/react/useCallback",
              isCompleted: false,
            },
          ],
        },
        {
          day: 2,
          title: "API Integration",
          tasks: [
            {
              _id: "t4",
              text: "Fetch data with React Query",
              resource: "https://tanstack.com/query",
              isCompleted: false,
            },
          ],
        },
      ],
    },
    {
      week: 2,
      focus: "Performance & Patterns",
      days: [
        {
          day: 1,
          title: "Memoization Deep Dive",
          tasks: [
            {
              _id: "t5",
              text: "Mastering useMemo for heavy computations",
              resource: "",
              isCompleted: false,
            },
            {
              _id: "t6",
              text: "Building custom hooks for API fetching",
              resource: "",
              isCompleted: false,
            },
          ],
        },
        {
          day: 2,
          title: "TypeScript Fundamentals in React",
          tasks: [
            {
              _id: "t7",
              text: "Typing component props and state",
              resource: "",
              isCompleted: true,
            },
            {
              _id: "t8",
              text: "Generic components with TypeScript",
              resource: "",
              isCompleted: false,
            },
          ],
        },
      ],
    },
    {
      week: 3,
      focus: "Advanced Architecture",
      days: [],
    },
    {
      week: 4,
      focus: "Interview Preparation",
      days: [],
    },
  ],
};

export const AI_INSIGHT = {
  quote:
    "You've completed 70% of your foundational tasks. Your resume score for 'Frontend Engineer' has improved by 14 points since starting this week. Keep the momentum.",
  cta: "View Detailed Impact",
};

export const SESSION_STATS = [
  { label: "Estimated Remaining", value: "18.5 hrs" },
  { label: "Skill Velocity", value: "+12%", highlight: true },
  { label: "Saved Resources", value: "12 items" },
];
