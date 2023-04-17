import React from 'react'
import {
  Button,
  Flex,
  Box,
  VStack,
  Stack,
  Text,
  Center,
  AspectRatio,
  HStack,
  Grid
} from '@chakra-ui/react';
import { mock } from 'utils/common';
import Container from './util/Container';
import Img from './util/Img';
import { motion } from 'framer-motion';
import { useResponsive } from 'utils/common';
import { handleClickScroll } from 'utils/common';

export default function Hero() {

  const isDesktop = useResponsive('up', 'd')
  return (
    <Box pos={'relative'} overflow='hidden'>
      <motion.div animate={isDesktop ? { scale: 1.5, transition: { duration: 2.4 } } : {}}>
        <AspectRatio minH={{d: '750px', wide: '850px'}} ratio={{base: 375/634, md: 3/2.25, d: 1920/850}}>
          <Img dimension='1920x842' src='./hero.jpg' alt='couple spending a lovely holiday' />
        </AspectRatio>
      </motion.div>

      {/* mask */}
      <Box display={{d: 'none'}} opacity='.44' pos='absolute' inset='0' bg='linear-gradient(180deg, rgba(0,0,0,0.76) 0%, rgba(84,84,84,1) 100%, rgba(0,0,0,0.86) 100%)'/>

      <Box zIndex={1} pos='absolute' inset='0' px={{base: '20px'}} pt={{lg: '30px', d:'45px', wide: '30px'}} display={'flex'} alignItems='flex-start' justifyContent={'center'}>
        <Grid>
          <HStack as={motion.div} justifyContent='center' gap={{d: '7px'}}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0, transition: {duration: 1.75}}}
          >
            <Box sx={{ svg: {maxW: {base: '101px', d:'188px'}} }}>
              <svg id="Group_21" data-name="Group 21" width="188.845" height="59.098" viewBox="0 0 188.845 59.098">
                <defs>
                  <clipPath id="clip-path1">
                    <rect id="Rectangle_54" data-name="Rectangle 54" width="188.845" height="59.098" fill="#fff"/>
                  </clipPath>
                </defs>
                <g id="Group_20" data-name="Group 20" clip-path="url(#clip-path1)">
                  <path id="Path_332" data-name="Path 332" d="M11.1,56.995c.584-.125.613-.42.065-.657l-1.81-.78a1.018,1.018,0,0,1-.512-1.4L9.718,52.4c.267-.535.052-.743-.475-.464L7.5,52.86a1.025,1.025,0,0,1-1.418-.476l-.829-1.778c-.252-.541-.55-.5-.662.082l-.368,1.93a1.025,1.025,0,0,1-1.258.811l-1.9-.461c-.58-.14-.736.114-.345.566L2,55.016A1.018,1.018,0,0,1,1.852,56.5L.3,57.7c-.472.365-.371.645.226.621L2.5,58.247A1.021,1.021,0,0,1,3.564,59.29l-.028,1.963c-.008.6.275.693.631.213l1.168-1.578A1.03,1.03,0,0,1,6.822,59.7l1.522,1.24c.463.377.714.214.558-.362l-.513-1.9a1.021,1.021,0,0,1,.778-1.275Z" transform="translate(0 -30.992)" fill="#fff"/>
                  <path id="Path_333" data-name="Path 333" d="M136.483,5.6v6.2h-4.573V10.167h-1.633V23.222h1.633v4.569h-9.146V23.222H124.4V10.167h-1.634V11.8h-4.572V5.6Z" transform="translate(-72.934 -3.455)" fill="#fff"/>
                  <path id="Path_334" data-name="Path 334" d="M200.749,16.858h-3.037l1.6-6.038h.033Zm-18.582-4.08a2.279,2.279,0,0,1-2.45,2.611H176.45V10.167h3.267a2.279,2.279,0,0,1,2.45,2.611m28.251,15.013V23.222h-1.8L203.395,5.6H192.126v4.569h2.025l-3.92,13.055h-2.055l-3.56-4.243c2.286-.979,3.593-3.3,3.593-6.2,0-4.733-2.94-7.18-7.839-7.18H168.938v4.569h1.633V23.222h-1.633v4.569h7.513V19.958h1.7l6.229,7.833h13.3V23.222h-1.731l.588-2.121h5.226l.457,2.121h-1.6v4.569Z" transform="translate(-104.249 -3.454)" fill="#fff"/>
                  <path id="Path_335" data-name="Path 335" d="M301.312,21.59v1.632H295.76V18.653h5.552V14.084H295.76V10.167h5.552V11.8h4.574V5.6H279.431v4.569h1.8l-2.941,11.749h-.032l-3.233-11.749h1.8V5.6h-9.8v4.569h1.535l5.651,17.787h7.513l5.487-17.787h2.675V23.222h-1.634v4.569h17.639v-6.2Z" transform="translate(-164.774 -3.455)" fill="#fff"/>
                  <path id="Path_336" data-name="Path 336" d="M388.81,21.59v6.2H371.5V23.222h1.633V10.167H371.5V5.6h9.146v4.569h-1.633V23.222h5.226V21.59Z" transform="translate(-229.246 -3.455)" fill="#fff"/>
                  <path id="Path_337" data-name="Path 337" d="M368.188,85.13V89.7h-9.146V85.13h1.634V83.172l-5.522-11.1h-1.992V67.506h10.126v4.569h-1.894l2.678,5.712h.065l2.646-5.712H364.92V67.506h9.147v4.569h-1.7l-5.814,11.1V85.13Z" transform="translate(-217.931 -41.657)" fill="#fff"/>
                  <path id="Path_338" data-name="Path 338" d="M284.392,73.707v-6.2H258.428v12.4h-.066l-7.448-12.4h-7.349v4.569H245.2V85.13h-1.633V89.7h7.023V78.114h.065l7.12,11.586h6.043V72.075h4.569V85.13h-1.634V89.7h17.639V83.5H279.82V85.13h-5.554V80.561h5.554V75.993h-5.554V72.075h5.554v1.632Z" transform="translate(-150.302 -41.657)" fill="#fff"/>
                  <path id="Path_339" data-name="Path 339" d="M195.19,77.914c0,4.079.653,7.016,4.082,7.016s4.083-2.937,4.083-7.016-.654-6.691-4.083-6.691-4.082,2.611-4.082,6.691m-6.207,0c0-6.365,2.287-11.26,10.289-11.26s10.289,4.9,10.289,11.26S207.275,89.5,199.272,89.5s-10.289-5.222-10.289-11.586" transform="translate(-116.619 -41.131)" fill="#fff"/>
                  <path id="Path_340" data-name="Path 340" d="M144.976,67.507v4.569h-1.633V85.13h1.633V89.7h-7.512V77.95H137.4L133.445,89.7h-3.724L125.279,77.95h-.064V89.7h-7.023V85.13h1.632V72.075h-1.632V67.507h8.819l4.9,12.4h.065l4.344-12.4Z" transform="translate(-72.935 -41.657)" fill="#fff"/>
                  <path id="Path_341" data-name="Path 341" d="M436.406,86.139a1.373,1.373,0,0,0-1.374-.868,3.376,3.376,0,0,0-1.142.235c-2.75,1-5.026,1.946-6.856,2.709-1.15.479-2.259.942-3.02,1.206q.08-.116.179-.253c.726-1,1.914-2.5,3.292-4.247,4.613-5.838,8.17-10.451,8.528-12.31a1.851,1.851,0,0,0-.339-1.6,2.652,2.652,0,0,0-2.144-.765c-2.745,0-8,2.032-10.8,3.758a17.148,17.148,0,0,0-1.063-6.822,5.609,5.609,0,0,0-5.1-3.7,5.673,5.673,0,0,0-2.908.836c-2.219,1.311-3.915,4.023-5.111,6.616a1.692,1.692,0,0,0-1.525-1.067,1.885,1.885,0,0,0-.96.286,5.542,5.542,0,0,0-1.949,2.736c-1.772,4.281-4.369,14.185-1.513,21.031,1.154,2.767,3.186,4.353,5.576,4.353a6.474,6.474,0,0,0,3.3-.984c5.689-3.36,9.662-11.6,10.871-19.167a2.506,2.506,0,0,0,1-.305,42.194,42.194,0,0,1,7.55-3.369c-.43.566-1.171,1.535-1.988,2.6-2.6,3.4-6.531,8.526-8.324,11-1.644,2.293-1.975,2.943-2.086,3.623a2.846,2.846,0,0,0,.459,2.148,1.712,1.712,0,0,0,1.288.636l.109,0c2.574,0,13.811-4.4,14.973-5.425a2.989,2.989,0,0,0,1.078-2.894M407.3,81.6a1.136,1.136,0,0,0,.576-.153c.607-.36.847-1.121,1.179-2.175.141-.446.3-.953.512-1.508.971-2.683,2.991-8.269,5.485-9.741a1.659,1.659,0,0,1,.847-.248,1.848,1.848,0,0,1,1.614,1.159c2.548,6.105-1.379,20.844-7.764,24.617a2.189,2.189,0,0,1-1.1.343,2.419,2.419,0,0,1-1.977-1.685,20.786,20.786,0,0,1-.941-7.8,21.43,21.43,0,0,1,.523-3.3,1.409,1.409,0,0,0,1.048.5" transform="translate(-247.658 -39.173)" fill="#fff"/>
                  <path id="Path_342" data-name="Path 342" d="M51.973,6.773c.584-.126.613-.424.065-.662l-1.8-.784a1.02,1.02,0,0,1-.51-1.4L50.6,2.175c.267-.534.053-.743-.475-.465l-1.741.917a1.03,1.03,0,0,1-1.422-.476L46.129.382c-.254-.54-.553-.5-.664.084L45.1,2.384a1.028,1.028,0,0,1-1.258.814L41.93,2.739c-.58-.139-.736.117-.345.568l1.28,1.478a1.02,1.02,0,0,1-.147,1.486L41.165,7.477c-.472.366-.37.647.227.625l1.96-.074a1.027,1.027,0,0,1,1.073,1.045L44.4,11.03c-.007.6.278.692.633.212L46.2,9.661a1.028,1.028,0,0,1,1.486-.188l1.528,1.244c.463.377.715.214.56-.363l-.508-1.889a1.025,1.025,0,0,1,.779-1.277Z" transform="translate(-25.219 0)" fill="#fff"/>
                  <path id="Path_343" data-name="Path 343" d="M65.6,115.078c.584-.125.613-.422.066-.659l-1.8-.783a1.02,1.02,0,0,1-.51-1.4l.875-1.75c.267-.534.054-.743-.474-.464l-1.743.919a1.029,1.029,0,0,1-1.421-.476l-.834-1.777c-.253-.54-.552-.5-.662.084l-.363,1.926a1.026,1.026,0,0,1-1.257.814l-1.918-.459c-.58-.139-.736.116-.345.568l1.28,1.479a1.02,1.02,0,0,1-.147,1.486l-1.551,1.2c-.471.366-.37.646.227.623l1.959-.076a1.025,1.025,0,0,1,1.073,1.043l-.022,1.957c-.007.6.278.692.633.212l1.167-1.58a1.028,1.028,0,0,1,1.486-.188l1.53,1.246c.463.377.715.214.56-.363l-.509-1.892a1.023,1.023,0,0,1,.779-1.275Z" transform="translate(-33.627 -66.831)" fill="#fff"/>
                  <path id="Path_344" data-name="Path 344" d="M86.013,68.256c.2-.221.122-.388-.176-.372l-1.147.061a.95.95,0,0,1-.805-.446l-.56-1.01c-.145-.261-.326-.239-.4.05l-.3,1.123a.958.958,0,0,1-.671.632l-1.127.228c-.293.059-.328.242-.078.405l.97.636a.967.967,0,0,1,.392.837l-.133,1.157c-.034.3.126.384.357.195l.886-.728a.947.947,0,0,1,.912-.116l1.041.483c.271.126.405,0,.3-.279l-.415-1.087a.967.967,0,0,1,.172-.908Z" transform="translate(-49.725 -40.917)" fill="#fff"/>
                  <path id="Path_345" data-name="Path 345" d="M100.011,34.259c.584-.126.613-.423.065-.659l-1.813-.783a1.021,1.021,0,0,1-.513-1.4l.875-1.762c.265-.535.051-.744-.477-.464l-1.739.921a1.023,1.023,0,0,1-1.417-.476l-.824-1.77c-.252-.541-.549-.5-.661.082l-.365,1.92a1.027,1.027,0,0,1-1.258.812l-1.917-.461c-.58-.139-.736.116-.346.567l1.292,1.5a1.02,1.02,0,0,1-.149,1.485l-1.559,1.205c-.472.365-.371.646.226.623l1.979-.075a1.021,1.021,0,0,1,1.069,1.044l-.028,1.947c-.008.6.275.692.629.212l1.163-1.575a1.024,1.024,0,0,1,1.484-.185L97.239,38.2c.462.378.713.216.558-.36l-.506-1.883a1.025,1.025,0,0,1,.78-1.277Z" transform="translate(-54.864 -16.956)" fill="#fff"/>
                </g>
              </svg>
            </Box>

            <Box w='1px' h={{base: '35px', d: '52px'}} bg='white' />

            <Img maxW={{base: '87px', d: '161px'}} dimension='161x63' src='./tg.png' alt='travel guide logo' />
          </HStack>

          <motion.div
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0, transition: {duration: 1.75}}}
          >
            <Img mt={{base: '10px', sm:"33px"}} maxW={{sm: '330px', wide:"589px"}} mx='auto' dimension='589x240' src='./win.png' alt='win logo' />
          </motion.div>

          <Box color={{base: 'white', d:'black'}} textAlign='center'>
            <Text as={motion.h1} my={{base: '10px'}} {...texts.title}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0, transition: {duration: 1.75}}}
            >
              a $20,000 holiday!
            </Text>

            <Text as={motion.p} {...texts.subtitle} maxW={{base: '335px', wide:'589px'}} mx='auto'
            initial={{opacity: 0, y: 150}}
            animate={{opacity: 1, y: 0, transition: {duration: 1.75}}}
            >You could be off on your dream holiday brought to you by Travel Money Oz - the leading foreign exchange service by travellers, for travellers. Wherever your travels take you, Travel Money Oz has the foreign currency you’ll need for your holiday.</Text>
          </Box>

          <Button as={motion.button} justifySelf={'center'} mt={{base:"33px!important"}}
           initial={{opacity: 0, y: 150}}
           animate={{opacity: 1, y: 0, transition: {duration: 1.75}}}
           onClick={handleClickScroll}
          >Enter Here</Button>
        </Grid>
      </Box>
    </Box>

  )
}

const texts = {
  title: {
    textTransform: 'uppercase',
    fontFamily: 'prelo',
    fontSize: {base:'30px' , sm: '36px', wide:'62px'},
    lineHeight: {base:'50px', sm: '54px', wide: '94px'},
    letterSpacing: {base: '0.54px'},
  },
  subtitle: {
    fontFamily: 'prelo',
    fontSize: {base:'12px', sm: '14px', wide:'16px'},
    lineHeight: {base:'15px', sm: '18px', wide:'24px'},
  }
}
