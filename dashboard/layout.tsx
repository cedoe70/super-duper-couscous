"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Home,
  Wallet,
  Send,
  Settings,
  BarChart,
  LogOut,
  Bell,
  Search,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Wallet", icon: Wallet, href: "/dashboard/wallet" },
  { name: "Transactions", icon: BarChart, href: "/dashboard/transactions" },
  { name: "Send Crypto", icon: Send, href: "/dashboard/send" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 240 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col border-r border-gray-800 bg-gray-950 p-4"
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-bold">{!collapsed && "CryptoDash"}</span>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            {collapsed ? "➡" : "⬅"}
          </button>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-800 transition-colors",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.name}</span>}
              </div>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition-colors w-full">
            <LogOut className="h-5 w-5" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950">
          {/* Search */}
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            {/* Notification */}
            <button className="relative hover:scale-110 transition-transform">
              <Bell className="h-6 w-6 text-gray-400" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpg" // Add your image in public folder
                alt="Profile"
                width={35}
                height={35}
                className="rounded-full border border-gray-700"
              />
              <span className="text-sm text-gray-300">John Doe</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
