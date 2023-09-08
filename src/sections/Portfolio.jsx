import { Box, Flex, Image } from "@chakra-ui/react";
import data from "../../public/data";
import { portfolioImage, resumeVariant } from "../utils/FramerVariants";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <Box id="portfolio" mb={{ base: "70px", lg: "100px" }}>
      <h2>PORTFOLIO</h2>
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
              variants={portfolioImage(index % 2 === 0 ? "-100%" : "100%")}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              width={{ base: "100%", sm: "85%", md: "48%" }}
              h={{ md: "420px" }}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={each.image}
              />
            </Box>
            <Box
              as={motion.div}
              variants={resumeVariant(0.6667)}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              width={{ base: "100%", sm: "85%", md: "48%" }}
            >
              <Box mb={"15px"}>
                <p className="fw-600">PROJECT</p>
                <p className="fw-600 text-purple">{each.title}</p>
              </Box>
              <Box p={"10px"} className="bg-light-dark">
                <h4 className="small-text">{each.about}</h4>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Portfolio;
