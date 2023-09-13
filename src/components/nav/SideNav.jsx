/* eslint-disable react/prop-types */
import { Box, Flex, Button } from "@chakra-ui/react";
import {
  sideNavSmVariants,
  sideNavVariants,
  slideBottomVariant,
} from "../../utils/FramerVariants";
import { motion } from "framer-motion";
import Links from "./Links";
import useWindowSize from "../../hooks/useWindowSize";
import data from "../../utils/data";

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
        direction={"column"}
        h={{ base: "calc(100vh - 140px)", md: "auto" }}
        maxH={{ md: "calc(100vh - 140px)" }}
        overflowY={"scroll"}
        className="scrollbody"
        gap={{ base: "60px", md: "35px" }}
      >
        <Box
          as={motion.div}
          variants={slideBottomVariant(4, 30, 0.4)}
          initial="initial"
          animate="animate"
        >
          <Links isMobile setOpen={setOpen} />
        </Box>
        <Flex
          direction={"column"}
          gap={"15px"}
          as={motion.div}
          variants={slideBottomVariant(5, 30, 0.4)}
          initial="initial"
          animate="animate"
        >
          <p className="text-purple-light-5 fw-600">SAY HELLO</p>
          {data.sayHello.map((each) => (
            <a style={{width: "max-content"}} key={each.id} href={each.to} className="small-text">
              {each.link}
            </a>
          ))}
        </Flex>
        <Box
          as={motion.div}
          variants={slideBottomVariant(6, 30, 0.4)}
          initial="initial"
          animate="animate"
        >
          <a href="" download="">
            <Button
              size={"sm"}
              variant={"outline"}
              className="border-purple text-purple bg-purple-light-9-hover"
              rounded={0}
            >
              <h4 className="small-text fw-600">Download Full Resume</h4>
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideNav;
