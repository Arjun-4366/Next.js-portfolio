import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { ROUTES } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IoMenu, IoClose } from "react-icons/io5";
import React, { useState } from "react";

interface Route {
  id: number;
  name: string;
  path: string;
}

const MobileMenuSection: React.FC = () => {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMobileMenu = (): void => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
      {menuOpen && (
        <div className="bg-black bg-opacity-60 z-40 fixed inset-0"></div>
      )}
      <DrawerContent
        className={cn(
          "fixed bottom-0 left-0 right-0", 
          "w-full rounded-lg flex flex-col items-center justify-center",
          "transition-transform duration-300",
          menuOpen ? "translate-y-0" : "translate-y-full", 
          "bg-blue-500" 
        )}
      >
        <div className="max-w-sm mx-auto w-full flex items-center">
          <div className="p-4 border-b space-y-8 list-none ">
            {ROUTES.map((route: Route) => (
              <li key={route.id}>
                <Link
                  href={route.path}
                  className={cn(
                    "hover:text-primary",
                    path === route.path && "text-primary"
                  )}
                  onClick={handleMobileMenu}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </DrawerContent>
      <DrawerTrigger asChild className="md:hidden">
        <Button variant="outline" onClick={handleMobileMenu}>
          {menuOpen ? <IoClose className="text-5xl" /> : <IoMenu className="text-5xl" />}
        </Button>
      </DrawerTrigger>
    </Drawer>
  );
};

export default MobileMenuSection;
