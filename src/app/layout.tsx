
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MenuSection from "@/components/Containers/MenuSection";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Arjun T V - Portfolio",
  description: "MERN Stack Developer",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("bg-background", anek.className)}>
        <MenuSection />
        <main>{children}</main>
      </body>
    </html>
  );
}
