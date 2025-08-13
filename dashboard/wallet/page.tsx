"use client";

import { Card, CardHeader, CardBody, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, RefreshCw } from "lucide-react";

export default function WalletPage() {
  const tokens = [
    { name: "Bitcoin", symbol: "BTC", balance: 0.5234, price: 29500, change: +2.35 },
    { name: "Ethereum", symbol: "ETH", balance: 4.12, price: 1850, change: -1.12 },
    { name: "USDT", symbol: "USDT", balance: 1500, price: 1, change: 0.0 },
  ];

  const transactions = [
    { type: "Sent", asset: "BTC", amount: "0.1 BTC", status: "Completed", date: "Aug 10, 2025" },
    { type: "Received", asset: "ETH", amount: "1.5 ETH", status: "Pending", date: "Aug 9, 2025" },
    { type: "Swapped", asset: "USDT → BTC", amount: "500 USDT", status: "Completed", date: "Aug 8, 2025" },
  ];

  return (
    <motion.div
      className="p-6 text-white space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Wallet Overview */}
      <Card className="bg-gradient-to-br from-purple-800 to-indigo-900 border border-purple-500/20">
        <CardHeader className="text-lg font-bold">Wallet Balance</CardHeader>
        <CardBody>
          <h1 className="text-4xl font-extrabold">$15,342.89</h1>
          <p className="text-gray-300">≈ 0.5234 BTC + other assets</p>
        </CardBody>
      </Card>

      {/* Token List */}
      <Card className="bg-gray-900 border border-gray-800">
        <CardHeader className="text-lg font-bold">Your Assets</CardHeader>
        <CardBody>
          <Table aria-label="Assets Table" className="text-white">
            <TableHeader>
              <TableColumn>ASSET</TableColumn>
              <TableColumn>BALANCE</TableColumn>
              <TableColumn>PRICE</TableColumn>
              <TableColumn>CHANGE</TableColumn>
            </TableHeader>
            <TableBody>
              {tokens.map((token, index) => (
                <TableRow key={index}>
                  <TableCell>{token.name} ({token.symbol})</TableCell>
                  <TableCell>{token.balance}</TableCell>
                  <TableCell>${token.price.toLocaleString()}</TableCell>
                  <TableCell className={token.change >= 0 ? "text-green-400" : "text-red-400"}>
                    {token.change >= 0 ? `+${token.change}%` : `${token.change}%`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button className="bg-green-600 hover:bg-green-500" startContent={<ArrowUpRight />}>Send</Button>
        <Button className="bg-blue-600 hover:bg-blue-500" startContent={<ArrowDownLeft />}>Receive</Button>
        <Button className="bg-purple-600 hover:bg-purple-500" startContent={<RefreshCw />}>Swap</Button>
      </div>

      {/* Transaction History */}
      <Card className="bg-gray-900 border border-gray-800">
        <CardHeader className="text-lg font-bold">Recent Transactions</CardHeader>
        <CardBody>
          <Table aria-label="Transaction Table" className="text-white">
            <TableHeader>
              <TableColumn>TYPE</TableColumn>
              <TableColumn>ASSET</TableColumn>
              <TableColumn>AMOUNT</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>DATE</TableColumn>
            </TableHeader>
            <TableBody>
              {transactions.map((tx, index) => (
                <TableRow key={index}>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>{tx.asset}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>
                    <Chip color={tx.status === "Completed" ? "success" : "warning"}>{tx.status}</Chip>
                  </TableCell>
                  <TableCell>{tx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </motion.div>
  );
}
