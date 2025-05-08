import { motion } from 'framer-motion';
import { useState } from 'react';

// Preguntas frecuentes sobre precios
const pricingFaqs = [
  {
    question: "¿Cómo se determina el precio de mi solución personalizada?",
    answer: "El precio se determina en base a varios factores: el tamaño de tu empresa, el volumen de datos a procesar, la complejidad de las integraciones necesarias, y los requisitos específicos de tu proyecto. Programamos una consulta inicial gratuita para entender tus necesidades y proporcionarte un presupuesto personalizado."
  },
  {
    question: "¿Hay costos adicionales que deba considerar?",
    answer: "Nuestras propuestas son transparentes e incluyen todos los costos asociados. No hay cargos ocultos. El presupuesto detallará los costos de implementación inicial, capacitación, y cualquier costo operativo continuo. Cualquier servicio adicional que puedas necesitar en el futuro se discutirá y cotizará por separado."
  },
  {
    question: "¿Ofrecen algún tipo de garantía?",
    answer: "Sí, ofrecemos una garantía de satisfacción. Si no estás satisfecho con los resultados durante los primeros 30 días después de la implementación completa, trabajaremos contigo para ajustar la solución sin costo adicional hasta que cumpla con tus expectativas."
  },
  {
    question: "¿Cuánto tiempo toma implementar una solución completa?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Proyectos pequeños pueden estar operativos en 2-4 semanas, mientras que implementaciones más complejas pueden tomar 2-3 meses. Durante nuestra consulta inicial, te proporcionaremos un cronograma detallado específico para tu proyecto."
  }
];

const plans = [
  {
    name: "AI Navigator",
    subtitle: "Estrategia e Implementación de IA",
    description: "Planificación estratégica y consultoría para implementar IA en tu empresa",
    commitment: "*3 meses de compromiso mínimo",
    features: [
      {
        items: [
          { text: "Evaluación de Preparación para IA", included: true },
          { text: "Plan Completo de IA a 90 días", included: true },
          { text: "20+ Horas de Consultoría Mensual", included: true },
          { text: "Identificación de ROI Mínimo 3.7x", included: true },
          { text: "Talleres de Estrategia de IA para Directivos", included: true },
          { text: "Planificación de Integración de IA en toda la Empresa", included: true },
          { text: "Evaluación de Habilidades de IA en la Empresa", included: true },
        ]
      }
    ],
    popular: false,
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-600/10 to-indigo-600/10",
    borderGradient: "border-purple-500/30",
    buttonText: "Contactar",
    callToAction: "Ideal para empresas que inician su transformación con IA"
  },
  {
    name: "AI Integrator",
    subtitle: "Tu Equipo Fraccional de Implementación de IA",
    description: "Equipo completo para implementar, desarrollar y optimizar soluciones de IA",
    commitment: "*6 y 12 meses de compromiso",
    features: [
      {
        items: [
          { text: "Todo lo incluido en AI Navigator, más:", included: true },
          { text: "40+ Horas de Desarrollo Mensual", included: true },
          { text: "Talleres Educativos de IA Personalizados", included: true },
          { text: "Gestión de Implementación de IA", included: true },
          { text: "Soporte Crítico 24/7", included: true },
          { text: "Sesiones Semanales de Estrategia y Actualizaciones", included: true },
          { text: "Estructura de Riesgo y Cumplimiento", included: true },
          { text: "Equipo de IA, Fracción del Costo", included: true },
        ]
      }
    ],
    popular: true,
    gradient: "from-indigo-600 to-blue-600",
    bgGradient: "from-indigo-600/10 to-blue-600/10",
    borderGradient: "border-indigo-500/30",
    buttonText: "Contactar",
    callToAction: "Ideal para empresas que buscan implementación completa"
  },
  {
    name: "AI Enterprise",
    subtitle: "Soluciones Empresariales a Medida",
    description: "Transformación digital completa con IA para grandes organizaciones",
    commitment: "*Contratos personalizados",
    features: [
      {
        items: [
          { text: "Todo lo incluido en AI Integrator, más:", included: true },
          { text: "Desarrollo e Implementación a Medida", included: true },
          { text: "Equipo Dedicado de Ingenieros de IA", included: true },
          { text: "Integración con Sistemas Empresariales Existentes", included: true },
          { text: "Formación Completa para Equipos Internos", included: true },
          { text: "Análisis Avanzado de Datos y Business Intelligence", included: true },
          { text: "Soluciones de IA Multimodales", included: true },
          { text: "Acuerdos de Nivel de Servicio Personalizados", included: true },
          { text: "Consultoría Estratégica a Nivel Ejecutivo", included: true },
        ]
      }
    ],
    popular: false,
    gradient: "from-rose-600 to-pink-600",
    bgGradient: "from-rose-600/10 to-pink-600/10",
    borderGradient: "border-rose-500/30",
    buttonText: "Contactar Ventas",
    callToAction: "Para organizaciones con necesidades complejas"
  }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Componente para las características del plan
  const FeatureList = ({ items, planName }) => (
    <div className="space-y-6">
      {items.map((feature, i) => (
        <div key={i} className="flex items-start gap-4 relative group">
          <span className="text-white mt-0.5 flex-shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-gray-300 text-lg">
            {feature.text}
            {feature.hasInfo && (
              <button
                className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-700 hover:bg-gray-600 text-xs text-white font-semibold cursor-help transition-colors"
                onMouseEnter={() => setActiveTooltip(planName + i)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                i
              </button>
            )}
          </span>
          {feature.tooltip && activeTooltip === planName + i && (
            <div className="absolute bottom-full left-8 mb-2 w-80 p-4 bg-gray-800 rounded-xl shadow-xl border border-gray-700 text-sm text-gray-300 z-50">
              {feature.tooltip}
              <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gray-800 border-r border-b border-gray-700 transform rotate-45"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="servicios">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[60rem] h-[60rem] -top-40 -left-40 bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[50rem] h-[50rem] bottom-0 right-1/3 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute w-full h-px top-0 left-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Servicios</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones de IA adaptadas a las necesidades específicas de tu empresa
          </p>
        </motion.div>

        {/* Planes */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black border border-gray-800 rounded-3xl p-8 h-full flex flex-col">
                {/* Encabezado del plan */}
                <div className="mb-8">
                  <h3 className="text-5xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-xl text-gray-300">{plan.subtitle}</p>

                  <div className="w-full h-px bg-gray-800 my-8"></div>

                  <p className="text-gray-400 text-sm mb-6">{plan.commitment}</p>
                </div>

                {/* Botón de acción */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({
                        url: 'https://calendly.com/clientia/llamada-asistente-profesional-marketing'
                      });
                    }
                  }}
                  className="w-full border border-white/30 bg-transparent hover:bg-white/5
                           text-white px-6 py-4 rounded-full font-medium mb-12
                           hover:shadow-lg transition-all text-lg"
                >
                  {plan.buttonText}
                </motion.button>

                <h4 className="text-2xl font-semibold text-white mb-8">What's included:</h4>

                {/* Características del plan */}
                <div className="flex-grow">
                  {plan.features.map((category, i) => (
                    <div key={i}>
                      <FeatureList
                        items={category.items}
                        planName={plan.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Preguntas Frecuentes
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            {pricingFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center bg-black border-b border-gray-800 p-6 text-left hover:bg-gray-900/20 transition-colors rounded-t-xl"
                >
                  <h4 className="text-white font-medium text-lg pr-8">{faq.question}</h4>
                  <div className={`w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center transition-transform ${activeFaq === index ? 'rotate-180 bg-indigo-600 border-indigo-600' : ''}`}>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/20 p-6 text-gray-300 rounded-b-xl"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md border border-indigo-500/20 rounded-3xl p-16 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu empresa con IA?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos crear una solución personalizada para tus necesidades específicas
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
              className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-white/20 transition-all"
            >
              Agenda una Consulta Gratis
            </motion.button>
            <p className="text-gray-400 mt-6">
              Sin compromisos. Sin presión de ventas. Solo una conversación sobre tus necesidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}