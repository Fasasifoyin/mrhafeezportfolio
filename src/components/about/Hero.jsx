import { Box, Button, Flex, Image } from "@chakra-ui/react";
import useElementHeight from "../../hooks/useElementHeight";
import { motion } from "framer-motion";
import { heroImage } from "../../utils/FramerVariants";

const Hero = () => {
  const { elementRef, elementWidth } = useElementHeight();

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
        variants={heroImage("-100%")}
        initial="initial"
        animate="animate"
        direction={"column"}
        width={{ base: "100%", md: "90%", lg: "53%" }}
        gap={"20px"}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Box>
          <h2>ABDULHAFEEZ KEKERE-EKUN</h2>
          <h3 className="text-purple fw-500">PROJECT MANAGER</h3>
        </Box>
        <Box width={{ lg: "83%" }}>
          <h4 className="small-text fw-500">
            Lorem ipsum dolor sit amet consectetur. Scelerisque diam purus sed
            ut dictum posuere. Semper pretium ultrices nisi velit mollis. Ut
            risus ullamcorper sagittis facilisis nibh. Velit urna dui vel vitae.
            Cras consectetur ut sem condimentum. Ornare aliquam enim sed sit
            facilisis massa elementum elementum varius. Malesuada lectus in arcu
            in enim convallis amet. Vel vestibulum in arcu at. Nulla tristique
            et varius et. Tellus velit eget lectus suspendisse proin lectus.
            Interdum turpis elementum neque eu et tellus diam. Morbi purus
            fringilla faucibus lorem tellus velit tincidunt enim dictum. Massa
            id ridiculus enim elementum in.
          </h4>
        </Box>
        <Box>
          <Button
            variant={"outline"}
            rounded={0}
            className="border-purple text-purple bg-purple-light-9-hover"
          >
            <h4 className="small-text fw-600">View Portfolio</h4>
          </Button>
        </Box>
      </Flex>
      <Flex
        as={motion.div}
        variants={heroImage("100%")}
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
            src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694008794/Metaversus/photo-1557862921-37829c790f19_z8qhnd.jpg"
            borderRadius={"50%"}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
