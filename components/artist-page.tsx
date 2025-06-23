"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { FilterPanel } from "@/components/filter-panel";
import { ArtistCard } from "@/components/artist-card";
import { mockArtists } from "@/lib/data";

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist) => {
      const matchesSearch =
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || artist.category === selectedCategory;

      const matchesLocation =
        !locationFilter ||
        artist.location.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesPriceRange =
        selectedPriceRange === "all" ||
        (() => {
          const priceNumber = parseInt(
            artist.priceRange.split("-")[0].replace("$", "")
          );
          switch (selectedPriceRange) {
            case "0-300":
              return priceNumber < 300;
            case "300-500":
              return priceNumber >= 300 && priceNumber < 500;
            case "500-1000":
              return priceNumber >= 500 && priceNumber < 1000;
            case "1000-2000":
              return priceNumber >= 1000 && priceNumber < 2000;
            case "2000+":
              return priceNumber >= 2000;
            default:
              return true;
          }
        })();

      return (
        matchesSearch && matchesCategory && matchesLocation && matchesPriceRange
      );
    });
  }, [searchTerm, selectedCategory, selectedPriceRange, locationFilter]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setLocationFilter("");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find Your Perfect Artist
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Browse through our collection of talented performers
          </p>
        </div>

        <FilterPanel
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          onPriceRangeChange={setSelectedPriceRange}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          onClearFilters={handleClearFilters}
        />

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredArtists.length} of {mockArtists.length} artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No artists found matching your criteria.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
