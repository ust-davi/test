import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import useCommonUserStyles from '../../../common/styles/tempUserStyles';
import { Check } from '@mui/icons-material';

interface InputFieldProps {
  control: Control<any, object>;
  error?: any;
  defaultValue?: string;
  name: string;
  rules?: any;
  placeholder?: string;
  isShowCheckIcon?: boolean;
  isOnlyTypeNumber?: boolean;
}

const InputField = ({
  control,
  error,
  rules,
  defaultValue = '',
  name,
  placeholder,
  isShowCheckIcon,
  isOnlyTypeNumber,
}: InputFieldProps) => {
  const commonClasses = useCommonUserStyles();

  const onInputAuthNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { length } = event.target.value;
    const target = value.substring(length - 1, length);
    const flag = /^[0-9]$/.test(target);

    const result = flag ? value : value.substring(0, length - 1);
    if (isOnlyTypeNumber) event.target.value = result;
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextField
          className={commonClasses.textfield}
          type="text"
          variant="outlined"
          size="small"
          placeholder={placeholder || ''}
          {...field}
          error={error}
          onInput={onInputAuthNumber}
          InputProps={{
            endAdornment: isShowCheckIcon && (
              <div className={commonClasses.iconWrapper}>
                <Check className={commonClasses.checkButton} />
              </div>
            ),
          }}
        />
      )}
    />
  );
};

export default InputField;
