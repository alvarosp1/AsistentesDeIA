import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
  {
    title: "Análisis de Necesidades",
    description: "Estudiamos tu empresa y procesos para identificar las áreas donde los asistentes de IA pueden generar mayor impacto",
    icon: "🎯",
    details: [
      "Evaluación de procesos actuales",
      "Identificación de cuellos de botella",
      "Análisis de oportunidades de automatización",
      "Estimación de ROI"
    ]
  },
  {
    title: "Personalización del Asistente",
    description: "Entrenamos tu asistente con el conocimiento específico de tu empresa y sector",
    icon: "🧠",
    details: [
      "Configuración de base de conocimientos",
      "Definición de flujos de conversación",
      "Personalización de respuestas",
      "Integración con tus sistemas"
    ]
  },
  {
    title: "Implementación y Pruebas",
    description: "Desplegamos tu asistente y realizamos pruebas exhaustivas para garantizar su correcto funcionamiento",
    icon: "🚀",
    details: [
      "Pruebas de rendimiento",
      "Validación de respuestas",
      "Ajustes de precisión",
      "Pruebas con usuarios reales"
    ]
  },
  {
    title: "Monitoreo y Optimización",
    description: "Seguimiento continuo del desempeño y mejoras basadas en datos reales",
    icon: "📈",
    details: [
      "Análisis de conversaciones",
      "Métricas de satisfacción",
      "Optimización continua",
      "Reportes periódicos"
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-gray-900" id="como-funciona">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo Implementamos tu Asistente?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso simple y efectivo para transformar tu empresa con IA
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative pl-8 cursor-pointer ${
                  index === activeStep ? 'scale-105' : ''
                }`}
                whileHover={{ x: 10 }}
                onClick={() => setActiveStep(index)}
              >
                {/* Línea vertical */}
                {index !== steps.length - 1 && (
                  <div className={`absolute left-[15px] top-[30px] w-0.5 h-[calc(100%+2rem)] 
                    ${index === activeStep ? 'bg-purple-500' : 'bg-gray-700'}`}
                  />
                )}
                
                {/* Punto del timeline */}
                <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center
                  ${index === activeStep ? 'bg-purple-500' : 'bg-gray-700'}`}
                >
                  <span className="text-lg">{step.icon}</span>
                </div>

                <div className={`transition-colors ${
                  index === activeStep ? 'text-white' : 'text-gray-400'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detalles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 
                     backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="text-6xl mb-6">{steps[activeStep].icon}</div>
            <h3 className="text-2xl font-bold text-white mb-6">
              {steps[activeStep].title}
            </h3>
            <div className="space-y-4">
              {steps[activeStep].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <p className="text-gray-300">{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 