import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <p>kuch to likho Nav bar me??</p>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
