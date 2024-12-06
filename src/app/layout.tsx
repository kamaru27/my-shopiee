import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Provider from "./_layout/Provider";
import { Toaster } from "react-hot-toast";
import SessionProviderClient from "./_layout/SesseionProviderClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Shopiee",
  description: "e-commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderClient>
        <Provider>
          <Header />
          <Toaster position="top-center" containerClassName="mt-4"/>

           {children}
          <Footer />
        </Provider>
        </SessionProviderClient>
      </body>
    </html>
  );
}
