import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentGrid from "@/components/ContentGrid";
import BottomNav from "@/components/BottomNav";
import MobileMenu from "@/components/MobileMenu";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";
import hollywoodAction from "@/assets/hollywood-action.jpg";
import bollywoodRomance from "@/assets/bollywood-romance.jpg";
import koreanDrama from "@/assets/korean-drama.jpg";
import europeanThriller from "@/assets/european-thriller.jpg";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock data for international content categories
  const trendingContent = [
    {
      id: 1,
      title: "La Guerrière Urbaine",
      image: moviePoster1,
      duration: "1h 45min",
      year: "2024",
      genre: "Action Africain",
      isNew: true,
      description: "Une action palpitante dans les rues de Kinshasa"
    },
    {
      id: 2,
      title: "Speed Chase",
      image: hollywoodAction,
      duration: "2h 30min",
      year: "2024",
      genre: "Action Hollywood",
      isNew: true,
      description: "Un blockbuster d'action explosif"
    },
    {
      id: 3,
      title: "Amour Éternel",
      image: bollywoodRomance,
      duration: "2h 45min",
      year: "2024",
      genre: "Romance Bollywood",
      isNew: false,
      description: "Une romance colorée et musicale"
    },
    {
      id: 4,
      title: "Seoul Dreams",
      image: koreanDrama,
      duration: "16 épisodes",
      year: "2024",
      genre: "K-Drama",
      isNew: true,
      description: "Un drama coréen captivant"
    },
    {
      id: 5,
      title: "Mystère Parisien",
      image: europeanThriller,
      duration: "1h 55min",
      year: "2024",
      genre: "Thriller Européen",
      isNew: false,
      description: "Un thriller sophistiqué"
    },
    {
      id: 6,
      title: "Amour Traditionnel",
      image: moviePoster2,
      duration: "2h 10min",
      year: "2024",
      genre: "Romance Africain",
      isNew: true,
      description: "Une histoire d'amour authentique"
    }
  ];

  const hollywoodMovies = [
    {
      id: 7,
      title: "Explosion Finale",
      image: hollywoodAction,
      duration: "2h 15min",
      year: "2024",
      genre: "Action",
      isNew: true
    },
    {
      id: 8,
      title: "Mystère de Londres",
      image: europeanThriller,
      duration: "1h 50min",
      year: "2024",
      genre: "Thriller",
      isNew: false
    },
    {
      id: 9,
      title: "Romance des Étoiles",
      image: bollywoodRomance,
      duration: "2h 30min",
      year: "2023",
      genre: "Romance",
      isNew: false
    },
    {
      id: 10,
      title: "Cœur de Séoul",
      image: koreanDrama,
      duration: "12 épisodes",
      year: "2024",
      genre: "Drama",
      isNew: true
    }
  ];

  const africanMovies = [
    ...trendingContent.filter(item => item.genre.includes('Africain')),
    {
      id: 11,
      title: "Contes de Brousse",
      image: moviePoster1,
      duration: "1h 55min",
      year: "2023",
      genre: "Aventure",
      isNew: false
    }
  ];

  const asianContent = [
    {
      id: 12,
      title: "Dragon des Montagnes",
      image: koreanDrama,
      duration: "20 épisodes",
      year: "2024",
      genre: "K-Drama",
      isNew: true
    },
    {
      id: 13,
      title: "Rêves de Mumbai",
      image: bollywoodRomance,
      duration: "2h 40min",
      year: "2024",
      genre: "Bollywood",
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
            title="Tendances mondiales" 
            items={trendingContent}
            size="medium"
          />
          
          <ContentGrid 
            title="Nouveautés" 
            items={newReleases}
            size="medium"
          />
          
          <ContentGrid 
            title="Hollywood & International" 
            items={hollywoodMovies}
            size="medium"
          />
          
          <ContentGrid 
            title="Cinéma africain" 
            items={africanMovies}
            size="medium"
          />
          
          <ContentGrid 
            title="Contenus asiatiques" 
            items={asianContent}
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
