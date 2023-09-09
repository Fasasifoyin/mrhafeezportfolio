import { Box, Flex, Icon } from "@chakra-ui/react";
import data from "../../utils/data"
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsBuildings } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideBottomVariant } from "../../utils/FramerVariants";

const Works = () => {
  return (
    <Flex direction={"column"} gap={{ base: "50px", lg: "70px" }}>
      {data.resumes.map((each, index) => (
        <Flex
          as={motion.div}
          variants={slideBottomVariant(index, 70, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          key={each.id}
          direction={"column"}
          gap={"30px"}
        >
          <Flex justify={"space-between"} align={"end"} gap={"5px"}>
            <p style={{ wordBreak: "break-all" }} className="fw-600">
              {each.position}
            </p>
            <Box
              className="bg-blue"
              p={{ base: "5px 10px", md: "10px 16px" }}
              borderRadius={"15px"}
            >
              <p
                style={{ textTransform: "upperCase" }}
                className="fw-600 text-purple"
              >
                {each.type}
              </p>
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify={"space-between"}
            gap={{ base: "10px" }}
          >
            <Flex gap={{ base: "10px", md: "30px" }} flexWrap={"wrap"}>
              <Flex align={"center"} gap={"10px"}>
                <Icon as={BsBuildings} color={"rgb(0,0,0, 0.4)"} boxSize={6} />
                <h4 className="small-text fw-600 text-black-light">
                  {each.company}
                </h4>
              </Flex>
              <Flex align={"center"} gap={"10px"}>
                <Icon
                  as={MdLocationPin}
                  color={"rgb(0,0,0, 0.4)"}
                  boxSize={7}
                />
                <h4 className="small-text fw-600 text-black-light">
                  {each.location}
                </h4>
              </Flex>
            </Flex>
            <Flex align={"center"} gap={"10px"}>
              <Icon as={SlCalender} color={"rgb(0,0,0, 0.4)"} boxSize={6} />
              <h4 className="small-text fw-600 text-black-light">{`${each.start} - ${each.end}`}</h4>
            </Flex>
          </Flex>
          <hr className="border-black-veryLight" />
        </Flex>
      ))}
    </Flex>
  );
};

export default Works;
