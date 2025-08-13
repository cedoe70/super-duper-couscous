"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const cryptoIcons = [
  { src: "/bitcoin.svg", alt: "Bitcoin" },
  { src: "/ethereum.svg", alt: "Ethereum" },
  { src: "/litecoin.svg", alt: "Litecoin" },
];

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-safeGreen bg-opacity-90 flex items-center justify-center space-x-6 z-50">
      {cryptoIcons.map((icon, i) => (
        <div
          key={i}
          style={{ animationDelay: `${i * 0.5}s` }}
          className="animate-spin-slow"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
            priority
          />
        </div>
      ))}
    </div>
  );
}
