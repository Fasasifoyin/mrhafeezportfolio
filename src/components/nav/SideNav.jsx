/* eslint-disable react/prop-types */
import { Box, Flex, Button } from "@chakra-ui/react";
import {
  sideNavSmVariants,
  sideNavVariants,
  stagger,
} from "../../utils/FramerVariants";
import { motion } from "framer-motion";
import Links from "./Links";
import useWindowSize from "../../hooks/useWindowSize";

const SideNav = ({ setOpen }) => {
  const { width } = useWindowSize();
  const animation = width < 768 ? sideNavSmVariants : sideNavVariants;

  return (
    <Box
      as={motion.div}
      {...animation}
      className="glass sideNav"
      display={{ lg: "none" }}
    >
      <Flex
        h={{ base: "100%", md: "auto" }}
        direction={"column"}
        overflowY={"scroll"}
        className="scrollbody"
        gap={{ base: "60px", md: "35px" }}
      >
        <Box
          as={motion.div}
          variants={stagger(0.4)}
          initial="hidden"
          animate="visible"
        >
          <Links isMobile setOpen={setOpen} />
        </Box>
        <Flex
          direction={"column"}
          gap={"15px"}
          as={motion.div}
          variants={stagger(0.5)}
          initial="hidden"
          animate="visible"
        >
          <p className="text-purple-light-5 fw-600">SAY HELLO</p>
          <h4 className="small-text">08024567899</h4>
          <h4 className="small-text">abiolahafeez@gmail.com</h4>
        </Flex>
        <Box
          as={motion.div}
          variants={stagger(0.6)}
          initial="hidden"
          animate="visible"
        >
          <Button
            size={"sm"}
            variant={"outline"}
            className="border-purple text-purple bg-purple-light-9-hover"
            rounded={0}
          >
            <h4 className="small-text fw-600">Download Full Resume</h4>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideNav;
