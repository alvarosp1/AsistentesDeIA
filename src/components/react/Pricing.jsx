import { motion } from 'framer-motion';
import { useState } from 'react';

// Testimonios para la sección de precios
const testimonials = [
  {
    quote: "Implementar asistentes de IA en nuestra empresa ha transformado completamente nuestra operación. El ROI ha sido impresionante.",
    author: "Carolina Méndez",
    position: "Directora de Innovación, Grupo Falabella",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "La capacidad de personalización y la facilidad de implementación nos permitió ver resultados desde la primera semana.",
    author: "Rodrigo Fuentes",
    position: "CTO, Bci Seguros",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "El soporte y acompañamiento durante todo el proceso ha sido excepcional. Recomiendo Asistentes de IA sin dudarlo.",
    author: "Valentina Torres",
    position: "Gerente de Operaciones, Cencosud",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

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

  // Componente para las tarjetas de testimonios
  const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500"
        />
        <div>
          <h4 className="text-white font-medium">{testimonial.author}</h4>
          <p className="text-gray-400 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
    </motion.div>
  );

  // Componente para las características del plan
  const FeatureList = ({ items, planName }) => (
    <div className="space-y-4">
      {items.map((feature, i) => (
        <div key={i} className="flex items-start gap-3 relative group">
          <span className="text-indigo-400 mt-0.5 flex-shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-gray-300">
            {feature.text}
            {feature.hasInfo && (
              <button
                className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-700 hover:bg-gray-600 text-xs text-white font-semibold cursor-help transition-colors"
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
    <section className="py-24 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden" id="servicios">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[40rem] h-[40rem] -top-20 -left-20 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[30rem] h-[30rem] bottom-0 right-1/4 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Servicios</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Soluciones de IA adaptadas a las necesidades específicas de tu empresa
          </p>

          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
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
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
                {/* Encabezado del plan */}
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xl text-gray-300 mb-6">{plan.subtitle}</p>

                  <div className="w-full h-px bg-gray-800 my-6"></div>

                  <p className="text-gray-400 text-sm mb-4">{plan.commitment}</p>
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
                  className="w-full border border-white/20 bg-transparent hover:bg-white/5
                           text-white px-6 py-3 rounded-xl font-medium mb-10
                           hover:shadow-lg transition-all"
                >
                  {plan.buttonText}
                </motion.button>

                <h4 className="text-xl font-semibold text-white mb-6">Lo que incluye:</h4>

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

        {/* Casos de éxito */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Casos de Éxito
            </h3>
            <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Tatu.ink</h4>
              <p className="text-gray-300 mb-6">
                Aplicación de gestión para estudios de tatuajes construida con asistentes de IA para optimizar la programación, gestión de clientes y diseño.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">AS</div>
                </div>
                <div>
                  <p className="text-white font-medium">Alvaro Souza</p>
                  <p className="text-gray-400 text-sm">Fundador & CEO, Tatu.ink</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">MulticolorInk</h4>
              <p className="text-gray-300 mb-6">
                Implementación de agentes de IA para servicio al cliente omnicanal y análisis de negocio en tiempo real para una tienda de suministros de arte.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">AJ</div>
                </div>
                <div>
                  <p className="text-white font-medium">Alejandro</p>
                  <p className="text-gray-400 text-sm">Fundador & CEO, MulticolorInk</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Preguntas Frecuentes
            </h3>
            <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {pricingFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center bg-gray-900 border border-gray-800 rounded-xl p-4 text-left hover:bg-gray-800/50 transition-colors"
                >
                  <h4 className="text-white font-medium pr-8">{faq.question}</h4>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900 border-x border-b border-gray-800 rounded-b-xl p-4 text-gray-300 -mt-1"
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
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para transformar tu empresa con IA?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Agenda una Consulta Gratis
            </motion.button>
            <p className="text-gray-400 mt-4">
              Sin compromisos. Sin presión de ventas. Solo una conversación sobre tus necesidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}