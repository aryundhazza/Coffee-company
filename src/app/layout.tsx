import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarNew from "@/templates/Navbar";
import { Footer } from "@/templates/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://clipart-library.com/img/1393458.png" sizes="any" />
      <body className={`${inter.className} bg-gray-900 min-h-screen `}>
        <NavbarNew />
        {children}
        <Footer />
      </body>
    </html>
  );
}
