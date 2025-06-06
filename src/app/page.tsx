import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Inicial",
  description: "Aprendendo Next do zero",
  openGraph: {
    title: "Aprendendo Next com sujeito no Youtube",
    description: "Aprendendo Next do zero",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  },
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const revalidate = 60;

export default function Home() {
  const randomNumber = Math.random() * 10;
  return (
    <div>
      <h1>Página Home</h1>
      <p>Número aleatório: {randomNumber}</p>
    </div>
  );
}
