import { Box, Image, Flex } from "@chakra-ui/react";
import data from "../../utils/data";
import { motion } from "framer-motion";
import { slideBottomVariant } from "../../utils/FramerVariants";
import TypingText from "../TypingText";

const Skills = () => {
  return (
    <Box mb={{ base: "50px", lg: "70px" }}>
      <TypingText title={"MY SKILLS"} />
      <Flex mt={"10px"} flexWrap={"wrap"} gap={10} justifyContent={"center"}>
        {data.skills.map((each, index) => (
          <Box
            as={motion.div}
            variants={slideBottomVariant(index / 2, 100, 0.5, "spring")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            key={each.id}
            w={"118px"}
            h={"117px"}
            bg={"white"}
            boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.25)"}
            borderRadius={"15px"}
            display={"grid"}
            placeItems={"center"}
          >
            <Image w={"60%"} h={"60%"} objectFit={"contain"} src={each.image} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
