import { Box } from "@chakra-ui/react";
import Hero from "../components/about/Hero";
import Skills from "../components/about/Skills";
import Certications from "../components/about/Certications";

const About = () => {
  return (
    <Box
      id="about"
      pt={{ md: "30px", lg: "50px" }}
      mb={{ base: "70px", lg: "100px" }}
    >
      <Hero />
      <Skills />
      <Certications />
    </Box>
  );
};

export default About;
