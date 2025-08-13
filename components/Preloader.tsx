"use client";

import { useEffect, useState } from "react";
import { Bitcoin, Litecoin } from "lucide-react";
import Image from "next/image";

const EthereumIcon = () => (
  <Image
    src="/ethereum.svg"
    alt="Ethereum"
    width={48}
    height={48}
    className="animate-spin-slow"
  />
);

const cryptoIcons = [Bitcoin, EthereumIcon, Litecoin];

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
        <div
          key={i}
          style={{ animationDelay: `${i * 0.5}s` }}
          className="animate-spin-slow"
        >
          {typeof Icon === "function" ? (
            <Icon />
          ) : (
            <Icon size={48} className="text-white" />
          )}
        </div>
      ))}
    </div>
  );
}
