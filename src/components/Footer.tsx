import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/21675fd4-5e75-4932-8303-45f7ab6c4bed/files/c76201b3-f789-460d-95bd-6ddef01e84e1.jpg" 
                alt="Все краски" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-bold">Все краски</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Качественные лакокрасочные материалы для профессионалов и любителей с 2009 года
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Icon name="Youtube" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-primary transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('catalog')} className="text-gray-400 hover:text-primary transition-colors">
                  Каталог товаров
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-primary transition-colors">
                  О компании
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacts')} className="text-gray-400 hover:text-primary transition-colors">
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Доставка и оплата</li>
              <li>Гарантия</li>
              <li>Возврат товара</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+78001234567" className="hover:text-primary transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Icon name="Mail" size={18} className="text-primary" />
                <a href="mailto:info@vsekraski.ru" className="hover:text-primary transition-colors">
                  info@vsekraski.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Icon name="MapPin" size={18} className="text-primary mt-1" />
                <span>г. Москва, ул. Строительная, д. 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Все краски. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
