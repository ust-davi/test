import { useState } from 'react';

import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

interface DatePickerProps {
  className: string;
}

const DefaultDatePicker = ({ className }: DatePickerProps) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        inputFormat="yyyy-MM-dd"
        mask="____-__-__"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} className={className} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DefaultDatePicker;
