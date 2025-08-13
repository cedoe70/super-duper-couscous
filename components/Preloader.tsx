// components/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { Bitcoin, Ethereum, Litecoin } from "lucide-react";

const cryptoIcons = [Bitcoin, Ethereum, Litecoin];

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-safeGreen bg-opacity-90 flex items-center justify-center space-x-6 z-50">
      {cryptoIcons.map((Icon, i) => (
        <Icon
          key={i}
          size={48}
          className={`text-white animate-spin-slow delay-[${i * 500}ms]`}
          aria-label="Loading crypto symbol"
        />
      ))}
    </div>
  );
}
