"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { mockArtists } from "@/lib/data";
import { CheckCircle, MapPin, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function PopularArtists() {
  // Get top 6 artists (highest rated)
  const popularArtists = mockArtists
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const categoryColors = {
    singers: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    dancers:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    speakers: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    djs: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Popular Artists
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most sought-after performers with exceptional ratings
            and reviews
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[95%] mx-auto "
        >
          <CarouselContent>
            {popularArtists.map((artist) => (
              <CarouselItem
                key={artist.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                          <AvatarImage src={artist.image} alt={artist.name} />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white font-semibold">
                            {artist.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {artist.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                          {artist.name}
                        </h3>
                        <Badge
                          variant="secondary"
                          className={`mt-1 text-xs ${
                            categoryColors[
                              artist.category as keyof typeof categoryColors
                            ] || ""
                          }`}
                        >
                          {artist.category.charAt(0).toUpperCase() +
                            artist.category.slice(1)}
                        </Badge>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span className="truncate">{artist.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="py-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-semibold">{artist.rating}</span>
                          <span className="text-sm text-muted-foreground ml-1">
                            ({artist.reviews} reviews)
                          </span>
                        </div>
                        <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded-full text-sm">
                          {artist.priceRange}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {artist.bio}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {artist.languages.slice(0, 2).map((lang) => (
                          <Badge
                            key={lang}
                            variant="outline"
                            className="text-xs"
                          >
                            {lang}
                          </Badge>
                        ))}
                        {artist.languages.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{artist.languages.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      Ask for Quote
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
