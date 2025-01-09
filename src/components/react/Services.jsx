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
    <section className="py-24 bg-gray-900" id="servicios">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones inteligentes diseñadas para impulsar el crecimiento y la eficiencia de tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Línea decorativa */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
              
              {/* Contenido principal */}
              <div className="relative flex flex-col h-full bg-gray-900 p-8 rounded-2xl">
                {/* Ícono y título */}
                <div className={`flex items-center gap-4 mb-6 ${service.color}`}>
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
                </div>

                {/* Descripción */}
                <p className="text-gray-400 mb-8">
                {service.description}
              </p>

                {/* Lista de características */}
                <div className="flex-grow">
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-1 h-1 rounded-full ${service.color}`} />
                        <span className="text-gray-300 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Métricas y CTA */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-semibold ${service.color}`}>
                      {service.metrics}
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedService(service)}
                      className={`${service.color} flex items-center gap-2 text-sm font-medium transition-colors`}
                    >
                      Ver detalles
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
} 