import { FormGroup } from '@mui/material';
import React, { ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';

interface CheckboxFieldProps {
  control: Control<any, object>;
  error?: any;
  name: string;
  rules?: any;

  children: ReactNode;
}

const CheckboxField = ({
  control,
  name,
  rules,
  children,
}: CheckboxFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormGroup sx={{ flexDirection: 'row' }} {...field}>
          {children}
        </FormGroup>
      )}
    />
  );
};

export default CheckboxField;
