import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ClientMotion = ({ children, ...props }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <motion.div {...props}>{children}</motion.div>;
};