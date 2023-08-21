import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ image, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="block lg:flex mb-8 border-b pb-4"
    >
      <div className="w-full lg:w-1/2 lg:pr-6">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          transition={{ duration: 0.7 }}
          src={image}
          alt={title}
          className="h-full w-full rounded-md shadow-md"
        />
      </div>
      <div className="w-full my-5 lg:my-0 lg:w-1/2 title">
        <h2 className="border-b pb-4 text-2xl font-semibold mb-2">{title}</h2>
        <p className="border-b pb-4 mb-10">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;