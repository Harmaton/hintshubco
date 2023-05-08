"use client"

import { IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <IconButton
      icon={<FaWhatsapp  />}
      size="lg"
      aria-label='Whatsapp'
      isRound
      bg="green.500"
      color="white"
      position="fixed"
      bottom="6"
      right="6"
      zIndex="docked"
     
    />
  );
}

export default Whatsapp;
