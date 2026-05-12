/**
 * @typedef {Object} RoadmapTask
 * @property {string} _id
 * @property {string} text
 * @property {string} resource
 * @property {boolean} isCompleted
 */

/**
 * @typedef {Object} RoadmapDay
 * @property {number} day
 * @property {string} title
 * @property {RoadmapTask[]} tasks
 */

/**
 * @typedef {Object} RoadmapWeek
 * @property {number} week
 * @property {string} focus
 * @property {RoadmapDay[]} days
 */

/**
 * @typedef {Object} RoadmapProgress
 * @property {number} totalTasks
 * @property {number} completedTasks
 * @property {number} percentage
 */

/**
 * @typedef {Object} LearningRoadmap
 * @property {string} _id
 * @property {string} userId
 * @property {string} analysisId
 * @property {string} title
 * @property {string} duration
 * @property {RoadmapWeek[]} roadmap
 * @property {RoadmapProgress} progress
 * @property {string} createdAt
 * @property {string} updatedAt
 */

export const MOCK_ROADMAPS = [
  {
    _id: "rdmp-fe-2024",
    userId: "u1",
    analysisId: "a1",
    title: "Frontend Engineer Interview Preparation",
    duration: "4 Weeks",
    category: "Frontend Developer",
    skills: ["React", "TypeScript", "Next.js"],
    roadmap: [],
    progress: { totalTasks: 35, completedTasks: 24, percentage: 68 },
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    description:
      "Master the core architectural patterns of React, performance optimization techniques, and advanced TypeScript systems for senior-level evaluations.",
  },
  {
    _id: "rdmp-fe-2024",
    userId: "u1",
    analysisId: "a2",
    title: "Distributed Systems Mastery",
    duration: "8 Weeks",
    category: "Backend Systems",
    skills: ["Go", "Kafka", "Redis"],
    roadmap: [],
    progress: { totalTasks: 42, completedTasks: 5, percentage: 12 },
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    description:
      "Comprehensive guide to scaling microservices, implementing message queues, and designing fault-tolerant database schemas.",
  },
  {
    _id: "rdmp-fe-2024",
    userId: "u1",
    analysisId: "a3",
    title: "AI Product Strategy Foundation",
    duration: "2 Weeks",
    category: "Product Management",
    skills: ["LLM Ops", "Product Design"],
    roadmap: [],
    progress: { totalTasks: 18, completedTasks: 17, percentage: 94 },
    updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    description:
      "Learning how to leverage LLMs for product features, managing AI lifecycles, and understanding token-based economics.",
  },
];

export const TRAJECTORY_STATS = [
  { label: "Core Skills", value: "Advanced Interface Architecture" },
  { label: "Velocity", value: "+14% Week-Over-Week" },
  { label: "Precision", value: "0.98 AI-Match Score" },
];
