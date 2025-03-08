
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-aesthetic-black text-aesthetic-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-playfair text-xl font-bold mb-2">Pedro Luis</h3>
          <p className="font-montserrat text-sm text-gray-300 mb-4">
            Serviços de estética profissional
          </p>
          <p className="font-montserrat text-xs text-gray-400">
            &copy; {currentYear} Pedro Luis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
