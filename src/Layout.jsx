/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import Navbar from "./sections/Navbar";
import { motion } from "framer-motion";
import { navVariants } from "./utils/FramerVariants";
import useElementHeight from "./hooks/useElementHeight";
import Footer from "./sections/Footer";

const Layout = ({ children }) => {
  const { elementRef, elementHeight } = useElementHeight();

  return (
    <Box>
      <Box
        ref={elementRef}
        position={"fixed"}
        top={0}
        left={0}
        w={"100%"}
        zIndex={10}
        py={{ base: "20px", md: "27px", lg: "39px" }}
        as={motion.div}
        {...navVariants}
      >
        <Navbar />
      </Box>
      <Box
        mb={{ base: "50px", lg: "70px" }}
        className="cc-container page-alignment"
        mt={`${elementHeight}px`}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
