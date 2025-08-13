"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// 👇 TypeScript JSX strictness bypass
const RC = ResponsiveContainer as any;
const LC = LineChart as any;
const LX = XAxis as any;
const LY = YAxis as any;
const TT = Tooltip as any;
const LN = Line as any;

export default function DashboardPage() {
  const data = [
    { name: "Day 1", price: 64000 },
    { name: "Day 2", price: 64500 },
    { name: "Day 3", price: 65000 },
    { name: "Day 4", price: 64800 },
    { name: "Day 5", price: 65200 },
    { name: "Day 6", price: 65500 },
    { name: "Day 7", price: 66000 },
  ];

  return (
    <div className="p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Dashboard
      </motion.h1>

      <Card className="bg-zinc-800/60 backdrop-blur border-zinc-700">
        <CardHeader>
          <CardTitle>Bitcoin Price (7d)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <RC width="100%" height="100%">
              <LC data={data}>
                <LX dataKey="name" stroke="#888" />
                <LY stroke="#888" />
                <TT />
                <LN type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} />
              </LC>
            </RC>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
