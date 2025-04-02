import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Jersey_10 } from "next/font/google";
import "./global.css";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

const jersey_10 = Jersey_10({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tim Chmieletzki",
  description: "Portfolio von Tim Chmieletzki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${GeistSans.className} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
