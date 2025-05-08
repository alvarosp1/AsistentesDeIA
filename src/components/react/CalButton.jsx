import { motion } from 'framer-motion';

export default function CalButton({ 
  children, 
  className = "", 
  variant = "primary", 
  size = "medium",
  onClick = null
}) {
  // Define base styles based on variant
  let baseStyles = "";
  
  if (variant === "primary") {
    baseStyles = "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30";
  } else if (variant === "secondary") {
    baseStyles = "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20";
  } else if (variant === "white") {
    baseStyles = "bg-white text-black hover:shadow-lg hover:shadow-white/20";
  }
  
  // Define size styles
  let sizeStyles = "";
  if (size === "small") {
    sizeStyles = "px-4 py-2 text-sm";
  } else if (size === "medium") {
    sizeStyles = "px-6 py-3 text-base";
  } else if (size === "large") {
    sizeStyles = "px-8 py-4 text-lg";
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full font-medium transition-all ${baseStyles} ${sizeStyles} ${className}`}
      data-cal-link="asistentesdeia/reunion-de-1-hora"
      data-cal-namespace="reunion-de-1-hora"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
