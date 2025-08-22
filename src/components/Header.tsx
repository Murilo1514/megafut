import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">⚽</span>
          </div>
          <span className="text-xl font-bold text-foreground">FutbolZone</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="login" size="default">
            <LogIn className="w-4 h-4" />
            Login
          </Button>
          <Button variant="signup" size="default">
            <UserPlus className="w-4 h-4" />
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;