import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ArtistCategories } from "@/components/artist-categories";
import { PopularArtists } from "@/components/popular-artists";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ArtistCategories />
      <PopularArtists />
      <Testimonials />
    </main>
  );
}
