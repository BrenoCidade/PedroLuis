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
              Pedro Luis é um profissional apaixonado pela arte de realçar a
              beleza natural, com formação em Biomedicina e especialização em
              Biomedicina Estética. Com vasta experiência em procedimentos
              corporais, ele se destaca pela busca incessante por resultados
              naturais, seguros e personalizados para cada cliente.
            </p>
            <p className="font-montserrat text-gray-700 mb-6">
              Com um currículo de peso, Pedro Luis possui a qualificação do
              Facesse, curso liderado pela renomada Dra. Vanessa Sampaio, além
              de ter trabalhado ao lado de grandes profissionais da área como
              Dra. Sharmylle e Dr. Leandro, o que o fez aprofundar ainda mais
              suas habilidades.
            </p>
            <p className="font-montserrat text-gray-700">
              Sempre comprometido com a excelência, Pedro Luis se mantém
              atualizado com as mais recentes tecnologias e práticas do mercado,
              garantindo tratamentos eficazes que trazem resultados visíveis e
              duradouros, respeitando a individualidade de cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
