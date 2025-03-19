import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Lipoenzimatica",
    description:
      "A Lipo Enzimática é um tratamento não invasivo que reduz a gordura localizada de forma eficaz, utilizando enzimas lipolíticas, sem cirurgia, proporcionando contornos mais definidos e naturais.",
  },
  {
    title: "Hidrolipoclasia",
    description:
      "tratamento não cirúrgico que utiliza uma solução para quebrar a gordura localizada. Ajuda a reduzir medidas e modelar o corpo de maneira eficaz e segura.",
  },
  {
    title: "Radiofrequência",
    description:
      "Tratamento que utiliza ondas de calor para estimular a produção de colágeno, firmando a pele e combatendo a flacidez. ",
  },
  {
    title: "PEIM",
    description:
      "Tratamento injetável que elimina microvasos e vasinhos, deixando a pele mais uniforme e sem imperfeições, com resultados rápidos e eficazes.",
  },
  {
    title: "Tratamentos Corporais",
    description:
      "Diversas técnicas para modelar o corpo, reduzir celulite e flacidez, proporcionando resultados visíveis e duradouros.",
  },
];

const Services = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <section id="serviços" className="py-20 bg-aesthetic-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-aesthetic-black mb-4">
            Nossos Serviços
          </h2>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Oferecemos procedimentos estéticos de alta qualidade, personalizados
            para suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Card className="h-full border border-gray-100 hover:shadow-md transition-shadow bg-aesthetic-beige/30">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-aesthetic-black">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-montserrat text-gray-600 mb-6">
            Para informações detalhadas sobre preços, entre em contato:
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-montserrat bg-emerald-600 text-aesthetic-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Consultar preços via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
