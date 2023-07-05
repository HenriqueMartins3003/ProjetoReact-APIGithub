import "./globals.css";
import { Poppins } from "next/font/google";
import { NextProvider } from "@/provider/auth";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "FSW Trips",
  description: "Sistema de reserva de viagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextProvider> {children} </NextProvider>
      </body>
    </html>
  );
}
