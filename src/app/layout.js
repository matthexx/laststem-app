import "./globals.css";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
import Navigation from "./layouts/Navigation.js"; // Import your Navigation component
import Dashboard from "./dashboard2/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Last-STEM",
  description: "Affordable STEM lessons for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation /> {/* Include the Navigation component */}
        {children}
        {/* <Toaster/> */}
      </body>
      <Dashboard />
    </html>
  );
}
