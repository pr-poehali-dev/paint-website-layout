import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Раскрасьте мир
              <span className="block text-primary mt-2">вашими красками</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Широкий выбор качественных лакокрасочных материалов для любых задач. 
              От ремонта квартиры до профессиональной отделки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToCatalog} className="text-lg px-8">
                <Icon name="Palette" size={24} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={24} className="mr-2" />
                Позвонить нам
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">500+ товаров</p>
                  <p className="text-sm text-muted-foreground">в наличии</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">Доставка</p>
                  <p className="text-sm text-muted-foreground">по всей России</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Гарантия</p>
                  <p className="text-sm text-muted-foreground">качества</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/9e769270-e9b6-4824-8203-84a1cb89ede0.jpg"
              alt="Лакокрасочные материалы"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block">
              <p className="text-3xl font-bold text-primary">15 лет</p>
              <p className="text-muted-foreground">на рынке</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
