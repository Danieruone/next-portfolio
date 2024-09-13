import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// i18n
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Mendoza Portfolio",
  description: "Some projects that I worked on. Take a look of my portfolio!",
  metadataBase: new URL("https://www.darudev.com"),
  openGraph: {
    title: "Daniel Mendoza portfolio",
    description: "This is an awesome website built with Next.js",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/twitter-image.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-[#212224] text-white`}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
