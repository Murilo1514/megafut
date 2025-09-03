import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Target, MessageSquare, Calendar, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Encontre Jogadores",
      description: "Conecte-se com jogadores da sua região que estão procurando time ou parceiros para jogar."
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Monte Seu Time",
      description: "Crie e gerencie seu time, convide amigos e organize sua escalação para as partidas."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Agende Partidas",
      description: "Marque jogos com outros times, escolha local, horário e tipo de partida (amistoso, torneio)."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Chat do Time",
      description: "Mantenha contato com seu time através de mensagens e organize estratégias."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Calendário de Jogos",
      description: "Acompanhe todas as suas partidas agendadas e receba lembretes automáticos."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Busca Rápida",
      description: "Encontre rapidamente jogadores, times e campos disponíveis na sua área."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o MegaFut?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A plataforma que conecta jogadores e organiza partidas. Encontre seu time, agende jogos e viva sua paixão pelo futebol.
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