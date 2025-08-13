import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, Plus, Wallet, Coins, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-animated-gradient p-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative space-y-6">
        {/* Top Stat Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Wallet Balance */}
          <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <Wallet className="h-5 w-5 opacity-80 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345.67</div>
              <p className="text-sm opacity-80">+2.5% from last week</p>
            </CardContent>
          </Card>

          {/* Assets */}
          <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Your Assets</CardTitle>
              <Coins className="h-5 w-5 opacity-80 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-sm opacity-80">Active investments</p>
            </CardContent>
          </Card>

          {/* Transactions */}
          <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <Activity className="h-5 w-5 opacity-80 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-sm opacity-80">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Assets Table & Recent Transactions */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Your Assets */}
          <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Your Assets</CardTitle>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-1" /> Add Asset
              </Button>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-300 border-b border-gray-700">
                    <th className="py-2">Asset</th>
                    <th className="py-2">Value</th>
                    <th className="py-2">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-white/5">
                    <td className="py-3">Bitcoin</td>
                    <td>$5,400</td>
                    <td className="text-green-400 flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" /> 4.5%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-white/5">
                    <td className="py-3">Ethereum</td>
                    <td>$3,200</td>
                    <td className="text-red-400 flex items-center">
                      <ArrowDownRight className="h-4 w-4 mr-1" /> -1.8%
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">SafeCoin</td>
                    <td>$2,000</td>
                    <td className="text-green-400 flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" /> 6.2%
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg border border-white/10">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <div>
                  <p className="font-medium">Deposit</p>
                  <p className="text-sm text-gray-400">Aug 10, 2025</p>
                </div>
                <p className="text-green-400 font-semibold">+$500</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <div>
                  <p className="font-medium">Withdrawal</p>
                  <p className="text-sm text-gray-400">Aug 8, 2025</p>
                </div>
                <p className="text-red-400 font-semibold">-$200</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Purchase BTC</p>
                  <p className="text-sm text-gray-400">Aug 5, 2025</p>
                </div>
                <p className="text-green-400 font-semibold">+$1,200</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
