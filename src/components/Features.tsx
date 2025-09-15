import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Target, MessageSquare, Calendar, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Perfil Gamificado",
      description: "Crie seu perfil com cartinha personalizada estilo FIFA. Ganhe badges e conquistas baseadas no seu desempenho."
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Times e Campeonatos",
      description: "Crie times, participe de campeonatos estruturados com tabelas automáticas e validação de resultados."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Ligas Individuais",
      description: "Participe de ligas estilo Faceit com sorteios automáticos e ranking individual baseado no desempenho."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Jogos Únicos",
      description: "Organize peladas casuais com divisão automática de times balanceada pelo overall dos jogadores."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Portal de Quadras",
      description: "Encontre quadras na sua região com informações de preço, localização e horários de funcionamento."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Sistema de Avaliação",
      description: "Avalie outros jogadores após as partidas e construa sua reputação na comunidade."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Funcionalidades completas para o futebol amador
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desde jogos casuais até campeonatos profissionais. O MegaFut oferece tudo que você precisa para organizar e participar de partidas de futebol.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/20 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;