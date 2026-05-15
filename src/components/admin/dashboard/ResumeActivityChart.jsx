"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { MdInsertDriveFile } from "react-icons/md";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 shadow-lg">
      <p className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="font-headline-md text-lg text-on-surface font-bold">
        {payload[0].value.toLocaleString()}
        <span className="text-xs text-on-surface-variant font-normal ml-1">
          uploads
        </span>
      </p>
    </div>
  );
}

export default function ResumeActivityChart({ resumeChart, loading }) {
  const chart = resumeChart?.chart ?? [];
  const lastIndex = chart.length - 1;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MdInsertDriveFile className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-headline-md text-xl text-on-surface">
              Resume Activity
            </h4>
            <p className="text-xs text-on-surface-variant font-mono-detail">
              Uploads per period
            </p>
          </div>
        </div>
        <div className="flex gap-4 font-mono-label text-[10px] text-on-surface-variant uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary rounded-full" /> Current
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary/25 rounded-full" /> Previous
          </span>
        </div>
      </div>

      {loading ? (
        <div className="h-64 bg-surface-container-high rounded-lg animate-pulse" />
      ) : (
        <ResponsiveContainer width="100%" height={256}>
          <BarChart
            data={chart}
            margin={{ top: 5, right: 5, bottom: 0, left: -20 }}
            barSize={28}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--outline-variant))"
              strokeOpacity={0.3}
              vertical={false}
            />
            <XAxis
              dataKey="label"
              tick={{
                fontSize: 10,
                fontFamily: "monospace",
                fill: "hsl(var(--on-surface-variant))",
              }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{
                fontSize: 10,
                fontFamily: "monospace",
                fill: "hsl(var(--on-surface-variant))",
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "hsl(var(--primary))", fillOpacity: 0.05 }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {chart.map((_, i) => (
                <Cell
                  key={i}
                  fill={
                    i === lastIndex
                      ? "hsl(var(--primary))"
                      : "hsl(var(--primary) / 0.25)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
