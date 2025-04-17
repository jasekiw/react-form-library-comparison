import { useForm } from '@tanstack/react-form';
import * as z from 'zod';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().regex(/^[0-9]{5}$/, 'Zip code must be 5 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

type FormError = {
  message: string;
} | string | undefined;

export const TanstackFormExample = () => {
  const form = useForm({
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
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value);
    },
    // validators: {
    //   onChange: schema
    // }
  });

  const renderError = (errors: FormError[] | undefined) => {
    if (!errors) return null;
    return errors.map((error, index) => {
      if (!error) return null;
      return (
        <div key={index} className="error">
          {typeof error === 'string' ? error : error.message}
        </div>
      );
    });
  };

  return (
    <div className="form-container">
      <h2>Tanstack Form Example</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <form.Field
            name="firstName"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="firstName"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <form.Field
            name="lastName"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="lastName"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <form.Field
            name="email"
            children={(field) => (
              <>
                <input
                  type="email"
                  id="email"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <form.Field
            name="phone"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="phone"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <form.Field
            name="address"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="address"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <form.Field
            name="city"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="city"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <form.Field
            name="state"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="state"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <form.Field
            name="zipCode"
            children={(field) => (
              <>
                <input
                  type="text"
                  id="zipCode"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <form.Field
            name="password"
            children={(field) => (
              <>
                <input
                  type="password"
                  id="password"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <form.Field
            name="confirmPassword"
            children={(field) => (
              <>
                <input
                  type="password"
                  id="confirmPassword"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {renderError(field.state.meta.errors)}
              </>
            )}
          />
        </div>

        <button type="submit" disabled={form.state.isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}; 