import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google"

export const metadata: Metadata = {
  title: "Sifacore Technology LLC",
  description: "We provide comprehensive technology solutions tailored for forward-thinking enterprises.",
};

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Adjust weights as needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} `}>
        {children}
      </body>
    </html>
  );
}
