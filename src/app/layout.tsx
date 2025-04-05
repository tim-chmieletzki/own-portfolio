import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./global.css";

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
