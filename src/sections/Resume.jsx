import { Box } from "@chakra-ui/react";
import Top from "../components/resume/Top";
import Works from "../components/resume/Works";

const Resume = () => {
  return (
    <Box id="resume" mb={{ base: "70px", lg: "100px" }}>
      <Top />
      <Works />
    </Box>
  );
};

export default Resume;
