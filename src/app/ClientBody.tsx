"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased bg-[#191a1c]";
  }, []);

  return <body className="antialiased bg-[#191a1c]">{children}</body>;
}
