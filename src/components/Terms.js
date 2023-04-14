import React from 'react'
import { Text } from '@chakra-ui/react'
import NineLink from './NineLink'
import Container from './util/Container'

export default function Terms() {
  return (
    <Container maxW='570px' pt={{base: "34px"}}>
      <Text {...texts.terms}>
      <NineLink href='https://brandedcontent.nine.com.au/wp-content/uploads/2023/04/Travel-Guides-Win-a-20k-Holiday-Pack-Competition-Final-TCs.docx.pdf'>Conditions</NineLink> apply, see <NineLink href='https://9now.nine.com.au/travel-guides'>www.nine.com.au/travelguides</NineLink>. AU residents 18+. Entries close 11:59pm AEST 16/06/23 . Limit 1 entry per person. Draw 12pm AEST 19/06/23 at 5/210 Central Coast Highway, Erina, NSW 2250. Winners published on website 21/06/23. Prizes: $10K AUD Travel Money Oz Currency Pass & $10K AUD Flight Centre Aus Gift Card.
      ACT: TP23/ 00621; NSW: TP/01749; SA: T23/ 449
      </Text>
    </Container>
  )
}

const texts = {
  terms: {
    fontFamily: 'book',
    color: '#414040',
    fontSize: { base: '10px' },
    letterSpacing: '-0.2px',
    lineHeight: { base: '12px', },
  }
}
