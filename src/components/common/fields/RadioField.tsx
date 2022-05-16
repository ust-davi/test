import { RadioGroup } from '@mui/material';
import React, { ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';

interface RadioFieldProps {
  control: Control<any, object>;
  error?: any;
  name: string;
  rules?: any;

  children: ReactNode;
}

const RadioField = ({ control, name, rules, children }: RadioFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <RadioGroup row sx={{ display: 'flex' }} {...field}>
          {children}
        </RadioGroup>
      )}
    />
  );
};

export default RadioField;
