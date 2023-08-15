import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <p>kuch to likho Nav bar me??</p>
    </HStack>
  );
};

export default NavBar;
