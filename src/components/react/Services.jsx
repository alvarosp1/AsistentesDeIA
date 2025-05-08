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

        {/* Sección de Proceso de Implementación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Proceso Simplificado
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cómo Implementamos Soluciones de IA
            </h3>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Un enfoque estructurado y transparente para garantizar resultados exitosos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Consulta Inicial",
                description: "Entendemos tus necesidades específicas y objetivos de negocio para diseñar la solución adecuada.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                number: "02",
                title: "Diseño Personalizado",
                description: "Creamos una solución a medida que se adapta perfectamente a tus procesos y sistemas existentes.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                number: "03",
                title: "Implementación Ágil",
                description: "Desplegamos la solución de forma gradual, asegurando una transición suave y minimizando interrupciones.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                number: "04",
                title: "Mejora Continua",
                description: "Monitoreamos, optimizamos y mejoramos constantemente para maximizar el valor y el retorno de inversión.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center text-purple-400">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              { name: "Machine Learning", icon: "🧠" },
              { name: "Procesamiento de Lenguaje Natural", icon: "💬" },
              { name: "Computer Vision", icon: "👁️" },
              { name: "Análisis Predictivo", icon: "📊" },
              { name: "Automatización de Procesos", icon: "⚙️" },
              { name: "Integración API", icon: "🔄" },
              { name: "Cloud Computing", icon: "☁️" },
              { name: "Big Data", icon: "📈" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl">{tech.icon}</div>
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