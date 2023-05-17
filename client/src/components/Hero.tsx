/* eslint-disable react/no-unescaped-entities */
"use client"

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    VStack,
    Box,
    Input,
    useBreakpointValue,
    useDisclosure
    
    
  } from '@chakra-ui/react';
  import {useState} from 'react'
  

  export default function Hero() {
    const [deliveryRequest, setDeliveryRequest] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = () => {
      // Perform any necessary actions with the deliveryRequest value
      console.log('Delivery Request:', deliveryRequest);
    
      // Close the modal
      onClose();
    };
    


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
              Hints.Hub Companies,
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              We Deliver 🔥 
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
              }}
              onClick={onOpen}
              >
             Schedule a Delivery
            </Button>
            
            <Button rounded={'full'}
             bg={'yellow.400'}
             color={'white'}
             _hover={{
               bg: 'blue.100',
             }}
             onClick={onOpen}
            >Track your Delivery</Button>
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
          {/* Modal form */}
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Schedule a Delivery</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Delivery Request</FormLabel>
            <Input
              type="text"
              value={deliveryRequest}
              onChange={(e) => setDeliveryRequest(e.target.value)}
              placeholder="Enter your delivery request"
            />
            
            <Input
              type="text"
              value={deliveryRequest}
              onChange={(e) => setDeliveryRequest(e.target.value)}
              placeholder="Enter your delivery request"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Send
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
      
    </Stack>
    );
  }
  