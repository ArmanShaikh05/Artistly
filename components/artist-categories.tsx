"use client";

import Link from "next/link";
import { Mic, Users, MessageSquare, Headphones } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    id: "singers",
    title: "Singers",
    description: "Vocal artists for every genre and event",
    icon: Mic,
    color: "from-pink-500 to-rose-500",
    count: "150+ Artists",
  },
  {
    id: "dancers",
    title: "Dancers",
    description: "Professional dancers and choreographers",
    icon: Users,
    color: "from-purple-500 to-violet-500",
    count: "120+ Artists",
  },
  {
    id: "speakers",
    title: "Speakers",
    description: "Keynote speakers and motivational experts",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    count: "80+ Artists",
  },
  {
    id: "djs",
    title: "DJs",
    description: "Professional DJs for all types of events",
    icon: Headphones,
    color: "from-orange-500 to-red-500",
    count: "100+ Artists",
  },
];

export function ArtistCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find Your Perfect Artist
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated categories of talented performers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={`/artists?category=${category.id}`}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-2">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${category.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <p className="text-sm font-medium text-muted-foreground">
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
