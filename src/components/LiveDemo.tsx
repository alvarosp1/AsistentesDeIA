import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DataReference {
  id: string;
  type: 'excel' | 'pdf' | 'doc' | 'chart' | 'table';
  title: string;
  preview?: React.ReactNode;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  references?: DataReference[];
}

const SalesChart = () => {
  const data = [
    { day: 'Lun', amount: 4250 },
    { day: 'Mar', amount: 2250, warning: true },
    { day: 'Mié', amount: 3750 },
    { day: 'Jue', amount: 2000, warning: true },
    { day: 'Vie', amount: 4500 },
    { day: 'Sáb', amount: 4750 },
    { day: 'Dom', amount: 3500 }
  ];

  const maxAmount = 5000;
  const steps = 5;
  const stepAmount = maxAmount / steps;

  const getPoints = () => {
    const points = data.map((item, i) => {
      const x = 40 + (i * ((520) / (data.length - 1)));
      const y = 180 - ((item.amount / maxAmount) * 140);
      return `${x} ${y}`;
    });
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-indigo-500/20 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium text-gray-200">Ventas Diarias - Local Centro</div>
        <div className="text-xs text-gray-400">Última semana</div>
      </div>

      <div className="relative" style={{ height: "300px" }}>
        {/* Grid Y-axis lines and labels */}
        <div className="absolute inset-0 flex flex-col justify-between border-l border-indigo-500/20">
          {Array.from({ length: steps + 1 }).map((_, i) => {
            const amount = maxAmount - (i * stepAmount);
            return (
              <div key={i} className="flex items-center h-0">
                <span className="text-xs text-gray-400 w-12 text-right pr-2">
                  ${(amount / 1000).toFixed(1)}k
                </span>
                <div className="flex-1 h-px bg-indigo-500/10" />
              </div>
            );
          })}
        </div>

        {/* Chart area */}
        <div className="absolute inset-0 pl-14 pr-4">
          <svg className="w-full h-full" viewBox="0 0 600 250" preserveAspectRatio="none">
            {/* Barras de fondo */}
            {data.map((item, i) => {
              const x = 40 + (i * (520 / (data.length - 1)));
              const height = (item.amount / maxAmount) * 140;
              const y = 180 - height;
              return (
                <rect
                  key={`bar-${i}`}
                  x={x - 15}
                  y={y}
                  width="30"
                  height={height}
                  className={`${
                    item.warning ? 'fill-red-500/20' : 'fill-indigo-500/20'
                  } transition-all duration-300`}
                  rx="4"
                />
              );
            })}

            {/* Línea del gráfico */}
            <path
              d={getPoints()}
              fill="none"
              className="stroke-purple-500"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Puntos y valores */}
            {data.map((item, i) => {
              const x = 40 + (i * (520 / (data.length - 1)));
              const y = 180 - ((item.amount / maxAmount) * 140);
              return (
                <g key={i}>
                  {/* Valor */}
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    className="fill-gray-300 text-xs"
                  >
                    ${item.amount.toLocaleString()}
                  </text>

                  {/* Punto exterior */}
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    className="fill-gray-900 stroke-2 stroke-purple-500"
                  />
                  {/* Punto interior */}
                  <circle
                    cx={x}
                    cy={y}
                    r="3"
                    className={item.warning ? 'fill-red-500' : 'fill-purple-500'}
                  />

                  {/* Indicador de advertencia */}
                  {item.warning && (
                    <text
                      x={x}
                      y={y - 25}
                      textAnchor="middle"
                      className="fill-red-500 text-xs"
                    >
                      ↓
                    </text>
                  )}

                  {/* Etiqueta del día */}
                  <text
                    x={x}
                    y="230"
                    textAnchor="middle"
                    className={`text-xs ${item.warning ? 'fill-red-500' : 'fill-gray-400'}`}
                  >
                    {item.day}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-indigo-500/20 flex justify-between text-xs">
        <div className="text-gray-300">Promedio semanal: $3,571</div>
        <div className="text-red-400">↓ 15% vs semana anterior</div>
      </div>
    </div>
  );
};

const ProductTable = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-indigo-500/20 p-4 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="border-b border-indigo-500/20">
          <th className="text-left py-2 text-white font-bold">Producto</th>
          <th className="text-right text-white font-bold">Stock</th>
          <th className="text-right text-white font-bold">Ventas Prev.</th>
          <th className="text-right text-white font-bold">Desc. Sugerido</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Nike Air Max 2023</td>
          <td className="text-right text-gray-300">125</td>
          <td className="text-right text-green-400">Alto</td>
          <td className="text-right text-gray-300">15%</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Adidas Ultra Boost</td>
          <td className="text-right text-gray-300">85</td>
          <td className="text-right text-yellow-400">Medio</td>
          <td className="text-right text-gray-300">25%</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Puma RS-X</td>
          <td className="text-right text-gray-300">200</td>
          <td className="text-right text-red-400">Bajo</td>
          <td className="text-right text-gray-300">40%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const EmployeeTable = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-indigo-500/20 p-4 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="border-b border-indigo-500/20">
          <th className="text-left py-2 text-white font-bold">Empleado</th>
          <th className="text-right text-white font-bold">Ventas</th>
          <th className="text-right text-white font-bold">NPS</th>
          <th className="text-right text-white font-bold">Conversión</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Ana García</td>
          <td className="text-right text-gray-200">$12,450</td>
          <td className="text-right text-green-400">9.2</td>
          <td className="text-right text-gray-200">32%</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Juan Pérez</td>
          <td className="text-right text-gray-200">$8,320</td>
          <td className="text-right text-yellow-400">7.5</td>
          <td className="text-right text-gray-200">28%</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">María López</td>
          <td className="text-right text-gray-200">$15,200</td>
          <td className="text-right text-green-400">9.5</td>
          <td className="text-right text-gray-200">35%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ContactsTable = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-indigo-500/20 p-4 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="border-b border-indigo-500/20">
          <th className="text-left py-2 text-white font-bold">Cliente</th>
          <th className="text-left text-white font-bold">Canal</th>
          <th className="text-left text-white font-bold">Asunto</th>
          <th className="text-center text-white font-bold">Prioridad</th>
          <th className="text-right text-white font-bold">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Carlos Ruiz</td>
          <td className="text-gray-200">📧 Email</td>
          <td className="text-gray-200">Consulta sobre producto</td>
          <td className="text-center text-yellow-400">Media</td>
          <td className="text-right text-green-400">Respondido</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Laura Méndez</td>
          <td className="text-gray-200">📞 Llamada</td>
          <td className="text-gray-200">Cotización servicios</td>
          <td className="text-center text-red-400">Alta</td>
          <td className="text-right text-blue-400">En proceso</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2 text-gray-200">Miguel Torres</td>
          <td className="text-gray-200">💬 WhatsApp</td>
          <td className="text-gray-200">Seguimiento pedido</td>
          <td className="text-center text-green-400">Baja</td>
          <td className="text-right text-gray-400">Pendiente</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ClaimsTable = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-indigo-500/20 p-4 overflow-x-auto">
    <div className="flex justify-between items-center mb-4">
      <div className="text-sm font-bold text-white">Reclamos Activos</div>
      <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
        85% resueltos en &lt;24h
      </div>
    </div>
    <table className="min-w-full text-sm">
      <thead>
        <tr className="border-b border-indigo-500/20">
          <th className="text-left py-2 text-white font-bold">Caso</th>
          <th className="text-left text-white font-bold">Tipo</th>
          <th className="text-center text-white font-bold">Tiempo</th>
          <th className="text-right text-white font-bold">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2">
            <div className="text-gray-200">Pedido #2234</div>
            <div className="text-xs text-gray-400">Producto defectuoso</div>
          </td>
          <td>
            <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">
              Urgente
            </span>
          </td>
          <td className="text-center text-gray-200">2h 15m</td>
          <td className="text-right text-blue-400">En revisión</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2">
            <div className="text-gray-200">Pedido #2235</div>
            <div className="text-xs text-gray-400">Retraso en entrega</div>
          </td>
          <td>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
              Normal
            </span>
          </td>
          <td className="text-center text-gray-200">45m</td>
          <td className="text-right text-green-400">Resuelto</td>
        </tr>
        <tr className="border-b border-indigo-500/10">
          <td className="py-2">
            <div className="text-gray-200">Pedido #2236</div>
            <div className="text-xs text-gray-400">Cobro incorrecto</div>
          </td>
          <td>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
              Normal
            </span>
          </td>
          <td className="text-center text-gray-200">1h 30m</td>
          <td className="text-right text-orange-400">En proceso</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const conversations: { title: string; messages: Message[] }[] = [
  {
    title: "Análisis de Ventas",
    messages: [
      {
        id: 1,
        text: "Estoy preocupado por las ventas del local del Centro, ¿puedes revisar qué está pasando?",
        sender: 'user'
      },
      {
        id: 2,
        text: "He analizado los datos de ventas de la última semana y he detectado una caída significativa los días martes y jueves. Aquí puedes ver el patrón:",
        sender: 'ai',
        references: [
          {
            id: 'sales-chart',
            type: 'chart',
            title: 'Ventas Diarias - Local Centro',
            preview: <SalesChart />
          },
          {
            id: 'sales-report',
            type: 'excel',
            title: 'Reporte_Ventas_Centro_Oct2023.xlsx'
          }
        ]
      },
      {
        id: 3,
        text: "¿Qué podemos hacer para mejorar esos días?",
        sender: 'user'
      },
      {
        id: 4,
        text: "Basado en el análisis de tráfico y el historial de ventas, recomiendo: 1) Implementar 'Martes de Descuento' con 15% en calzado deportivo, que es nuestra categoría más fuerte, 2) Programar los nuevos lanzamientos para los jueves, ya que históricamente aumentan el tráfico en un 40%. ¿Quieres que prepare la campaña?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Marketing Black Friday",
    messages: [
      {
        id: 1,
        text: "Necesitamos preparar la estrategia para Black Friday, ¿qué sugieres?",
        sender: 'user'
      },
      {
        id: 2,
        text: "He analizado el inventario actual y el histórico de ventas del año pasado. Aquí está el análisis de productos y descuentos sugeridos:",
        sender: 'ai',
        references: [
          {
            id: 'products-table',
            type: 'table',
            title: 'Análisis de Productos Black Friday',
            preview: <ProductTable />
          },
          {
            id: 'black-friday-2022',
            type: 'pdf',
            title: 'Resultados_BlackFriday_2022.pdf'
          }
        ]
      },
      {
        id: 3,
        text: "Los descuentos están basados en: 1) Nivel actual de stock, 2) Tendencias de búsqueda en redes sociales, 3) Margen de ganancia por producto. ¿Procedo a configurar la campaña en el sistema?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Recursos Humanos",
    messages: [
      {
        id: 1,
        text: "Necesito una forma de medir y comparar el rendimiento de los vendedores, ¿qué propones?",
        sender: 'user'
      },
      {
        id: 2,
        text: "He creado un dashboard de rendimiento que integra múltiples métricas. Aquí tienes una vista preliminar:",
        sender: 'ai',
        references: [
          {
            id: 'employee-performance',
            type: 'table',
            title: 'Dashboard de Rendimiento',
            preview: <EmployeeTable />
          },
          {
            id: 'performance-doc',
            type: 'doc',
            title: 'Métricas_Rendimiento_2023.docx'
          }
        ]
      },
      {
        id: 3,
        text: "Las métricas clave son: 1) Ventas totales, 2) NPS de clientes atendidos, 3) Tasa de conversión. ¿Te gustaría que configure reportes automáticos semanales con estas métricas?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Operaciones",
    messages: [
      {
        id: 1,
        text: "¿Cómo van los tiempos de entrega este mes?",
        sender: 'user'
      },
      {
        id: 2,
        text: "Este mes tuvimos retrasos significativos durante la semana del 4 y del 15 ①. He analizado las causas y preparado un plan de acción.",
        sender: 'ai',
        references: [
          {
            id: 'delivery-report',
            type: 'excel',
            title: 'Reporte_Entregas_Oct2023.xlsx'
          }
        ]
      },
      {
        id: 3,
        text: "Los retrasos se deben principalmente a: 1) Saturación en el centro de distribución sur (65% de casos) ②, 2) Rutas no optimizadas (35% de casos) ③. Ya he redistribuido las rutas y ajustado los horarios de picking. ¿Autorizo los cambios?",
        sender: 'ai',
        references: [
          {
            id: 'route-optimization',
            type: 'pdf',
            title: 'Optimización_Rutas_Oct2023.pdf'
          },
          {
            id: 'distribution-analysis',
            type: 'excel',
            title: 'Análisis_CD_Sur_Oct2023.xlsx'
          }
        ]
      }
    ]
  },
  {
    title: "Gestión de Contactos",
    messages: [
      {
        id: 1,
        text: "Necesito organizar mejor la comunicación con clientes, hay muchos canales y es difícil dar seguimiento.",
        sender: 'user'
      },
      {
        id: 2,
        text: "He analizado tus canales de comunicación y he creado un dashboard unificado. Aquí puedes ver el estado actual:",
        sender: 'ai',
        references: [
          {
            id: 'contacts-table',
            type: 'table',
            title: 'Dashboard de Comunicaciones',
            preview: <ContactsTable />
          },
          {
            id: 'communication-report',
            type: 'excel',
            title: 'Análisis_Comunicaciones_Oct2023.xlsx'
          }
        ]
      },
      {
        id: 3,
        text: "He identificado que: 1) El 45% de las consultas son por email, 2) Las llamadas tienen prioridad alta pero tardan más en resolverse, 3) WhatsApp tiene la mejor tasa de respuesta. ¿Quieres que configure respuestas automáticas personalizadas para cada canal?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Manejo de Reclamos",
    messages: [
      {
        id: 1,
        text: "¿Cómo podemos mejorar el manejo de reclamos y quejas de clientes?",
        sender: 'user'
      },
      {
        id: 2,
        text: "He implementado un sistema de seguimiento en tiempo real. Aquí está el estado actual de los casos:",
        sender: 'ai',
        references: [
          {
            id: 'claims-table',
            type: 'table',
            title: 'Dashboard de Reclamos',
            preview: <ClaimsTable />
          },
          {
            id: 'claims-analysis',
            type: 'pdf',
            title: 'Análisis_Reclamos_Oct2023.pdf'
          }
        ]
      },
      {
        id: 3,
        text: "Basado en el análisis: 1) Hemos reducido el tiempo de respuesta un 35%, 2) Los casos urgentes se resuelven en <3 horas, 3) La satisfacción post-reclamo aumentó al 92%. ¿Implemento el sistema de alertas automáticas para casos prioritarios?",
        sender: 'ai'
      }
    ]
  }
];

const TabButton = ({ isActive, onClick, children }: { isActive: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`transition-all duration-200 px-6 py-3 rounded-xl text-left font-medium ${
      isActive 
        ? 'bg-gradient-to-br from-indigo-800/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 text-white' 
        : 'bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300'
    }`}
  >
    {children}
  </button>
);

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Reiniciar la conversación cuando cambie de tab
  useEffect(() => {
    setMessages([]);
    setCurrentMessageIndex(0);
    // Mostrar el primer mensaje inmediatamente
    setMessages([conversations[activeTab].messages[0]]);
    setCurrentMessageIndex(1);
  }, [activeTab]);

  // Mostrar mensajes gradualmente después del primero
  useEffect(() => {
    if (currentMessageIndex < conversations[activeTab].messages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversations[activeTab].messages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, activeTab]);

  // Scroll al último mensaje cuando se añade uno nuevo
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900" id="demo">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">
          Demo en Vivo
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Mira cómo nuestros agentes de IA transforman la operación de tu empresa
        </p>

        <div className="flex flex-col gap-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4">
            {conversations.map((conv, index) => (
              <TabButton
                key={index}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {conv.title}
              </TabButton>
            ))}
          </div>

          {/* Chat Container */}
          <div className="bg-gradient-to-br from-indigo-800/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6">
            <div 
              ref={chatContainerRef}
              className="flex flex-col gap-4 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                        : 'bg-white/10 text-gray-200'
                    }`}
                  >
                    {message.text}
                    {message.references && (
                      <div className="mt-4 space-y-3">
                        {message.references.map(ref => (
                          <div key={ref.id}>
                            {ref.preview && (
                              <div className="mb-2">
                                {ref.preview}
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-xs">
                              {ref.type === 'excel' && (
                                <span className="w-4 h-4 bg-green-600 rounded flex items-center justify-center text-white">X</span>
                              )}
                              {ref.type === 'pdf' && (
                                <span className="w-4 h-4 bg-red-600 rounded flex items-center justify-center text-white">P</span>
                              )}
                              {ref.type === 'doc' && (
                                <span className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center text-white">W</span>
                              )}
                              <span className={message.sender === 'user' ? 'text-white' : 'text-gray-300'}>
                                {ref.title}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 