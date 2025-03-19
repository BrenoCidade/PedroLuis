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
              Transforme-se com Pedro Luis
            </h1>
            <p className="font-montserrat text-gray-700 mb-8 text-lg">
              Especialista em Lipo Enzimática, tratamentos para gordura
              localizada, microvasos e muito mais, para realçar sua confiança e
              autoestima.
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
            className="md:w-2/5 animate-fade-in mx-auto mt-1"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative flex justify-center">
              <div className="absolute bg-gradient-to-r from-aesthetic-beige to-transparent opacity-30 z-10 rounded-lg"></div>
              <div className="aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]">
                <img
                  src="/images/hero-image.png"
                  alt="Pedro Luis - Esteticista Profissional"
                  className="object-cover w-full h-full"
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
