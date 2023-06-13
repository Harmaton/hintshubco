/* eslint-disable react/no-unescaped-entities */
"use client"

import { Box, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const About = () => {
  const deliveryText = [
    "We are a reliable delivery company that offers fast and efficient delivery services to our customers. Whether you need to send a parcel or a document, we've got you covered.",
    "With our state-of-the-art tracking system, you can easily track your parcel or document and know its location at any given time. We also offer same-day delivery for urgent packages.",
    "Our friendly and professional delivery agents will ensure that your package is delivered on time and in perfect condition. We take pride in providing excellent customer service and always go the extra mile to ensure customer satisfaction.",
    "Contact us today to learn more about our delivery services and to schedule a delivery."
  ];
  return (
    <Box maxW={"7xl"} mx={"auto"} my={"10"}>
      <Heading as="h1"
        mb={5}
        textAlign={"center"}
        fontWeight={"semibold"}
      >
        Welcome to Our Delivery Company
      </Heading>
      <List>
        {deliveryText.map((text, index) => (
          <ListItem
            key={index}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDirection={"row"}
          >
            <ListIcon as={MdCheckCircle} color="green.500" />
            <Text fontSize={"xl"} fontWeight={"normal"}>
              {text}
            </Text>
          </ListItem>
        ))
        }
      </List>
    </Box>
  );
};

export default About;
