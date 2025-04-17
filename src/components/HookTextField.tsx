import { memo, ReactElement } from 'react';
import { Controller, Control, FieldError, Path, FieldValues } from 'react-hook-form';

type HookTextFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  type?: string;
  control: Control<TFieldValues>;
  error?: FieldError;
};

function HookTextFieldComponent<TFieldValues extends FieldValues>({ 
  label, 
  name, 
  type = 'text', 
  control,
  error 
}: HookTextFieldProps<TFieldValues>): ReactElement {
  return (
    <div className="form-group">
      <label htmlFor={name as string}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type={type}
            id={name as string}
            {...field}
          />
        )}
      />
      {error?.message && (
        <div className="error">{error.message}</div>
      )}
    </div>
  );
}

type MemoComponent = {
  displayName?: string;
} & typeof HookTextFieldComponent;

export const HookTextField = memo(HookTextFieldComponent) as MemoComponent;

HookTextField.displayName = 'HookTextField'; 