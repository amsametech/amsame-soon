import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amsame",
  description: "Amsame Development Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
