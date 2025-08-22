import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">⚽</span>
              </div>
              <span className="text-xl font-bold text-foreground">megafut</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              A plataforma definitiva para os apaixonados por futebol. 
              Conecte-se, acompanhe e viva cada momento do esporte mais amado do mundo.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Jogos Ao Vivo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resultados</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Estatísticas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 megafut. Todos os direitos reservados. Feito com ❤️ para os amantes do futebol.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;