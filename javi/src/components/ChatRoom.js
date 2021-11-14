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

const ChatRoom = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      reprehenderit consequatur quis natus dolorum perspiciatis, saepe ratione
      perferendis, a quos libero dolore similique soluta voluptates
      consequuntur, nam omnis. Voluptatum ad nam accusantium porro harum!
    </motion.div>
  );
};

export default ChatRoom;
