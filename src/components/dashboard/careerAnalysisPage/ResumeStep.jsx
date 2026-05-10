"use client";

import { useState, useRef } from "react";
import { useWorkflowStore } from "@/store/workflowStore";
import {
  AIStatusLoader,
  SectionHeader,
  StepContainer,
  WorkflowActions,
} from "./ui";
import {
  LuFileCheck,
  LuShieldCheck,
  LuRefreshCw,
  LuBriefcase,
  LuCode,
  LuArrowRight,
} from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiUploadCloud2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { uploadToCloudinary } from "@/lib/upload/cloudinary";
import { parseResume } from "@/services/resume.service";
import { FaLaptopCode } from "react-icons/fa6";

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

// ─── ParsedResumeView ──────────────────────────────────────────────────────────
function ParsedResumeView({ parsedData, onContinue, onRetry }) {
  const { skills = [], experience = [], projects = [] } = parsedData;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LuFileCheck size={20} className="text-primary" />
          <h3 className="font-headline-md text-headline-md text-primary">
            Resume Parsed Successfully
          </h3>
        </div>
        <button
          onClick={onRetry}
          className="flex items-center gap-2 font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors"
        >
          <LuRefreshCw size={14} />
          Upload different file
        </button>
      </div>

      {/* Skills */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded">
        <div className="flex items-center gap-2 mb-4">
          <LuCode size={16} className="text-primary" />
          <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
            Skills
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-surface-container font-mono-detail text-mono-detail text-on-surface border border-outline-variant/30"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      {experience.length > 0 && (
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 space-y-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <LuBriefcase size={16} className="text-primary" />
            <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
              Experience
            </span>
          </div>
          {experience.map((exp, i) => (
            <div
              key={i}
              className="border-l-2 border-outline-variant/30 pl-4 space-y-1"
            >
              <p className="font-body-md font-semibold text-on-surface">
                {exp.role}
              </p>
              <p className="font-mono-detail text-mono-detail text-on-surface-variant">
                {exp.company}
              </p>
              {exp.description?.map((d, j) => (
                <p
                  key={j}
                  className="text-body-md text-on-surface-variant text-sm"
                >
                  • {d}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 space-y-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <FaLaptopCode size={16} className="text-primary" />
            <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
              Projects
            </span>
          </div>
          {projects.map((p, i) => (
            <div
              key={i}
              className="border-l-2 border-outline-variant/30 pl-4 space-y-1"
            >
              <p className="font-body-md font-semibold text-on-surface">
                {p.name}
              </p>
              <p className="text-body-md text-on-surface-variant text-sm">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {p.techStack?.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-surface-container font-mono-detail text-[10px] text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <WorkflowActions
        nextLabel="Continue to Job Profile"
        nextIcon={LuArrowRight}
        onNext={onContinue}
      />
    </div>
  );
}

// ─── ParseFailedView ───────────────────────────────────────────────────────────
function ParseFailedView({ onRetry }) {
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center">
      <LuShieldCheck size={48} className="text-error/40" />
      <div className="space-y-2">
        <h3 className="font-headline-md text-headline-md text-error">
          Parsing Failed
        </h3>
        <p className="text-on-surface-variant text-body-md max-w-sm">
          We couldn{"'"}t extract data from your resume. Please try a different
          file or format.
        </p>
      </div>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-mono-label text-mono-label hover:bg-surface-container transition-colors"
      >
        <LuRefreshCw size={16} />
        Try Again
      </button>
    </div>
  );
}

// ─── DropZone ──────────────────────────────────────────────────────────────────
function DropZone({ file, onFile }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    onFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`mt-4 border-2 border-dashed p-16 cursor-pointer transition-all duration-300 rounded ${
        isDragging || file
          ? "border-primary bg-surface-container-low"
          : "border-outline-variant/50 hover:border-primary/50 hover:bg-surface-container-low"
      } `}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0])}
      />
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 bg-surface-container-high flex items-center justify-center rounded">
          {file ? (
            <LuFileCheck size={40} className="text-primary" />
          ) : (
            <RiUploadCloud2Line size={40} className="text-primary" />
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
  );
}

// ─── ResumeStep ────────────────────────────────────────────────────────────────
export default function ResumeStep() {
  const { setResume } = useWorkflowStore();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | uploading | parsed | failed
  const [parsedData, setParsedData] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file!!");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be under 10mb!!");
    }
    setStatus("uploading");
    try {
      const fileUrl = await uploadToCloudinary(file);

      setStatus("parsing");
      const res = await parseResume(fileUrl);
      const resume = res.data.data;

      setParsedData(resume.parsedData);
      setStatus("parsed");
    } catch {
      setStatus("failed");
    }
  };

  const handleContinue = () => {
    setResume({ parsedData, title: file?.name });
  };

  const handleRetry = () => {
    setFile(null);
    setParsedData(null);
    setStatus("idle");
  };

  if (status === "uploading" || status === "parsing")
    return <AIStatusLoader message="Parsing your resume..." />;
  if (status === "failed") return <ParseFailedView onRetry={handleRetry} />;
  if (status === "parsed")
    return (
      <ParsedResumeView
        parsedData={parsedData}
        onContinue={handleContinue}
        onRetry={handleRetry}
      />
    );

  return (
    <div>
      <StepContainer>
        <SectionHeader
          tag="Engine Initialization"
          title="Upload your professional blueprint"
          description="Our AI requires your current career history to generate a precision gap analysis. We support PDF, DOCX, and TXT formats."
        />

        <DropZone file={file} onFile={setFile} />

        <div className="pt-10 flex items-center justify-between border-t border-outline-variant/20 mt-10 ">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <MdOutlineVerifiedUser size={18} />
            <span className="font-mono-detail text-mono-detail">
              ISO 27001 Certified Processing
            </span>
          </div>
          {/* <button className="px-8 py-3 border border-primary text-primary font-mono-label text-mono-label hover:bg-surface-container-high transition-colors">
            Import from LinkedIn
          </button> */}
        </div>
      </StepContainer>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap mt-10">
        {INFO_CARDS.map(({ tag, title, description }) => (
          <div
            key={tag}
            className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded"
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
        nextLabel="Parse Resume"
        nextIcon={LuArrowRight}
        nextDisabled={!file}
        onNext={handleUpload}
      />
    </div>
  );
}
