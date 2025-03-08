
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-aesthetic-beige shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="font-playfair text-aesthetic-black text-xl md:text-2xl font-bold"
        >
          Pedro Luis
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-montserrat text-aesthetic-black hover:text-gray-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-aesthetic-black" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-aesthetic-beige py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-montserrat text-aesthetic-black hover:text-gray-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
