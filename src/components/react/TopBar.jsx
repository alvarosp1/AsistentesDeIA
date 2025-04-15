import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <span className="animate-ping absolute h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 mr-2"></span>
              Asistentes Online 24/7
            </span>
            <span className="hidden md:inline-flex items-center">
              <span className="text-purple-200">|</span>
              <span className="ml-4">Respuesta instantánea</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:contacto@asistentesdeia.cl" className="hover:text-purple-200 transition-colors">
              contacto@asistentesdeia.cl
            </a>
            <span className="text-purple-200">|</span>
            <a href="tel:+56936432808" className="hover:text-purple-200 transition-colors">
              +569 3643 2808
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 