import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music App",
  description: "A basic Next.js app ready for Vercel deployment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
