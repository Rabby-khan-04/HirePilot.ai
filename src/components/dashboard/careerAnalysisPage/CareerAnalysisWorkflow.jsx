"use client";

import { useEffect } from "react";
import { useWorkflowStore } from "@/store/workflowStore";
import WorkflowStepper from "./WorkflowStepper";
import ResumeStep from "./ResumeStep";
import JobProfileStep from "./JobProfileStep";
import AnalysisStep from "./AnalysisStep";
import RoadmapStep from "./RoadmapStep";

const STEP_COMPONENTS = {
  1: ResumeStep,
  2: JobProfileStep,
  3: AnalysisStep,
  4: RoadmapStep,
};

export default function CareerAnalysisWorkflow() {
  const activeStep = useWorkflowStore((s) => s.activeStep);
  const ActiveStepComponent = STEP_COMPONENTS[activeStep];

  return (
    <section className="flex-1 px-margin-page py-section-padding">
      <div className="">
        <WorkflowStepper />
        <ActiveStepComponent />
      </div>
    </section>
  );
}
