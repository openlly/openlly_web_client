import type { Metadata } from "next";
import "./globals.css";
import { globalMetaData } from './utils/globalMetaDeta';



export const metadata: Metadata = globalMetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
