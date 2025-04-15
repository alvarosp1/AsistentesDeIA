import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const predefinedQuestions = [
  "¿Qué servicios ofrecen?",
  "¿Cuánto cuesta el plan básico?",
  "¿Cómo funciona la integración con WhatsApp?",
  "¿Tienen soporte 24/7?"
];

const demoResponses = {
  "¿Qué servicios ofrecen?": "Ofrecemos asistentes virtuales impulsados por IA que pueden manejar atención al cliente, ventas, agendamiento de citas y más. Nuestros asistentes están disponibles 24/7 y pueden integrarse con WhatsApp, email y otros canales.",
  "¿Cuánto cuesta el plan básico?": "Nuestro plan básico tiene un costo de $169.990 mensual. Incluye 1 asistente virtual, hasta 3.000 mensajes/mes, integración con WhatsApp, web y Facebook, y una base de conocimiento personalizable de hasta 100 páginas. También ofrecemos una garantía de 14 días.",
  "¿Cómo funciona la integración con WhatsApp?": "La integración con WhatsApp es muy sencilla. Conectamos tu número de WhatsApp Business con nuestro sistema, y el asistente comenzará a responder automáticamente. Puedes personalizar las respuestas y el asistente aprenderá de las interacciones previas.",
  "¿Tienen soporte 24/7?": "Sí, ofrecemos soporte 24/7 en nuestros planes Profesional y Empresarial. El plan Básico incluye soporte por email en horario laboral. Nuestro equipo está siempre disponible para ayudarte con cualquier consulta o problema técnico."
};

export default function DemoChat() {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: '¡Hola! Soy tu asistente virtual de demostración. ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const simulateTyping = async (response) => {
    setIsTyping(true);
    // Simula el tiempo de respuesta
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
    setMessages(prev => [...prev, { type: 'assistant', content: response }]);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { type: 'user', content: inputValue }]);
    const userMessage = inputValue;
    setInputValue('');

    // Buscar la respuesta más relevante
    let bestResponse = "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla o elegir una de las preguntas sugeridas?";
    
    // Buscar coincidencia exacta primero
    if (demoResponses[userMessage]) {
      bestResponse = demoResponses[userMessage];
    } else {
      // Buscar coincidencia parcial
      const userWords = userMessage.toLowerCase().split(' ');
      for (const [question, response] of Object.entries(demoResponses)) {
        const questionWords = question.toLowerCase().split(' ');
        const hasMatch = userWords.some(word => 
          word.length > 3 && questionWords.some(qWord => qWord.includes(word))
        );
        if (hasMatch) {
          bestResponse = response;
          break;
        }
      }
    }

    await simulateTyping(bestResponse);
  };

  return (
    <section 
      id="demo" 
      data-section="demo"
      className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900 scroll-mt-24" 
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prueba Nuestro Asistente
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactúa con una demo de nuestro asistente virtual y descubre cómo puede ayudar a tu empresa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
          >
            {/* Chat Container */}
            <div 
              ref={chatRef}
              className="bg-gray-900/50 rounded-xl p-4 h-[400px] mb-4 overflow-y-auto space-y-4"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl px-4 py-2 text-gray-300">
                    <span className="inline-flex items-center gap-2">
                      Escribiendo
                      <span className="flex gap-1">
                        <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </span>
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white/5 border border-purple-500/20 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-xl"
              >
                Enviar
              </motion.button>
            </form>

            {/* Preguntas Sugeridas */}
            <div className="mt-4">
              <p className="text-gray-400 mb-2">Preguntas sugeridas:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setInputValue(question)}
                    className="bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-purple-500/20"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-gray-400 mt-4 text-sm"
          >
            Esta es una demo limitada. El asistente real tiene capacidades mucho más avanzadas.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 