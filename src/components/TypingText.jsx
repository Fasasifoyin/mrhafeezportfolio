/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { textVariant } from "../utils/FramerVariants";

const TypingText = ({ title }) => {
  return (
    <motion.h2>
      {Array.from(title).map((letter, index) => (
        <motion.span
          key={index}
          variants={textVariant(index + 1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: "true" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default TypingText;
