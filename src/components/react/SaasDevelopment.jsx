import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import CalButton from './CalButton';

const tools = [
  {
    name: "Cursor",
    description: "Editor de código con IA integrada que predice y completa tu código mientras escribes",
    icon: "/cursor-app-icon.webp",
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30"
  },
  {
    name: "Windsurf",
    description: "IDE con agentes de IA que mantienen el flujo de trabajo y anticipan tus necesidades",
    icon: "/windsurf-black-symbol.png",
    color: "text-teal-400",
    bgGradient: "from-teal-500/20 to-green-500/20",
    borderGradient: "from-teal-500/30 to-green-500/30"
  },
  {
    name: "Lovable",
    description: "Plataforma que convierte ideas en aplicaciones funcionales con un ingeniero full-stack de IA",
    icon: "https://images.saasworthy.com/lovable_50457_logo_1739941288_7rmgf.jpg",
    color: "text-pink-400",
    bgGradient: "from-pink-500/20 to-red-500/20",
    borderGradient: "from-pink-500/30 to-red-500/30"
  },
  {
    name: "Bolt.new",
    description: "Herramienta para crear, ejecutar y desplegar aplicaciones web y móviles full-stack",
    icon: "https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg",
    color: "text-amber-400",
    bgGradient: "from-amber-500/20 to-orange-500/20",
    borderGradient: "from-amber-500/30 to-orange-500/30"
  }
];

const projects = [
  {
    name: "Tatu.ink",
    description: "Revolucionamos la industria del tatuaje con una plataforma que aumentó la eficiencia operativa en un 78% y duplicó los ingresos de los estudios en 6 meses",
    features: [
      "Sistema de agendamiento inteligente que redujo cancelaciones en un 64%",
      "CRM especializado que incrementó la tasa de retorno de clientes en un 42%",
      "Catálogo digital que aumentó ventas de diseños personalizados en un 87%",
      "Analytics avanzados que optimizaron la rentabilidad por artista en un 53%"
    ],
    tools: ["Lovable", "Bolt.new", "Windsurf", "Cursor"],
    images: ["/1.png", "/2.png", "/3.png", "/4.png"],
    gradient: "from-purple-500/20 to-indigo-500/20",
    borderGradient: "from-purple-500/30 to-indigo-500/30"
  },
  {
    name: "Kotler",
    description: "Transformamos el marketing digital con una plataforma SAAS que democratiza el acceso a estrategias de nivel Fortune 500 para PyMEs a una fracción del costo",
    features: [
      "Estrategias de marketing personalizadas que incrementaron ROI en un 215% vs métodos tradicionales",
      "Sistema de generación de contenido que redujo costos de producción en un 73%",
      "Dashboard de analytics en tiempo real que mejoró la toma de decisiones en un 68%",
      "Optimización automática de campañas que incrementó conversiones en un 47% promedio"
    ],
    tools: ["Cursor", "Windsurf", "Lovable", "Bolt.new"],
    images: ["/kotler_1.png", "/kotler_2.png", "/kotler_3.png", "/kotler_4.png"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30"
  }
];

export default function SaasDevelopment() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const carouselRefs = useRef(projects.map(() => React.createRef()));
  const controlsArray = projects.map(() => useAnimation());

  // Función para abrir la imagen en pantalla completa
  const openFullscreen = (projectIndex, img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
    setCurrentProjectIndex(projectIndex);
  };

  // Función para cerrar la imagen en pantalla completa
  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  // Función para navegar a la siguiente imagen en el popup
  const nextImage = (e) => {
    e.stopPropagation();
    const projectImages = projects[currentProjectIndex].images;
    const newIndex = (currentImageIndex + 1) % projectImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(projectImages[newIndex]);
  };

  // Función para navegar a la imagen anterior en el popup
  const prevImage = (e) => {
    e.stopPropagation();
    const projectImages = projects[currentProjectIndex].images;
    const newIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(projectImages[newIndex]);
  };

  // Auto-scroll para los carruseles
  useEffect(() => {
    projects.forEach((_, index) => {
      if (carouselRefs.current[index].current) {
        // Calculamos el ancho de un conjunto completo de imágenes
        const singleSetWidth = 100 / 2; // La mitad del ancho total (ya que tenemos 2 conjuntos)

        // Reiniciamos la animación
        controlsArray[index].stop();

        controlsArray[index].start({
          x: [`0%`, `-${singleSetWidth}%`],
          transition: {
            duration: 60,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    });

    return () => {
      projects.forEach((_, index) => {
        controlsArray[index].stop();
      });
    };
  }, [controlsArray]);

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="desarrollo-saas">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[60rem] h-[60rem] -top-40 -left-20 bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[50rem] h-[50rem] bottom-0 right-1/4 bg-purple-900/10 rounded-full blur-3xl"></div>
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
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
            Digitalización Completa de Negocios
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            De idea a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">plataforma rentable</span> en tiempo récord
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mientras el desarrollo tradicional tarda 12-18 meses, nuestro enfoque potenciado por IA entrega MVPs funcionales en 4-6 semanas y plataformas completas en 3 meses, reduciendo costos hasta en un 60%.
          </p>
          <p className="text-lg text-indigo-300 max-w-2xl mx-auto mt-4">
            Nuestra ventaja competitiva: combinamos ingeniería de software de élite con nuestra experiencia en IA para crear plataformas que no solo funcionan, sino que evolucionan y aprenden continuamente.
          </p>
        </motion.div>

        {/* Herramientas que utilizamos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Tecnologías de Vanguardia que Dominamos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br border rounded-2xl p-[1px] group"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${tool.borderGradient.split(' ')[1]}, ${tool.borderGradient.split(' ')[3]})`
                }}
              >
                <div className="bg-gray-900 rounded-2xl p-6 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.bgGradient} flex items-center justify-center mb-6 overflow-hidden`}>
                    <img
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{tool.name}</h4>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proyectos destacados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Casos de Éxito que Transformaron Industrias
          </h3>

          {/* Mostrar todos los proyectos uno debajo del otro */}
          {projects.map((project, projectIndex) => (
            <motion.div
              key={`project-${projectIndex}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br border rounded-2xl p-[1px] mb-16 ${projectIndex < projects.length - 1 ? 'mb-20' : ''}`}
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${project.borderGradient.split(' ')[1]}, ${project.borderGradient.split(' ')[3]})`
              }}
            >
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-4">{project.name}</h4>
                    <p className="text-xl text-gray-300 mb-8">{project.description}</p>

                    <div className="mb-8">
                      <h5 className="text-xl font-semibold text-white mb-4">Características principales:</h5>
                      <div className="space-y-3">
                        {project.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <svg className="w-5 h-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-white mb-4">Tecnologías utilizadas:</h5>
                      <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-[500px] overflow-hidden rounded-xl shadow-lg shadow-purple-500/10">
                      <motion.div
                        ref={el => carouselRefs.current[projectIndex].current = el}
                        animate={controlsArray[projectIndex]}
                        className="flex h-full"
                        style={{ width: `${project.images.length * 200}%` }}
                      >
                        {project.images.concat(project.images).map((img, i) => (
                          <motion.div
                            key={i}
                            className="cursor-pointer overflow-hidden px-1"
                            style={{ width: `${100 / (project.images.length * 2)}%` }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => openFullscreen(projectIndex, img, i % project.images.length)}
                          >
                            <div className="h-full w-full flex items-center justify-center bg-gray-800/30 rounded-xl p-1">
                              <img
                                src={img}
                                alt={`${project.name} screenshot ${(i % project.images.length) + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">Haz clic en una imagen para verla en pantalla completa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md border border-indigo-500/20 rounded-3xl p-16 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              ¿Listo para digitalizar tu modelo de negocio?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Nuestros expertos analizarán tu idea o negocio actual y te mostrarán cómo transformarlo en una plataforma SAAS rentable en tiempo récord
            </p>
            <CalButton
              variant="white"
              size="large"
              className="font-semibold"
            >
              Solicitar Evaluación Gratuita
            </CalButton>
          </div>
        </motion.div>
      </div>

      {/* Popup de imagen en pantalla completa */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Botón de cerrar */}
            <button
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
              onClick={closeFullscreen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Botón anterior */}
            <button
              className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
              onClick={prevImage}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Imagen */}
            <motion.img
              src={selectedImage}
              alt="Imagen en pantalla completa"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Botón siguiente */}
            <button
              className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
              onClick={nextImage}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicador de imagen actual */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projects[currentProjectIndex].images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
