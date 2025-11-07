import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Краска интерьерная белая',
    category: 'Интерьерные краски',
    price: '1 250 ₽',
    unit: 'за 2.5л',
    image: 'https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/de21742d-de47-4650-8620-65ed28d2a71d.jpg',
    color: 'bg-orange-100',
    badge: 'Хит продаж',
    badgeColor: 'bg-primary text-white'
  },
  {
    id: 2,
    name: 'Эмаль акриловая глянцевая',
    category: 'Эмали',
    price: '890 ₽',
    unit: 'за 1л',
    image: 'https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/de21742d-de47-4650-8620-65ed28d2a71d.jpg',
    color: 'bg-purple-100',
    badge: 'Новинка',
    badgeColor: 'bg-secondary text-white'
  },
  {
    id: 3,
    name: 'Лак паркетный полиуретановый',
    category: 'Лаки',
    price: '1 680 ₽',
    unit: 'за 2.5л',
    image: 'https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/de21742d-de47-4650-8620-65ed28d2a71d.jpg',
    color: 'bg-blue-100',
    badge: null,
    badgeColor: ''
  },
  {
    id: 4,
    name: 'Грунтовка глубокого проникновения',
    category: 'Грунтовки',
    price: '450 ₽',
    unit: 'за 5л',
    image: 'https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/de21742d-de47-4650-8620-65ed28d2a71d.jpg',
    color: 'bg-yellow-100',
    badge: 'Акция',
    badgeColor: 'bg-red-500 text-white'
  },
  {
    id: 5,
    name: 'Краска фасадная атмосферостойкая',
    category: 'Фасадные краски',
    price: '2 340 ₽',
    unit: 'за 5л',
    image: 'https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/de21742d-de47-4650-8620-65ed28d2a71d.jpg',
    color: 'bg-green-100',
    badge: null,
    badgeColor: ''
  },
  {
    id: 6,
    name: 'Антисептик для дерева',
    category: 'Защитные составы',
    price: '780 ₽',
    unit: 'за 2.5л',
    image: 'https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/de21742d-de47-4650-8620-65ed28d2a71d.jpg',
    color: 'bg-pink-100',
    badge: null,
    badgeColor: ''
  }
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Каталог товаров</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий материал из нашего широкого ассортимента
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="hover-scale overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className={`relative h-64 ${product.color} overflow-hidden`}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className={`absolute top-4 right-4 ${product.badgeColor}`}>
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <CardTitle className="mb-3 text-xl">{product.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">
                  {product.price}
                  <span className="text-sm text-muted-foreground font-normal ml-2">{product.unit}</span>
                </CardDescription>
              </CardContent>
              <CardFooter className="gap-3">
                <Button className="flex-1">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Heart" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-8">
            Показать все товары
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
