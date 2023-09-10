import { Box, Button, Flex, Image } from "@chakra-ui/react";
import useElementHeight from "../../hooks/useElementHeight";
import { motion } from "framer-motion";
import { slideSides } from "../../utils/FramerVariants";
import data from "../../utils/data";
import { Link } from "react-scroll";
import useWindowSize from "../../hooks/useWindowSize";

const Hero = () => {
  const { elementRef, elementWidth } = useElementHeight();
  const { width } = useWindowSize();

  return (
    <Flex
      mb={{ base: "50px", lg: "70px" }}
      direction={{ base: "column-reverse", lg: "row" }}
      align={"center"}
      gap={{ base: "20px", lg: 0 }}
      overflow={"hidden"}
    >
      <Flex
        as={motion.div}
        variants={slideSides(20, "-100%", 1)}
        initial="initial"
        animate="animate"
        direction={"column"}
        width={{ base: "100%", md: "90%", lg: "53%" }}
        gap={"20px"}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Box>
          <h2 style={{ textTransform: "uppercase" }}>{data.hero.name}</h2>
          <h3
            className="text-purple fw-500"
            style={{ textTransform: "uppercase" }}
          >
            {data.hero.title}
          </h3>
        </Box>
        <Box width={{ lg: "83%" }}>
          <h4 className="small-text fw-500">{data.hero.about}</h4>
        </Box>
        <Box>
          <Button
            variant={"outline"}
            rounded={0}
            className="border-purple text-purple bg-purple-light-9-hover"
          >
            <Link
              to={"portfolio"}
              spy={true}
              smooth={true}
              offset={width < 768 ? -60 : -100}
              duration={500}
            >
              <h4 className="small-text cursor fw-600">View Portfolio</h4>
            </Link>
          </Button>
        </Box>
      </Flex>
      <Flex
        as={motion.div}
        variants={slideSides(20, "100%", 1)}
        initial="initial"
        animate="animate"
        width={{ lg: "47%", base: "100%" }}
        justify={"center"}
      >
        <Box
          ref={elementRef}
          width={"100%"}
          maxW={{ base: "370px", md: "500px", lg: "600px" }}
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
    </Flex>
  );
};

export default Hero;
