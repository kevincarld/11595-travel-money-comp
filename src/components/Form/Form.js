import React from 'react'
// chakra
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Grid,
  Spinner,
  InputRightElement,
  IconButton,
  InputGroup,
  HStack
} from '@chakra-ui/react';
// formik
import { Formik, Form, Field } from 'formik';
//
import { Select } from 'chakra-react-select';
import Container from '../util/Container';
import { isFieldError, isFieldTouched, validateCheckboxTrue, checkInvalidFields } from 'utils/common';
import { initialFormValues, validationSchema } from './util/schema';
import Thankyou from './Thankyou';
import Terms from "components/Terms"
import PrivacyPolicy from 'components/PrivacyPolicy';
import Img from 'components/util/Img';
import NineLink from 'components/NineLink';
import { motion } from 'framer-motion';

export default function FormComponent() {
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const formikRef = React.useRef(null)

  const handleValidationAndToken = async (formik) => {
    formik.setSubmitting(true)

    const isAccepted = validateCheckboxTrue(formik, 'ACCEPTANCE', 'Please click this checkbox to accept the terms and conditions.')
    if(isAccepted && formik.isValid && formik.dirty) {
      window?.grecaptcha?.execute()
    } else {
      formik.setSubmitting(false)
    }

  }

  //TODO: add onerror function for recaptcha
  // MAIN FORM SUBMISSION HANDLER
  React.useEffect(() => {

      window.submitFormik = async function(googleToken) {
        const formik = formikRef.current

        // TODO: (DEBUG) remove this later on when there's already an api endpoint set to post form values to
        // setTimeout(() => {
        //   const { values } = formik
        //   const firstname = values['FIRST_NAME']
        //   const lastname = values['LAST_NAME']
        //   console.log(googleToken)
        //   window.alert(JSON.stringify(values, null, 2))
        //   formik.setSubmitting(false)
        //   setFormSubmitted(true)
        // }, 1000)
        console.log(JSON.stringify({...formik.values, googleToken}, null, 2))

        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            email: 'morpheus',
            job: 'leader'
          }),
        };

        fetch('https://reqres.in/api/users', config)
          .then((data) => data.json())
          .then((json) => {
            console.log('success', json);

            setFormSubmitted(true)
            formik.setSubmitting(false)

            // window?.grecaptcha?.execute()
            // if (json.success) {
            //   setFormSubmitted(true)
            //   formik.setSubmitting(false)
            // } else {
            //   // TODO: show error
            // window?.grecaptcha?.execute()
            // }
          })
          .catch((err) => {
            console.warn(err);
            window?.grecaptcha?.execute()
          });

      }

      window.tokenReset = function() {
        const formik = formikRef.current
        formik.setSubmitting(false)
        window?.grecaptcha?.execute()
      }
  }, [formikRef])

  return (

    <Box pos='relative' sx={{...formStyles}}>
      <motion.div animate={ formSubmitted ? { opacity: 0, y: '-100%', transition: {duration: 1.2}} : {} }>
        <Formik
          innerRef={formikRef}
          initialValues={initialFormValues}
          // TODO: uncomment validationSchema when there's already an api endpoint set to post form values to
          // validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // move responsibility to window.submitFormik
            return false
          }}
          >

          {(formik) => {
            const invalidFields = checkInvalidFields(formik, ['FIRST_NAME', 'LAST_NAME', 'EMAIL_ADDRESS', 'MOBILE', 'STATE', 'POSTCODE'])

            return(
              <Box bg='white' w={{d: '756px'}} py={{base: '40px', d: '70px'}} boxShadow={{d: '0 10px 30px rgba(0,0,0,.26)'}}>
                <HStack justifyContent='center' mb={{base: '20px'}} gap={{d: '5px'}}>
                  <Box sx={{ svg: {maxW: {base: '101px', d: '152px'}} }}>
                    <svg id="Group_21" data-name="Group 21" width="152.744" height="47.8" viewBox="0 0 152.744 47.8">
                      <defs>
                        <clipPath id="clip-path2">
                          <rect id="Rectangle_54" data-name="Rectangle 54" width="152.744" height="47.8"/>
                        </clipPath>
                      </defs>
                      <g id="Group_20" data-name="Group 20" clip-path="url(#clip-path2)">
                        <path id="Path_332" data-name="Path 332" d="M8.98,55.7c.472-.1.5-.34.052-.531l-1.464-.631A.823.823,0,0,1,7.154,53.4l.706-1.417c.216-.432.042-.6-.384-.375l-1.405.744a.829.829,0,0,1-1.147-.385l-.671-1.438c-.2-.438-.445-.408-.535.067l-.3,1.561a.829.829,0,0,1-1.017.656l-1.54-.373c-.47-.113-.595.093-.279.458l1.036,1.2a.823.823,0,0,1-.12,1.2L.24,56.272c-.382.3-.3.522.183.5l1.6-.062a.826.826,0,0,1,.865.844L2.86,59.144c-.007.483.223.561.51.173l.945-1.276a.833.833,0,0,1,1.2-.151l1.231,1c.374.305.577.173.451-.293l-.415-1.533a.826.826,0,0,1,.629-1.031Z" transform="translate(0 -34.669)"/>
                        <path id="Path_333" data-name="Path 333" d="M132.986,5.6v5.015h-3.7V9.294h-1.321V19.853h1.321v3.7h-7.4v-3.7h1.321V9.294h-1.321v1.32h-3.7V5.6Z" transform="translate(-81.586 -3.864)"/>
                        <path id="Path_334" data-name="Path 334" d="M194.668,14.705h-2.457l1.294-4.884h.027Zm-15.03-3.3a1.844,1.844,0,0,1-1.982,2.112h-2.642V9.294h2.642a1.844,1.844,0,0,1,1.982,2.112m22.85,12.143v-3.7h-1.453L196.808,5.6h-9.114v3.7h1.638l-3.171,10.559H184.5l-2.879-3.432a5.139,5.139,0,0,0,2.906-5.015c0-3.828-2.378-5.807-6.34-5.807h-9.246v3.7h1.321V19.853h-1.321v3.7h6.077V17.213h1.374l5.038,6.335h10.758v-3.7h-1.4l.475-1.716h4.227l.369,1.716h-1.294v3.7Z" transform="translate(-116.616 -3.864)"/>
                        <path id="Path_335" data-name="Path 335" d="M294.756,18.533v1.32h-4.491v-3.7h4.491v-3.7h-4.491V9.294h4.491v1.32h3.7V5.6h-21.4v3.7h1.454l-2.379,9.5h-.026l-2.615-9.5h1.453V5.6h-7.926v3.7h1.241l4.571,14.387h6.077l4.438-14.387h2.164V19.853h-1.322v3.7h14.267V18.533Z" transform="translate(-184.32 -3.865)"/>
                        <path id="Path_336" data-name="Path 336" d="M385.5,18.533v5.015h-14v-3.7h1.321V9.294H371.5V5.6h7.4v3.7h-1.321V19.853H381.8v-1.32Z" transform="translate(-256.44 -3.865)"/>
                        <path id="Path_337" data-name="Path 337" d="M365.315,81.761v3.7h-7.4v-3.7h1.322V80.177L354.773,71.2h-1.611v-3.7h8.19v3.7H359.82l2.166,4.62h.053l2.14-4.62h-1.506v-3.7h7.4v3.7H368.7l-4.7,8.976v1.583Z" transform="translate(-243.783 -46.599)"/>
                        <path id="Path_338" data-name="Path 338" d="M276.588,72.522V67.507h-21v10.03h-.053l-6.024-10.03h-5.944v3.7h1.321V81.761h-1.321v3.7h5.68V76.086h.053l5.759,9.371h4.888V71.2h3.7V81.761h-1.321v3.7h14.267V80.442h-3.7v1.32H268.4v-3.7h4.492v-3.7H268.4V71.2h4.492v1.32Z" transform="translate(-168.131 -46.599)"/>
                        <path id="Path_339" data-name="Path 339" d="M194,75.761c0,3.3.528,5.675,3.3,5.675s3.3-2.376,3.3-5.675-.529-5.412-3.3-5.412-3.3,2.112-3.3,5.412m-5.02,0c0-5.148,1.85-9.107,8.322-9.107s8.322,3.959,8.322,9.107-1.849,9.371-8.322,9.371-8.322-4.224-8.322-9.371" transform="translate(-130.452 -46.01)"/>
                        <path id="Path_340" data-name="Path 340" d="M139.855,67.507v3.7h-1.321V81.761h1.321v3.7h-6.076v-9.5h-.053l-3.2,9.5h-3.012l-3.593-9.5h-.052v9.5h-5.68v-3.7h1.32V71.2h-1.32v-3.7h7.133l3.963,10.03h.053l3.514-10.03Z" transform="translate(-81.586 -46.599)"/>
                        <path id="Path_341" data-name="Path 341" d="M429.7,81.808a1.11,1.11,0,0,0-1.111-.7,2.73,2.73,0,0,0-.924.19c-2.224.806-4.066,1.574-5.545,2.191-.93.388-1.827.762-2.443.976q.065-.094.145-.2c.587-.808,1.548-2.025,2.662-3.435,3.731-4.722,6.608-8.453,6.9-9.957a1.5,1.5,0,0,0-.274-1.294,2.145,2.145,0,0,0-1.734-.619c-2.22,0-6.469,1.644-8.734,3.04a13.87,13.87,0,0,0-.859-5.518,4.537,4.537,0,0,0-4.122-2.993,4.589,4.589,0,0,0-2.352.676c-1.795,1.06-3.167,3.254-4.134,5.351a1.368,1.368,0,0,0-1.234-.863,1.524,1.524,0,0,0-.776.231,4.483,4.483,0,0,0-1.576,2.213c-1.434,3.463-3.534,11.473-1.224,17.01.933,2.238,2.577,3.521,4.51,3.521a5.236,5.236,0,0,0,2.666-.8c4.6-2.718,7.815-9.382,8.793-15.5a2.027,2.027,0,0,0,.8-.247,34.126,34.126,0,0,1,6.107-2.725c-.348.458-.947,1.241-1.608,2.1-2.1,2.746-5.283,6.9-6.733,8.9-1.33,1.855-1.6,2.38-1.687,2.93a2.3,2.3,0,0,0,.371,1.737,1.385,1.385,0,0,0,1.042.515l.088,0c2.082,0,11.171-3.556,12.111-4.388a2.417,2.417,0,0,0,.872-2.341m-23.54-3.668a.919.919,0,0,0,.466-.124c.491-.291.685-.907.954-1.759.114-.361.242-.771.414-1.219.785-2.17,2.419-6.688,4.437-7.879a1.342,1.342,0,0,1,.685-.2,1.5,1.5,0,0,1,1.305.937c2.061,4.938-1.115,16.859-6.28,19.911a1.771,1.771,0,0,1-.891.277,1.957,1.957,0,0,1-1.6-1.363,16.813,16.813,0,0,1-.761-6.309,17.334,17.334,0,0,1,.423-2.672,1.14,1.14,0,0,0,.848.4" transform="translate(-277.036 -43.82)"/>
                        <path id="Path_342" data-name="Path 342" d="M49.85,5.478c.472-.1.5-.343.053-.535l-1.459-.634a.825.825,0,0,1-.413-1.135l.707-1.414c.216-.432.043-.6-.384-.376l-1.408.742A.833.833,0,0,1,45.8,1.74L45.123.309c-.205-.437-.447-.406-.537.068l-.294,1.551a.832.832,0,0,1-1.017.658l-1.548-.371c-.47-.112-.6.094-.279.46l1.035,1.2a.825.825,0,0,1-.119,1.2l-1.256.975c-.382.3-.3.523.184.505l1.585-.059a.83.83,0,0,1,.868.845l-.017,1.583c-.005.483.225.56.512.172l.943-1.278a.831.831,0,0,1,1.2-.152l1.236,1.006c.374.3.578.173.453-.294l-.411-1.528a.829.829,0,0,1,.63-1.033Z" transform="translate(-28.211 0)"/>
                        <path id="Path_343" data-name="Path 343" d="M63.474,113.783c.472-.1.5-.341.053-.533l-1.458-.633a.825.825,0,0,1-.413-1.135l.708-1.415c.216-.432.043-.6-.384-.376l-1.41.743a.832.832,0,0,1-1.15-.385l-.675-1.438c-.205-.437-.446-.407-.535.068l-.294,1.558a.83.83,0,0,1-1.016.658l-1.551-.371c-.47-.112-.6.094-.279.459l1.036,1.2a.825.825,0,0,1-.119,1.2l-1.255.973c-.381.3-.3.522.184.5L56.5,114.8a.829.829,0,0,1,.868.844l-.018,1.583c-.005.483.225.56.512.171l.944-1.278a.832.832,0,0,1,1.2-.152l1.237,1.008c.374.305.578.173.453-.293l-.412-1.53a.827.827,0,0,1,.63-1.032Z" transform="translate(-37.616 -74.759)"/>
                        <path id="Path_344" data-name="Path 344" d="M84.975,67.884c.163-.178.1-.314-.142-.3l-.928.05a.769.769,0,0,1-.651-.361l-.453-.817c-.117-.211-.264-.193-.326.04l-.242.909a.775.775,0,0,1-.543.511l-.912.184c-.237.048-.265.2-.063.328l.785.514a.782.782,0,0,1,.317.677l-.108.936c-.028.24.1.311.289.157l.717-.589a.766.766,0,0,1,.737-.094l.842.391c.219.1.328,0,.242-.225l-.336-.879a.782.782,0,0,1,.139-.734Z" transform="translate(-55.623 -45.771)"/>
                        <path id="Path_345" data-name="Path 345" d="M97.888,32.963c.472-.1.5-.342.052-.533L96.475,31.8a.826.826,0,0,1-.415-1.135l.708-1.425c.215-.433.041-.6-.386-.376l-1.407.745a.828.828,0,0,1-1.146-.385l-.666-1.432c-.2-.438-.444-.408-.534.067l-.3,1.553a.831.831,0,0,1-1.017.657l-1.55-.373c-.47-.113-.6.094-.28.459l1.045,1.21a.825.825,0,0,1-.12,1.2l-1.261.975c-.382.3-.3.522.183.5l1.6-.061a.826.826,0,0,1,.864.844L91.773,36.4c-.007.483.222.56.509.172l.941-1.274a.828.828,0,0,1,1.2-.15l1.224,1c.374.306.577.175.452-.291l-.409-1.523A.829.829,0,0,1,96.32,33.3Z" transform="translate(-61.372 -18.968)"/>
                      </g>
                    </svg>
                  </Box>

                  <Box w='1px' h={{base: '35px', d:'52px'}} bg='black' />

                  <Img maxW={{base: '87px', d:'132px'}} dimension='161x63' src='./tg.png' alt='travel guide logo' />
                </HStack>

                <Text whiteSpace={{d: 'pre-line'}} textAlign='center' maxW={{base: '334px', d:'482px'}} mx='auto' px={{base: '20px', sm: '0'}} fontFamily='prelo' fontSize={{base: '15px' , sm: '17px', d:'19.5px'}} lineHeight={{base: '22px', sm: '24px'}}>
                  {`Ready to channel your inner Travel Guide?
                  Enter your details below for the chance to win a massive
                  $20,000 holiday - and you could soon be flying away!`}
                </Text>

                <Box maxW='570px' mx='auto' mt='40px' p={{base: '20px', d: 0}} >
                  <Form id='formik'>
                    <Box
                      // hidden
                      id="recaptcha"
                      class="g-recaptcha"
                      data-sitekey="6LcmPUAUAAAAAMjQoABDjyGQkH46afELBYthy7VH"
                      data-callback="onTokenVerified"
                      data-error-callback='onTokenError'
                      data-expires-callback='onTokenExpired'
                      data-size="invisible"
                    />


                    <Stack spacing={4}>
                      <Flex flexDir={{base: 'column', d: 'row'}} gap={{base: '15px'}}>
                        <FormControl id="FIRST_NAME" isInvalid={invalidFields['FIRST_NAME']}>
                          <FormLabel htmlFor={`FIRST_NAME`}>First Name*</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            id="FIRST_NAME"
                            name="FIRST_NAME"
                          />
                          {invalidFields['FIRST_NAME'] && <FormErrorMessage>{formik?.errors?.FIRST_NAME}</FormErrorMessage>}
                        </FormControl>

                        <FormControl id="LAST_NAME" isInvalid={invalidFields['LAST_NAME']}>
                          <FormLabel htmlFor={`LAST_NAME`}>Last Name*</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            id="LAST_NAME"
                            name="LAST_NAME"
                          />
                          {invalidFields['LAST_NAME'] && <FormErrorMessage>{formik?.errors?.LAST_NAME}</FormErrorMessage>}
                        </FormControl>
                      </Flex>

                      <Flex flexDir={{base: 'column', d: 'row'}} gap={4}>
                        <FormControl id="EMAIL_ADDRESS" isInvalid={invalidFields['EMAIL_ADDRESS']}>
                          <FormLabel htmlFor={`EMAIL_ADDRESS`}>Email Address*</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            id="EMAIL_ADDRESS"
                            name="EMAIL_ADDRESS"
                          />
                          {invalidFields['EMAIL_ADDRESS'] && <FormErrorMessage>{formik?.errors?.EMAIL_ADDRESS}</FormErrorMessage>}
                        </FormControl>

                        <FormControl id="MOBILE"  isInvalid={invalidFields['MOBILE']}>
                          <FormLabel htmlFor={`MOBILE`}> Mobile*</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            id="MOBILE"
                            name="MOBILE"
                          />
                          {invalidFields['MOBILE'] && <FormErrorMessage>{formik?.errors?.MOBILE}</FormErrorMessage>}
                        </FormControl>
                      </Flex>

                      <Flex flexDir={{base: 'column', d: 'row'}} gap={4}>
                        <FormControl id="STATE" isInvalid={invalidFields['STATE']}>
                          <FormLabel htmlFor={`STATE`}>State*</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            id="STATE"
                            name="STATE"
                          />
                          {invalidFields['STATE'] && <FormErrorMessage>{formik?.errors?.STATE}</FormErrorMessage>}
                        </FormControl>

                        <FormControl id="POSTCODE"  isInvalid={invalidFields['POSTCODE']}>
                          <FormLabel htmlFor={`POSTCODE`}>Postcode*</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            id="POSTCODE"
                            name="POSTCODE"
                          />
                          {invalidFields['POSTCODE'] && <FormErrorMessage>{formik?.errors?.POSTCODE}</FormErrorMessage>}
                        </FormControl>
                      </Flex>


                      <Field as={Checkbox} type='checkbox' name='NEWSLETTER' borderColor={'black'} defaultChecked>
                        <Box as='span' fontFamily='book'>
                          I would like to hear the latest news and promotions from Travel Money OZ.
                        </Box>
                      </Field>

                      <Field as={Checkbox}  type='checkbox' name='ACCEPTANCE' borderColor={'black'} isInvalid={formik?.values?.ACCEPTANCE === false && formik?.errors?.ACCEPTANCE}>
                        <Box as='span' fontFamily='book'>
                          I’ve read and accept the <NineLink href='https://brandedcontent.nine.com.au/wp-content/uploads/2023/04/Travel-Guides-Win-a-20k-Holiday-Pack-Competition-Final-TCs.docx.pdf'>terms and conditions</NineLink> and the <NineLink href='https://login.nine.com.au/privacy'>privacy policy</NineLink>.
                        </Box>
                      </Field>
                      {formik?.values?.ACCEPTANCE === false && formik?.errors?.ACCEPTANCE && <Text mt='1!important' fontSize={{base:'10px'}} color='red' fontFamily='book'>{formik?.errors?.ACCEPTANCE}</Text>}

                      <PrivacyPolicy />

                      <Box mt={{base: '28px!important'}} textAlign='center'>
                        <Button
                          isDisabled={formik.isSubmitting || !formik.dirty || (formik.dirty && !formik.isValid)}
                          onClick={() => handleValidationAndToken(formik)}
                          isLoading={formik.isSubmitting}
                          spinner={<Spinner />}
                          rightIcon={
                            <Box as='svg' width="10.782" height="17.976" viewBox="0 0 10.782 17.976">
                              <path id="Path_433" data-name="Path 433" d="M-2668.346,927.53l7.161,7.2-2.479,2.515-3.957,4.014" transform="translate(2670.468 -925.409)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            </Box>
                          }
                        >
                          Submit
                        </Button>
                      </Box>

                      <Terms />


                    </Stack>
                  </Form>
                </Box>
              </Box>
            )
          }}

        </Formik>
      </motion.div>

      {formSubmitted &&
        <motion.div style={{ position:'absolute', inset: '0 0 0 0', display: 'flex', alignItems: 'center'}} initial={{opacity: 0, y: '100%'}} animate={{ opacity: 1.2, y: '0', transition: {duration: 1.2, delay: 0.3} }}>
            <Thankyou />
        </motion.div>
      }
    </Box>
  )
}


const formStyles = {
  form: {
    label: {
      '&.chakra-form__label': {
        fontFamily: 'prelo',
        fontWeight: 'bold',
        fontSize: {base: '13px', },
        lineHeight: {base: '22.9px', },
        letterSpacing: '.21px',
        mb: '5px',
        color: '#213B55',
      },
      '&.chakra-checkbox': {
        '.chakra-checkbox__label': {
          fontFamily: 'book',
          letterSpacing: '-0.3px',
          fontSize: {base: '10px', d:'14px'},
          lineHeight: {base: '11.62px'},
          color: '#1E323E',
          ml: {base: '5px', d: '14.5px'},
        },
        '.chakra-checkbox__control': {
          borderColor: '#C4C4C4',
          borderWidth: '1px',
          h: {base: '12px', },
          w: {base: '12px', },

          svg: {
            strokeDasharray: '12px!important',
          }
        },
      },
    },
    input: {
      '&[type="text"]': {
        borderColor: '#C4C4C4',
        borderRadius: '2px',

        '&:focus-visible': {
          boxShadow: '0 0 0 1px black',
          '&:data-focus-visible': {
            boxShadow: '0 0 0 1px black'
          }
        },
      }
    },
  }
}