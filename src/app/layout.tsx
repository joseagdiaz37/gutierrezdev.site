import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "José Gutiérrez - Full-Stack Developer | React, Node.js & Python",
  description: "Full-Stack Developer specializing in React, Node.js, Python, and cloud technologies. Building scalable web applications and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
