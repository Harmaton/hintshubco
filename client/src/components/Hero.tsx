/* eslint-disable react/no-unescaped-entities */
"use client"

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    Box,
    Input,
    useBreakpointValue,
  } from '@chakra-ui/react';
  

  export default function Hero() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              We Deliver
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Goods and Services
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
             Schedule a Delivery
            </Button>
            <Button rounded={'full'}>Track your Delivery</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'delivery Image'}
          objectFit={'cover'}
          src={
            '/hintshubbackdellist.jpeg'
          }
        />
      </Flex>
    </Stack>
    );
  }
  