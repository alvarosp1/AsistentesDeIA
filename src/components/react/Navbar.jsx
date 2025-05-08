import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item === 'Inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = item === 'Planes' ? 'precios' : item.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text"
          >
            Asistentes de IA
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Servicios', 'Industrias', 'Planes'].map((item) => (
              <motion.a
                key={item}
                href={item === 'Inicio' ? '/' : item === 'Planes' ? '#precios' : `#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500
                     text-white px-6 py-2 rounded-full text-sm font-medium
                     hover:shadow-lg hover:shadow-purple-500/30 transition-shadow"
            onClick={() => {
              // @ts-ignore
              if (window.Calendly) {
                // @ts-ignore
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/clientia/llamada-asistente-profesional-marketing'
                });
              }
            }}
          >
            Prueba Gratis
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}