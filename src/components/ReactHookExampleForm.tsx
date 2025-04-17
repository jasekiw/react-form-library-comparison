import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="firstName"
                {...field}
              />
            )}
          />
          {errors.firstName && (
            <div className="error">{errors.firstName.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="lastName"
                {...field}
              />
            )}
          />
          {errors.lastName && (
            <div className="error">{errors.lastName.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                id="email"
                {...field}
              />
            )}
          />
          {errors.email && (
            <div className="error">{errors.email.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="phone"
                {...field}
              />
            )}
          />
          {errors.phone && (
            <div className="error">{errors.phone.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="address"
                {...field}
              />
            )}
          />
          {errors.address && (
            <div className="error">{errors.address.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="city"
                {...field}
              />
            )}
          />
          {errors.city && (
            <div className="error">{errors.city.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="state"
                {...field}
              />
            )}
          />
          {errors.state && (
            <div className="error">{errors.state.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="zipCode"
                {...field}
              />
            )}
          />
          {errors.zipCode && (
            <div className="error">{errors.zipCode.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                type="password"
                id="password"
                {...field}
              />
            )}
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <input
                type="password"
                id="confirmPassword"
                {...field}
              />
            )}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword.message}</div>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};