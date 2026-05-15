"use client";

import { getScoreDistribution } from "@/lib/helper/dashboard";
import {
  MdPeople,
  MdDescription,
  MdAutoAwesome,
  MdBarChart,
} from "react-icons/md";

function SkeletonCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded-xl shadow-sm animate-pulse">
      <div className="h-3 w-24 bg-surface-container-high rounded mb-4" />
      <div className="h-8 w-16 bg-surface-container-high rounded mb-2" />
      <div className="h-3 w-32 bg-surface-container-high rounded" />
    </div>
  );
}

export default function StatCards({ overview, loading }) {
  if (loading || !overview) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    );
  }

  const { users, resumes, analyses } = overview;
  const dist = getScoreDistribution(analyses.scoreDistribution, analyses.total);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {/* Users */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded-xl shadow-sm group hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MdPeople className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
              Total Users
            </span>
          </div>
          <span className="text-success font-mono-label text-xs font-bold bg-success/10 px-2 py-0.5 rounded-full">
            +{users.newThisWeek} this week
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-headline-lg text-4xl text-on-surface">
              {users.total.toLocaleString()}
            </h3>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant mt-1">
              {users.newThisMonth} new this month
            </p>
          </div>
          <div className="w-24 h-12 flex items-end gap-1">
            {[30, 50, 70, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-sm transition-all ${
                  i === 3
                    ? "bg-primary"
                    : "bg-surface-container-high group-hover:bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resumes */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded-xl shadow-sm group hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MdDescription className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
              Total Resumes
            </span>
          </div>
          <span className="text-on-surface-variant font-mono-label text-xs bg-surface-container-high px-2 py-0.5 rounded-full">
            AVG {resumes.avgScore}%
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-headline-lg text-4xl text-on-surface">
              {resumes.total.toLocaleString()}
            </h3>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant mt-1">
              {resumes.completed} completed
            </p>
          </div>
          <svg
            className="w-24 h-12 stroke-primary/30 group-hover:stroke-primary transition-colors"
            fill="none"
            viewBox="0 0 100 40"
          >
            <path d="M0 35 Q 25 15, 50 25 T 100 5" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* AI Analyses */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded-xl shadow-sm group hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MdAutoAwesome className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
              AI Analyses
            </span>
          </div>
          <span className="font-mono-label text-xs text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-full">
            AVG {analyses.avgScore}%
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-headline-lg text-4xl text-on-surface">
              {analyses.total.toLocaleString()}
            </h3>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant mt-1">
              Best: {analyses.highestScore}%
            </p>
          </div>
          <div className="flex gap-px items-end h-12">
            {[60, 80, 50, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`w-2 rounded-t-sm transition-all ${
                  i === 3
                    ? "bg-primary"
                    : "bg-surface-container-high group-hover:bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Score Distribution */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MdBarChart className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono-label text-mono-label uppercase text-on-surface-variant">
            Score Distribution
          </span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-mono-detail">
            <span className="text-on-surface-variant">Strong (&gt;80%)</span>
            <span className="text-on-surface font-bold">{dist.strong}%</span>
          </div>
          <div className="h-2 bg-surface-container-high w-full overflow-hidden flex rounded-full">
            <div
              className="h-full bg-primary"
              style={{ width: `${dist.strong}%` }}
            />
            <div
              className="h-full bg-primary/40"
              style={{ width: `${dist.moderate}%` }}
            />
            <div
              className="h-full bg-primary/10"
              style={{ width: `${dist.weak}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-mono-detail">
            <span className="text-on-surface-variant">Moderate (50–80%)</span>
            <span className="text-on-surface font-bold">{dist.moderate}%</span>
          </div>
          <div className="flex justify-between text-xs font-mono-detail">
            <span className="text-on-surface-variant">Weak (&lt;50%)</span>
            <span className="text-on-surface font-bold">{dist.weak}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
