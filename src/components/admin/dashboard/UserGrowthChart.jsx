"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdTrendingUp } from "react-icons/md";

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
          users
        </span>
      </p>
    </div>
  );
}

export default function UserGrowthChart({
  userChart,
  chartPeriod,
  onPeriodChange,
  loading,
}) {
  const chart = userChart?.chart ?? [];

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MdTrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-headline-md text-xl text-on-surface">
              Platform Growth
            </h4>
            <p className="text-xs text-on-surface-variant font-mono-detail">
              User registrations over time
            </p>
          </div>
        </div>

        <Select value={chartPeriod} onValueChange={onPeriodChange}>
          <SelectTrigger className="w-32 bg-transparent border border-outline-variant/40 rounded-lg font-mono-label text-xs text-on-surface focus:ring-0 h-9">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week" className="font-mono-label text-xs">
              WEEK
            </SelectItem>
            <SelectItem value="month" className="font-mono-label text-xs">
              MONTH
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="h-64 bg-surface-container-high rounded-lg animate-pulse" />
      ) : (
        <ResponsiveContainer width="100%" height={256}>
          <AreaChart
            data={chart}
            margin={{ top: 5, right: 5, bottom: 0, left: -20 }}
          >
            <defs>
              <linearGradient
                id="userGrowthGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.15}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
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
              cursor={{
                stroke: "hsl(var(--primary))",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#userGrowthGradient)"
              dot={false}
              activeDot={{
                r: 4,
                fill: "hsl(var(--primary))",
                stroke: "hsl(var(--surface))",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
