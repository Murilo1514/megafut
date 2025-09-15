import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Target } from "lucide-react";
import heroImage from "@/assets/football-hero.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
              ⚽ A nova era do futebol amador
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Organize <span className="bg-gradient-to-r from-primary to-field-green bg-clip-text text-transparent">suas peladas</span> como um profissional
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            O MegaFut é a plataforma definitiva para organizar partidas de futebol amador. Crie times, organize campeonatos, encontre quadras e ganhe cartinhas personalizadas!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              <Play className="w-5 h-5" />
              Começar Agora
            </Button>
            
          </div>
          
          <p className="text-sm text-muted-foreground mb-12">
            Junte-se a mais de 10.000 jogadores que já usam o MegaFut
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">10K+</h3>
              <p className="text-muted-foreground">Jogadores Registrados</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Campeonatos Realizados</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">5K+</h3>
              <p className="text-muted-foreground">Partidas Organizadas</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-glow opacity-60"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-field-green rounded-full animate-glow opacity-40 animation-delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-primary rounded-full animate-glow opacity-50 animation-delay-2000"></div>
    </section>;
};
export default Hero;