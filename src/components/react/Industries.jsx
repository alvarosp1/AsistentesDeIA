import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

const IndustryCard = ({ industry }) => {
  return (
    <div className="relative min-w-[400px] h-[500px] mx-4">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[30px] backdrop-blur-xl border border-white/10" />
      
      {/* Contenido */}
      <div className="relative h-full p-8 flex flex-col items-center text-center">
        {/* Icono con animación */}
        <motion.div
          className="text-blue-400 mb-6 p-4 rounded-full bg-blue-500/10"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {industry.icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {industry.title}
        </h3>
        
        <p className="text-gray-400 mb-8">
          {industry.description}
        </p>

        {/* Lista de soluciones con animación */}
        <div className="flex-grow flex flex-col justify-center">
          {industry.solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="mb-4 last:mb-0"
            >
              <span className="text-gray-300 text-sm bg-white/5 px-4 py-2 rounded-full">
                {solution}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Línea decorativa animada */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>
    </div>
  );
};

export default function Industries() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-900" id="industrias">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
        
        <div className="h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 px-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluciones para cada Industria
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transformamos sectores completos con soluciones de IA adaptadas a cada necesidad
            </p>
          </motion.div>

          {/* Contenedor del scroll horizontal */}
          <div className="relative flex items-center overflow-hidden">
            <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex space-x-8"
            >
              {industries.map((industry, index) => (
                <IndustryCard
                  key={industry.title}
                  industry={industry}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 