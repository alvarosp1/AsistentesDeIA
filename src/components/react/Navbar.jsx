import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import CalButton from './CalButton';

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

    let targetId;
    if (item === 'Planes') {
      targetId = 'precios';
    } else if (item === 'Desarrollo SAAS') {
      targetId = 'desarrollo-saas';
    } else {
      targetId = item.toLowerCase();
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
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
            {['Inicio', 'Servicios', 'Industrias', 'Desarrollo SAAS', 'Planes'].map((item) => (
              <motion.a
                key={item}
                href={
                  item === 'Inicio'
                    ? '/'
                    : item === 'Planes'
                      ? '#precios'
                      : item === 'Desarrollo SAAS'
                        ? '#desarrollo-saas'
                        : `#${item.toLowerCase()}`
                }
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <CalButton
            variant="primary"
            size="small"
            className="text-sm"
          >
            Prueba Gratis
          </CalButton>
        </div>
      </div>
    </motion.nav>
  );
}