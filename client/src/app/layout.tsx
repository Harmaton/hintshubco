"use client"

import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ChakraProvider>
        <Provider store={store}>
        {children}  
        </Provider>
        </ChakraProvider>
      </body>
    </html>
  )
}

Provider