import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   title: "Marlon Ferreira - Software Developer",
   description: "Portfólio de Marlon Ferreira",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={poppins.className}>
            <Header />
            {children}
         </body>
      </html>
   );
}
