import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const PrivacyPolicy = () => (
  <div className="text-gray-300 space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Política de Privacidad</h2>

    <div>
      <p className="mb-4">Última actualización: Enero 2024</p>
      <p>En Asistentes de IA, nos tomamos muy en serio la protección de sus datos personales. Esta política de privacidad describe detalladamente nuestras prácticas de recopilación, uso, protección y divulgación de su información cuando utiliza nuestros servicios.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">1. Información que Recopilamos</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-white">1.1 Información proporcionada directamente:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Datos de identificación personal (nombre, dirección, teléfono, email)</li>
            <li>Información de facturación y pago</li>
            <li>Contenido de las comunicaciones con nuestro equipo</li>
            <li>Información de la empresa y empleados autorizados</li>
            <li>Preferencias de configuración de servicios</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white">1.2 Información recopilada automáticamente:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Datos de uso del servicio y patrones de interacción</li>
            <li>Información técnica (IP, tipo de dispositivo, navegador)</li>
            <li>Cookies y tecnologías similares</li>
            <li>Registros de actividad y análisis de uso</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">2. Uso de la Información</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-white">2.1 Propósitos principales:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Personalizar y mejorar la experiencia del usuario</li>
            <li>Procesar transacciones y pagos</li>
            <li>Enviar información administrativa y actualizaciones</li>
            <li>Proporcionar soporte técnico y atención al cliente</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white">2.2 Propósitos secundarios:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Análisis y mejora de nuestros servicios</li>
            <li>Detección y prevención de fraudes</li>
            <li>Cumplimiento de obligaciones legales</li>
            <li>Investigación y desarrollo de nuevas funcionalidades</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">3. Protección de Datos</h3>
      <div className="space-y-4">
        <p>Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger sus datos personales, incluyendo:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encriptación de datos en tránsito y en reposo</li>
          <li>Controles de acceso estrictos y autenticación multifactor</li>
          <li>Monitoreo continuo de seguridad y detección de amenazas</li>
          <li>Copias de seguridad regulares y planes de recuperación</li>
          <li>Capacitación regular del personal en seguridad de datos</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">4. Compartición de Datos</h3>
      <div className="space-y-4">
        <p>Podemos compartir su información en las siguientes circunstancias:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Con proveedores de servicios que nos ayudan a operar</li>
          <li>Cuando sea requerido por ley o proceso legal</li>
          <li>Para proteger nuestros derechos y propiedad</li>
          <li>En caso de fusión, venta o transferencia de activos</li>
        </ul>
        <p className="mt-4">No vendemos ni alquilamos sus datos personales a terceros.</p>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">5. Sus Derechos</h3>
      <div className="space-y-4">
        <p>Usted tiene derecho a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Acceder a sus datos personales</li>
          <li>Rectificar datos incorrectos</li>
          <li>Solicitar la eliminación de sus datos</li>
          <li>Oponerse al procesamiento de sus datos</li>
          <li>Portabilidad de datos</li>
          <li>Retirar el consentimiento en cualquier momento</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">6. Retención de Datos</h3>
      <div className="space-y-4">
        <p>Conservamos sus datos personales durante el tiempo necesario para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Proporcionar nuestros servicios</li>
          <li>Cumplir con obligaciones legales</li>
          <li>Resolver disputas</li>
          <li>Hacer cumplir nuestros acuerdos</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">7. Menores de Edad</h3>
      <p>Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores de edad. Si descubrimos que hemos recopilado información de un menor, tomaremos medidas para eliminarla.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">8. Cambios en la Política</h3>
      <div className="space-y-4">
        <p>Podemos actualizar esta política ocasionalmente. Los cambios significativos serán notificados:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Por email a usuarios registrados</li>
          <li>Mediante notificación en nuestra plataforma</li>
          <li>Actualizando la fecha de "última actualización"</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">9. Contacto</h3>
      <p>Para cualquier pregunta sobre esta política o el tratamiento de sus datos, contáctenos en:</p>
      <ul className="list-none space-y-2 mt-2">
        <li>Email: privacidad@asistentesia.com</li>
        <li>Teléfono: +56 9 3643 2808</li>
        <li>Dirección: Av. Providencia 1234, Santiago, Chile</li>
      </ul>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-700">
      <p className="text-sm">Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta Política de Privacidad.</p>
    </div>
  </div>
);

const TermsOfService = () => (
  <div className="text-gray-300 space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Términos de Servicio</h2>

    <div>
      <p className="mb-4">Última actualización: Enero 2024</p>
      <p>Este acuerdo establece los términos y condiciones para el uso de los servicios proporcionados por Asistentes de IA. Al acceder o utilizar nuestros servicios, usted acepta estar legalmente vinculado por estos términos.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">1. Definiciones</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>"Servicio" se refiere a los asistentes virtuales y soluciones de IA proporcionados por Asistentes de IA</li>
        <li>"Usuario" se refiere a cualquier persona o entidad que utilice nuestros servicios</li>
        <li>"Contenido" incluye texto, datos, información, respuestas y cualquier otro material generado o procesado</li>
        <li>"Plataforma" se refiere a nuestro sitio web, aplicaciones y sistemas relacionados</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">2. Licencia y Uso del Servicio</h3>
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-white">2.1 Otorgamiento de Licencia:</h4>
        <p>Otorgamos una licencia limitada, no exclusiva, no transferible y revocable para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Acceder y utilizar nuestros servicios según el plan contratado</li>
          <li>Integrar nuestros asistentes en sus sistemas autorizados</li>
          <li>Utilizar las APIs y herramientas proporcionadas</li>
        </ul>

        <h4 className="text-lg font-medium text-white">2.2 Restricciones de Uso:</h4>
        <p>Usted se compromete a NO:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Realizar ingeniería inversa o intentar extraer nuestro código fuente</li>
          <li>Utilizar los servicios para actividades ilegales o no éticas</li>
          <li>Interferir con la seguridad o funcionalidad de los servicios</li>
          <li>Revender o redistribuir los servicios sin autorización</li>
          <li>Exceder los límites de uso establecidos en su plan</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">3. Planes y Pagos</h3>
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-white">3.1 Suscripciones:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Las suscripciones se renuevan automáticamente al final de cada período</li>
          <li>Los precios pueden cambiar con notificación previa de 30 días</li>
          <li>Los pagos no son reembolsables, excepto por lo establecido en la garantía</li>
        </ul>

        <h4 className="text-lg font-medium text-white">3.2 Cancelación:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Puede cancelar su suscripción en cualquier momento</li>
          <li>La cancelación será efectiva al final del período de facturación actual</li>
          <li>No hay penalizaciones por cancelación anticipada</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">4. Propiedad Intelectual</h3>
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-white">4.1 Nuestros Derechos:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Todos los derechos de propiedad intelectual sobre nuestros servicios</li>
          <li>Tecnología, algoritmos y metodologías utilizadas</li>
          <li>Marcas comerciales, logos y nombres comerciales</li>
        </ul>

        <h4 className="text-lg font-medium text-white">4.2 Sus Derechos:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Propiedad sobre sus datos y contenido proporcionado</li>
          <li>Resultados generados específicamente para su uso</li>
          <li>Integraciones personalizadas desarrolladas para su empresa</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">5. Garantía y Soporte</h3>
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-white">5.1 Garantía de Servicio:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Garantizamos un uptime del 99.9% para nuestros servicios</li>
          <li>14 días de garantía de devolución de dinero</li>
          <li>Soporte técnico según el nivel de plan contratado</li>
        </ul>

        <h4 className="text-lg font-medium text-white">5.2 Limitaciones:</h4>
        <p>No garantizamos que:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>El servicio estará libre de errores o interrupciones</li>
          <li>Los resultados serán 100% precisos en todas las situaciones</li>
          <li>El servicio será compatible con todos los sistemas o necesidades</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">6. Limitación de Responsabilidad</h3>
      <div className="space-y-4">
        <p>Asistentes de IA no será responsable por:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Daños indirectos, incidentales o consecuentes</li>
          <li>Pérdida de beneficios o datos</li>
          <li>Interrupciones del servicio por causas fuera de nuestro control</li>
          <li>Decisiones tomadas basadas en las respuestas de los asistentes</li>
        </ul>
        <p className="mt-4">Nuestra responsabilidad total no excederá el monto pagado por el servicio en los últimos 12 meses.</p>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">7. Indemnización</h3>
      <p>Usted acepta indemnizar y mantener indemne a Asistentes de IA contra cualquier reclamo, daño, pérdida, responsabilidad y costos (incluidos los honorarios legales) que surjan de:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Su uso del servicio</li>
        <li>Violación de estos términos</li>
        <li>Infracción de derechos de terceros</li>
        <li>Contenido proporcionado o generado por usted</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">8. Terminación</h3>
      <div className="space-y-4">
        <p>Podemos terminar o suspender su acceso al servicio:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Por violación de estos términos</li>
          <li>Por falta de pago</li>
          <li>Por uso fraudulento o abusivo</li>
          <li>Por requerimiento legal</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">9. Modificaciones</h3>
      <div className="space-y-4">
        <p>Nos reservamos el derecho de modificar estos términos:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Con notificación previa de 30 días para cambios significativos</li>
          <li>Efectivo inmediatamente para correcciones menores</li>
          <li>Continuando el uso tras los cambios, acepta los nuevos términos</li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">10. Ley Aplicable</h3>
      <p>Estos términos se rigen por las leyes de Chile. Cualquier disputa será resuelta en los tribunales de Santiago de Chile.</p>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-700">
      <p className="text-sm">Al utilizar nuestros servicios, usted confirma que ha leído, entendido y aceptado estos Términos de Servicio.</p>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, children }) => {
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
          className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute -right-4 -top-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const navHeight = 80; // altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-indigo-900 to-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Asistentes de IA
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos empresas con soluciones de asistentes virtuales inteligentes.
              Automatización, eficiencia y atención 24/7 para tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, 'servicios')}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#industrias"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, 'industrias')}
                >
                  Industrias
                </a>
              </li>
              <li>
                <a
                  href="#precios"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, 'precios')}
                >
                  Planes
                </a>
              </li>
              <li>
                <a
                  href="#casos-exito"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, 'casos-exito')}
                >
                  Casos de Éxito
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="text-purple-400">Email:</span> info@agentesia.com
              </li>
              <li className="text-gray-300">
                <span className="text-purple-400">Teléfono:</span> +56 9 3643 2808
              </li>
              <li className="text-gray-300">
                <span className="text-purple-400">Dirección:</span> Av. Providencia 1234, Santiago
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-indigo-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Asistentes de IA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modales */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <PrivacyPolicy />
      </Modal>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)}>
        <TermsOfService />
      </Modal>
    </footer>
  );
}