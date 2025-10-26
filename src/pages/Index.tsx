import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="font-semibold text-lg">Лабораторная работа</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                О работе
              </a>
              <Link to="/anketa" className="text-sm font-medium hover:text-primary transition-colors">
                Анкета
              </Link>
              <Link to="/contacts">
                <Button variant="outline" size="sm">
                  Контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">
              Проектирование
              <br />
              <span className="text-primary">интернет-сайтов</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лабораторная работа по созданию современного веб-проекта с минималистичным дизайном
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                <Icon name="FileText" size={20} />
                Посмотреть работу
              </Button>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Mail" size={20} />
                  Связаться
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all animate-scale-in">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Palette" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Дизайн</h3>
              <p className="text-muted-foreground">
                Минималистичный подход с акцентом на чистые линии и пространство
              </p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Code" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Технологии</h3>
              <p className="text-muted-foreground">
                React, TypeScript, Tailwind CSS для современной разработки
              </p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Производительность</h3>
              <p className="text-muted-foreground">
                Оптимизированный код для быстрой загрузки и отзывчивости
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Описание проекта</h2>
            <p className="text-muted-foreground">
              Ключевые особенности разработки
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-2">Адаптивная вёрстка</h4>
                <p className="text-muted-foreground">
                  Сайт корректно отображается на всех устройствах: от мобильных телефонов до широких мониторов
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-2">Современный UI/UX</h4>
                <p className="text-muted-foreground">
                  Интуитивный интерфейс с плавными анимациями и продуманной навигацией
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-2">Оптимизация производительности</h4>
                <p className="text-muted-foreground">
                  Быстрая загрузка страниц и эффективное использование ресурсов браузера
                </p>
              </div>
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

export default Index;