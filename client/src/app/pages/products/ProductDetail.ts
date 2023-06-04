"use client "

import { useRouter } from 'next/router';
import {
    Box,
    Flex,
    Image,
    Text,
    Button,
    Stack,
    Heading,
    BorderProps,
  } from '@chakra-ui/react';


  export default function ProductDetail () {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the product details using the product ID

  return (
   <BorderProps><BorderProps>
  );
};


