import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentGrid from "@/components/ContentGrid";
import BottomNav from "@/components/BottomNav";
import MobileMenu from "@/components/MobileMenu";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock data for different content categories
  const trendingContent = [
    {
      id: 1,
      title: "La Guerrière Urbaine",
      image: moviePoster1,
      duration: "1h 45min",
      year: "2024",
      genre: "Action",
      isNew: true,
      description: "Une action palpitante dans les rues de Kinshasa"
    },
    {
      id: 2,
      title: "Amour Traditionnel",
      image: moviePoster2,
      duration: "2h 10min",
      year: "2024",
      genre: "Romance",
      isNew: false,
      description: "Une histoire d'amour authentique"
    },
    {
      id: 3,
      title: "Héritages",
      image: moviePoster1,
      duration: "1h 30min",
      year: "2023",
      genre: "Drame",
      isNew: false
    },
    {
      id: 4,
      title: "Rythmes d'Afrique",
      image: moviePoster2,
      duration: "1h 50min",
      year: "2024",
      genre: "Musical",
      isNew: true
    },
    {
      id: 5,
      title: "Légendes Ancestrales",
      image: moviePoster1,
      duration: "2h 20min",
      year: "2023",
      genre: "Fantastique",
      isNew: false
    },
    {
      id: 6,
      title: "Nouvelle Génération",
      image: moviePoster2,
      duration: "1h 25min",
      year: "2024",
      genre: "Comédie",
      isNew: true
    }
  ];

  const africanMovies = [
    ...trendingContent.slice(0, 4),
    {
      id: 7,
      title: "Contes de Brousse",
      image: moviePoster1,
      duration: "1h 55min",
      year: "2023",
      genre: "Aventure",
      isNew: false
    },
    {
      id: 8,
      title: "Modernité Africaine",
      image: moviePoster2,
      duration: "1h 40min",
      year: "2024",
      genre: "Drame",
      isNew: true
    }
  ];

  const newReleases = trendingContent.filter(item => item.isNew);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Content Sections */}
        <div className="space-y-8 pb-20 md:pb-8">
          <ContentGrid 
            title="Tendances actuelles" 
            items={trendingContent}
            size="medium"
          />
          
          <ContentGrid 
            title="Nouveautés" 
            items={newReleases}
            size="medium"
          />
          
          <ContentGrid 
            title="Cinéma africain" 
            items={africanMovies}
            size="medium"
          />
          
          <ContentGrid 
            title="Recommandés pour vous" 
            items={trendingContent.slice().reverse()}
            size="medium"
          />
        </div>
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav />
    </div>
  );
};

export default Index;
