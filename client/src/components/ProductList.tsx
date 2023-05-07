"use client"

import {
    Box,
    Flex,
    Image,
    Text,
    Button,
    Stack,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const ProductList = () => {
    const products = [
      {
        id: 1,
        name: 'Product One',
        price: 10.99,
        image:
          'https://images.unsplash.com/photo-1542838132-92c53300491c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
        id: 2,
        name: 'Product Two',
        price: 14.99,
        image:
          'https://images.unsplash.com/photo-1550305615-6a69d6ccea09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
        id: 3,
        name: 'Product Three',
        price: 9.99,
        image:
          'https://images.unsplash.com/photo-1568037116251-ecfd6d45614f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
    ];
  
    return (
      <Box p={4}>
        <Heading mb={6}>Our Products</Heading>
        <Stack spacing={4}>
          {products.map((product) => (
            <Flex
              key={product.id}
              bg={useColorModeValue('gray.100', 'gray.700')}
              p={4}
              borderRadius="md"
              alignItems="center"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
              onClick={() => console.log(`Product ${product.id} clicked!`)}
            >
              <Image src={product.image} alt={product.name} boxSize="100px" objectFit="contain" mr={4} />
              <Box>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>${product.price.toFixed(2)}</Text>
              </Box>
              <Box flex={1} />
              <Button colorScheme="blue">Details</Button>
            </Flex>
          ))}
        </Stack>
      </Box>
    );
  };
  
  export default ProductList;
  