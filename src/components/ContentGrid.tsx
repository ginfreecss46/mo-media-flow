import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCard from "./VideoCard";

interface ContentGridProps {
  title: string;
  items: Array<{
    id: number;
    title: string;
    image: string;
    duration?: string;
    year?: string;
    genre?: string;
    isNew?: boolean;
    description?: string;
  }>;
  size?: 'small' | 'medium' | 'large';
  showMoreLink?: boolean;
}

const ContentGrid = ({ title, items, size = 'medium', showMoreLink = true }: ContentGridProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          {showMoreLink && (
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Voir tout
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {items.map((item) => (
            <VideoCard
              key={item.id}
              title={item.title}
              image={item.image}
              duration={item.duration}
              year={item.year}
              genre={item.genre}
              isNew={item.isNew}
              description={item.description}
              size={size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;