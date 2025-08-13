"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add actual login logic
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Login to access your crypto dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            className="text-purple-600 font-medium cursor-pointer hover:underline"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
}
