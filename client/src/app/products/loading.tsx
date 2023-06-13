"use client"

import { Heading, Spinner } from "@chakra-ui/react"

export default function loading() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600">
    <div className="flex justify-center items-center flex-col">  
        <Heading size={"lg"} className="animate-bounce">
                Loading...
        </Heading>
        <Spinner size='xl' /></div>  
    </div>
  )
}
