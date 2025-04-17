
import { motion } from 'framer-motion';
import { Card } from './ui/card';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
}

const FloatingCard = ({ children, className }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Card className={`bg-black/20 backdrop-blur-sm border-white/10 ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
};

export default FloatingCard;
