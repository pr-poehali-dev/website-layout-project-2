import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tariffs = [
    {
      name: "Пробуй",
      price: 200,
      originalPrice: 400,
      period: "/ месяц",
      discount: "400 ₽ в месяц без трат по карте Газпромбанка",
      data: { gb: 5, minutes: 400, sms: 50 },
      features: [
        { icon: "Infinity", text: "Безлимит внутри сети" },
        { icon: "MessageSquare", text: "Мессенджеры без ограничений" },
        { icon: "Wifi", text: "Первые остатки sms, минут и ГБ" },
        { icon: "Plus", text: "Доп. пакеты услуг" },
      ],
      prepayOptions: [
        { period: "6 месяцев", price: 1080, savings: 1320 },
        { period: "12 месяцев", price: 1680, savings: 3120 },
      ],
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      popular: false,
    },
    {
      name: "Действуй",
      price: 300,
      originalPrice: 600,
      period: "/ месяц",
      discount: "600 ₽ в месяц без трат по карте Газпромбанка",
      data: { gb: 20, minutes: 600, sms: 50 },
      features: [
        { icon: "Infinity", text: "Безлимит внутри сети" },
        { icon: "MessageSquare", text: "Мессенджеры без ограничений" },
        { icon: "Wifi", text: "Первые остатки sms, минут и ГБ" },
        { icon: "Plus", text: "Доп. пакеты услуг" },
      ],
      prepayOptions: [
        { period: "6 месяцев", price: 1620, savings: 1980 },
        { period: "12 месяцев", price: 2520, savings: 4680 },
      ],
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      popular: true,
    },
    {
      name: "Побеждай",
      price: 450,
      originalPrice: 900,
      period: "/ месяц",
      discount: "900 ₽ в месяц без трат по карте Газпромбанка",
      data: { gb: 40, minutes: 1000, sms: 50 },
      features: [
        { icon: "Infinity", text: "Безлимит внутри сети" },
        { icon: "MessageSquare", text: "Мессенджеры без ограничений" },
        { icon: "Wifi", text: "Первые остатки sms, минут и ГБ" },
        { icon: "Plus", text: "Доп. пакеты услуг" },
      ],
      prepayOptions: [
        { period: "6 месяцев", price: 2430, savings: 2970 },
        { period: "12 месяцев", price: 3780, savings: 7020 },
      ],
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Выберите тарифный план
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные тарифы с выгодными условиями и безлимитным общением
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tariffs.map((tariff, index) => (
            <Card
              key={tariff.name}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                tariff.popular ? "ring-2 ring-blue-500 shadow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tariff.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                  Хит продаж
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {tariff.name}
                </CardTitle>

                <div className="space-y-2">
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-lg text-gray-500">
                      {tariff.data.gb} ГБ
                    </span>
                    <span className="text-lg text-gray-500">
                      {tariff.data.minutes} мин
                    </span>
                    <span className="text-lg text-gray-500">
                      {tariff.data.sms} sms
                    </span>
                  </div>

                  <div className="space-y-3 pt-4">
                    {tariff.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <Icon
                          name={feature.icon}
                          size={16}
                          className="text-blue-500"
                        />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="text-blue-500 text-sm hover:text-blue-600 transition-colors">
                      Подробнее о тарифе ›
                    </button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {tariff.price} ₽
                    </span>
                    <span className="text-gray-600">{tariff.period}</span>
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-blue-500"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {tariff.discount}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {tariff.prepayOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name={`tariff-${tariff.name}`}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            Предоплата за {option.period}
                          </p>
                          <p className="text-sm text-gray-600">
                            Экономия {option.savings} ₽
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          {option.price} ₽
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full py-3 text-white font-medium rounded-lg transition-all duration-200 ${tariff.buttonColor}`}
                >
                  Заказать SIM-карту
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
