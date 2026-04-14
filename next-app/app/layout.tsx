import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: "../public/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/AeonikTRIAL-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/AeonikTRIAL-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/AeonikTRIAL-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcline — e-Signature Dashboard",
  description: "e-Signature Documents Dashboard",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aeonik.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#1a1a1a] text-white font-[family-name:var(--font-aeonik)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
