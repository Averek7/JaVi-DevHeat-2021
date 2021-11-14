import React from "react";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -100,
  },
};

const Dashboard = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla
      voluptatibus aperiam rem est rerum aspernatur? Sapiente voluptates sequi
      quibusdam, natus molestiae molestias voluptatem eligendi ex ut, velit
      eaque, atque tenetur ipsa vero voluptatum?
    </motion.div>
  );
};

export default Dashboard;
