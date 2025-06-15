import type { Metadata } from "next";
import { Enriqueta } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const enriqueta = Enriqueta({
  variable: "--font-enriqueta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Terraskola",
  description: "Plateforme d'analyse intelligente pour l'éducation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${enriqueta.variable} enriqueta-regular antialiased`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
