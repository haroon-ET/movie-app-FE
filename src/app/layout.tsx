import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Vector from "/images/Vectors.png";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "@/hooks/PrivateRoute";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movies list",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <img
          src="/images/Vectors.png"
          alt="background"
          style={{
            width: "100vw",
            position: "fixed",
            bottom: "0",
            zIndex: "-1",
          }}
        />
      </body>
    </html>
  );
};
export default RootLayout;
