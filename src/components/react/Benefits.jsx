import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const benefits = [
  {
    title: "Atención Continua",
    subtitle: "Disponibilidad 24/7",
    description: "Tus clientes reciben respuestas instantáneas en cualquier momento. Nuestros agentes nunca duermen, nunca se cansan y siempre mantienen la misma calidad de atención.",
    features: [
      "Respuestas instantáneas",
      "Sin tiempos de espera",
      "Atención multicanal",
      "Escalamiento automático"
    ],
    stats: {
      value: "99.9%",
      label: "Disponibilidad"
    },
    gradient: "from-blue-500 to-cyan-500",
    detailedInfo: {
      description: "Nuestros agentes de IA proporcionan una atención al cliente ininterrumpida, garantizando que tus clientes siempre reciban la ayuda que necesitan, sin importar la hora o el día.",
      examples: [
        "Respuesta automática a consultas frecuentes las 24 horas del día",
        "Gestión de múltiples conversaciones simultáneas sin degradación del servicio",
        "Escalamiento inteligente a agentes humanos cuando sea necesario",
        "Seguimiento automático de casos y recordatorios"
      ],
      benefits: [
        "Reducción del tiempo de respuesta de horas a segundos",
        "Mejora en la satisfacción del cliente",
        "Optimización de recursos humanos",
        "Consistencia en la calidad de atención"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  },
  {
    title: "Automatización Inteligente",
    subtitle: "Eficiencia Operativa",
    description: "Libera a tu equipo de tareas repetitivas y optimiza tus procesos. Nuestros agentes aprenden y mejoran constantemente, aumentando la productividad de tu empresa.",
    features: [
      "Aprendizaje continuo",
      "Procesos optimizados",
      "Reducción de errores",
      "Escalabilidad inmediata"
    ],
    stats: {
      value: "85%",
      label: "Reducción de tareas manuales"
    },
    gradient: "from-purple-500 to-indigo-500",
    detailedInfo: {
      description: "Automatiza procesos complejos y repetitivos con inteligencia artificial, permitiendo que tu equipo se enfoque en tareas de mayor valor estratégico.",
      examples: [
        "Procesamiento automático de documentos y facturas",
        "Clasificación y routing inteligente de solicitudes",
        "Generación automática de reportes y análisis",
        "Actualización automática de bases de datos"
      ],
      benefits: [
        "Reducción significativa de errores humanos",
        "Mayor velocidad en procesamiento de tareas",
        "Ahorro en costos operativos",
        "Mejora en la precisión de datos"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  },
  {
    title: "Integración Perfecta",
    subtitle: "Conectividad Total",
    description: "Se integra sin problemas con tus herramientas actuales. Desde WhatsApp hasta tu CRM, nuestros agentes trabajan en armonía con tu infraestructura existente.",
    features: [
      "APIs robustas",
      "Conexión multi-plataforma",
      "Sincronización en tiempo real",
      "Personalización completa"
    ],
    stats: {
      value: "+50",
      label: "Integraciones disponibles"
    },
    gradient: "from-rose-500 to-pink-500",
    detailedInfo: {
      description: "Conecta nuestros agentes de IA con todas tus herramientas y sistemas existentes, creando un ecosistema digital perfectamente integrado.",
      examples: [
        "Integración con WhatsApp, Messenger, y otros canales de comunicación",
        "Conexión con CRM, ERP y sistemas de gestión",
        "Sincronización con calendarios y sistemas de agenda",
        "APIs personalizables para necesidades específicas"
      ],
      benefits: [
        "Flujo de información sin interrupciones",
        "Centralización de datos y procesos",
        "Mejora en la toma de decisiones",
        "Experiencia unificada para usuarios y clientes"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  },
  {
    title: "Personalización Avanzada",
    subtitle: "Adaptación Perfecta",
    description: "Cada agente es único, entrenado específicamente para tu industria y necesidades. Aprende tu marca, tu voz y tus procesos para una experiencia verdaderamente personalizada.",
    features: [
      "Aprendizaje contextual",
      "Adaptación continua",
      "Personalización por industria",
      "Mejora constante"
    ],
    stats: {
      value: "100%",
      label: "Personalizable"
    },
    gradient: "from-amber-500 to-orange-500",
    detailedInfo: {
      description: "Adapta el comportamiento y conocimiento de los agentes de IA a las necesidades específicas de tu empresa y sector, garantizando una experiencia única y personalizada.",
      examples: [
        "Entrenamiento con datos específicos de tu industria",
        "Personalización de respuestas según tu marca",
        "Adaptación a procesos y flujos de trabajo únicos",
        "Aprendizaje continuo basado en interacciones"
      ],
      benefits: [
        "Mayor precisión en respuestas y acciones",
        "Mejor alineación con objetivos de negocio",
        "Experiencia consistente con la marca",
        "Mejora continua del servicio"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Modal = ({ isOpen, onClose, benefit }) => {
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                {benefit.subtitle}
              </p>
            </div>
            <div className={`text-gradient-to-r ${benefit.gradient} text-white`}>
              {benefit.detailedInfo.icon}
            </div>
          </div>

          {/* Descripción detallada */}
          <p className="text-gray-300 mb-8">
            {benefit.detailedInfo.description}
          </p>

          {/* Ejemplos */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Ejemplos de Aplicación</h4>
            <div className="space-y-3">
              {benefit.detailedInfo.examples.map((example, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient}`} />
                  <span className="text-gray-300">
                    {example}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Beneficios Clave</h4>
            <div className="space-y-3">
              {benefit.detailedInfo.benefits.map((benefit, i) => (
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
                    {benefit}
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
            className={`w-full bg-gradient-to-r ${benefit.gradient} 
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

export default function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Transforma tu Empresa con IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestros agentes de IA pueden revolucionar tu negocio, 
            mejorando la eficiencia y proporcionando una ventaja competitiva en el mercado actual
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className={`bg-gradient-to-br ${benefit.gradient} p-[1px] rounded-2xl`}
            >
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                {/* Encabezado */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {benefit.subtitle}
                  </p>
                </div>

                {/* Descripción */}
                <p className="text-gray-300 mb-6">
                  {benefit.description}
                </p>

                {/* Características */}
                <div className="space-y-3 mb-8">
                  {benefit.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      variants={featureVariants}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient}`} />
                      <span className="text-gray-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Estadísticas */}
                <div className="flex items-end justify-between border-t border-gray-800 pt-6">
                  <div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text`}>
                      {benefit.stats.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {benefit.stats.label}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedBenefit(benefit)}
                    className={`bg-gradient-to-r ${benefit.gradient} 
                             text-white px-6 py-2 rounded-xl text-sm font-medium
                             hover:shadow-lg transition-shadow`}
                  >
                    Saber más →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={selectedBenefit !== null}
        onClose={() => setSelectedBenefit(null)}
        benefit={selectedBenefit}
      />
    </section>
  );
} 