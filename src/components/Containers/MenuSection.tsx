"use client";

import { ROUTES } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import MobileMenuSection from "./MobileMenuSection";

interface Route {
  id: number;
  name: string;
  path: string;
}

const MenuSection: React.FC = () => {
  const path = usePathname();
  return (
    <header
      className={cn(
        "fixed z-50 left-0 right-0 bg-background border-b border-border/25"
      )}>
      <nav className=" py-4 px-4 flex justify-between items-center md:px-4">
        <Link href={"/"}>
          <Image
            src={"/pro.jpg"}
            alt={"logo"}
            width={60}
            height={45}
            className="rounded-full"
          />
        </Link>
        <ul className="md:flex hidden items-center text-[17px] gap-6 font-medium">
          {ROUTES.map((route: Route) => (
            <li key={route.id}>
              <Link
                href={route.path}
                className={cn(
                  "hover:text-primary",
                  path === route.path && "text-primary"
                )}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="md:inline-block hidden">
          Get In touch
        </Button>
        <MobileMenuSection />
      </nav>
    </header>
  );
};

export default MenuSection;
