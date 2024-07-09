import type { Metadata } from "next";
import "./main.scss";

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
        {children}
      </body>
    </html>
  );
}
