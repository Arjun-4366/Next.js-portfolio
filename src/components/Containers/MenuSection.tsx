"use client";

import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileMenuSection from "./MobileMenuSection";
// import { MotionButton, MotionImage, MotionList } from "@/utils/MotionTags";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionButton, MotionImage, MotionList } from "@/utils/motionTags";

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
        "fixed z-50 left-0 right-0",path !=='/' && "bg-background border-b border-border/25"
      )}>
      <nav className=" py-4 px-4 flex justify-between items-center md:px-4">
        <Link href={"/"}>
          <MotionImage
            initial="initial"
            animate="animate"
            variants={variants.scale}
            transition={transitions.scale}
            src={"/logobg-black.png"}
            alt={"logo"}
            width={60}
            height={45}
            className="rounded-full w-auto"
          />
        </Link>
        <ul className="md:flex hidden items-center text-[17px] gap-6 font-medium">
          {ROUTES.map((route: Route, i) => (
            <MotionList
              key={route.id}
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={{
                ...transitions.moveDown,
                delay: i * 0.1,
              }}>
              <Link
                href={route.path}
                className={cn(
                  "hover:text-primary",
                  path === route.path && "text-primary"
                )}>
                {route.name}
              </Link>
            </MotionList>
          ))}
        </ul>
        <MotionButton
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={transitions.moveLeft}
          variant="outline"
          className="md:inline-block hidden">
          Get In touch
        </MotionButton>
        <MobileMenuSection />
      </nav>
    </header>
  );
};

export default MenuSection;
