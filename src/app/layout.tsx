import Header from "@/components";
import "./globals.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aprendendo Next",
  description: "Aprendendo Next do zero",
  openGraph: {
    title: "Aprendendo Next com sujeito no Youtube",
    description: "Aprendendo Next do zero",
  },
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
