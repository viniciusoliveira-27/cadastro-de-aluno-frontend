import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthContextProvider } from "@/context/auth-context";

const poppins = Poppins({ weight: '300', subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Transporte do Tio Marcos",
  description: "Gerenciador de pagamento das crianças do Tio Marcos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <html lang="pt-BR">
        <body className={cn(poppins.className, "bg-gray-100")}>{children}</body>
      </html>
    </AuthContextProvider>
  );
}
