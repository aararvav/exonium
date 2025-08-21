import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exonium",
  // Add description if needed, e.g. description: "Your site description"
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
