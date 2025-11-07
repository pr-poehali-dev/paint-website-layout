import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground">
              История, которая началась с любви к цвету
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">15 лет опыта</h3>
                <p className="text-muted-foreground">
                  С 2009 года мы помогаем нашим клиентам воплощать в жизнь самые смелые дизайнерские решения
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Более 10 000 клиентов</h3>
                <p className="text-muted-foreground">
                  Нам доверяют как частные заказчики, так и крупные строительные компании
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Только качество</h3>
                <p className="text-muted-foreground">
                  Работаем с ведущими производителями лакокрасочных материалов России и Европы
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Профессиональные консультации</h3>
                <p className="text-muted-foreground">
                  Наши специалисты помогут подобрать материалы для любой задачи
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-6 text-center">Наша миссия</h3>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Мы верим, что качественные лакокрасочные материалы — это основа любого успешного ремонта 
              и строительства. Наша цель — предоставить каждому клиенту доступ к лучшим продуктам, 
              профессиональной консультации и безупречному сервису. Мы не просто продаём краски — 
              мы помогаем создавать красоту и уют в вашем доме.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
