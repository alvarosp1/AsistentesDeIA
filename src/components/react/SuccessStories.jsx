import { motion } from 'framer-motion';
import { useState } from 'react';

const cases = [
  {
    company: "Tatu.ink",
    industry: "SaaS para Tatuadores",
    logo: "https://placehold.co/200x80/2a2a2a/6d28d9?text=Tatu.ink&font=montserrat",
    metrics: {
      efficiency: "+78%",
      clients: "+45%",
      revenue: "+52%"
    },
    quote: "Gracias a la implementación de IA en nuestra plataforma, los tatuadores pueden gestionar su negocio de manera más eficiente, enfocándose en lo que realmente importa: su arte.",
    author: "Alvaro Souza",
    position: "CEO & Fundador",
    image: null,
    description: "Tatu.ink es una aplicación SaaS que ayuda a los tatuadores con su gestión interna, desde agendamiento hasta seguimiento de clientes. La plataforma fue desarrollada utilizando herramientas avanzadas como Lovable, Bolt.New, Cursos y Windsurf, permitiendo una experiencia fluida tanto para los artistas como para sus clientes.",
    solution: "Implementamos un asistente de IA que automatiza la gestión de citas, envía recordatorios a clientes, y proporciona análisis de tendencias para ayudar a los tatuadores a optimizar su negocio.",
    results: "Los estudios de tatuajes que utilizan Tatu.ink han reportado un aumento del 52% en ingresos y una reducción del 78% en el tiempo dedicado a tareas administrativas."
  },
  {
    company: "MulticolorInk",
    industry: "E-commerce de Suministros",
    logo: "https://placehold.co/200x80/2a2a2a/6d28d9?text=MulticolorInk&font=montserrat",
    metrics: {
      satisfaction: "+65%",
      response: "-92%",
      sales: "+48%"
    },
    quote: "La implementación de asistentes de IA en nuestros canales de comunicación ha revolucionado nuestra atención al cliente y análisis de negocio, permitiéndonos crecer exponencialmente.",
    author: "Alejandro",
    position: "CEO & Fundador",
    image: null,
    description: "MulticolorInk.com es un e-commerce especializado en la venta de suministros para tatuajes y arte corporal. La empresa necesitaba una solución omnicanal para atender a sus clientes a través de múltiples plataformas, así como análisis en tiempo real de su operación.",
    solution: "Desarrollamos un sistema integrado de asistentes personales y de proceso: un asistente conversacional para atención omnicanal (llamadas, WhatsApp y chat del e-commerce) y un asistente analítico para monitoreo y análisis del negocio en tiempo real.",
    results: "MulticolorInk ha logrado reducir su tiempo de respuesta en un 92%, aumentar la satisfacción del cliente en un 65% y, como resultado, incrementar sus ventas en un 48% en los primeros seis meses."
  },
  {
    company: "TechnoMart",
    industry: "E-commerce",
    logo: "https://placehold.co/200x80/2a2a2a/6d28d9?text=TechnoMart&font=montserrat",
    metrics: {
      satisfaction: "+45%",
      response: "-85%",
      sales: "+32%"
    },
    quote: "Los asistentes de IA transformaron nuestra atención al cliente. Ahora respondemos consultas en segundos y nuestras ventas han aumentado significativamente.",
    author: "Carolina Pérez",
    position: "Gerente de Operaciones",
    image: null,
    description: "TechnoMart es un marketplace de productos tecnológicos que enfrentaba desafíos con la atención al cliente y la gestión de consultas técnicas sobre sus productos.",
    solution: "Implementamos un asistente conversacional con conocimiento técnico especializado, capaz de responder consultas detalladas sobre especificaciones de productos y compatibilidad.",
    results: "La satisfacción del cliente aumentó un 45%, el tiempo de respuesta se redujo en un 85% y las ventas crecieron un 32% gracias a la mejor experiencia de compra."
  },
  {
    company: "HealthCare Plus",
    industry: "Salud",
    logo: "https://placehold.co/200x80/2a2a2a/6d28d9?text=HealthCare+Plus&font=montserrat",
    metrics: {
      appointments: "+60%",
      efficiency: "+75%",
      satisfaction: "+40%"
    },
    quote: "La automatización de agendamiento y seguimiento de pacientes nos permitió enfocarnos en lo más importante: la atención médica.",
    author: "Dr. Andrés Soto",
    position: "Director Médico",
    image: null,
    description: "HealthCare Plus es una red de clínicas que buscaba optimizar sus procesos de agendamiento y seguimiento de pacientes para mejorar la experiencia de atención.",
    solution: "Desarrollamos un asistente de proceso que automatiza la gestión de citas, envía recordatorios personalizados y facilita el seguimiento post-consulta de los pacientes.",
    results: "El número de citas agendadas aumentó un 60%, la eficiencia operativa mejoró un 75% y la satisfacción de los pacientes creció un 40%."
  }
];

const metrics = [
  {
    value: "98%",
    label: "Precisión en Respuestas",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    value: "85%",
    label: "Reducción de Costos",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18M9 9.5V14.5M15 9.5V14.5M8 22H16C18.2091 22 20 20.2091 20 18V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V18C4 20.2091 5.79086 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    value: "24/7",
    label: "Disponibilidad",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12L15 15M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    value: "+500",
    label: "Empresas Confían en Nosotros",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2V5M8 2V5M3 8H21M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11H8.01M12 11H12.01M16 11H16.01M8 15H8.01M12 15H12.01M16 15H16.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function SuccessStories() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden" id="casos-exito">
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
            Historias de Éxito
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">transformaron</span> su operación
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestros asistentes de IA han ayudado a empresas de diversos sectores a alcanzar sus objetivos
          </p>
        </motion.div>

        {/* Métricas Globales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-purple-400">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-2">{metric.value}</div>
              <div className="text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selector de Casos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((case_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCase(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCase === index
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {case_.company}
            </motion.button>
          ))}
        </div>

        {/* Caso de Éxito Detallado */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={cases[activeCase].logo}
                  alt={cases[activeCase].company}
                  className="h-12 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{cases[activeCase].company}</h3>
                  <span className="text-sm text-gray-400">{cases[activeCase].industry}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Desafío</h4>
                <p className="text-gray-300">{cases[activeCase].description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Solución</h4>
                <p className="text-gray-300">{cases[activeCase].solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Resultados</h4>
                <p className="text-gray-300">{cases[activeCase].results}</p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
                <blockquote className="text-xl text-gray-200 italic mb-6">
                  "{cases[activeCase].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-medium text-white">{cases[activeCase].author}</div>
                    <div className="text-sm text-gray-400">{cases[activeCase].position}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Métricas Clave</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {Object.entries(cases[activeCase].metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-1">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a transformar tu empresa con IA
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
    </section>
  );
}