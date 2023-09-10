import { Box, Flex, Image } from "@chakra-ui/react";
import useElementHeight from "../hooks/useElementHeight";
import data from "../utils/data";
import Form from "../components/footer/Form";
import { motion } from "framer-motion";
import { slideBottomVariant, slideSides } from "../utils/FramerVariants";

const Footer = () => {
  const { elementRef, elementWidth } = useElementHeight();

  return (
    <Box className="bg-light-dark" py={"50px"}>
      <Flex
        align={"center"}
        justify={{ base: "center", lg: "space-between" }}
        className="cc-container page-alignment"
        overflow={"hidden"}
      >
        <Flex
          as={motion.div}
          variants={slideSides(10, "-100%", 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          display={{ base: "none", lg: "flex" }}
          width={{ md: "43%", base: "100%" }}
          justify={"center"}
        >
          <Box
            ref={elementRef}
            width={"100%"}
            maxW={{ lg: "520px" }}
            h={elementWidth}
            borderRadius={"50%"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src={data.hero.profileImage}
              borderRadius={"50%"}
            />
          </Box>
        </Flex>
        <Flex
          as={motion.div}
          variants={slideBottomVariant(5, 100, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.25, once: true }}
          width={{ base: "100%", lg: "53%" }}
          maxW={{ base: "520px", lg: "53%" }}
        >
          <Form />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
