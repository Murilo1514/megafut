import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-primary-foreground animate-glow" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Transforme suas peladas em experiências profissionais
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Cadastre-se gratuitamente e comece a organizar campeonatos, criar seu time e ganhar cartinhas digitais personalizadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <ArrowRight className="w-5 h-5" />
              Criar Minha Conta
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
            >
              Explorar Funcionalidades
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 mt-6">
            Cadastro gratuito • Sem compromisso • Cancele quando quiser
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CTA;