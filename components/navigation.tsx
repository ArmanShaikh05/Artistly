"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Music, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isManagerLoggedIn, setIsManagerLoggedIn] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Artists" },
  ];

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("isManagerAuthenticated");
    if (authStatus === "true") {
      setIsManagerLoggedIn(true);
    } else {
      setIsManagerLoggedIn(false);
    }
  }, []);

  return (
    <nav className="sticky px-2 lg:px-8 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Artistly</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <Sun className="h-4 w-4 " />
            ) : (
              <Moon className=" h-4 w-4" />
            )}

            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Desktop Action Buttons */}
          {!isManagerLoggedIn && (
            <div className="hidden md:flex items-center space-x-3">
              <Button asChild variant="outline" size="sm">
                <Link href="/onboard">Join as Artist</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Link href="/login">Manager Login</Link>
              </Button>
            </div>
          )}

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] p-8">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm sm:text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                {!isManagerLoggedIn && (
                  <div className="pt-4 space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/onboard">Join as Artist</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/login">Manager Login</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
