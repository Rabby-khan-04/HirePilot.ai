import InterviewPrepCard from "./InterviewPrepCard";
import LearningRoadmapCard from "./LearningRoadmapCard";
import ResumeScoreCard from "./Resumescorecard";
import SkillGapCard from "./SkillGapCard";

export default function ResumeBentoGrid() {
  return (
    <div className="relative w-full h-full max-w-2xl grid grid-cols-6 grid-rows-6 gap-card-gap">
      <ResumeScoreCard />
      <SkillGapCard />
      <InterviewPrepCard />
      <LearningRoadmapCard />
    </div>
  );
}
