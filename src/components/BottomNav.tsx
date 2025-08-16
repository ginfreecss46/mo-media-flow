import { Home, Search, Film, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Accueil", active: true },
    { icon: Search, label: "Recherche", active: false },
    { icon: Film, label: "Ma liste", active: false },
    { icon: User, label: "Profil", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`flex-col h-auto py-2 px-3 ${
              item.active 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;