import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import Header from "@/components/custom/Header";

export const metadata: Metadata = {
  title: "LoveCheck - Mentoria e Análise de Relacionamentos",
  description: "Conecte-se com mentores especializados em relacionamentos e receba orientação profissional para construir conexões mais saudáveis e felizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-inter antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
