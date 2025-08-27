import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exonium",
  icons: {
    icon: "/logo-assets/logo-light.png",
    shortcut: "/logo-assets/logo-light.png",
    apple: "/logo-assets/logo-light.png",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000212] text-[#f7f8f8]`}>
        {children}
      </body>
    </html>
  );
}
