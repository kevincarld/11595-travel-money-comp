import * as Yup from 'yup'

export const initialFormValues= {
  FIRST_NAME: '',
  LAST_NAME: '',
  EMAIL_ADDRESS: '',
  MOBILE: '',
  STATE: '',
  POSTCODE: '',
  NEWSLETTER: true,
  ACCEPTANCE: true,

  //default
  meta: {
    createdOn: new Date(),
  }
}

export const validationSchema = Yup.object({
  FIRST_NAME: Yup.string().required('Please enter your first name.'),
  LAST_NAME: Yup.string().required('Please enter your last name.'),
  EMAIL_ADDRESS: Yup.string().email('Please enter a valid email address.').required('Please enter your email address.'),
  // MOBILE: Yup.string().matches(/^04\d{8}$/, {message: 'Please enter a valid mobile number.'}).required('Please enter your mobile number.'),
  MOBILE: Yup.number().typeError('Please enter a valid mobile number').positive('Please enter a valid mobile number').test('minDigits', 'Please enter a valid mobile number', val => val && val.toString().length >= 8).required('Please enter your mobile number.'),
  STATE: Yup.string().required('Please enter your state.'),
  POSTCODE: Yup.string().required('Please enter your postcode.'),

})