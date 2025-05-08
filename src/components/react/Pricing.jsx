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
    name: "Startup",
    subtitle: "Para empresas emergentes",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Solución ideal para startups y pequeñas empresas que buscan su primera implementación de IA",
    features: [
      {
        category: "Capacidades",
        items: [
          { text: "1 Asistente Virtual personalizado", included: true },
          { text: "Hasta 5.000 mensajes/mes", included: true },
          { text: "Hasta 50 usuarios simultáneos", included: true },
          { text: "LLM avanzado (GPT-4 o superior)", included: true },
          { text: "Tiempo de respuesta < 2 segundos", included: true },
        ]
      },
      {
        category: "Funcionalidades",
        items: [
          { text: "Integración con WhatsApp y Web", included: true },
          { text: "Soporte multilingüe (español e inglés)", included: true },
          { text: "Base de conocimiento (hasta 200 páginas)", included: true },
          { text: "Dashboard básico de métricas", included: true },
          { text: "Flujos conversacionales personalizables", included: true },
        ]
      },
      {
        category: "Soporte",
        items: [
          { text: "Implementación guiada", included: true },
          { text: "2 tickets de soporte al mes", included: true },
          { text: "Actualizaciones de modelo incluidas", included: true },
          { text: "Capacitación inicial (2 horas)", included: true },
          { text: "Integraciones básicas (CRM, hojas de cálculo)", included: true },
        ]
      }
    ],
    popular: false,
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-600/10 to-cyan-600/10",
    borderGradient: "border-blue-500/30",
    buttonText: "Agendar Consulta",
    callToAction: "Ideal para empresas con hasta 20 empleados"
  },
  {
    name: "Business",
    subtitle: "Para empresas en crecimiento",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10L14 14M14 10L18 14M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2837 19.5905 18.9074 19.7822C18.48 20 17.9203 20 16.8002 20H7.2002C6.08009 20 5.51962 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2841 4.21799 18.9078C4 18.48 4 17.9203 4 16.8002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Solución completa para empresas medianas que buscan escalar su implementación de IA",
    features: [
      {
        category: "Capacidades",
        items: [
          { text: "3 Asistentes Virtuales personalizados", included: true },
          { text: "Hasta 20.000 mensajes/mes", included: true },
          { text: "Hasta 200 usuarios simultáneos", included: true },
          { text: "LLM avanzado (GPT-4 o superior)", included: true },
          { text: "Tiempo de respuesta < 1 segundo", included: true },
        ]
      },
      {
        category: "Funcionalidades",
        items: [
          { text: "Integración omnicanal completa", included: true },
          { text: "Soporte multilingüe (todos los idiomas)", included: true },
          { text: "Base de conocimiento (hasta 1.000 páginas)", included: true },
          { text: "Dashboard en tiempo real avanzado", included: true },
          { text: "Análisis de sentimientos y tendencias", included: true },
        ]
      },
      {
        category: "Soporte",
        items: [
          { text: "Implementación prioritaria", included: true },
          { text: "5 tickets de soporte al mes", included: true },
          { text: "Actualizaciones de modelo prioritarias", included: true },
          { text: "Capacitación completa (8 horas)", included: true },
          { text: "Integraciones avanzadas (CRM, HubSpot, Bitrix24)", included: true },
          { text: "Gestor de cuenta asignado", included: true },
        ]
      }
    ],
    popular: true,
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-600/10 to-indigo-600/10",
    borderGradient: "border-purple-500/30",
    buttonText: "Agendar Consulta",
    callToAction: "Ideal para empresas con 20-200 empleados"
  },
  {
    name: "Enterprise",
    subtitle: "Para grandes organizaciones",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33789 17V7C3.33789 5.89543 4.23332 5 5.33789 5H18.6621C19.7667 5 20.6621 5.89543 20.6621 7V17C20.6621 18.1046 19.7667 19 18.6621 19H5.33789C4.23332 19 3.33789 18.1046 3.33789 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.33789 8H20.6621" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.33789 12L9.33789 14L13.3379 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6621 12H16.6721" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6621 15H16.6721" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Solución a medida para grandes empresas con necesidades complejas y específicas",
    features: [
      {
        category: "Capacidades",
        items: [
          { text: "Asistentes Virtuales Ilimitados", included: true },
          { text: "Mensajes ilimitados", included: true },
          { text: "Usuarios simultáneos ilimitados", included: true },
          { text: "LLM avanzado (GPT-4 o superior)", included: true },
          { text: "Tiempo de respuesta < 0.5 segundos", included: true },
          { text: "Infraestructura dedicada", included: true },
        ]
      },
      {
        category: "Funcionalidades",
        items: [
          { text: "Integración omnicanal completa", included: true },
          { text: "Soporte multilingüe (todos los idiomas)", included: true },
          { text: "Base de conocimiento ilimitada", included: true },
          { text: "Business Intelligence completo", included: true },
          { text: "Agent Swarm (enjambre de agentes cooperativos)", included: true,
            hasInfo: true,
            tooltip: `Agent Swarm permite que múltiples asistentes de IA trabajen juntos, cada uno especializado en un área, comunicándose entre sí para resolver problemas complejos de manera colaborativa, como un equipo de expertos humanos.`
          },
          { text: "Personalización completa de la solución", included: true },
        ]
      },
      {
        category: "Soporte",
        items: [
          { text: "Implementación white-glove", included: true },
          { text: "Soporte prioritario 24/7", included: true },
          { text: "Actualizaciones de modelo exclusivas", included: true },
          { text: "Capacitación empresarial completa", included: true },
          { text: "Integraciones empresariales a medida", included: true },
          { text: "Equipo técnico dedicado", included: true },
          { text: "API personalizada", included: true },
          { text: "SLA garantizado", included: true },
        ]
      }
    ],
    popular: false,
    gradient: "from-rose-600 to-pink-600",
    bgGradient: "from-rose-600/10 to-pink-600/10",
    borderGradient: "border-rose-500/30",
    buttonText: "Contactar Ventas",
    callToAction: "Ideal para empresas con más de 200 empleados"
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
  const FeatureCategory = ({ category, items, planName }) => (
    <div className="mb-6 last:mb-0">
      <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">{category}</h4>
      <div className="space-y-3">
        {items.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 relative group">
            <span className="text-green-500 mt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-gray-300 text-sm">
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
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden" id="precios">
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
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Planes Personalizados
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planes que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">escalan contigo</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones adaptadas a las necesidades específicas de tu empresa, con precios transparentes y sin sorpresas
          </p>
        </motion.div>

        {/* Estadísticas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-2">3.5x</div>
            <p className="text-gray-400">ROI promedio</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-2">14 días</div>
            <p className="text-gray-400">Implementación rápida</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-2">95%</div>
            <p className="text-gray-400">Satisfacción del cliente</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-2">24/7</div>
            <p className="text-gray-400">Soporte técnico</p>
          </div>
        </motion.div>

        {/* Planes */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div className={`bg-gradient-to-br ${plan.gradient} p-[1px] rounded-2xl h-full`}>
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  {/* Encabezado del plan */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center mr-3`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className={`w-12 h-1 bg-gradient-to-r ${plan.gradient}`}></div>
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
                    className={`w-full bg-gradient-to-r ${plan.gradient}
                             text-white px-6 py-3 rounded-xl font-medium mb-6
                             hover:shadow-lg shadow-${plan.gradient.split('-').pop()}/20 transition-all`}
                  >
                    {plan.buttonText}
                  </motion.button>

                  <p className="text-gray-400 text-sm text-center mb-6">{plan.callToAction}</p>

                  {/* Tabs de características */}
                  <div className="flex border-b border-gray-800 mb-6">
                    {plan.features.map((category, i) => (
                      <button
                        key={i}
                        className={`flex-1 text-sm py-2 px-1 ${
                          activeTab === i
                            ? `text-white border-b-2 border-${plan.gradient.split('-').pop()}`
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                        onClick={() => setActiveTab(i)}
                      >
                        {category.category}
                      </button>
                    ))}
                  </div>

                  {/* Características del plan */}
                  <div className="flex-grow">
                    {plan.features.map((category, i) => (
                      <div key={i} className={activeTab === i ? 'block' : 'hidden'}>
                        <FeatureCategory
                          category={category.category}
                          items={category.items}
                          planName={plan.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Testimonios
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
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
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Preguntas Frecuentes
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Todo lo que necesitas saber
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
                className="mb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition-colors"
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
                    className="bg-white/5 backdrop-blur-sm border-x border-b border-white/10 rounded-b-xl p-4 text-gray-300 -mt-1 text-sm"
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