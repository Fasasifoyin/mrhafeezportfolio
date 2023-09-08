import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Links from "../components/nav/Links";
import { Sling as Hamburger } from "hamburger-react";
import SideNav from "../components/nav/SideNav";
import useWindowSize from "../hooks/useWindowSize";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (isOpen && width < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, width]);

  return (
    <Box className="cc-container page-alignment">
      <Flex pos={"relative"} justify={"space-between"} align={"center"}>
        <h4 className="small-text fw-600">Abdulhafeez.</h4>
        <Links />
        <Box display={{ lg: "none" }}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={23}
            color="#0A19CD"
          />
        </Box>
        <AnimatePresence>
          {isOpen && <SideNav setOpen={setOpen} />}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default Navbar;
