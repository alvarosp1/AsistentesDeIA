import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    title: "Asistentes Conversacionales",
    description: "Asistentes inteligentes que interactúan naturalmente con tus clientes y equipo, proporcionando respuestas precisas y personalizadas en cualquier momento.",
    features: [
      "Comunicación natural y fluida",
      "Disponibilidad 24/7",
      "Personalización por industria",
      "Multicanal y escalable"
    ],
    metrics: "Atención instantánea 24/7",
    color: "text-emerald-400",
    bgGradient: "from-emerald-500 to-teal-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-20" cx="12" cy="12" r="10" fill="currentColor"/>
        <path className="opacity-80" fill="currentColor" d="M15.05 8.53a1 1 0 0 0-1.11-.7l-4 1a1 1 0 0 0-.74.74l-1 4a1 1 0 0 0 1.11 1.11l4-1a1 1 0 0 0 .74-.74l1-4a1 1 0 0 0-.11-.41ZM12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z"/>
      </svg>
    ),
    detailedInfo: {
      description: "Nuestros asistentes conversacionales utilizan tecnología avanzada para mantener diálogos naturales y efectivos, adaptándose a cualquier industria o necesidad específica.",
      useCases: [
        "Atención al cliente personalizada",
        "Soporte técnico y resolución de dudas",
        "Gestión de reservas y citas",
        "Asistencia en ventas y consultas de productos"
      ],
      benefits: [
        "Atención inmediata en cualquier momento",
        "Experiencia consistente para todos los usuarios",
        "Reducción de costos operativos",
        "Escalabilidad sin límites"
      ],
      features: [
        "Comprensión de lenguaje natural",
        "Adaptación a tu marca y tono",
        "Integración multicanal (web, WhatsApp, etc.)",
        "Aprendizaje continuo"
      ]
    }
  },
  {
    title: "Asistentes de Proceso",
    description: "Automatiza y optimiza los procesos de tu empresa con asistentes que gestionan tareas, coordinan equipos y mantienen todo funcionando eficientemente.",
    features: [
      "Automatización de flujos",
      "Gestión de tareas",
      "Coordinación de equipos",
      "Seguimiento automático"
    ],
    metrics: "Eficiencia mejorada",
    color: "text-blue-400",
    bgGradient: "from-blue-500 to-indigo-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path className="opacity-20" fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path className="opacity-80" fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    ),
    detailedInfo: {
      description: "Optimiza la operación de tu empresa con asistentes que automatizan procesos, coordinan equipos y aseguran que todo funcione sin problemas.",
      useCases: [
        "Gestión de proyectos y tareas",
        "Coordinación de equipos y recursos",
        "Automatización de procesos administrativos",
        "Seguimiento de objetivos y KPIs"
      ],
      benefits: [
        "Mayor eficiencia operativa",
        "Reducción de errores humanos",
        "Mejor organización y coordinación",
        "Procesos más ágiles y efectivos"
      ],
      features: [
        "Flujos de trabajo automatizados",
        "Integración con herramientas existentes",
        "Reportes y análisis en tiempo real",
        "Escalabilidad según necesidades"
      ]
    }
  },
  {
    title: "Asistentes Analíticos",
    description: "Obtén insights valiosos y toma mejores decisiones con asistentes que analizan datos, generan reportes y proporcionan recomendaciones estratégicas.",
    features: [
      "Análisis de datos",
      "Reportes automáticos",
      "Insights en tiempo real",
      "Recomendaciones inteligentes"
    ],
    metrics: "Decisiones informadas",
    color: "text-purple-400",
    bgGradient: "from-purple-500 to-pink-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect className="opacity-20" x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
        <path className="opacity-80" fill="currentColor" d="M7 14.5l3-3 4 4 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    detailedInfo: {
      description: "Transforma tus datos en insights accionables con asistentes que analizan información, identifican patrones y generan recomendaciones estratégicas.",
      useCases: [
        "Análisis de tendencias y patrones",
        "Generación de reportes automáticos",
        "Monitoreo de KPIs",
        "Recomendaciones basadas en datos"
      ],
      benefits: [
        "Toma de decisiones más informada",
        "Identificación de oportunidades",
        "Optimización de recursos",
        "Ventaja competitiva"
      ],
      features: [
        "Dashboards personalizados",
        "Alertas inteligentes",
        "Reportes automatizados",
        "Visualización de datos"
      ]
    }
  }
];

const Modal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Encabezado */}
          <div className="flex items-center gap-4 mb-6">
            <div className={service.color}>
              {service.icon}
            </div>
            <h3 className="text-3xl font-bold text-white">
              {service.title}
            </h3>
          </div>

          {/* Descripción detallada */}
          <p className="text-gray-300 mb-8">
            {service.detailedInfo.description}
          </p>

          {/* Casos de Uso */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Casos de Uso</h4>
            <div className="space-y-3">
              {service.detailedInfo.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300">
                    {useCase}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Beneficios</h4>
            <div className="space-y-3">
              {service.detailedInfo.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.bgGradient}`} />
                  <span className="text-gray-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tecnologías/Metodologías */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">
              {service.detailedInfo.features ? 'Tecnologías' : 'Metodologías'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {(service.detailedInfo.features || service.detailedInfo.methodologies).map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-r ${service.bgGradient} bg-opacity-10 p-3 rounded-lg`}
                >
                  <span className="text-sm text-white">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Botón de cerrar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className={`w-full bg-gradient-to-r ${service.bgGradient}
                     text-white px-6 py-3 rounded-xl text-sm font-medium
                     hover:shadow-lg transition-shadow`}
          >
            Cerrar
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900/80 relative overflow-hidden" id="servicios">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[40rem] h-[40rem] top-1/3 -right-20 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[30rem] h-[30rem] -bottom-10 left-1/4 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Soluciones Inteligentes
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Servicios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Inteligencia Artificial</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones avanzadas diseñadas para impulsar el crecimiento, optimizar operaciones y transformar digitalmente tu empresa
          </p>
        </motion.div>

        {/* Servicios destacados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${service.bgGradient} p-[1px] rounded-2xl transition-all duration-300 group-hover:shadow-lg`}>
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  {/* Ícono y título */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgGradient} bg-opacity-20 flex items-center justify-center ${service.color} mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${service.bgGradient}`}></div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-300 mb-8">
                    {service.description}
                  </p>

                  {/* Lista de características */}
                  <div className="flex-grow">
                    <div className="space-y-4">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <svg className={`w-5 h-5 ${service.color} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Métricas y CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-800/50">
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-semibold ${service.color}`}>
                        {service.metrics}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedService(service)}
                        className={`bg-gradient-to-r ${service.bgGradient} text-white px-5 py-2 rounded-lg font-medium transition-all hover:shadow-lg`}
                      >
                        Ver detalles
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Sección de Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Tecnología de Vanguardia
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnologías que Utilizamos
            </h3>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Combinamos las mejores tecnologías de IA para crear soluciones potentes y escalables
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Machine Learning",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                name: "Procesamiento de Lenguaje Natural",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: "Computer Vision",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: "Análisis Predictivo",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21H3V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 9L13.5 16.5L9 12L3 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: "Automatización de Procesos",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C19.7978 13.7811 19.9357 12.4922 19.8008 11.2195C19.6659 9.94676 19.2618 8.72092 18.6201 7.63622C17.9783 6.55151 17.1184 5.63737 16.1114 4.96928C15.1045 4.30119 13.9762 3.89552 12.8 3.78C11.6239 3.66448 10.4362 3.84337 9.34358 4.30074C8.25095 4.75811 7.28348 5.48295 6.52145 6.41274C5.75943 7.34254 5.22314 8.4497 4.96031 9.63232C4.69748 10.8149 4.71747 12.0427 5.02 13.215" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H9V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: "Integración API",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 13V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: "Cloud Computing",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.1564 3.79151 10.2313 6.07974 10.0194C6.54781 7.17213 9.02024 5 12 5C14.9798 5 17.4522 7.17213 17.9203 10.0194C20.2085 10.2313 22 12.1564 22 14.5C22 16.9853 19.9853 19 17.5 19H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: "Big Data",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:text-indigo-400 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-gray-200 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para implementar IA en tu empresa?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo nuestros servicios pueden transformar tu negocio
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // @ts-ignore
                if (window.Calendly) {
                  // @ts-ignore
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/clientia/llamada-asistente-profesional-marketing'
                  });
                }
              }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Agenda una Consulta Gratis
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}