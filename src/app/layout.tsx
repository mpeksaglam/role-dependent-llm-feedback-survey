import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SurveyProvider } from "@/survey/engine/SurveyProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIRo4Lemi Umfrage",
  description: "Interactive user study in robotic assembly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de" // german
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen flex flex-col text-sm text-gray-900 leading-relaxed bg-white">
        <SurveyProvider>{children}</SurveyProvider>
      </body>
    </html>
  );
}
