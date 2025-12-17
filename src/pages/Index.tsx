import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const shopItems = [
    { id: 1, name: 'VIP Статус', price: 299, description: 'Доступ к эксклюзивным зонам', icon: 'Crown' },
    { id: 2, name: 'Набор выживальщика', price: 499, description: 'Стартовый набор снаряжения', icon: 'Package' },
    { id: 3, name: 'Транспорт', price: 899, description: 'Личный автомобиль', icon: 'Car' },
    { id: 4, name: 'Оружейный набор', price: 699, description: 'Базовое вооружение', icon: 'Crosshair' },
  ];

  const characters = [
    { id: 1, name: 'Медик', description: 'Специалист по первой помощи', image: 'https://cdn.poehali.dev/projects/bf035f68-ec39-4ee1-a671-0424931be678/files/24525192-084b-4709-8535-9cfb05f99d28.jpg' },
    { id: 2, name: 'Солдат', description: 'Боевой специалист', image: 'https://cdn.poehali.dev/projects/bf035f68-ec39-4ee1-a671-0424931be678/files/24525192-084b-4709-8535-9cfb05f99d28.jpg' },
    { id: 3, name: 'Инженер', description: 'Мастер ремонта', image: 'https://cdn.poehali.dev/projects/bf035f68-ec39-4ee1-a671-0424931be678/files/24525192-084b-4709-8535-9cfb05f99d28.jpg' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Shadow_Killer', kills: 1543, deaths: 234 },
    { rank: 2, name: 'Wolf_Hunter', kills: 1289, deaths: 198 },
    { rank: 3, name: 'Desert_Fox', kills: 1156, deaths: 267 },
    { rank: 4, name: 'Night_Stalker', kills: 987, deaths: 312 },
    { rank: 5, name: 'Iron_Warrior', kills: 845, deaths: 289 },
  ];

  const news = [
    { id: 1, title: 'Обновление 2.5 - Новые зоны', date: '15 Декабря 2024', type: 'update' },
    { id: 2, title: 'Событие: Воздушный Десант', date: '10 Декабря 2024', type: 'event' },
    { id: 3, title: 'Улучшения баланса оружия', date: '5 Декабря 2024', type: 'patch' },
  ];

  const rules = [
    'Запрещено использование читов и модификаций',
    'Уважительное отношение к другим игрокам',
    'Запрещен багоюз и эксплойты',
    'Гриферство карается баном',
    'Следуйте указаниям администрации',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#4a5c3e]/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#4a5c3e]">DayZ BlackList</div>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'news', 'rules', 'characters', 'shop', 'leaderboard', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm hover:text-[#4a5c3e] transition-colors capitalize"
              >
                {item === 'home' ? 'Главная' : 
                 item === 'about' ? 'О сервере' :
                 item === 'news' ? 'Новости' :
                 item === 'rules' ? 'Правила' :
                 item === 'characters' ? 'Персонажи' :
                 item === 'shop' ? 'Магазин' :
                 item === 'leaderboard' ? 'Лидеры' : 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white">
            Играть
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/bf035f68-ec39-4ee1-a671-0424931be678/files/bfc2146c-04f5-434f-8fb4-88cb4b8d8940.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            DAYZ <span className="text-[#dc2626]">BLACKLIST</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Выживай в самом жестком мире постапокалипсиса
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-[#4a5c3e] text-white hover:bg-[#4a5c3e]/20">
              <Icon name="Info" className="mr-2" size={20} />
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            О <span className="text-[#4a5c3e]">Сервере</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-[#4a5c3e]/30">
              <CardHeader>
                <Icon name="Users" className="text-[#0ea5e9] mb-4" size={40} />
                <CardTitle className="text-white">Активное Сообщество</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Более 1000 активных игроков ежедневно
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#4a5c3e]/30">
              <CardHeader>
                <Icon name="Shield" className="text-[#f97316] mb-4" size={40} />
                <CardTitle className="text-white">Защита от Читеров</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Активная администрация 24/7
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#4a5c3e]/30">
              <CardHeader>
                <Icon name="Zap" className="text-[#dc2626] mb-4" size={40} />
                <CardTitle className="text-white">Частые Ивенты</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Еженедельные события с наградами
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-[#0ea5e9]">Новости</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="bg-black/50 border-[#4a5c3e]/30 hover:border-[#0ea5e9] transition-all">
                <CardHeader>
                  <Badge className={`w-fit mb-2 ${
                    item.type === 'update' ? 'bg-[#4a5c3e]' :
                    item.type === 'event' ? 'bg-[#f97316]' : 'bg-[#0ea5e9]'
                  }`}>
                    {item.type === 'update' ? 'Обновление' :
                     item.type === 'event' ? 'Событие' : 'Патч'}
                  </Badge>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-500">{item.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Правила <span className="text-[#dc2626]">Сервера</span>
          </h2>
          <Card className="bg-black/50 border-[#dc2626]/30">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-[#dc2626] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Персонажи и <span className="text-[#4a5c3e]">Классы</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((char) => (
              <Card key={char.id} className="bg-black/50 border-[#4a5c3e]/30 overflow-hidden hover:scale-105 transition-transform">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={char.image} 
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{char.name}</CardTitle>
                  <CardDescription className="text-gray-400">{char.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Магазин <span className="text-[#f97316]">Донатов</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopItems.map((item) => (
              <Card key={item.id} className="bg-black/50 border-[#f97316]/30 hover:border-[#f97316] transition-all">
                <CardHeader>
                  <Icon name={item.icon as any} className="text-[#f97316] mb-4" size={40} />
                  <CardTitle className="text-white">{item.name}</CardTitle>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#f97316]">{item.price}₽</span>
                    <Button size="sm" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Таблица <span className="text-[#0ea5e9]">Лидеров</span>
          </h2>
          <Card className="bg-black/50 border-[#0ea5e9]/30">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank} 
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      player.rank === 1 ? 'bg-[#f97316]/20' :
                      player.rank === 2 ? 'bg-[#0ea5e9]/20' :
                      player.rank === 3 ? 'bg-[#4a5c3e]/20' : 'bg-black/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl font-bold ${
                        player.rank === 1 ? 'text-[#f97316]' :
                        player.rank === 2 ? 'text-[#0ea5e9]' :
                        player.rank === 3 ? 'text-[#4a5c3e]' : 'text-gray-400'
                      }`}>
                        #{player.rank}
                      </span>
                      <span className="text-white font-semibold">{player.name}</span>
                    </div>
                    <div className="flex gap-8 text-sm">
                      <div className="text-center">
                        <div className="text-[#4a5c3e] font-bold">{player.kills}</div>
                        <div className="text-gray-500">Убийств</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#dc2626] font-bold">{player.deaths}</div>
                        <div className="text-gray-500">Смертей</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            Контакты <span className="text-[#4a5c3e]">Поддержки</span>
          </h2>
          <p className="text-gray-400 mb-8">Свяжитесь с нами любым удобным способом</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-[#0ea5e9] text-white hover:bg-[#0ea5e9]/20">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Discord
            </Button>
            <Button variant="outline" className="border-[#4a5c3e] text-white hover:bg-[#4a5c3e]/20">
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
            <Button variant="outline" className="border-[#f97316] text-white hover:bg-[#f97316]/20">
              <Icon name="Mail" className="mr-2" size={20} />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#4a5c3e]/30 py-8 px-4">
        <div className="container mx-auto text-center text-gray-500">
          <p>© 2024 DayZ BlackList. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
