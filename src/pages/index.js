
// chakra
import { Box } from "@chakra-ui/react"
//
import Layout from "components/util/Layout"
import Hero from "components/Hero"
import Form from "components/Form/Form"
import { Center } from "@chakra-ui/react"
import Img from "components/util/Img"

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Box pos='relative' id='intro' minH={'100vh'} h={{d: '1080px'}} >
        <Img display={{base: 'none', d:'block'}} dimension='1920x1080' src='./form-bg.jpg' alt='form-bg' fit='cover' w='full' h='full' />

        <Box pos={{d: 'absolute'}}  inset='0 0 0 0' display={{d: 'flex'}} justifyContent='center' alignItems='center'>
          <Form />
        </Box>
      </Box>
    </Layout>
  )
}
