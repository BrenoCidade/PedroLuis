import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dotenv from "dotenv";

const services = [
  {
    title: "Lipoenzimatica",
    description:
      "Tratamento não invasivo que ajuda a combater a gordura localizada e reduzir medidas, melhorando o contorno corporal.",
  },
  {
    title: "Botox",
    description:
      "Aplicação de toxina botulínica para suavizar rugas e linhas de expressão, proporcionando um aspecto mais jovem e natural.",
  },
  {
    title: "Preenchimento Facial",
    description:
      "Procedimento que restaura o volume facial perdido, define contornos e corrige imperfeições, realçando a beleza natural.",
  },
  {
    title: "Limpeza de Pele",
    description:
      "Tratamento que remove impurezas, células mortas e cravos, deixando a pele limpa, macia e com aspecto saudável.",
  },
  {
    title: "Microagulhamento",
    description:
      "Estimula a produção de colágeno e elastina, melhorando a textura da pele e reduzindo cicatrizes, estrias e manchas.",
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
