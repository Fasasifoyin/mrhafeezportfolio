/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";
import data from "../../utils/data";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Links = ({ isMobile, setOpen }) => {
  const [line, setLine] = useState(-1);
  const { width } = useWindowSize();

  const setActive = (index) => {
    setLine(index);
  };

  return (
    <Flex
      display={{
        base: isMobile ? "flex" : "none",
        lg: isMobile ? "none" : "flex",
      }}
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "20px", lg: "35px" }}
    >
      {data.links.map((each, index) => (
        <Box key={each.link} width={"max-content"}>
          <Link
            to={each.to}
            spy={true}
            smooth={true}
            offset={index === 0 ? -150 : width < 768 ? -60 : -100}
            duration={500}
            onSetActive={() => setActive(index)}
            className={line === index ? "active" : "inactive"}
          >
            <h4
              onClick={() => setOpen(false)}
              className="small-text cursor fw-600"
            >
              {each.link}
            </h4>
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default Links;
