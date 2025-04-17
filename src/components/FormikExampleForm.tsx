import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikField } from './FormikField';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().matches(/^[0-9]{5}$/, 'Zip code must be 5 digits'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  password: '',
  confirmPassword: '',
};

export const FormikExampleForm = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="form-container">
      <h2>Example Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikField name="firstName" label="First Name" />
            <FormikField name="lastName" label="Last Name" />
            <FormikField name="email" label="Email" type="email" />
            <FormikField name="phone" label="Phone Number" />
            <FormikField name="address" label="Address" />
            <FormikField name="city" label="City" />
            <FormikField name="state" label="State" />
            <FormikField name="zipCode" label="Zip Code" />
            <FormikField name="password" label="Password" type="password" />
            <FormikField name="confirmPassword" label="Confirm Password" type="password" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}; 