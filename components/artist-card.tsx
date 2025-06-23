"use client";

import { Star, MapPin, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Artist } from "@/lib/data";

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const categoryColors = {
    singers: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    dancers:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    speakers: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    djs: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  };

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={artist.image} alt={artist.name} />
            <AvatarFallback>
              {artist.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-base truncate group-hover:text-primary transition-colors">
                {artist.name}
              </h3>
              {artist.verified && (
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
              )}
            </div>
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
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-3">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{artist.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-sm font-medium">{artist.rating}</span>
              <span className="text-sm text-muted-foreground ml-1">
                ({artist.reviews})
              </span>
            </div>
            <span className="text-sm font-semibold text-primary">
              {artist.priceRange}
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {artist.bio}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <Button className="w-full" size="sm">
          Ask for Quote
        </Button>
      </CardFooter>
    </Card>
  );
}
