import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-lg">
                  <a href="tel:+78001234567" className="text-foreground hover:text-primary transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Бесплатно по России</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Mail" size={32} className="text-secondary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-lg">
                  <a href="mailto:info@vsekraski.ru" className="text-foreground hover:text-secondary transition-colors">
                    info@vsekraski.ru
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ответим в течение 1 часа</p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-lg text-foreground">
                  г. Москва, ул. Строительная, д. 15
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Выставочный зал и склад</p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Оставить заявку</CardTitle>
              <CardDescription>
                Заполните форму и мы перезвоним вам в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
