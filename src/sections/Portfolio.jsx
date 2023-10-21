import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import data from "../utils/data";
import { slideBottomVariant, slideSides } from "../utils/FramerVariants";
import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai";
import TypingText from "../components/TypingText";

const Portfolio = () => {
  return (
    <Box id="portfolio" mb={{ base: "70px", lg: "100px" }}>
      <TypingText title={"PORTFOLIO"} />
      <Flex
        mt={{ base: "50px", lg: "70px" }}
        gap={{ base: "50px", lg: "70px" }}
        direction={"column"}
      >
        {data.projects.map((each, index) => (
          <Flex
            key={each.id}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            align={"center"}
            justify={"space-between"}
            gap={{ base: "20px", md: 0 }}
            overflow={"hidden"}
          >
            <Box
              as={motion.div}
              variants={slideSides(
                0.1,
                index % 2 === 0 ? "-100%" : "100%",
                0.5
              )}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              width={{ base: "100%", sm: "85%", md: "48%" }}
              h={{ base: "auto", md: "420px" }}
            >
              <a href={each.to} target="_blank" rel="noopener noreferrer">
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={each.image}
              />

              </a>
            </Box>
            <Box
              as={motion.div}
              variants={slideBottomVariant(0.1, 50, 0.5)}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              width={{ base: "100%", sm: "85%", md: "48%" }}
            >
              <Box mb={"15px"}>
                <p className="fw-600">PROJECT</p>
                <p className="fw-600 text-purple">{each.title}</p>
              </Box>
              <Box p={"10px"} className="bg-light-dark" mb={"10px"}>
                <h4 className="small-text">{each.about}</h4>
              </Box>
              <Flex justify={{ base: "end", md: "start" }}>
                <a href={each.to} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Icon as={AiOutlineLink} boxSize={7} className="bg-hover-purple" />
                </a>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Portfolio;
