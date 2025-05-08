import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const comparisonData = [
  {
    human: "Limitado a 8 horas laborales",
    ai: "Operación continua 24/7/365",
  },
  {
    human: "Costo mínimo $800.000 mensual",
    ai: "Inversión desde $99.990 mensual",
  },
  {
    human: "Sujeto a ausencias y rotación",
    ai: "Disponibilidad garantizada 100%",
  },
  {
    human: "Requiere capacitación constante",
    ai: "Actualizaciones automáticas",
  },
  {
    human: "Escalabilidad limitada",
    ai: "Escalabilidad instantánea",
  },
];

const pillars = [
  {
    title: "Personas",
    description: "¿Las personas que impulsan tu empresa tienen las habilidades necesarias para la IA?",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="opacity-20" cx="12" cy="12" r="10" fill="currentColor"/>
        <path className="opacity-80" fill="currentColor" d="M15.05 8.53a1 1 0 0 0-1.11-.7l-4 1a1 1 0 0 0-.74.74l-1 4a1 1 0 0 0 1.11 1.11l4-1a1 1 0 0 0 .74-.74l1-4a1 1 0 0 0-.11-.41ZM12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z"/>
      </svg>
    ),
  },
  {
    title: "Procesos",
    description: "¿Tus flujos de trabajo necesitan una implementación que entregue resultados reales?",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="opacity-20" fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path className="opacity-80" fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    ),
  },
  {
    title: "Tecnología",
    description: "¿Tu infraestructura tecnológica está lista para una implementación sostenible de IA?",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className="opacity-20" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
        <path className="opacity-80" fill="currentColor" d="M7 14.5l3-3 4 4 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "95%", label: "Satisfacción" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "+1000", label: "Clientes" },
  { value: "3.7x", label: "ROI promedio" }
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

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

    // Set visibility after a short delay for animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 lg:pt-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[50rem] h-[50rem] -top-20 -right-20 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[40rem] h-[40rem] top-1/3 -left-20 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[35rem] h-[35rem] bottom-0 right-1/4 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[25rem] h-[25rem] top-1/2 left-1/4 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal - Lado izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
            >
              Soluciones de IA para empresas en Chile
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Implementar IA es difícil.{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                Nosotros lo hacemos fácil.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Con el 80% de proyectos de IA fracasando, nuestra estrategia probada ayuda a tu empresa a superar las probabilidades - evitando costosos errores y generando resultados medibles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600
                         text-white px-8 py-4 rounded-full text-lg font-medium
                         hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
                Agenda una Consulta Gratis
              </motion.button>
              <a
                href="#precios"
                className="bg-white/10 backdrop-blur-sm border border-white/20
                         text-white px-8 py-4 rounded-full text-lg font-medium
                         hover:bg-white/20 transition-all inline-flex items-center"
              >
                Ver Planes
                <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparativa - Lado derecho */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                Solución Tradicional vs IA Empresarial
              </span>
            </h3>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-2">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Solución Tradicional</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/20 mb-2">
                    <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Asistentes de IA</p>
                </div>
              </div>

              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-red-500/20 transition-all">
                    <p className="text-gray-300 text-sm">
                      {item.human}
                    </p>
                  </div>
                  <div className="bg-indigo-500/10 p-4 rounded-lg border border-white/10 hover:border-green-500/20 transition-all">
                    <p className="text-gray-300 text-sm">
                      {item.ai}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-center text-gray-400 text-sm">
                  Nuestras soluciones de IA ofrecen un <span className="text-purple-400 font-medium">ROI promedio de 3.7x</span> sobre la inversión inicial
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tres pilares */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Nos enfocamos en 3 cosas...
            </h2>
            <p className="text-xl bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text font-semibold">
              Personas. Procesos. Tecnología.
            </p>
            <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
              Para asegurar que tu iniciativa de IA tenga éxito sin complicaciones...
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}