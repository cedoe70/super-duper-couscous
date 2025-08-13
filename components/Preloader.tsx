"use client";

import { useEffect, useState } from "react";
import { Bitcoin } from "lucide-react";
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

const USDTIcon = () => (
  <Image
    src="/usdt.svg"
    alt="Tether USDT"
    width={48}
    height={48}
    className="animate-spin-slow"
  />
);

const cryptoIcons: (() => JSX.Element)[] = [Bitcoin as any, EthereumIcon, USDTIcon];

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
          {/* Lucide icons need props, Image icons don't */}
          {Icon === Bitcoin ? (
            <Bitcoin size={48} className="text-white" />
          ) : (
            <Icon />
          )}
        </div>
      ))}
    </div>
  );
}
