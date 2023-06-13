/* eslint-disable react/no-unescaped-entities */
"use client"

import { Accordion, Heading, AccordionItem, Box, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

function FAQAccordion() {
  return (
    <Box
      m={"20"}
    >
      <Box maxW={"7xl"} mx={"auto"}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          fontWeight={"semibold"}
          // eslint-disable-next-line react/no-unescaped-entities
          mb={5}>
          FAQ's
        </Heading>
        <Accordion allowMultiple rounded="md">
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Our return policy lasts 30 days from the date of purchase. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I track my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              To track your order, please visit our website and log in to your account. You will be able to view your order status and tracking information there.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I contact customer support?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              You can contact our customer support team by emailing support@yourwebsite.com or by calling 1-800-555-1234. Our team is available 24/7 to assist you with any questions or concerns you may have.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

    </Box>
  )
}

export default FAQAccordion;
