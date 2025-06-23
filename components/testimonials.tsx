"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Event Coordinator",
    company: "Elite Events Co.",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    content:
      "Artistly made finding the perfect singer for our corporate gala incredibly easy. The booking process was seamless, and the artist exceeded all expectations. Highly recommended!",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Wedding Planner",
    company: "Dream Weddings",
    image:
      "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    content:
      "The quality of artists on this platform is outstanding. We've booked multiple performers through Artistly and each one has been professional and talented.",
  },
  {
    id: "3",
    name: "Jennifer Chen",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image:
      "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    content:
      "From keynote speakers to entertainment, Artistly has become our go-to platform for all event talent. The variety and quality are unmatched.",
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Festival Director",
    company: "Summer Music Fest",
    image:
      "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    content:
      "Booking multiple artists for our festival was a breeze with Artistly. The platform's filtering system helped us find exactly what we needed quickly.",
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "HR Manager",
    company: "Global Solutions",
    image:
      "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    content:
      "The motivational speaker we booked through Artistly was phenomenal. Our team was inspired and energized. We'll definitely be using this platform again.",
  },
  {
    id: "6",
    name: "Robert Kim",
    role: "Club Owner",
    company: "Nightlife Venues",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    content:
      "Finding quality DJs for our venues has never been easier. Artistly connects us with professional artists who know how to keep the crowd moving.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by event planners, businesses, and organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`group h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br ${
                index % 3 === 0
                  ? "from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30"
                  : index % 3 === 1
                  ? "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30"
                  : "from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 hover:from-cyan-100 hover:to-purple-100 dark:hover:from-cyan-900/30 dark:hover:to-purple-900/30"
              } border-2 hover:border-primary/30`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors flex-shrink-0" />
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">
              Join 1000+ satisfied clients who trust Artistly
            </span>
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}
