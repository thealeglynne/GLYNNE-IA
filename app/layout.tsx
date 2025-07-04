import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// Importa y configura la fuente Sora
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Puedes ajustar según tus necesidades
});

export const metadata: Metadata = {
  title: "GLYNNE",
  description: "Automatización empresarial completa impulsada por inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sora.variable}>
      <body className="font-sora antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
