import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CalButton from './react/CalButton';

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
        text: "Estoy preocupado por las ventas del local del Centro, ¿puedes revisar qué está pasando? Los números de este mes parecen estar por debajo de lo esperado.",
        sender: 'user'
      },
      {
        id: 2,
        text: "He analizado los datos de ventas de la última semana y he detectado una caída significativa los días martes y jueves. Aquí puedes ver el patrón. También he comparado con el mismo período del año pasado y hay una disminución del 12% en general, pero concentrada principalmente en estos dos días específicos.",
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
        text: "¿Qué podemos hacer para mejorar esos días? ¿Hay alguna razón específica para esta caída?",
        sender: 'user'
      },
      {
        id: 4,
        text: "He identificado varias causas probables. Primero, hay dos nuevos competidores que abrieron recientemente en el centro comercial cercano y ofrecen promociones especiales los martes. Segundo, el tráfico peatonal en la zona ha disminuido un 15% según datos de Google Maps. Tercero, no hemos renovado nuestro inventario de productos estrella en las últimas 3 semanas.",
        sender: 'ai'
      },
      {
        id: 5,
        text: "Entiendo. ¿Qué estrategias específicas recomiendas implementar?",
        sender: 'user'
      },
      {
        id: 6,
        text: "Basado en el análisis de tráfico y el historial de ventas, recomiendo: 1) Implementar 'Martes de Descuento' con 15% en calzado deportivo, que es nuestra categoría más fuerte, 2) Programar los nuevos lanzamientos para los jueves, ya que históricamente aumentan el tráfico en un 40%, 3) Crear una campaña de remarketing dirigida específicamente a clientes que no han comprado en los últimos 30 días con un cupón especial para usar martes o jueves, 4) Actualizar la vitrina principal con los nuevos modelos que llegaron al almacén la semana pasada.",
        sender: 'ai'
      },
      {
        id: 7,
        text: "Me gusta la idea. ¿Podrías preparar la campaña de 'Martes de Descuento' para implementarla la próxima semana? También necesitaría un presupuesto estimado.",
        sender: 'user'
      },
      {
        id: 8,
        text: "Por supuesto. He preparado un borrador de la campaña 'Martes de Descuento' con todos los elementos necesarios. El presupuesto estimado es de $350.000 para marketing digital, material POP y capacitación del personal. Según mis proyecciones, esto generaría un aumento del 25-30% en ventas los martes, con un ROI estimado de 2.8x en el primer mes. ¿Procedo con la implementación para el próximo martes?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Marketing Black Friday",
    messages: [
      {
        id: 1,
        text: "Necesitamos preparar la estrategia para Black Friday, ¿qué sugieres? Este año queremos superar los resultados del año pasado y diferenciarnos de la competencia.",
        sender: 'user'
      },
      {
        id: 2,
        text: "He analizado el inventario actual y el histórico de ventas del año pasado. Aquí está el análisis de productos y descuentos sugeridos. He identificado las categorías con mayor potencial basado en tendencias actuales y comportamiento de búsqueda en Google:",
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
        text: "Los descuentos están basados en: 1) Nivel actual de stock, 2) Tendencias de búsqueda en redes sociales, 3) Margen de ganancia por producto. También he analizado las estrategias de los principales competidores para asegurar que nuestras ofertas sean más atractivas.",
        sender: 'ai'
      },
      {
        id: 4,
        text: "Me parece bien el enfoque. ¿Qué canales de marketing recomiendas priorizar este año? El año pasado invertimos principalmente en Google Ads.",
        sender: 'user'
      },
      {
        id: 5,
        text: "Basado en el análisis de conversión del año pasado y las tendencias actuales, recomiendo la siguiente distribución de presupuesto: 40% en Instagram y Facebook Ads (enfocado en video y carrusel), 25% en Google Ads, 20% en influencers estratégicos con audiencias alineadas a nuestros productos, y 15% en email marketing segmentado por comportamiento de compra previo. Los datos muestran que Instagram tiene un 27% mejor ROI que Google Ads para nuestras categorías principales.",
        sender: 'ai'
      },
      {
        id: 6,
        text: "Interesante. ¿Y qué estrategia de timing sugieres? ¿Deberíamos empezar antes o concentrarnos solo en el día?",
        sender: 'user'
      },
      {
        id: 7,
        text: "Recomiendo una estrategia escalonada en tres fases: 1) Pre-Black Friday (10 días antes): Campaña de anticipación con acceso exclusivo para suscriptores y clientes frecuentes, 2) Black Friday Weekend (viernes a domingo): Descuentos principales en todas las categorías con ofertas relámpago cada 3 horas, 3) Cyber Monday: Enfoque en productos tecnológicos y últimas unidades con descuentos adicionales. Esta estrategia generó un 34% más de ventas en casos similares al extender el período de compra.",
        sender: 'ai'
      },
      {
        id: 8,
        text: "Me gusta mucho esta estrategia. ¿Podrías preparar un calendario detallado con las acciones específicas para cada fase?",
        sender: 'user'
      },
      {
        id: 9,
        text: "He preparado el calendario detallado con todas las acciones para las tres fases. Incluye fechas exactas, creatividades necesarias, copy sugerido para cada plataforma, programación de emails, y configuración de ofertas relámpago. También he incluido un plan de contingencia en caso de que la competencia lance ofertas agresivas durante nuestra campaña. ¿Procedo a configurar la campaña en el sistema y coordinar con el equipo creativo para la producción de materiales?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Recursos Humanos",
    messages: [
      {
        id: 1,
        text: "Necesito una forma de medir y comparar el rendimiento de los vendedores, ¿qué propones? Actualmente solo medimos el volumen de ventas, pero creo que hay más factores a considerar.",
        sender: 'user'
      },
      {
        id: 2,
        text: "Tienes razón, medir solo el volumen de ventas puede llevar a prácticas que no favorecen la experiencia del cliente o la rentabilidad a largo plazo. He creado un dashboard de rendimiento que integra múltiples métricas balanceadas. Aquí tienes una vista preliminar:",
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
        text: "Las métricas clave son: 1) Ventas totales, 2) NPS de clientes atendidos, 3) Tasa de conversión. Este enfoque equilibrado permite identificar diferentes perfiles de vendedores y valorar distintas fortalezas.",
        sender: 'ai'
      },
      {
        id: 4,
        text: "Me gusta este enfoque. ¿Cómo podríamos implementarlo sin que los vendedores sientan que están siendo microcontrolados?",
        sender: 'user'
      },
      {
        id: 5,
        text: "Excelente punto. Recomiendo implementarlo como un programa de desarrollo profesional en lugar de un sistema punitivo. Podemos: 1) Realizar una reunión de lanzamiento explicando cómo estas métricas ayudan al crecimiento profesional, 2) Establecer metas personalizadas para cada vendedor basadas en sus fortalezas, 3) Crear un sistema de reconocimiento que premie diferentes tipos de logros, no solo ventas, 4) Ofrecer capacitación específica basada en áreas de mejora identificadas.",
        sender: 'ai'
      },
      {
        id: 6,
        text: "¿Y cómo podríamos recolectar el NPS de manera efectiva sin molestar a los clientes?",
        sender: 'user'
      },
      {
        id: 7,
        text: "Podemos implementar varias estrategias no intrusivas: 1) Encuestas por SMS/email automatizadas 24 horas después de la compra (con una tasa de respuesta promedio del 22%), 2) Terminales de feedback rápido al salir de la tienda (sistema de 3 botones), 3) Códigos QR en el recibo que dirijan a una encuesta breve con incentivo de descuento en próxima compra, 4) Integración con el programa de fidelidad para recopilar feedback a cambio de puntos adicionales. Estas estrategias combinadas pueden darnos una cobertura del 45-60% de las transacciones.",
        sender: 'ai'
      },
      {
        id: 8,
        text: "Perfecto. ¿Podrías configurar reportes automáticos semanales con estas métricas y un plan de implementación gradual?",
        sender: 'user'
      },
      {
        id: 9,
        text: "He configurado los reportes automáticos semanales que se enviarán cada lunes a las 8:00 AM a los gerentes y cada vendedor recibirá su reporte personalizado. También he preparado un plan de implementación en 3 fases durante 6 semanas: Fase 1 (semanas 1-2): Comunicación y capacitación, Fase 2 (semanas 3-4): Implementación de recolección de datos y ajustes, Fase 3 (semanas 5-6): Lanzamiento completo del sistema de reconocimiento. ¿Te gustaría revisar el plan detallado y el calendario de implementación?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Operaciones",
    messages: [
      {
        id: 1,
        text: "¿Cómo van los tiempos de entrega este mes? Hemos recibido algunas quejas de clientes sobre retrasos.",
        sender: 'user'
      },
      {
        id: 2,
        text: "He analizado los datos de entregas de este mes y efectivamente hemos tenido problemas. Este mes tuvimos retrasos significativos durante la semana del 4 y del 15. El tiempo promedio de entrega aumentó de 1.8 días a 2.7 días, lo que representa un incremento del 50% respecto a nuestro estándar.",
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
        text: "Los retrasos se deben principalmente a: 1) Saturación en el centro de distribución sur (65% de casos), 2) Rutas no optimizadas (35% de casos). El centro sur está procesando un 27% más de pedidos que su capacidad diseñada debido al crecimiento en esa zona.",
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
      },
      {
        id: 4,
        text: "¿Qué soluciones propones para resolver estos problemas rápidamente?",
        sender: 'user'
      },
      {
        id: 5,
        text: "He desarrollado un plan de acción en dos fases. Soluciones inmediatas (1-7 días): 1) Redistribución de 35% de los pedidos del centro sur al centro este que está operando al 70% de capacidad, 2) Optimización de rutas con nuevo algoritmo que reduce tiempos de trayecto en 22%, 3) Implementación de turnos adicionales temporales en horarios pico. Soluciones a mediano plazo (30-60 días): 1) Ampliación del centro sur con 4 nuevas estaciones de picking, 2) Contratación de 6 operarios adicionales, 3) Implementación de sistema predictivo de demanda por zonas.",
        sender: 'ai'
      },
      {
        id: 6,
        text: "Me parece bien. ¿Cuál sería el impacto esperado de las soluciones inmediatas y qué recursos necesitamos?",
        sender: 'user'
      },
      {
        id: 7,
        text: "Con las soluciones inmediatas, proyectamos reducir el tiempo promedio de entrega a 2.1 días en la primera semana y volver al estándar de 1.8 días en la segunda semana. Esto representaría una mejora del 22% en 7 días. Los recursos necesarios son: 1) Configuración del sistema de ruteo: 4 horas de trabajo del equipo de TI, 2) Coordinación logística entre centros: 2 supervisores durante 3 días, 3) Turnos adicionales: $1.2M en horas extras durante 2 semanas. El ROI estimado es positivo considerando que cada día de retraso nos cuesta aproximadamente $350.000 en compensaciones y pérdida de clientes.",
        sender: 'ai'
      },
      {
        id: 8,
        text: "Excelente análisis. ¿Ya has redistribuido las rutas y ajustado los horarios de picking? ¿Autorizo los cambios y el presupuesto para las horas extras?",
        sender: 'user'
      },
      {
        id: 9,
        text: "He preparado todos los cambios en el sistema y están listos para implementarse. Las nuevas rutas están optimizadas y los horarios de picking ajustados para maximizar la eficiencia. Solo necesito tu autorización para activar los cambios y aprobar el presupuesto de $1.2M para las horas extras durante las próximas 2 semanas. Una vez implementado, recibirás reportes diarios de seguimiento con los KPIs de tiempos de entrega y nivel de servicio. ¿Procedo con la implementación?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Gestión de Contactos",
    messages: [
      {
        id: 1,
        text: "Necesito organizar mejor la comunicación con clientes, hay muchos canales y es difícil dar seguimiento. Estamos perdiendo consultas y los tiempos de respuesta son muy variables.",
        sender: 'user'
      },
      {
        id: 2,
        text: "Entiendo el desafío. He analizado todos tus canales de comunicación (email, teléfono, WhatsApp, redes sociales y chat web) y he creado un dashboard unificado que centraliza todas las interacciones. Aquí puedes ver el estado actual de las comunicaciones:",
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
        text: "He identificado varios patrones importantes: 1) El 45% de las consultas son por email, pero tienen el tiempo de respuesta más largo (promedio 8 horas), 2) Las llamadas tienen prioridad alta pero tardan más en resolverse completamente (promedio 2.3 interacciones), 3) WhatsApp tiene la mejor tasa de respuesta (92%) y satisfacción del cliente (4.7/5), 4) El 23% de las consultas se repiten en múltiples canales cuando no reciben respuesta rápida.",
        sender: 'ai'
      },
      {
        id: 4,
        text: "Interesante análisis. ¿Qué solución propones para unificar todo y mejorar los tiempos de respuesta?",
        sender: 'user'
      },
      {
        id: 5,
        text: "Propongo implementar un sistema omnicanal integrado con estas características: 1) Bandeja de entrada unificada que centralice todos los canales con vista de cliente 360°, 2) Sistema de priorización automática basado en urgencia, valor del cliente y tiempo de espera, 3) Asignación inteligente a agentes según especialidad y carga de trabajo, 4) Respuestas automáticas personalizadas para consultas frecuentes en cada canal, 5) Seguimiento automático de casos no resueltos con escalamiento.",
        sender: 'ai'
      },
      {
        id: 6,
        text: "Suena bien. ¿Qué tan compleja sería la implementación y cuánto tiempo tomaría?",
        sender: 'user'
      },
      {
        id: 7,
        text: "La implementación puede realizarse en fases para minimizar la disrupción. Fase 1 (1-2 semanas): Integración de canales y creación del dashboard unificado. Fase 2 (semana 3): Configuración de respuestas automáticas y reglas de asignación. Fase 3 (semanas 4-5): Implementación de análisis avanzado y optimización. La complejidad técnica es media, ya que utilizaremos APIs existentes de tus sistemas actuales. Requerirá aproximadamente 40 horas de configuración y 15 horas de capacitación para el equipo.",
        sender: 'ai'
      },
      {
        id: 8,
        text: "¿Podrías configurar primero las respuestas automáticas personalizadas para cada canal? Eso nos daría un alivio inmediato mientras implementamos el resto.",
        sender: 'user'
      },
      {
        id: 9,
        text: "Absolutamente. He analizado las 50 consultas más frecuentes y he preparado respuestas personalizadas para cada canal, adaptadas al formato y tono apropiado para cada medio. Para email, he creado 15 plantillas con variables dinámicas que se personalizan según el cliente. Para WhatsApp, he configurado 20 respuestas rápidas con opciones interactivas. Para el chat web, he implementado un árbol de decisión con 25 escenarios comunes. Estas respuestas automáticas pueden manejar aproximadamente el 65% de las consultas entrantes, liberando a tu equipo para casos más complejos. ¿Procedo con la implementación de estas respuestas automáticas mientras preparamos el sistema completo?",
        sender: 'ai'
      }
    ]
  },
  {
    title: "Manejo de Reclamos",
    messages: [
      {
        id: 1,
        text: "¿Cómo podemos mejorar el manejo de reclamos y quejas de clientes? Últimamente hemos tenido un aumento en las quejas y nuestro proceso actual es muy manual.",
        sender: 'user'
      },
      {
        id: 2,
        text: "Después de analizar tu proceso actual de manejo de reclamos, he identificado varias áreas de mejora. He implementado un sistema de seguimiento en tiempo real que centraliza todos los reclamos y permite una gestión más eficiente. Aquí está el estado actual de los casos:",
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
        text: "El análisis de los últimos 3 meses muestra que: 1) El 42% de los reclamos están relacionados con retrasos en entregas, 2) El 28% con productos defectuosos, 3) El 18% con cobros incorrectos, y 4) El 12% con problemas de atención al cliente. El tiempo promedio de resolución era de 72 horas, muy por encima del estándar de la industria.",
        sender: 'ai'
      },
      {
        id: 4,
        text: "¿Qué mejoras has implementado y cuáles han sido los resultados hasta ahora?",
        sender: 'user'
      },
      {
        id: 5,
        text: "He implementado varias mejoras clave: 1) Sistema de categorización automática de reclamos por urgencia y tipo, 2) Flujos de trabajo predefinidos para cada tipo de reclamo, 3) Asignación automática a especialistas según la naturaleza del problema, 4) Plantillas de respuesta personalizadas, 5) Sistema de escalamiento automático para casos sin resolver en tiempos objetivo, 6) Seguimiento post-resolución para verificar satisfacción.",
        sender: 'ai'
      },
      {
        id: 6,
        text: "Los resultados iniciales son muy positivos: 1) Hemos reducido el tiempo de respuesta inicial un 35% (de 8 horas a 5.2 horas), 2) Los casos urgentes ahora se resuelven en menos de 3 horas (antes 12 horas), 3) La satisfacción post-reclamo aumentó del 67% al 92%, 4) La tasa de escalamiento a gerencia disminuyó un 45%.",
        sender: 'ai'
      },
      {
        id: 7,
        text: "Estos resultados son impresionantes. ¿Qué más podríamos implementar para seguir mejorando?",
        sender: 'user'
      },
      {
        id: 8,
        text: "Para llevar nuestro sistema al siguiente nivel, recomiendo: 1) Implementar un sistema de alertas automáticas para casos prioritarios que notifique en tiempo real a los responsables, 2) Desarrollar un módulo de análisis predictivo que identifique patrones y anticipe problemas recurrentes, 3) Crear un programa de 'recuperación de clientes' para casos graves con beneficios especiales, 4) Implementar un sistema de feedback continuo que alimente directamente a las áreas operativas para prevenir futuros reclamos.",
        sender: 'ai'
      },
      {
        id: 9,
        text: "Me gusta especialmente la idea del sistema de alertas y el análisis predictivo. ¿Podemos implementar eso primero?",
        sender: 'user'
      },
      {
        id: 10,
        text: "Absolutamente. He preparado la configuración del sistema de alertas automáticas que funcionará así: 1) Notificaciones en tiempo real vía SMS y email a los responsables según el tipo y urgencia del reclamo, 2) Escalamiento automático si no hay respuesta en 30 minutos para casos urgentes, 3) Dashboard en tiempo real para gerencia con KPIs de resolución, 4) Reportes automáticos diarios con casos pendientes y en riesgo. El módulo de análisis predictivo utilizará los datos históricos para identificar patrones y tendencias, permitiendo intervenciones proactivas antes de que surjan problemas. ¿Procedo con la implementación de estas dos funcionalidades prioritarias?",
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
  const [isVisible, setIsVisible] = useState(false);

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

  // Set visibility after a short delay for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900 relative overflow-hidden" id="demo">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[35rem] h-[35rem] top-1/4 -right-20 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[30rem] h-[30rem] bottom-0 left-1/4 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Experiencia Interactiva
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Transforma tu Empresa con IA
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mira cómo nuestros asistentes de IA resuelven problemas reales y generan resultados medibles para tu negocio
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {/* Tabs - Versión mejorada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {conversations.map((conv, index) => (
              <TabButton
                key={index}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {conv.title}
              </TabButton>
            ))}
          </motion.div>

          {/* Chat Container - Versión mejorada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4 border-b border-indigo-500/20 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white font-medium">Asistente IA Activo</span>
              </div>
              <div className="text-gray-400 text-sm">
                Caso de uso: {conversations[activeTab].title}
              </div>
            </div>

            <div
              ref={chatContainerRef}
              className="flex flex-col gap-4 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent pr-2"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      IA
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/10'
                        : 'bg-white/10 text-gray-200 border border-white/5 shadow-lg'
                    }`}
                  >
                    {message.text}
                    {message.references && (
                      <div className="mt-4 space-y-4">
                        {message.references.map(ref => (
                          <div key={ref.id} className="bg-white/5 rounded-xl p-3 border border-white/10">
                            {ref.preview && (
                              <div className="mb-3">
                                {ref.preview}
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-xs">
                              {ref.type === 'excel' && (
                                <span className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white">X</span>
                              )}
                              {ref.type === 'pdf' && (
                                <span className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white">P</span>
                              )}
                              {ref.type === 'doc' && (
                                <span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">W</span>
                              )}
                              {ref.type === 'chart' && (
                                <span className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white">C</span>
                              )}
                              {ref.type === 'table' && (
                                <span className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">T</span>
                              )}
                              <span className="text-gray-300 font-medium">
                                {ref.title}
                              </span>
                              <span className="ml-auto bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px]">
                                Ver completo
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold">
                      TÚ
                    </div>
                  )}
                </motion.div>
              ))}

              {currentMessageIndex < conversations[activeTab].messages.length && (
                <div className="flex justify-start items-start gap-3 mt-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    IA
                  </div>
                  <div className="bg-white/5 rounded-2xl px-6 py-4 text-gray-400 border border-white/5">
                    <div className="flex space-x-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Barra de entrada simulada */}
            <div className="mt-4 flex gap-3 items-center">
              <div className="flex-1 bg-white/5 border border-indigo-500/20 rounded-xl px-4 py-3 text-gray-400">
                Escribe tu mensaje...
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium">
                Enviar
              </button>
            </div>
          </motion.div>

          {/* Sección de beneficios clave */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Respuestas Instantáneas</h3>
              <p className="text-gray-300">Obtén información y análisis en segundos, no en días o semanas.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Múltiples Formatos</h3>
              <p className="text-gray-300">Visualiza datos en gráficos, tablas y documentos para mejor comprensión.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Análisis Avanzado</h3>
              <p className="text-gray-300">Obtén insights accionables basados en datos reales de tu negocio.</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <CalButton
              variant="primary"
              size="large"
            >
              Agenda una Demo Personalizada
            </CalButton>
            <p className="text-gray-400 mt-4">
              Descubre cómo podemos adaptar esta tecnología a tus necesidades específicas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}