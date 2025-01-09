import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué son los agentes de IA y cómo pueden ayudar a mi empresa?",
    answer: "Los agentes de IA son asistentes inteligentes que trabajan 24/7 analizando datos, automatizando tareas y proporcionando insights valiosos para tu negocio. Pueden ayudar en áreas como ventas, atención al cliente, marketing, recursos humanos y operaciones, permitiéndote tomar mejores decisiones basadas en datos."
  },
  {
    question: "¿Cuánto tiempo toma implementar un agente de IA?",
    answer: "La implementación inicial puede realizarse en 24-48 horas. El agente comienza a aprender de tus datos y procesos inmediatamente, mejorando su rendimiento con el tiempo. En la primera semana ya podrás ver resultados tangibles en eficiencia y automatización."
  },
  {
    question: "¿Qué tipo de datos necesitan los agentes para funcionar?",
    answer: "Los agentes pueden trabajar con diversos tipos de datos: históricos de ventas, registros de clientes, métricas de rendimiento, comunicaciones, etc. Toda la información se procesa de forma segura y cumpliendo con las normativas de privacidad. Cuantos más datos tenga disponibles, mejores serán los resultados."
  },
  {
    question: "¿Los agentes de IA pueden integrarse con mis sistemas actuales?",
    answer: "Sí, nuestros agentes están diseñados para integrarse perfectamente con tus sistemas existentes como CRM, ERP, herramientas de marketing, plataformas de e-commerce y más. Utilizamos APIs estándar y conectores personalizados para garantizar una integración fluida."
  },
  {
    question: "¿Qué nivel de personalización ofrecen los agentes?",
    answer: "Cada agente se personaliza completamente según las necesidades específicas de tu empresa. Esto incluye el aprendizaje de tus procesos, adaptación a tu industria, personalización de reportes y dashboards, y configuración de alertas y notificaciones según tus preferencias."
  },
  {
    question: "¿Cómo se maneja la seguridad y privacidad de los datos?",
    answer: "Implementamos las más altas medidas de seguridad, incluyendo encriptación de datos, autenticación de dos factores, y cumplimiento con GDPR y otras regulaciones de privacidad. Tus datos están siempre protegidos y nunca se comparten con terceros."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">
          Preguntas Frecuentes
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Todo lo que necesitas saber sobre nuestros agentes de IA
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200 ${
                openIndex === index 
                  ? 'bg-gradient-to-br from-indigo-800/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/5'
              } rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between"
              >
                <span className={`text-left font-medium transition-colors ${
                  openIndex === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-all duration-200 ${
                  openIndex === index ? 'rotate-180 text-purple-400' : 'text-gray-400'
                }`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-indigo-500/20"
                  >
                    <div className="px-6 py-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 