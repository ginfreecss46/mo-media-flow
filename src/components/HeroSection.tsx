import { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroMovie1 from "@/assets/hero-movie-1.jpg";
import heroSeries1 from "@/assets/hero-series-1.jpg";

const heroContent = [
  {
    id: 1,
    title: "Héros d'Afrique",
    description: "Un voyage épique à travers les terres africaines, où tradition et modernité se rencontrent dans une aventure extraordinaire qui changera le destin d'un homme.",
    image: heroMovie1,
    genre: "Action/Aventure",
    year: "2024",
    duration: "2h 15min",
    isNew: true
  },
  {
    id: 2,
    title: "Racines Familiales",
    description: "Une saga familiale touchante qui retrace trois générations d'une famille africaine, leurs défis, leurs triomphes et l'importance des liens qui nous unissent.",
    image: heroSeries1,
    genre: "Drame familial",
    year: "2024", 
    duration: "8 épisodes",
    isNew: false
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length);
  };

  const currentContent = heroContent[currentSlide];

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentContent.image}
          alt={currentContent.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            {/* Badges */}
            <div className="flex items-center space-x-3">
              {currentContent.isNew && (
                <Badge className="bg-primary text-primary-foreground">
                  Nouveau
                </Badge>
              )}
              <Badge variant="outline" className="border-white/30 text-white">
                {currentContent.genre}
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                {currentContent.year}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {currentContent.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {currentContent.description}
            </p>

            {/* Duration */}
            <p className="text-white/70">
              Durée: {currentContent.duration}
            </p>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 transition-colors">
                <Play className="w-5 h-5 mr-2 fill-current" />
                Regarder maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Info className="w-5 h-5 mr-2" />
                Plus d'infos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;