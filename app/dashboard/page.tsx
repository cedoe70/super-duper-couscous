"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const data = [
    { name: "Day 1", value: 65000 },
    { name: "Day 2", value: 65200 },
    { name: "Day 3", value: 64800 },
    { name: "Day 4", value: 65500 },
    { name: "Day 5", value: 66000 },
    { name: "Day 6", value: 65800 },
    { name: "Day 7", value: 66400 },
  ];

  return (
    <div className="p-6 text-white bg-gradient-to-br from-zinc-900 via-black to-zinc-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Card className="bg-zinc-800/60 backdrop-blur border-zinc-700">
        <CardHeader>
          <CardTitle className="text-lg font-semibold mb-4">
            Bitcoin Price (7d)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            {/* @ts-expect-error Recharts types not matching JSX.Element in TS 5+ */}
            <ResponsiveContainer width="100%" height="100%">
              {/* @ts-expect-error Recharts types not matching JSX.Element in TS 5+ */}
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
