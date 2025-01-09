import { motion } from 'framer-motion';
import { useEffect } from 'react';

const comparisonData = [
  {
    human: "8 horas de trabajo",
    ai: "24/7 disponibilidad",
  },
  {
    human: "$800.000/mes mínimo",
    ai: "Desde $99.990/mes",
  },
  {
    human: "Vacaciones y licencias",
    ai: "Siempre disponible",
  },
  {
    human: "Capacitación constante",
    ai: "Actualización instantánea",
  },
];

export default function Hero() {
  useEffect(() => {
    // Load Calendly scripts
    const loadCalendly = () => {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadCalendly();
  }, []);

  const scrollToDemo = () => {
    setTimeout(() => {
      // Intentar encontrar cualquiera de las dos secciones de demo
      const demoSection = document.getElementById('demo-section') || document.querySelector('.demo-section');
      
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="min-h-screen pt-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -right-10 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Potencia tu Empresa con{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                Asistentes de IA
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Automatiza tareas, mejora la atención al cliente y reduce costos con asistentes virtuales inteligentes disponibles 24/7
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 
                         text-white px-8 py-4 rounded-full text-lg font-medium
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
                Prueba Gratis 14 Días
              </motion.button>
              <a
                href="#demo"
                className="bg-white/10 backdrop-blur-sm border border-white/20
                         text-white px-8 py-4 rounded-full text-lg font-medium
                         hover:bg-white/20 transition-all inline-block"
              >
                Ver Demo →
              </a>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-white">95%</h3>
                <p className="text-gray-400">Satisfacción</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-gray-400">Disponibilidad</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">+1000</h3>
                <p className="text-gray-400">Clientes</p>
              </div>
            </div>
          </motion.div>

          {/* Comparativa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Asistente Humano vs IA
            </h3>
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-300">
                      <span className="text-red-400">✗</span> {item.human}
                    </p>
                  </div>
                  <div className="bg-indigo-500/10 p-4 rounded-lg">
                    <p className="text-gray-300">
                      <span className="text-green-400">✓</span> {item.ai}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 