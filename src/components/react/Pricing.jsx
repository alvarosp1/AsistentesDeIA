import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: "Básico",
    price: "169.990",
    description: "Ideal para pequeñas empresas que están comenzando",
    features: [
      { 
        text: "1 Asistente Virtual con hasta 3.000 mensajes/mes", 
        included: true
      },
      { text: "Hasta 50 usuarios simultáneos", included: true },
      { text: "LLM avanzado (GPT-4 o superior)", included: true },
      { text: "Tiempo de respuesta < 2 segundos", included: true },
      { text: "Integración omnicanal", included: true },
      { text: "Soporte multilingüe", included: true },
      { text: "Base de conocimiento (100 pág.)", included: true },
      { text: "Dashboard básico de métricas", included: true },
      { text: "Flujos personalizables", included: true },
      { text: "2 tickets de soporte al mes", included: true },
      { text: "Integraciones básicas (CRM, hojas de cálculo)", included: true },
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Profesional",
    price: "329.990",
    description: "Para empresas en crecimiento que necesitan más funcionalidades",
    features: [
      { 
        text: "3 Asistentes Virtuales con hasta 15.000 mensajes/mes", 
        included: true
      },
      { text: "Hasta 200 usuarios simultáneos", included: true },
      { text: "LLM avanzado (GPT-4 o superior)", included: true },
      { text: "Tiempo de respuesta < 1 segundo", included: true },
      { text: "Integración omnicanal", included: true },
      { text: "Soporte multilingüe", included: true },
      { text: "Base de conocimiento (500 pág.)", included: true },
      { text: "Dashboard en tiempo real", included: true },
      { text: "Análisis de sentimientos", included: true },
      { text: "5 tickets de soporte al mes", included: true },
      { text: "Integraciones avanzadas (CRM, HubSpot, Bitrix24)", included: true },
      { text: "Gestor de cuenta asignado", included: true },
    ],
    popular: true,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    name: "Empresarial",
    price: "549.990",
    description: "Solución completa para grandes empresas con necesidades específicas",
    features: [
      { 
        text: "Asistentes Virtuales Ilimitados", 
        included: true
      },
      { text: "Usuarios simultáneos ilimitados", included: true },
      { text: "LLM avanzado (GPT-4 o superior)", included: true },
      { text: "Mensajes ilimitados", included: true }, 
      { text: "Tiempo de respuesta < 0.5 segundos", included: true },
      { text: "Integración omnicanal", included: true },
      { text: "Soporte multilingüe", included: true },
      { text: "Agent Swarm (enjambre de agentes cooperativos)", included: true,
        hasInfo: true,
        tooltip: `Agent Swarm permite que múltiples asistentes de IA trabajen juntos, cada uno especializado en un área, comunicándose entre sí para resolver problemas complejos de manera colaborativa, como un equipo de expertos humanos.`
      },
      { text: "Business Intelligence completo", included: true },
      { text: "Desarrollo a medida", included: true },
      { text: "10 tickets de soporte prioritario al mes", included: true },
      { text: "Integraciones empresariales completas", included: true },
      { text: "Equipo técnico dedicado", included: true },
      { text: "API personalizada", included: true },
    ],
    popular: false,
    gradient: "from-rose-500 to-pink-500"
  }
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="py-24 bg-gray-900" id="precios">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se adapte a las necesidades de tu empresa
          </p>

          {/* Toggle de Facturación */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${
                billingPeriod === 'monthly'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensual
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${
                billingPeriod === 'annual'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              Anual
              <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                -20%
              </span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm">
                    Más Popular
                  </span>
                </div>
              )}

              <div className={`bg-gradient-to-br ${plan.gradient} p-[1px] rounded-2xl`}>
                <div className="bg-gray-900 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingPeriod === 'annual' 
                        ? (parseInt(plan.price.replace(/\./g, '')) * 0.8).toLocaleString('es-CL')
                        : parseInt(plan.price.replace(/\./g, '')).toLocaleString('es-CL')}
                    </span>
                    <span className="text-gray-400">/mes</span>
                  </div>

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
                    className={`w-full bg-gradient-to-r ${plan.gradient} 
                             text-white px-6 py-3 rounded-xl text-sm font-medium mb-8
                             hover:shadow-lg transition-shadow`}
                  >
                    Comenzar ahora
                  </motion.button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 relative">
                        <span className={feature.included ? 'text-green-500' : 'text-gray-600'}>
                          {feature.included ? '✓' : '×'}
                        </span>
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.text}
                          {feature.hasInfo && (
                            <button
                              className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-700 hover:bg-gray-600 text-xs text-white font-semibold cursor-help transition-colors"
                              onMouseEnter={() => setActiveTooltip(plan.name + i)}
                              onMouseLeave={() => setActiveTooltip(null)}
                            >
                              i
                            </button>
                          )}
                        </span>
                        {feature.tooltip && activeTooltip === plan.name + i && (
                          <div className="absolute bottom-full left-8 mb-2 w-96 p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700 text-sm text-gray-300 z-50 whitespace-pre-line">
                            {feature.tooltip}
                            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gray-800 border-r border-b border-gray-700 transform rotate-45"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-2xl font-bold text-white mb-4">Garantía de 14 Días</h3>
          <p className="text-gray-300">
            Si no estás satisfecho con nuestro servicio, te devolvemos tu dinero sin preguntas
          </p>
        </motion.div>
      </div>
    </section>
  );
} 