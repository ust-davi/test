import { useEffect, useMemo, useState } from 'react';

import { Grid, Typography, TextField, IconButton } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  DateRange,
  DesktopDateRangePicker,
  LocalizationProvider,
} from '@mui/lab';
import moment from 'moment';

import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@mui/styles';
import { COLOR_DARK_GREY, COLOR_GREY_50 } from '../styles/Color';

interface DateRangePickerProps {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

const DateRangePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: DateRangePickerProps) => {
  const classes = useStyles();

  const [date, setDate] = useState<DateRange<string>>([startDate, endDate]);

  useEffect(() => {
    setDate([startDate, endDate]);
  }, [startDate, endDate]);

  const datePickerStartDate = useMemo(() => {
    date[0] && moment(date[0]).format('YYYY-MM-DD');
    if (date[0]) {
      const startDate = moment(date[0]).format('YYYY-MM-DD');
      setStartDate(startDate);
      return startDate;
    }
    return null;
  }, [date]);

  const datePickerEndDate = useMemo(() => {
    if (date[1]) {
      const endDate = moment(date[1]).format('YYYY-MM-DD');
      setEndDate(endDate);
      return endDate;
    }
    return null;
  }, [date]);

  const onClickButton = () => {
    const textField = document.getElementById('textField');
    if (textField !== null) {
      textField.focus();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateRangePicker
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <Grid container alignItems="center">
            <Typography fontWeight={400}>
              {datePickerStartDate} ~ {datePickerEndDate}
            </Typography>
            <IconButton className={classes.calenderIcon}>
              <FontAwesomeIcon icon={faCalendarAlt} onClick={onClickButton} />
            </IconButton>
            <TextField
              id="textField"
              {...startProps}
              sx={{ width: 0, height: 0, opacity: 0 }}
            />
          </Grid>
        )}
      />
    </LocalizationProvider>
  );
};

const useStyles = makeStyles(() => ({
  calenderIcon: {
    display: 'inline-block',
    margin: '0 16px !important',
    padding: '0 !important',
    '& svg': {
      color: COLOR_DARK_GREY,
    },
  },
}));
export default DateRangePicker;
