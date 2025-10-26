import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Anketa = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    age: "",
    gender: "",
    birthDate: "",
    favoriteColor: "#3b82f6",
    seasons: {
      winter: false,
      spring: false,
      summer: false,
      autumn: false,
    },
    favoriteAnimal: "",
    password: "",
    about: "",
  });

  const handleSeasonChange = (season: keyof typeof formData.seasons) => {
    setFormData({
      ...formData,
      seasons: {
        ...formData.seasons,
        [season]: !formData.seasons[season],
      },
    });
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      middleName: "",
      age: "",
      gender: "",
      birthDate: "",
      favoriteColor: "#3b82f6",
      seasons: {
        winter: false,
        spring: false,
        summer: false,
        autumn: false,
      },
      favoriteAnimal: "",
      password: "",
      about: "",
    });
    toast({
      title: "Форма очищена",
      description: "Все поля анкеты успешно очищены",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Анкета отправлена!",
      description: "Спасибо за заполнение анкеты",
    });
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
                Анкета
              </span>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold">Анкета</h1>
            <p className="text-xl text-muted-foreground">
              Лабораторная работа №6 - Поля ввода и HTML элементы
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 p-8 bg-card rounded-lg border border-border animate-scale-in">
            <div className="space-y-2">
              <Label htmlFor="firstName">Имя *</Label>
              <Input
                id="firstName"
                placeholder="Введите ваше имя"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="middleName">Отчество *</Label>
              <Input
                id="middleName"
                placeholder="Введите ваше отчество"
                value={formData.middleName}
                onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Возраст *</Label>
              <Input
                id="age"
                type="number"
                min="1"
                max="120"
                placeholder="Введите ваш возраст"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Пол *</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="font-normal cursor-pointer">
                    Мужской
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="font-normal cursor-pointer">
                    Женский
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Дата рождения *</Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="favoriteColor">Любимый цвет *</Label>
              <div className="flex gap-3 items-center">
                <Input
                  id="favoriteColor"
                  type="color"
                  value={formData.favoriteColor}
                  onChange={(e) => setFormData({ ...formData, favoriteColor: e.target.value })}
                  className="w-20 h-12 cursor-pointer"
                  required
                />
                <span className="text-sm text-muted-foreground font-mono">
                  {formData.favoriteColor}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Любимое время года (можно выбрать несколько)</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="winter"
                    checked={formData.seasons.winter}
                    onCheckedChange={() => handleSeasonChange("winter")}
                  />
                  <Label htmlFor="winter" className="font-normal cursor-pointer">
                    ❄️ Зима
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="spring"
                    checked={formData.seasons.spring}
                    onCheckedChange={() => handleSeasonChange("spring")}
                  />
                  <Label htmlFor="spring" className="font-normal cursor-pointer">
                    🌸 Весна
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="summer"
                    checked={formData.seasons.summer}
                    onCheckedChange={() => handleSeasonChange("summer")}
                  />
                  <Label htmlFor="summer" className="font-normal cursor-pointer">
                    ☀️ Лето
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="autumn"
                    checked={formData.seasons.autumn}
                    onCheckedChange={() => handleSeasonChange("autumn")}
                  />
                  <Label htmlFor="autumn" className="font-normal cursor-pointer">
                    🍂 Осень
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="favoriteAnimal">Любимое животное *</Label>
              <Select
                value={formData.favoriteAnimal}
                onValueChange={(value) => setFormData({ ...formData, favoriteAnimal: value })}
                required
              >
                <SelectTrigger id="favoriteAnimal">
                  <SelectValue placeholder="Выберите животное" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">🐕 Собака</SelectItem>
                  <SelectItem value="cat">🐈 Кошка</SelectItem>
                  <SelectItem value="rabbit">🐰 Кролик</SelectItem>
                  <SelectItem value="hamster">🐹 Хомяк</SelectItem>
                  <SelectItem value="parrot">🦜 Попугай</SelectItem>
                  <SelectItem value="fish">🐠 Рыбка</SelectItem>
                  <SelectItem value="turtle">🐢 Черепаха</SelectItem>
                  <SelectItem value="horse">🐴 Лошадь</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">Расскажите немного о себе</Label>
              <Textarea
                id="about"
                placeholder="Напишите несколько слов о себе..."
                rows={6}
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 gap-2">
                <Icon name="Send" size={18} />
                Отправить анкету
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClear}
                className="gap-2"
              >
                <Icon name="RotateCcw" size={18} />
                Очистить
              </Button>
            </div>
          </form>
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

export default Anketa;
