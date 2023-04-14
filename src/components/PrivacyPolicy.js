import React from 'react'
import { Text } from '@chakra-ui/react'
import NineLink from './NineLink'
import Container from './util/Container'

export default function PrivacyPolicy() {
  return (
    <Container maxW='443px'>
      <Text {...texts.terms}>
      At the time of entry, entrants can also opt-in to receive marketing and promotional material from Travel Money Oz, ABN 46 121 451 723. By opting-in, entrants agree that their PI will be collected and handled by Travel Money Oz and will be subject to their privacy policy which can be viewed at <NineLink href='https://www.travelmoneyoz.com/privacy-policy'>travelmoneyoz.com/privacy-policy</NineLink>
      </Text>
    </Container>
  )
}

const texts = {
  terms: {
    fontFamily: 'book',
    color: '#414040',
    fontSize: { base: '10px', },
    letterSpacing: '-0.2px',
    lineHeight: { base: '12px', },
  }
}
