"use client";

import { getInitials, timeAgo } from "@/lib/helper/dashboard";
import Image from "next/image";
import Link from "next/link";
import { MdPeople, MdAutoAwesome, MdMap, MdArrowForward } from "react-icons/md";

const TABS = [
  { key: "users", label: "Latest Users", icon: MdPeople },
  { key: "analyses", label: "Analyses", icon: MdAutoAwesome },
  { key: "roadmaps", label: "Roadmaps", icon: MdMap },
];

function Avatar({ avatar, name, size = 8 }) {
  if (avatar) {
    return (
      <Image
        src={avatar}
        alt={name}
        width={32}
        height={32}
        className={`w-${size} h-${size} rounded-full border border-outline-variant/20 object-cover`}
      />
    );
  }
  return (
    <div
      className={`w-${size} h-${size} rounded-full bg-primary/10 border border-outline-variant/20 flex items-center justify-center text-[10px] font-bold text-primary`}
    >
      {getInitials(name)}
    </div>
  );
}

function UsersTable({ users }) {
  return (
    <table className="w-full text-left">
      <thead className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] border-b border-outline-variant/20">
        <tr>
          <th className="px-8 py-5 font-medium">Identity</th>
          <th className="px-8 py-5 font-medium">Role</th>
          <th className="px-8 py-5 font-medium">Joined</th>
          <th className="px-8 py-5 font-medium">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/10">
        {users?.map((user) => (
          <tr
            key={user._id}
            className="hover:bg-surface-container-low transition-colors group"
          >
            <td className="px-8 py-4">
              <div className="flex items-center gap-3">
                <Avatar avatar={user.avatar} name={user.name} />
                <div>
                  <p className="text-sm font-semibold text-on-surface">
                    {user.name}
                  </p>
                  <p className="text-xs text-on-surface-variant font-mono-detail">
                    {user.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-8 py-4">
              <span
                className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  user.role === "admin"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface"
                }`}
              >
                {user.role}
              </span>
            </td>
            <td className="px-8 py-4 text-xs text-on-surface-variant font-mono-detail">
              {timeAgo(user.createdAt)}
            </td>
            <td className="px-8 py-4">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                New
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function AnalysesTable({ analyses }) {
  return (
    <table className="w-full text-left">
      <thead className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] border-b border-outline-variant/20">
        <tr>
          <th className="px-8 py-5 font-medium">User</th>
          <th className="px-8 py-5 font-medium">Job Profile</th>
          <th className="px-8 py-5 font-medium">Score</th>
          <th className="px-8 py-5 font-medium">When</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/10">
        {analyses?.map((item) => (
          <tr
            key={item._id}
            className="hover:bg-surface-container-low transition-colors"
          >
            <td className="px-8 py-4">
              <div className="flex items-center gap-3">
                <Avatar avatar={item.userId?.avatar} name={item.userId?.name} />
                <div>
                  <p className="text-sm font-semibold text-on-surface">
                    {item.userId?.name}
                  </p>
                  <p className="text-xs text-on-surface-variant font-mono-detail">
                    {item.userId?.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-8 py-4 text-sm text-on-surface">
              {item.jobProfileId?.title}
            </td>
            <td className="px-8 py-4">
              <span
                className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  item.score >= 70
                    ? "bg-success-surface text-success-text"
                    : item.score >= 40
                      ? "bg-warning-surface text-warning-text"
                      : "bg-error-surface text-error-text"
                }`}
              >
                {item.score}%
              </span>
            </td>
            <td className="px-8 py-4 text-xs text-on-surface-variant font-mono-detail">
              {timeAgo(item.createdAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RoadmapsTable({ roadmaps }) {
  return (
    <table className="w-full text-left">
      <thead className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] border-b border-outline-variant/20">
        <tr>
          <th className="px-8 py-5 font-medium">User</th>
          <th className="px-8 py-5 font-medium">Roadmap</th>
          <th className="px-8 py-5 font-medium">Progress</th>
          <th className="px-8 py-5 font-medium">When</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/10">
        {roadmaps?.map((item) => (
          <tr
            key={item._id}
            className="hover:bg-surface-container-low transition-colors"
          >
            <td className="px-8 py-4">
              <div className="flex items-center gap-3">
                <Avatar avatar={item.userId?.avatar} name={item.userId?.name} />
                <div>
                  <p className="text-sm font-semibold text-on-surface">
                    {item.userId?.name}
                  </p>
                  <p className="text-xs text-on-surface-variant font-mono-detail">
                    {item.userId?.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-8 py-4 max-w-xs">
              <p className="text-sm text-on-surface truncate">{item.title}</p>
              <p className="text-xs text-on-surface-variant font-mono-detail">
                {item.category}
              </p>
            </td>
            <td className="px-8 py-4">
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${item.progress?.percentage ?? 0}%` }}
                  />
                </div>
                <span className="text-xs font-mono-detail text-on-surface-variant">
                  {item.progress?.percentage ?? 0}%
                </span>
              </div>
            </td>
            <td className="px-8 py-4 text-xs text-on-surface-variant font-mono-detail">
              {timeAgo(item.createdAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ActivityFeed({
  recentActivity,
  loading,
  activeTab,
  onTabChange,
}) {
  const { recentUsers, recentAnalyses, recentRoadmaps } = recentActivity ?? {};

  return (
    <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden shadow-sm">
      {/* Tab Bar */}
      <div className="border-b border-outline-variant/20 px-8 flex bg-surface-container-low">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`flex items-center gap-2 px-6 py-5 border-b-2 font-mono-label text-xs tracking-widest transition-colors ${
                activeTab === tab.key
                  ? "border-primary text-on-surface font-bold"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="p-8 space-y-3 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-14 bg-surface-container-high rounded-lg"
              />
            ))}
          </div>
        ) : (
          <>
            {activeTab === "users" && <UsersTable users={recentUsers} />}
            {activeTab === "analyses" && (
              <AnalysesTable analyses={recentAnalyses} />
            )}
            {activeTab === "roadmaps" && (
              <RoadmapsTable roadmaps={recentRoadmaps} />
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-outline-variant/20 flex justify-center bg-surface-container-lowest">
        <Link
          href={`/admin/${activeTab}`}
          className="flex items-center gap-1.5 text-xs font-mono-label text-on-surface-variant hover:text-on-surface tracking-widest transition-colors font-bold uppercase group"
        >
          View All {TABS.find((t) => t.key === activeTab)?.label} Records
          <MdArrowForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
