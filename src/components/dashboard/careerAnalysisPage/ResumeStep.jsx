"use client";

import { useWorkflowStore } from "@/store/workflowStore";
import { useState, useRef } from "react";
import {
  AIStatusLoader,
  SectionHeader,
  StepContainer,
  WorkflowActions,
} from "./ui";
import {
  MdOutlineVerifiedUser,
  MdArrowForward,
  MdOutlineTask,
  MdOutlineUploadFile,
} from "react-icons/md";

const INFO_CARDS = [
  {
    tag: "Parsing Engine",
    title: "99.8% Accuracy",
    description:
      "LLM-driven entity extraction captures nuanced technical skills often missed by traditional ATS.",
  },
  {
    tag: "Privacy Lock",
    title: "Zero-Retention Policy",
    description:
      "Your data is only used for the duration of the analysis session and never used to train global models.",
  },
  {
    tag: "Output Format",
    title: "Technical Schematic",
    description:
      "Transform your standard PDF into a structured JSON-equivalent career map instantly.",
  },
];

export default function ResumeStep() {
  const { setResume } = useWorkflowStore();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef(null);

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleContinue = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      // TODO: call upload API
      // const res = await resumeService.upload(file);
      // setResume(res.data);
      await new Promise((r) => setTimeout(r, 1500)); // placeholder
      setResume({ _id: "mock", title: file.name }); // replace with real data
    } finally {
      setIsProcessing(false);
    }
  };

  if (isProcessing) {
    return <AIStatusLoader message="Parsing your resume..." />;
  }

  return (
    <div>
      <StepContainer>
        <SectionHeader
          tag="Engine Initialization"
          title="Upload your professional blueprint"
          description="Our AI requires your current career history to generate a precision gap analysis. We support PDF, DOCX, and TXT formats."
        />

        {/* Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`mt-4 border-2 border-dashed rounded-xl p-16 cursor-pointer transition-all duration-300 ${
            isDragging
              ? "border-primary bg-surface-container-low"
              : file
                ? "border-primary/50 bg-surface-container-low"
                : "border-outline-variant/50 hover:border-primary/50 hover:bg-surface-container-low"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,.txt"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center transition-transform duration-300 hover:scale-110">
              {file ? (
                <MdOutlineTask size={40} className="text-primary" />
              ) : (
                <MdOutlineUploadFile size={40} className="text-primary" />
              )}
            </div>
            <div className="space-y-2 text-center">
              {file ? (
                <>
                  <p className="font-headline-md text-[20px] text-primary">
                    {file.name}
                  </p>
                  <p className="font-mono-detail text-mono-detail text-on-surface-variant">
                    Click to change file
                  </p>
                </>
              ) : (
                <>
                  <p className="font-headline-md text-[24px] text-primary">
                    Drop resume here or{" "}
                    <span className="underline">browse files</span>
                  </p>
                  <p className="font-mono-detail text-mono-detail text-on-surface-variant uppercase">
                    Max file size 10MB • Secure encrypted upload
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="pt-10 flex items-center justify-between border-t border-outline-variant/20 mt-10">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <MdOutlineVerifiedUser size={18} />
            <span className="font-mono-detail text-mono-detail">
              ISO 27001 Certified Processing
            </span>
          </div>
          <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-surface-container-high transition-colors">
            Import from LinkedIn
          </button>
        </div>
      </StepContainer>

      {/* Info Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap mt-10">
        {INFO_CARDS.map(({ tag, title, description }) => (
          <div
            key={tag}
            className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-lg"
          >
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-4">
              {tag}
            </span>
            <p className="text-body-md text-on-surface font-medium mb-2">
              {title}
            </p>
            <p className="text-mono-detail text-on-surface-variant">
              {description}
            </p>
          </div>
        ))}
      </div>

      <WorkflowActions
        nextLabel="Continue"
        nextIcon={MdArrowForward}
        nextDisabled={!file}
        onNext={handleContinue}
      />
    </div>
  );
}
