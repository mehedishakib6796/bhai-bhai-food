import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ১. এটি সাধারণ গুগল সার্চের জন্য (Google Search)
  title: "Bhai Bhai Food Products | Gazipur's Finest Organic Staples",
  description: "Experience the purity of Gazipur with Bhai Bhai Food Products. We provide 100% natural Puffed Rice (Muri), Flattened Rice (Chira), and organic food directly from the field to your home.",
  
  // ২. এটি ফেসবুক, হোয়াটসঅ্যাপ এবং ইমেজের জন্য (Social Media)
  openGraph: {
    title: "Bhai Bhai Food Products - Healthy & Organic",
    description: "Traditional and 100% organic food products from Gazipur. Order fresh Muri, Chira and more.",
    url: "https://bhaibhaifoodproducts.com",
    siteName: "Bhai Bhai Food Products",
    images: [
      {
        url: "/muri.png", // তোমার public ফোল্ডারে থাকা ভালো একটি ছবির নাম এখানে দাও
        width: 1200,
        height: 630,
        alt: "Fresh and crunchy Puffed Rice packet by Bhai Bhai Food",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
