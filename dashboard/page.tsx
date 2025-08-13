"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, DollarSign, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", price: 32000 },
  { name: "Tue", price: 32500 },
  { name: "Wed", price: 31700 },
  { name: "Thu", price: 33000 },
  { name: "Fri", price: 34200 },
  { name: "Sat", price: 33900 },
  { name: "Sun", price: 34500 },
];

export default function DashboardHome() {
  const stats = [
    {
      title: "Total Balance",
      value: "$45,231",
      change: "+12.5%",
      icon: DollarSign,
      up: true,
    },
    {
      title: "24h Change",
      value: "+$5,230",
      change: "+3.2%",
      icon: ArrowUpRight,
      up: true,
    },
    {
      title: "Weekly Volume",
      value: "$320,000",
      change: "-1.2%",
      icon: Activity,
      up: false,
    },
  ];

  const transactions = [
    { id: 1, name: "Bitcoin", type: "Buy", amount: "+0.5 BTC", price: "$16,000", date: "2h ago" },
    { id: 2, name: "Ethereum", type: "Sell", amount: "-1.2 ETH", price: "$3,200", date: "5h ago" },
    { id: 3, name: "USDT", type: "Buy", amount: "+2,000 USDT", price: "$2,000", date: "1d ago" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900 rounded-xl p-5 border border-gray-800 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
              </div>
              <stat.icon className="h-6 w-6 text-purple-400" />
            </div>
            <p
              className={`mt-3 text-sm font-medium ${
                stat.up ? "text-green-400" : "text-red-400"
              }`}
            >
              {stat.change}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Bitcoin Price (7d)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#a855f7"
                strokeWidth={3}
                dot={{ r: 4, fill: "#a855f7" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div>
                <p className="font-semibold">{tx.name}</p>
                <p className="text-gray-400 text-sm">{tx.type} • {tx.date}</p>
              </div>
              <div className="text-right">
                <p className={tx.type === "Buy" ? "text-green-400" : "text-red-400"}>
                  {tx.amount}
                </p>
                <p className="text-gray-400 text-sm">{tx.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
