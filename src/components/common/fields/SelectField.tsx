import React, { ReactNode, ChangeEvent } from 'react';
import { MenuProps, Select } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';

interface SelectFieldProps {
  control: Control<any, object>;
  error?: any;
  name: string;
  rules?: any;

  children: ReactNode;
  customOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  menuProps?: Partial<MenuProps>;
  sx?: any;
  className?: any;
  disabled?: boolean;
}

const SelectField = ({
  control,
  error,
  rules,
  name,
  children,
  customOnChange,
  menuProps,
  sx,
  className,
  disabled,
}: SelectFieldProps) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Select
          className={`${classes.district} ${className}`}
          onChange={(e: any) => {
            onChange(e);
            customOnChange && customOnChange(e);
          }}
          onBlur={onBlur}
          value={value}
          name={name}
          ref={ref}
          MenuProps={menuProps}
          error={error}
          sx={sx}
          disabled={disabled}
        >
          {children}
        </Select>
      )}
    />
  );
};

export default SelectField;

const useStyles = makeStyles({
  district: {
    height: '40px',
    '& > div': {
      fontWeight: 400,
    },
  },
});
