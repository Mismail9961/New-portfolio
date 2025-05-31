import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Nameer - Software Engineer",
  description: "Personal portfolio website of Muhammad Nameer, Software Engineer specializing in frontend development with expanding full stack capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
