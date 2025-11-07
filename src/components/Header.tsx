import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/c76201b3-f789-460d-95bd-6ddef01e84e1.jpg" 
              alt="Все краски" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-foreground">Все краски</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Каталог
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О компании
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
            <Button size="lg" className="ml-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Каталог
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              О компании
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
            <Button size="lg" className="w-full mt-2">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
