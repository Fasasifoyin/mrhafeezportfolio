import { Box, Image, Flex } from "@chakra-ui/react";
import data from "../../../public/data";
import { motion } from "framer-motion";
import { skillsVariant } from "../../utils/FramerVariants";

const Skills = () => {
  return (
    <Box mb={{ base: "50px", lg: "70px" }}>
      <h2>MY SKILLS</h2>
      <Flex mt={"10px"} flexWrap={"wrap"} gap={10} justifyContent={"center"}>
        {data.skills.map((each, index) => (
          <Box
            as={motion.div}
            variants={skillsVariant(index)}
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
