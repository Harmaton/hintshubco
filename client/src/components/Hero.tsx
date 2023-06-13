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
import { ChangeEvent, useState } from 'react'


type FormValues = {
  fullname: string;
  phone: string;
  location: string;
  deliveryRequest: string;
};

export default function Hero() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [deliveryRequest, setDeliveryRequest] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: trackOpen, onOpen: onTrackOpen, onClose: onTrackClose } = useDisclosure();

  const handleSubmit = () => {
    // Perform any necessary actions with the form data
    console.log('Full Name:', fullname);
    console.log('Phone Number:', phone);
    console.log('Location:', location);
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
              We Deliver ...
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
      <Flex flex={1} className='p-5'>
        <Image
          alt={'delivery Image'}
          objectFit={'cover'}
          src={
            '/hintshubbackdellist.jpeg'
          }
          className=''
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Schedule a Delivery</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <Input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Full Name"
              />

              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <Input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />

              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />

              <FormLabel htmlFor="deliveryRequest">Delivery Request</FormLabel>
              <Input
                type="text"
                id="deliveryRequest"
                value={deliveryRequest}
                onChange={(e) => setDeliveryRequest(e.target.value)}
                placeholder="Delivery Request"
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
