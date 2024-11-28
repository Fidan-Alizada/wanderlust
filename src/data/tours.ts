export interface Tour {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: string;
    image: string;
    location: string;
  }
  
  export const tours: Tour[] = [
    {
      id: 1,
      name: "Paradise Island Getaway",
      description: "Experience crystal clear waters and pristine beaches on this tropical paradise tour.",
      price: 1299,
      duration: "7 days",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop",
      location: "Maldives"
    },
    {
      id: 2,
      name: "Mountain Adventure Trek",
      description: "Challenge yourself with breathtaking views and exciting hiking trails.",
      price: 899,
      duration: "5 days",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
      location: "Swiss Alps"
    },
    {
      id: 3,
      name: "Cultural Heritage Tour",
      description: "Immerse yourself in ancient traditions and historical landmarks.",
      price: 1499,
      duration: "10 days",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
      location: "Japan"
    },
    {
      id: 4,
      name: "Safari Adventure",
      description: "Witness majestic wildlife in their natural habitat.",
      price: 2299,
      duration: "8 days",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
      location: "Tanzania"
    }
  ];