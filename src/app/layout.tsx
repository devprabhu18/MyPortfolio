import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import {Inter} from "next/font/google"
import Footer from "@/components/footer";
import { Providers } from "./providers";

export const metadata: Metadata={
  title:'Devananda M Prabhu',
  description:'This is the home page'
}

const inter= Inter({subsets:["latin"]})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
