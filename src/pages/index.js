
// chakra
import { Box } from "@chakra-ui/react"
//
import Layout from "components/util/Layout"
import Hero from "components/Hero"
import Form from "components/Form/Form"
import Img from "components/util/Img"
import Masthead from "components/Masthead"

export default function Home() {
  return (
    <Layout>
      <Masthead />

      <Hero />

      <Box pos='relative' id='intro' h={{d: '1080px'}} >
        <Img display={{base: 'none', d:'block'}} dimension='1920x1080' src='./form-bg.jpg' alt='form-bg' fit='cover' w='full' h='full' />

        <Box pos={{d: 'absolute'}}  inset='0 0 0 0' display={{d: 'flex'}} justifyContent='center' alignItems='center'>
          <Form />
        </Box>
      </Box>
    </Layout>
  )
}
