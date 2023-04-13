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
  InputGroup
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

export default function FormComponent() {
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const formikRef = React.useRef(null)

  const handleValidationAndToken = async (formik) => {
    formik.setSubmitting(true)

    const isAccepted = validateCheckboxTrue(formik, 'ACCEPTANCE', 'Please click this checkbox to accept the terms and conditions.')
    if(isAccepted && formik.isValid && formik.dirty) {
      window.grecaptcha.execute()
    } else {
      formik.setSubmitting(false)
    }

  }


  // MAIN FORM SUBMISSION HANDLER
  React.useEffect(() => {

      window.submitFormik = function() {
        const formik = formikRef.current

        // TODO: (DEBUG) remove this later on when there's already an api endpoint set to post form values to
        setTimeout(() => {
          const { values } = formik
          const firstname = values['FIRST_NAME']
          const lastname = values['LAST_NAME']
          window.alert(JSON.stringify(values, null, 2))
          formik.setSubmitting(false)
          setFormSubmitted(true)
        }, 1000)
      }
  }, [formikRef])

  return (
    <Container>
      {formSubmitted ? <Thankyou />
      :
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
              <Form id='formik'>
                <Box
                  hidden
                  id="recaptcha"
                  class="g-recaptcha"
                  data-sitekey="6LcmPUAUAAAAAMjQoABDjyGQkH46afELBYthy7VH"
                  data-callback="onTokenVerified"
                  data-size="invisible"
                />
                <input name="googleToken" hidden value="" />

                <Box maxW='750px' mx='auto' mt='40px'p={8} >
                  <Stack spacing={4}>
                    <Flex flexDir={{base: 'column', d: 'row'}} gap={4}>
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


                    <Field as={Checkbox}  type='checkbox' name='ACCEPTANCE' borderColor={'black'} isInvalid={formik?.values?.ACCEPTANCE === false && formik?.errors?.ACCEPTANCE}>
                      <Box as='span' fontFamily='book'>
                        I’ve read and accept the terms and conditions and the privacy policy.
                      </Box>
                    </Field>
                    {formik?.values?.ACCEPTANCE === false && formik?.errors?.ACCEPTANCE && <Text mt='2!important' fontSize='small' color='red'>{formik?.errors?.ACCEPTANCE}</Text>}

                    <Terms />

                    <Box>
                      <Button
                        isDisabled={formik.isSubmitting || !formik.dirty || (formik.dirty && !formik.isValid)}
                        onClick={() => handleValidationAndToken(formik)}
                        isLoading={formik.isSubmitting}
                        spinner={<Spinner />}
                      >
                        Submit
                      </Button>
                    </Box>

                  </Stack>
                </Box>
              </Form>
            )
          }}

        </Formik>
      }
    </Container>
  )
}
