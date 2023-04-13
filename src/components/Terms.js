import React from 'react'
import { Text } from '@chakra-ui/react'
import NineLink from './NineLink'
import Container from './util/Container'

export default function Terms() {
  return (
    <Container maxW='750px' mt="40px">
      <Text {...texts.terms}>
        At the time of entry, entrants can also opt-in to receive marketing and promotional material from Travel Money Oz, ABN 46 121 451 723. By opting-in, entrants agree that their PI will be collected and handled by Travel Money Oz and will be subject to their privacy policy which can be viewed at <NineLink href='#' textDecor='underline'>travelmoneyoz.com/privacy-policy</NineLink>
      </Text>
    </Container>
  )
}

const texts = {
  terms: {
    textAlign: 'left',
    fontSize: '10px'
  }
}
