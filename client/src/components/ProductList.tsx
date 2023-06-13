"use client"

import { useAppSelector } from '@/app/hooks/hooks';
import { Box, Flex, Image, Text, Button, Stack, Heading, Card, CardBody, List, ListItem, ListIcon, Divider, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';

const ProductList = () => {
  const products = useAppSelector((state) => state.products);
  const priceText = useColorModeValue('gray.900', 'white');
  const buttonBg = useColorModeValue('gray.900', 'gray.50');
  const buttonColor = useColorModeValue('white', 'gray.900');
  const productDetailsColor = useColorModeValue('yellow.500', 'yellow.300');
  const featuresColor = useColorModeValue('yellow.500', 'yellow.300');
  const lorem2 = useColorModeValue('gray.500', 'gray.400');
  const lorem1 = useColorModeValue('gray.200', 'gray.600');
  const listItemColor = useColorModeValue('green.700', 'green.300');

  return (
    <Box>
      <Box maxW={"7xl"} mx={"auto"}>
        <Heading
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}
          color={priceText}
        >
          Our Products
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <Card
                overflow='hidden'
                variant='filled'
                maxW={"sm"}
                mx="3"
                className='min-h-[150px]'
              >
                <Box p={6}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    objectFit='contain'
                    borderRadius="lg"
                  />
                </Box>
                <Stack mt={6} spacing={3}>
                  <CardBody>
                    <Box>
                      <Heading size="lg" fontWeight="bold">
                        {product.name}
                      </Heading>
                      <Box>
                        <Heading size="md" fontWeight="medium" my={3.5}>
                          {product.name} Product Categories
                        </Heading>
                        <List spacing={3} my={3}>
                          {product.services && product.services.length > 0 ? (
                            product.services.map((service) => (
                              <ListItem key={service.id}>
                                <ListIcon as={MdCheckCircle} color={listItemColor} />
                                {service.name}
                              </ListItem>
                            ))
                          ) : (
                            <ListItem>
                              <Text fontSize="md">No services available.</Text>
                            </ListItem>
                          )}
                        </List>
                      </Box>
                      <Divider my={3} />
                      <Flex justifyContent="space-between" alignItems="center">
                        <Stat className='flex justify-between items-center'>
                          <StatLabel>From - Ksh</StatLabel>
                          <StatNumber>
                            <NumericFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Ksh'} />
                          </StatNumber>
                        </Stat>
                        <Button colorScheme="blue">Check us out</Button>
                      </Flex>
                    </Box>
                  </CardBody>
                </Stack>
              </Card>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductList;
