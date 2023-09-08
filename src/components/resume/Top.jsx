import { Box, Button, Flex } from "@chakra-ui/react";

const Top = () => {
  return (
    <Flex
      direction={"column"}
      align={{ base: "center", md: "start" }}
      mb={{ base: "20px", md: "50px", lg: "70px" }}
    >
      <h2>RESUME</h2>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        justify={"space-between"}
        align={{ base: "", md: "end" }}
        w={"100%"}
        gap={{ base: "20px", md: 0 }}
      >
        <h3 className="text-purple fw-600">WORK EXPERIENCE</h3>
        <Box alignSelf={{ base: "center", md: "start" }}>
          <Button
            variant={"outline"}
            rounded={0}
            size={{ base: "sm", md: "md" }}
            className="border-purple text-purple bg-purple-light-9-hover"
          >
            <h4 className="small-text fw-600">Download Full Resume</h4>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Top;
