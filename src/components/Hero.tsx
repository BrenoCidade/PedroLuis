import { ArrowRight } from "lucide-react";
import dotenv from "dotenv";

const Hero = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <section
      id="início"
      className="min-h-screen flex items-center justify-center bg-aesthetic-beige"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 md:pr-10 mb-10 md:mb-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-aesthetic-black mb-6">
              Realce sua beleza com Pedro Luis
            </h1>
            <p className="font-montserrat text-gray-700 mb-8 text-lg">
              Especialista em procedimentos estéticos como Lipoenzimatica, Botox
              e outros tratamentos para realçar sua beleza natural.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-montserrat bg-emerald-600 text-aesthetic-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Fale comigo no WhatsApp <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
          <div
            className="md:w-1/3 animate-fade-in mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative flex justify-center">
              <div className="absolute bg-gradient-to-r from-aesthetic-beige to-transparent opacity-30 z-10 rounded-lg"></div>
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden shadow-xl flex justify-center items-center">
                <img
                  src="/images/hero-image.png"
                  alt="Pedro Luis - Esteticista Profissional"
                  className="object-cover w-3/4 h-3/4 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
