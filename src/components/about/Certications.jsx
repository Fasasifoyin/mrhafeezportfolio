import { useEffect, useState } from "react";
import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import data from "../../utils/data";
import { motion } from "framer-motion";
import { slideSides } from "../../utils/FramerVariants";
import TypingText from "../TypingText";
import useWindowSize from "../../hooks/useWindowSize";

const Certications = () => {
  const { width } = useWindowSize();
  const number = width < 468 ? 1 : width < 992 ? 2 : 4;
  const slideNumber = Math.ceil(data.certifications.length / number);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(current > slideNumber - 1 ? slideNumber - 1 : current);
  }, [width, current, slideNumber]);

  return (
    <Box>
      <TypingText title={"MY CERTIFICATIONS"} />
      {width !== undefined && (
        <Box mt={"10px"}>
          <Box overflow={"hidden"} mb={"10px"}>
            <Flex
              w={`${100 * slideNumber}%`}
              transform={`translateX(${-(current * (100 / slideNumber))}%)`}
              transition={`transform ease-out 1s`}
            >
              {[...Array(slideNumber)].map((_each, index) => (
                <Box key={index} width={"100%"} p={"10px"}>
                  <SimpleGrid columns={{ sm: 2, lg: 4 }} gap={5} h={"100%"}>
                    {data.certifications
                      .slice(index * number, index * number + number)
                      .map((each, index) => (
                        <Flex
                          as={motion.div}
                          variants={slideSides(index * 5 + 0.5, -50, 0.5)}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true, amount: 0.25 }}
                          key={each.id}
                          bg={"white"}
                          direction={"column"}
                          align={"center"}
                          justifyContent={"center"}
                          textAlign={"center"}
                          boxShadow={"0px 1.7px 4px rgb(0,0,0,0.25)"}
                          p={"50px 20px"}
                          maxW={{ base: "420px", sm: "100%" }}
                          justifySelf={"center"}
                        >
                          <Box
                            w={{ base: "100%", md: "100%" }}
                            h={{ base: "100%", md: "100%" }}
                            mb={"15px"}
                            // outline={`1px solid red`}
                          >
                            
                            <a href={each.to} target="_blank">
                            <Image
                              w={"100%"}
                              h={"100%"}
                              objectFit={"cover"}
                              src={each.image}
                            />

                            </a>
                          </Box>
                          <h6 className="tiny-text fw-600">{each.about}</h6>{" "}
                        </Flex>
                      ))}
                  </SimpleGrid>
                </Box>
              ))}
            </Flex>
          </Box>
          <Flex gap={"10px"} justifyContent={"center"} flexWrap={"wrap"}>
            {[...Array(slideNumber)].map((each, index) => (
              <Box
                key={index}
                width={"20px"}
                h={"20px"}
                border={current === index ? "" : "1px solid black"}
                borderRadius={"50%"}
                onClick={() => setCurrent(index)}
                className={`cursor ${current === index ? "bg-purple" : ""}`}
              />
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Certications;
