"use client"

import { Box, Heading, Text } from "@chakra-ui/react";

const DeliveryPage = () => {
  return (
    <Box p={10}>
      <Heading as="h1" mb={5}>
        Welcome to Our Delivery Company
      </Heading>
      <Text mb={5}>
        We are a reliable delivery company that offers fast and efficient
        delivery services to our customers. Whether you need to send a parcel or
        a document, we've got you covered.
      </Text>
      <Text mb={5}>
        With our state-of-the-art tracking system, you can easily track your
        parcel or document and know its location at any given time. We also
        offer same-day delivery for urgent packages.
      </Text>
      <Text mb={5}>
        Our friendly and professional delivery agents will ensure that your
        package is delivered on time and in perfect condition. We take pride in
        providing excellent customer service and always go the extra mile to
        ensure customer satisfaction.
      </Text>
      <Text mb={5}>
        Contact us today to learn more about our delivery services and to
        schedule a delivery.
      </Text>
    </Box>
  );
};

export default DeliveryPage;
