import { Field, ErrorMessage } from 'formik';
import { memo } from 'react';

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
}

const FormikFieldComponent = ({ name, label, type = 'text' }: FormikFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export const FormikField = memo(FormikFieldComponent);
FormikField.displayName = 'FormikField'; 