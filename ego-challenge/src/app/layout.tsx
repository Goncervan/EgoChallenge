import type { Metadata } from "next";
import "./main.scss";
import { Navbar } from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Ego Challenge",
  description: "NextJS Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
