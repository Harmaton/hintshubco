"use client"

import { Box, IconButton, Text } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

function Support() {
  const handleSupportclick = () => {
   
    console.log("buy me cofeee")
  };

  return (
   
    <IconButton
      icon={<FaCoffee />}
      size="lg"
      aria-label="Whatsapp"
      isRound
      bg="red.500"
      color="white"
      position="fixed"
      bottom="5"
      left="230"
      zIndex="docked"
      onClick={handleSupportclick}
    />
   
  );
}

export default Support;

