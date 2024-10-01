// import localFont from "next/font/local";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MenuSection from "@/components/Containers/MenuSection";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Arjun T V - Portfolio",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn('bg-background',anek.className)}>
        <MenuSection/>
        <main>{children}</main>
      </body>
    </html>
  );
}
