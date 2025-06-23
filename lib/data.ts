export interface Artist {
  id: string;
  name: string;
  category: string;
  location: string;
  priceRange: string;
  image: string;
  bio: string;
  languages: string[];
  rating: number;
  reviews: number;
  verified: boolean;
}

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: "singers",
    location: "New York, NY",
    priceRange: "$500-1000",
    image:
      "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Professional jazz and pop singer with 10+ years experience",
    languages: ["English", "Spanish"],
    rating: 4.9,
    reviews: 127,
    verified: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    category: "dancers",
    location: "Los Angeles, CA",
    priceRange: "$300-800",
    image:
      "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Contemporary and hip-hop dancer, choreographer",
    languages: ["English", "Mandarin"],
    rating: 4.8,
    reviews: 89,
    verified: true,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    category: "speakers",
    location: "Chicago, IL",
    priceRange: "$1000-2000",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Motivational speaker and business consultant",
    languages: ["English", "Spanish", "Portuguese"],
    rating: 5.0,
    reviews: 245,
    verified: true,
  },
  {
    id: "4",
    name: "DJ Alex Thompson",
    category: "djs",
    location: "Miami, FL",
    priceRange: "$400-1200",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Electronic and house music DJ for clubs and events",
    languages: ["English"],
    rating: 4.7,
    reviews: 156,
    verified: true,
  },
  {
    id: "5",
    name: "Isabella Martinez",
    category: "singers",
    location: "Austin, TX",
    priceRange: "$300-700",
    image:
      "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Country and folk singer-songwriter",
    languages: ["English", "Spanish"],
    rating: 4.8,
    reviews: 98,
    verified: false,
  },
  {
    id: "6",
    name: "Marcus Williams",
    category: "dancers",
    location: "Atlanta, GA",
    priceRange: "$250-600",
    image:
      "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Breakdancer and street dance instructor",
    languages: ["English"],
    rating: 4.6,
    reviews: 67,
    verified: true,
  },
  {
    id: "7",
    name: "Prof. David Kim",
    category: "speakers",
    location: "Seattle, WA",
    priceRange: "$800-1500",
    image:
      "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Technology and innovation keynote speaker",
    languages: ["English", "Korean"],
    rating: 4.9,
    reviews: 178,
    verified: true,
  },
  {
    id: "8",
    name: "DJ Luna",
    category: "djs",
    location: "Las Vegas, NV",
    priceRange: "$600-1500",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "EDM and progressive house specialist",
    languages: ["English", "French"],
    rating: 4.8,
    reviews: 201,
    verified: true,
  },
];

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "singers", label: "Singers" },
  { value: "dancers", label: "Dancers" },
  { value: "speakers", label: "Speakers" },
  { value: "djs", label: "DJs" },
];

export const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-300", label: "Under $300" },
  { value: "300-500", label: "$300 - $500" },
  { value: "500-1000", label: "$500 - $1000" },
  { value: "1000-2000", label: "$1000 - $2000" },
  { value: "2000+", label: "$2000+" },
];

export interface OnboardingSubmission {
  id: string;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  bio: string;
  languages: string[];
}

export const mockSubmissions: OnboardingSubmission[] = [
  {
    id: "1",
    name: "Jennifer Adams",
    category: ["singers"],
    location: "Nashville, TN",
    feeRange: "$400-800",
    status: "pending",
    submittedAt: "2024-01-15",
    bio: "Country singer with 5 years experience",
    languages: ["English"],
  },
  {
    id: "2",
    name: "Carlos Rodriguez",
    category: ["dancers", "speakers"],
    location: "Phoenix, AZ",
    feeRange: "$300-600",
    status: "approved",
    submittedAt: "2024-01-12",
    bio: "Salsa dancer and dance instructor",
    languages: ["English", "Spanish"],
  },
  {
    id: "3",
    name: "Rachel Green",
    category: ["speakers"],
    location: "Boston, MA",
    feeRange: "$1000-1500",
    status: "pending",
    submittedAt: "2024-01-10",
    bio: "Leadership and team building expert",
    languages: ["English"],
  },
];
