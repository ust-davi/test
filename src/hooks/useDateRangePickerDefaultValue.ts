import React, { useEffect, useState } from 'react';

interface DateRangePickerDefaultValueProps {
  startDate: string;
  endDate: string;
}

const useDateRangePickerDefaultValue = (
  props: DateRangePickerDefaultValueProps,
) => {
  const [startDate, setStartDate] = useState<string>(props.startDate);
  const [endDate, setEndDate] = useState<string>(props.endDate);

  useEffect(() => {
    setStartDate(props.startDate);
    setEndDate(props.endDate);
  }, [props.startDate, props.endDate]);

  return { startDate, setStartDate, endDate, setEndDate };
};

export default useDateRangePickerDefaultValue;
