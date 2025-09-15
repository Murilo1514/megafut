import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">⚽</span>
          </div>
          <span className="text-xl font-bold text-foreground">MegaFut</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="default" asChild>
            <Link to="/login">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button variant="default" size="default" asChild>
            <Link to="/signup">
              <UserPlus className="w-4 h-4 mr-2" />
              Cadastrar
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;