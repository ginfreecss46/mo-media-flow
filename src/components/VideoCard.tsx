import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  title: string;
  image: string;
  duration?: string;
  year?: string;
  genre?: string;
  isNew?: boolean;
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

const VideoCard = ({ 
  title, 
  image, 
  duration, 
  year, 
  genre, 
  isNew, 
  description, 
  size = 'medium' 
}: VideoCardProps) => {
  const sizeClasses = {
    small: "aspect-[2/3] w-full max-w-[150px]",
    medium: "aspect-[2/3] w-full max-w-[200px]",
    large: "aspect-[16/9] w-full max-w-[400px]"
  };

  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className={`${sizeClasses[size]} relative overflow-hidden bg-muted`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="icon" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all">
              <Play className="h-6 w-6 text-white fill-white ml-0.5" />
            </Button>
          </div>

          {/* Actions */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/20 hover:bg-white/30">
                  <Plus className="h-4 w-4 text-white" />
                </Button>
                <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/20 hover:bg-white/30">
                  <Info className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* New Badge */}
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            Nouveau
          </Badge>
        )}

        {/* Duration Badge */}
        {duration && (
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 bg-black/50 text-white border-none"
          >
            {duration}
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-xs text-muted-foreground space-x-2">
          {year && <span>{year}</span>}
          {year && genre && <span>•</span>}
          {genre && <span>{genre}</span>}
        </div>
        {description && size === 'large' && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;