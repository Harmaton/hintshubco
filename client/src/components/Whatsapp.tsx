"use client"

import { IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const handleWhatsappClick = () => {
   
    const phoneNumber = "+254784372162";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <IconButton
      icon={<FaWhatsapp />}
      size="lg"
      aria-label="Whatsapp"
      isRound
      bg="green.500"
      color="white"
      position="fixed"
      bottom="5"
      left="6"
      zIndex="docked"
      onClick={handleWhatsappClick}
    />
  );
}

export default Whatsapp;

