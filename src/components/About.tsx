import { User } from "lucide-react";
import dotenv from "dotenv";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-aesthetic-beige/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full mx-auto flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/images/about-image.png"
                alt="Pedro Luis - Esteticista Profissional"
                className="object-cover rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-aesthetic-black mb-6">
              Sobre Pedro Luis
            </h2>
            <p className="font-montserrat text-gray-700 mb-6">
              Pedro Luis é um profissional dedicado na área de beleza e
              estética. Formado em Biomedicina com especialização em Estética, é
              expert em procedimentos estéticos faciais e corporais,
              destacando-se pela excelência e dedicação em proporcionar cuidados
              personalizados e resultados de alta qualidade.
            </p>
            <p className="font-montserrat text-gray-700 mb-6">
              Com um olhar clínico apurado e dedicação aos detalhes, Pedro Luis
              trabalha para realçar a beleza natural de cada cliente, sempre
              priorizando resultados naturais e personalizados.
            </p>
            <p className="font-montserrat text-gray-700">
              Comprometido com a excelência, mantém-se constantemente atualizado
              com as mais recentes técnicas e tecnologias do mercado, garantindo
              procedimentos seguros e eficazes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
