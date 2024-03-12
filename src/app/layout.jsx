import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "INI WEB BUAT WIBU",
  description: "Website Anime Buat Wibu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"${poppins.className} bg-palete-dark"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
