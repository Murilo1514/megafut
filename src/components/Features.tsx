import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Globe, MessageCircle, BarChart3, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Atualizações em Tempo Real",
      description: "Receba notificações instantâneas sobre gols, cartões e mudanças nos seus jogos favoritos."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cobertura Global",
      description: "Acompanhe ligas e campeonatos do mundo inteiro, desde a Premier League até o Brasileirão."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Chat ao Vivo",
      description: "Converse com outros torcedores durante os jogos e compartilhe suas emoções."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Estatísticas Detalhadas",
      description: "Análises profundas com dados de desempenho, formações e histórico de confrontos."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Comunidade Segura",
      description: "Ambiente moderado e respeitoso para discussões saudáveis sobre futebol."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "App Mobile",
      description: "Leve sua paixão pelo futebol para qualquer lugar com nosso app otimizado."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a megafut?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra tudo o que você precisa para viver o futebol de forma completa
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