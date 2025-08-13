"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const cryptoStats = [
    { name: "Bitcoin", price: "$64,300", change: "+2.3%" },
    { name: "Ethereum", price: "$3,200", change: "+1.1%" },
    { name: "Solana", price: "$150", change: "-0.4%" },
  ];

  const { toast } = useToast();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"
        animate={{ opacity: [0.6, 0.8, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Welcome to CryptoView
        </motion.h1>

        <p className="text-lg text-zinc-400 text-center mb-10 max-w-xl">
          Track, trade, and stay ahead in the world of cryptocurrency with real-time stats and alerts.
        </p>

        {/* Crypto Stats */}
        <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
          {cryptoStats.map((coin, index) => (
            <motion.div
              key={coin.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-zinc-800/60 backdrop-blur border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-xl">{coin.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{coin.price}</p>
                  <p
                    className={
                      coin.change.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {coin.change}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sign In Button */}
        <Button
          onClick={handleRedirect}
          className="mt-10 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
