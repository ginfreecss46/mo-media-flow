import { X, Home, Film, Tv, Radio, User, Settings, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: Home, label: "Accueil", active: true },
    { icon: Film, label: "Films", badge: "12 nouveaux" },
    { icon: Tv, label: "Séries", badge: "5 nouveaux" },
    { icon: Radio, label: "Live" },
    { icon: User, label: "Mon profil" },
    { icon: CreditCard, label: "Abonnement" },
    { icon: Settings, label: "Paramètres" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-0 left-0 w-80 h-full bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            AfriStream
          </h1>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className="w-full justify-start h-12 px-4"
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Utilisateur</p>
              <p className="text-xs text-muted-foreground">Plan Premium</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;