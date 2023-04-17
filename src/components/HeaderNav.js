import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, HStack, Center } from '@chakra-ui/react'
import Img from 'components/util/Img'
import { motion } from 'framer-motion'
import NineLink from './NineLink'
export default function HeaderNav() {

  return (
    <Box display={{base: 'none', lg:"block"}} pos={'relative'}>
      <Img display={{wide: 'none'}}  dimension={'1280x200'} w='full' h='200px' fit='cover' src='./banner-lg.png' />
      <Img display={{base: 'none', wide: 'block'}} dimension={'1920x200'} w='full' h='200px' fit='cover' src='./banner-hd.png' />

      <Center pos='absolute' inset='0 0 0 0'>
        <Img dimension={'322x126'} maxW={{base: '240px'}} src='./tg.png' />
      </Center>

      <Box opacity='.6' pos='absolute' h='80px' inset='auto 0 0 0' bg='linear-gradient(to bottom, transparent 0%, black 100%)'/>


      <Box pos='absolute' bottom='8px' left='0' right='0' color='white'>
        <HStack justifyContent={'center'} gap='30px'>
          <NineLink href='https://9now.nine.com.au/travel-guides/latest' textDecor='none' _hover={{textDecor: 'none', opacity: .8,}}>Latest</NineLink>
          <NineLink href='https://9now.nine.com.au/travel-guides/the-guides' textDecor='none' _hover={{textDecor: 'none', opacity: .8,}}>The Guides</NineLink>
          <NineLink href='https://9now.nine.com.au/travel-guides/videos' textDecor='none' _hover={{textDecor: 'none', opacity: .8,}}>Video</NineLink>
          <NineLink href='https://www.9now.com.au/travel-guides?onm=nine.com.au-9now-a854-showstravelguides' textDecor='none' _hover={{textDecor: 'none', opacity: .8,}}>Episodes</NineLink>
          <NineLink href='https://9now.nine.com.au/travel-guides/suppliers' textDecor='none' _hover={{textDecor: 'none', opacity: .8,}}>Suppliers</NineLink>
        </HStack>
      </Box>
    </Box>
  )
}

