import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Mendoza Portfolio",
  description:
    "Software engineer and frontend projects that I worked on. Take a look of my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#212224] text-white`}
        suppressHydrationWarning={true}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
