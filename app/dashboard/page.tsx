"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart as ReLineChart,
  Line as ReLine,
  XAxis as ReXAxis,
  YAxis as ReYAxis,
  Tooltip as ReTooltip,
  ResponsiveContainer as ReResponsiveContainer,
} from "recharts";

// Cast all problematic Recharts components to `any` to skip JSX type errors
const LineChart = ReLineChart as any;
const Line = ReLine as any;
const XAxis = ReXAxis as any;
const YAxis = ReYAxis as any;
const Tooltip = ReTooltip as any;
const ResponsiveContainer = ReResponsiveContainer as any;

export default function DashboardPage() {
  const [data] = useState([
    { name: "Day 1", value: 45000 },
    { name: "Day 2", value: 46000 },
    { name: "Day 3", value: 45500 },
    { name: "Day 4", value: 47000 },
    { name: "Day 5", value: 46500 },
    { name: "Day 6", value: 48000 },
    { name: "Day 7", value: 49000 },
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Bitcoin Price (7d)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
