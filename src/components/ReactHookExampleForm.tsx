import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { HookTextField } from './HookTextField';

const schema = Yup.object().shape({
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

type FormData = Yup.InferType<typeof schema>;

export const ReactHookExampleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: {
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
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="form-container">
      <h2>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HookTextField<FormData>
          label="First Name"
          name="firstName"
          control={control}
          error={errors.firstName}
        />

        <HookTextField<FormData>
          label="Last Name"
          name="lastName"
          control={control}
          error={errors.lastName}
        />

        <HookTextField<FormData>
          label="Email"
          name="email"
          type="email"
          control={control}
          error={errors.email}
        />

        <HookTextField<FormData>
          label="Phone Number"
          name="phone"
          control={control}
          error={errors.phone}
        />

        <HookTextField<FormData>
          label="Address"
          name="address"
          control={control}
          error={errors.address}
        />

        <HookTextField<FormData>
          label="City"
          name="city"
          control={control}
          error={errors.city}
        />

        <HookTextField<FormData>
          label="State"
          name="state"
          control={control}
          error={errors.state}
        />

        <HookTextField<FormData>
          label="Zip Code"
          name="zipCode"
          control={control}
          error={errors.zipCode}
        />

        <HookTextField<FormData>
          label="Password"
          name="password"
          type="password"
          control={control}
          error={errors.password}
        />

        <HookTextField<FormData>
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          control={control}
          error={errors.confirmPassword}
        />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};