import { motion } from 'framer-motion';

const cases = [
  {
    company: "TechnoMart",
    industry: "E-commerce",
    metrics: {
      satisfaction: "+45%",
      response: "-85%",
      sales: "+32%"
    },
    quote: "Los asistentes de IA transformaron nuestra atención al cliente. Ahora respondemos consultas en segundos y nuestras ventas han aumentado significativamente.",
    author: "Carolina Pérez",
    position: "Gerente de Operaciones",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
  },
  {
    company: "HealthCare Plus",
    industry: "Salud",
    metrics: {
      appointments: "+60%",
      efficiency: "+75%",
      satisfaction: "+40%"
    },
    quote: "La automatización de agendamiento y seguimiento de pacientes nos permitió enfocarnos en lo más importante: la atención médica.",
    author: "Dr. Andrés Soto",
    position: "Director Médico",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3",
  }
];

const metrics = [
  {
    value: "98%",
    label: "Precisión en Respuestas",
    icon: "🎯"
  },
  {
    value: "85%",
    label: "Reducción de Costos",
    icon: "💰"
  },
  {
    value: "24/7",
    label: "Disponibilidad",
    icon: "⏰"
  },
  {
    value: "+500",
    label: "Empresas Confían en Nosotros",
    icon: "🤝"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900" id="casos-exito">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas que ya transformaron su operación con nuestros asistentes de IA
          </p>
        </motion.div>

        {/* Métricas Globales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Casos de Éxito */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{case_.company}</h3>
                    <span className="text-sm text-gray-400">| {case_.industry}</span>
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6">
                    "{case_.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-medium text-white">{case_.author}</div>
                      <div className="text-sm text-gray-400">{case_.position}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-purple-500/20">
                    {Object.entries(case_.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
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
            className="bg-gradient-to-r from-purple-500 to-indigo-500 
                     text-white px-8 py-4 rounded-full text-lg font-medium
                     hover:shadow-lg hover:shadow-purple-500/30 transition-shadow"
          >
            Sé el Próximo Caso de Éxito →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 