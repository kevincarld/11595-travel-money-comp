// chakra
import { Box } from "@chakra-ui/react"
//
import Layout from "components/util/Layout"
import Hero from "components/Hero"
import Form from "components/Form/Form"
import Img from "components/util/Img"
import Masthead from "components/Masthead"
import HeaderNav from "components/HeaderNav"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Layout>
      <Masthead />
      <HeaderNav />

      <Hero />

      <Box pos='relative' id='intro' h={{d: '1080px'}} overflow='hidden' >
        <Img as={motion.img} display={{base: 'none', d:'block'}} dimension='1920x1080' src='./form-bg.jpg' alt='form-bg' fit='cover' w='full' h='full'
          initial={{scale: 1.15}}
          whileInView={{scale: 1, transition: {duration: 1}}}
          viewport={{once: true, margin: '0px 0px -100px 0px'}}
          />

        <Box pos={{d: 'absolute'}}  inset='0 0 0 0' display={{d: 'flex'}} justifyContent='center' alignItems='center'>
          <Form />
          <Box
            // hidden
            id="recaptcha"
            className="g-recaptcha"
            data-sitekey="6LcmPUAUAAAAAMjQoABDjyGQkH46afELBYthy7VH"
            data-callback="onTokenVerified"
            data-error-callback='onTokenError'
            data-expires-callback='onTokenExpired'
            data-size="invisible"
          />
        </Box>
      </Box>
    </Layout>
  )
}
