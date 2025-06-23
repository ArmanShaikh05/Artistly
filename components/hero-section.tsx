"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-3">
              <Sparkles className="h-8 w-8 text-white animate-pulse" />
            </div>
          </div>

          <h1 className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Book Amazing Artists
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Discover and book talented performing artists for your events. From
            singers and dancers to speakers and DJs, find the perfect
            entertainment for any occasion.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Link href="/artists" className="flex items-center gap-2">
                Explore Artists
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/onboard">Join as Artist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
