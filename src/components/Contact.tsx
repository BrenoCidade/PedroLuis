import { ArrowRight } from "lucide-react";
import dotenv from "dotenv";

const Contact = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <section id="contato" className="py-16 bg-aesthetic-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-aesthetic-black mb-4">
            Entre em Contato
          </h2>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Estou aqui para te ajudar a conquistar os resultados que você
            deseja. Agende sua consulta e vamos criar juntos um tratamento
            estético feito sob medida para você!
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-aesthetic-beige/30 p-8 rounded-lg border border-gray-100 shadow-sm">
          <div className="mb-8">
            <h3 className="font-playfair text-xl font-bold text-aesthetic-black mb-2">
              Informações de Contato
            </h3>
            <p className="font-montserrat text-gray-600 mb-4">
              Para consultas de preços e agendamentos, entre em contato pelo
              WhatsApp:
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-montserrat bg-emerald-600 text-aesthetic-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Enviar mensagem no WhatsApp{" "}
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold text-aesthetic-black mb-2">
              Horário de Atendimento
            </h3>
            <p className="font-montserrat text-gray-600 mb-1">
              Segunda a Sexta: 9h às 19h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
