import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RestaurantSection = ({ name, description, style, cuisine, dressCode, image }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation(); 
  const textControls = useAnimation(); 

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 20 }); 
      textControls.start({ opacity: 1, x: 0 }); 
    }
  }, [controls, textControls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="block lg:flex mb-8 pb-4"
    >
      <div className="w-full lg:w-1/2 pr-6">
        <img src={image} alt={name} className="w-full rounded-md shadow-md" />
      </div>
      <div className="w-full my-5 lg:my-0 lg:w-1/2 title">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={textControls}
          transition={{ duration: 0.7 }}
          className="border-b pb-4 text-2xl font-semibold mb-2"
        >
          {name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-b pb-4 mb-10"
        >
          <strong>Style:</strong> {style}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="border-b pb-4 mb-10"
        >
          <strong>Cuisine:</strong> {cuisine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="border-b pb-4 mb-10"
        >
          <strong>Dress Code:</strong> {dressCode}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default RestaurantSection;
