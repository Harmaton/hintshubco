"use client"

import { useAppSelector } from '@/app/hooks/hooks';
import { Box, Flex, Image, Text, Button, Stack, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const ProductList = () => {
  
  const products = useAppSelector(state => state.products)

  return (
    <Box>
      <Heading mb={6}>Our Products</Heading>
      <Stack spacing={4}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
              <Flex
                bg={'gray.400'}
                p={4}
                borderRadius="md"
                alignItems="center"
                cursor="pointer"
                transition="all 0.2s"
                onClick={() => console.log(`Product ${product.id} clicked!`)}
              >
                <Image src={product.image} alt={product.name} boxSize="180px" objectFit="contain" mr={4} />
                <Box>
                  <Text fontWeight="bold">{product.name}</Text>
                  <Text>from - Ksh.{product.price.toFixed(2)}</Text>
                </Box>
                <Box flex={1} />
                <Button colorScheme="blue">Details</Button>
              </Flex>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductList;
