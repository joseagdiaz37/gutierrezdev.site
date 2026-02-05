"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased bg-[#191a1c]";
  }, []);

  return (
    <body className="antialiased bg-[#191a1c]">
      <LanguageProvider>{children}</LanguageProvider>
    </body>
  );
}
