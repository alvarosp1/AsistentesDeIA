import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const industries = [
  {
    title: "Finanzas y Banca",
    description: "Transformación digital en servicios financieros con IA predictiva.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M4 18H20M6 10L12 4L18 10M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Detección de fraude", "Análisis de riesgo", "Trading algorítmico"]
  },
  {
    title: "Salud y Bienestar",
    description: "Soluciones de IA para mejorar diagnósticos y tratamientos.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Diagnóstico asistido", "Gestión hospitalaria", "Análisis predictivo"]
  },
  {
    title: "Retail y E-commerce",
    description: "Personalización y optimización de experiencias de compra.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Recomendaciones", "Optimización de inventario", "Personalización"]
  },
  {
    title: "Manufactura",
    description: "Optimización de procesos industriales con IA.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7519 11.1679L11.5547 9.03647M11.5547 9.03647L8.35754 6.90505M11.5547 9.03647V14.0365M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Mantenimiento predictivo", "Control de calidad", "Automatización"]
  },
  {
    title: "Educación",
    description: "Revolucionando el aprendizaje con IA personalizada.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14L3 7L12 0L21 7L12 14ZM12 14V24M6 10V16L12 20L18 16V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Aprendizaje adaptativo", "Evaluación automática", "Tutoría personalizada"]
  },
  {
    title: "Logística",
    description: "Optimización de cadenas de suministro con IA.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 16V6A3 3 0 0 0 7 6V16M13 16H7M13 16H16M7 16H4M16 16L15.7294 15.3961C15.4671 14.8717 15.3359 14.6095 15.2538 14.3286C15.1716 14.0477 15.1404 13.7561 15.1607 13.4654C15.181 13.1747 15.2524 12.8873 15.3953 12.3126L16 10M16 16H18M16 10H19.4L20.5 12.3126C20.6429 12.8873 20.7143 13.1747 20.7346 13.4654C20.7549 13.7561 20.7237 14.0477 20.6415 14.3286C20.5594 14.6095 20.4282 14.8717 20.1659 15.3961L19.8953 16M16 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Rutas inteligentes", "Gestión de inventario", "Predicción de demanda"]
  },
  {
    title: "Agricultura",
    description: "Agricultura de precisión potenciada por IA.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8C12 8 12 3 8 3C4 3 4 8 4 8M12 8H4M12 8C12 8 12 3 16 3C20 3 20 8 20 8M12 8H20M20 8C20 8 20 12 16 12C12 12 12 8 12 8M4 8C4 8 4 12 8 12C12 12 12 8 12 8M12 8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Monitoreo de cultivos", "Riego inteligente", "Predicción de cosechas"]
  },
  {
    title: "Energía",
    description: "Optimización y eficiencia energética con IA.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    solutions: ["Predicción de consumo", "Mantenimiento predictivo", "Optimización de red"]
  }
];

const IndustryCard = ({ industry, index }) => {
  // Definir gradientes diferentes para cada tarjeta
  const gradients = [
    "from-purple-600/20 to-indigo-600/20 border-purple-500/30",
    "from-blue-600/20 to-cyan-600/20 border-blue-500/30",
    "from-emerald-600/20 to-teal-600/20 border-emerald-500/30",
    "from-amber-600/20 to-orange-600/20 border-amber-500/30",
    "from-rose-600/20 to-pink-600/20 border-rose-500/30",
    "from-violet-600/20 to-purple-600/20 border-violet-500/30",
    "from-cyan-600/20 to-blue-600/20 border-cyan-500/30",
    "from-green-600/20 to-emerald-600/20 border-green-500/30"
  ];

  const iconColors = [
    "text-purple-400 group-hover:text-purple-300",
    "text-blue-400 group-hover:text-blue-300",
    "text-emerald-400 group-hover:text-emerald-300",
    "text-amber-400 group-hover:text-amber-300",
    "text-rose-400 group-hover:text-rose-300",
    "text-violet-400 group-hover:text-violet-300",
    "text-cyan-400 group-hover:text-cyan-300",
    "text-green-400 group-hover:text-green-300"
  ];

  const bgGradients = [
    "from-purple-600/10 to-indigo-600/10",
    "from-blue-600/10 to-cyan-600/10",
    "from-emerald-600/10 to-teal-600/10",
    "from-amber-600/10 to-orange-600/10",
    "from-rose-600/10 to-pink-600/10",
    "from-violet-600/10 to-purple-600/10",
    "from-cyan-600/10 to-blue-600/10",
    "from-green-600/10 to-emerald-600/10"
  ];

  const currentGradient = gradients[index % gradients.length];
  const currentIconColor = iconColors[index % iconColors.length];
  const currentBgGradient = bgGradients[index % bgGradients.length];

  return (
    <motion.div
      className={`relative min-w-[420px] h-[520px] mx-5 group`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Fondo con gradiente animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentGradient} rounded-[30px] backdrop-blur-xl border shadow-lg shadow-black/20 overflow-hidden`}>
        {/* Elementos decorativos de fondo */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div className="relative h-full p-8 flex flex-col items-center text-center">
        {/* Número de industria */}
        <div className="absolute top-6 left-6 text-4xl font-bold text-white/10">
          {(index + 1).toString().padStart(2, '0')}
        </div>

        {/* Icono con animación */}
        <motion.div
          className={`${currentIconColor} mb-6 p-5 rounded-2xl bg-gradient-to-br ${currentBgGradient} backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:shadow-lg`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {industry.icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {industry.title}
        </h3>

        <div className={`w-12 h-1 bg-gradient-to-r ${currentBgGradient} mb-4`}></div>

        <p className="text-gray-300 mb-8">
          {industry.description}
        </p>

        {/* Lista de soluciones con animación */}
        <div className="flex-grow w-full flex flex-col justify-center items-center">
          {industry.solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="mb-4 last:mb-0 w-full"
            >
              <div className={`text-gray-200 text-sm bg-gradient-to-r ${currentBgGradient} backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl flex items-center group-hover:border-white/20 transition-all duration-300`}>
                <svg className="w-4 h-4 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón "Ver más" */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-8 bg-gradient-to-r ${currentBgGradient} text-white px-6 py-2 rounded-xl border border-white/10 text-sm font-medium hover:border-white/20 transition-all duration-300`}
        >
          Ver soluciones
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function Industries() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-85%"]);

  // Efecto para mostrar indicador de desplazamiento
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(0);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900" id="industrias">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Efectos de fondo mejorados */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="h-screen flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Soluciones Sectoriales
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformando <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Cada Industria</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones de IA personalizadas para los desafíos específicos de tu sector
            </p>
          </motion.div>

          {/* Indicador de desplazamiento */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 hidden md:flex flex-col items-center"
          >
            <div className="text-white/50 text-sm mb-2">Desplaza</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </motion.div>
          </motion.div>

          {/* Contenedor del scroll horizontal mejorado */}
          <div className="relative flex items-center overflow-hidden">
            <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex pl-8 pr-24"
            >
              {industries.map((industry, index) => (
                <IndustryCard
                  key={industry.title}
                  industry={industry}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Indicador de progreso */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {industries.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    scrollYProgress.get() > index / industries.length && scrollYProgress.get() < (index + 1) / industries.length
                      ? 'bg-purple-500'
                      : 'bg-white/20'
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          </div>

          {/* Degradado para indicar que hay más contenido */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}