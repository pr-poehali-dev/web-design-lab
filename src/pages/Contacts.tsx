import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="font-semibold text-lg">Лабораторная работа</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </Link>
              <span className="text-sm font-medium text-primary">
                Контакты
              </span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground">
              Остались вопросы? Мы с радостью на них ответим
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-scale-in">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:lab@university.edu" className="text-muted-foreground hover:text-primary transition-colors">
                        lab@university.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Университетская, д. 1
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Github" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Twitter" size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg border border-border">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Лабораторная работа по проектированию интернет-сайтов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
