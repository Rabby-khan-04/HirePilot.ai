"use client";

import {
  MdDescription,
  MdAnalytics,
  MdAutoStories,
  MdRecordVoiceOver,
} from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import ResumeAnalysisImg from "@/../public/assets/image/resume_analysis.png";
import Image from "next/image";

const FEATURES = [
  {
    icon: MdDescription,
    title: "AI Resume Analysis",
    description:
      "Deep semantic analysis of your resume against thousands of production-level job descriptions to ensure you pass every ATS check.",
    colSpan: "md:col-span-2",
    hasImage: true,
    iconHover: "group-hover:scale-110",
  },
  {
    icon: MdAnalytics,
    title: "Skill Gap Detection",
    description:
      "Identify the exact missing technologies and soft skills required for your dream roles.",
    colSpan: "",
    hasImage: false,
    iconHover: "group-hover:rotate-12",
  },
  {
    icon: MdAutoStories,
    title: "Study Plans",
    description: "Automated curriculum generation based on identified gaps.",
    colSpan: "",
    hasImage: false,
    iconHover: "group-hover:-rotate-12",
  },
  {
    icon: MdRecordVoiceOver,
    title: "Interview Prep",
    description: "Personalized technical and behavioral question sets.",
    colSpan: "",
    hasImage: false,
    iconHover: "group-hover:-translate-y-2",
  },
  {
    icon: TfiStatsUp,
    title: "Progress Tracking",
    description: "Watch your readiness score grow as you complete milestones.",
    colSpan: "",
    hasImage: false,
    iconHover: "group-hover:translate-y-2",
  },
];

export default function AboutFeatureGrid() {
  return (
    <section className="px-margin-page py-section-padding">
      <div className=" space-y-12">
        <div className="flex justify-between items-end">
          <h2 className="font-headline-lg text-headline-lg max-w-xl">
            Everything You Need To Improve Your Career Readiness
          </h2>
          <span className="font-mono-label text-mono-label text-on-primary-container hidden md:block">
            SYSTEM_MODULES_06
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.colSpan} border border-outline-variant/30 p-8 rounded-lg bg-surface flex flex-col justify-between hover:border-primary transition-colors group`}
              >
                <div className="space-y-4">
                  <Icon
                    className={`text-primary text-4xl transition-transform ${feature.iconHover}`}
                  />
                  <h3 className="font-headline-md text-headline-md">
                    {feature.title}
                  </h3>
                  <p className="text-on-surface-variant max-w-md">
                    {feature.description}
                  </p>
                </div>
                {feature.hasImage && (
                  <div className="mt-8 rounded overflow-hidden w-full h-48 bg-surface-container border border-outline-variant/20 flex items-center justify-center">
                    <Image
                      src={ResumeAnalysisImg}
                      alt="Resum eanalysis preview"
                      className="w-full h-full object-cover group-hover:scale-110 duration-200"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
