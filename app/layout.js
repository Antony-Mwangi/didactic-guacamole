
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer"

export const metadata = {
title: "Pips Hunter",
description: "Predicting Prices with Precision",
};

export default function RootLayout({children}) {
  return (
    <html lang = "en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        
      </body>
    </html>
  );
}