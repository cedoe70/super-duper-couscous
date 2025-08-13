"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ArrowDownLeft, Send, User } from "lucide-react";

export default function WalletPage() {
  const balances = [
    { currency: "Bitcoin", symbol: "BTC", balance: 1.245, value: "$42,300", icon: "🪙" },
    { currency: "Ethereum", symbol: "ETH", balance: 10.5, value: "$16,200", icon: "💎" },
    { currency: "USDT", symbol: "USDT", balance: 2500, value: "$2,500", icon: "💵" },
  ];

  const transactions = [
    { type: "receive", currency: "BTC", amount: 0.25, value: "$8,500", date: "Aug 10, 2025" },
    { type: "send", currency: "ETH", amount: 1.5, value: "$2,250", date: "Aug 8, 2025" },
    { type: "receive", currency: "USDT", amount: 500, value: "$500", date: "Aug 5, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white p-8">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 flex items-center gap-2"
      >
        <Wallet className="w-8 h-8 text-yellow-400" /> My Wallet
      </motion.h1>

      {/* Wallet Balances */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {balances.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg hover:border-yellow-500 transition">
              <CardHeader className="flex justify-between items-center">
                <span className="text-lg font-semibold">{item.currency}</span>
                <span className="text-2xl">{item.icon}</span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{item.symbol}</p>
                <p className="text-xl font-bold">{item.balance}</p>
                <p className="text-green-400">{item.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Send Form */}
      <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg mb-10">
        <CardHeader className="text-xl font-semibold flex items-center gap-2">
          <Send className="w-5 h-5 text-blue-400" /> Quick Send Crypto
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <Input placeholder="Recipient address" className="bg-gray-800 border-gray-600" />
          <Input placeholder="Amount" type="number" className="bg-gray-800 border-gray-600" />
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
            <Send className="w-4 h-4" /> Send
          </Button>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg">
        <CardHeader className="text-xl font-semibold">Transaction History</CardHeader>
        <CardContent>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-2">Type</th>
                <th>Currency</th>
                <th>Amount</th>
                <th>Value</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-800 transition-colors"
                >
                  <td className="py-2 flex items-center gap-2">
                    {tx.type === "receive" ? (
                      <ArrowDownLeft className="text-green-400 w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="text-red-400 w-4 h-4" />
                    )}
                    <span className="capitalize">{tx.type}</span>
                  </td>
                  <td>{tx.currency}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.value}</td>
                  <td className="text-gray-400">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
