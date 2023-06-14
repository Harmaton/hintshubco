"use client"

import { Box, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

function Support() {
  const handleSupportclick = () => {
    console.log("buy me cofeee")
  };
  const iconButtonBg = useColorModeValue('gray.900', 'white');

  return (
    <IconButton
      icon={<Image src="/M-PESA-lipa.png" boxSize={16} />}
      size="lg"
      aria-label="mpesa"
      bg={iconButtonBg}
      position="fixed"
      bottom="5"
      left="120"
      zIndex="docked"
      onClick={handleSupportclick}
    />

  );
}

export default Support;

