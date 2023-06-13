"use client"

import { useAppSelector } from '@/app/hooks/hooks';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box, Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Image,
  Spinner,
  IconButton,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { MdCheckCircle, MdLocalShipping } from 'react-icons/md';


type Props = {
  params: { productId: string }
}

export default function Simple({ params: { productId } }: Props) {
  // Retrieve the 'products' array from the Redux store
  const products = useAppSelector((state) => state.products);

  // Find the product with the matching ID
  const product = products.find((item) => item.id === productId);
  const router = useRouter()

  const priceText = useColorModeValue('gray.900', 'gray.400')
  const buttonBg = useColorModeValue('gray.900', 'gray.50')
  const buttonColor = useColorModeValue('white', 'gray.900')
  const productDetailsColor = useColorModeValue('yellow.500', 'yellow.300')
  const featuresColor = useColorModeValue('yellow.500', 'yellow.300')
  const lorem2 = useColorModeValue('gray.500', 'gray.400')
  const lorem1 = useColorModeValue('gray.200', 'gray.600')
  const listItemColor = useColorModeValue("green.700", "green.300");

  // Ensure that 'product' is defined before rendering
  if (!product) {
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <Heading size={"lg"} className="animate-bounce" color={buttonColor}>
          Loading...
        </Heading>
        <Spinner size='xl' color={buttonColor} />
      </div>
    </div>
  }

  return (
    <Box>
      <div
        className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-4 py-2 md:py-4"
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={`${product!.image}`}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 4, md: 6 }}>
          <div className='w-20'>
            <IconButton
              aria-label='Search database'
              variant={"ghost"}
              colorScheme='gray'
              color={buttonColor}
              rounded={"full"}
              size={"lg"}
              bg={"gray.600"}
              _hover={{
                bg: "gray.500",
                transform: "scale(1.05)",
                transition: "all .4s ease-in-out"
              }}
              icon={<ArrowBackIcon className='h-8 w-10 text-zinc-100' />}
              onClick={() => router.push("/")}
            />
          </div>

          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {`${product!.name}`}
            </Heading>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={lorem1}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                {product!.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={featuresColor}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Categories
              </Text>

              <List spacing={3} my={3}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  {(product?.services ?? []).map((service) => (
                    <ListItem key={service.id}>
                      <ListIcon as={MdCheckCircle} color={listItemColor} />
                      {service.name}
                    </ListItem>
                  ))}
                  {!product?.services && (
                    <ListItem>
                      <Text fontSize="md">No services available.</Text>
                    </ListItem>
                  )}
                </SimpleGrid>
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={productDetailsColor}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Category Details
              </Text>
              <Accordion>
                {(product?.services ?? []).map((service) => (
                  <AccordionItem key={service.id}>
                    <AccordionButton display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                      <Text fontSize="lg" fontWeight={"bold"}>
                        {service.name}
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Text fontSize="md" mx="3" fontWeight={"medium"}>{service.description}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
                {!product?.services && (
                  <Box>
                    <Text fontSize="md">No services available.</Text>
                  </Box>
                )}
              </Accordion>
            </Box>
          </Stack>
          <Stack display={"flex"} flexDirection={"row"} alignItems="center" justifyContent={"space-between"} width={"full"}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
              <MdLocalShipping />
              <Text mx="3">2-3 business days delivery</Text>
            </Box>
            <Stat alignSelf={"flex-end"}>
              <StatNumber color={priceText}>{`Ksh ${product!.price}`}</StatNumber>
            </Stat>
          </Stack>
          <Button
            rounded={'full'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={buttonBg}
            color={buttonColor}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Complete Order.
          </Button>
        </Stack>
      </div>
    </Box>
  );
}