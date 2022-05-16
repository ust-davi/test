import { makeStyles } from '@mui/styles';
import React from 'react';
import { COLOR_RED_60 } from '../../common/styles/Color';
import { ErrorMessage } from '@hookform/error-message';

interface ErrorMessageProps {
  errors: any;
  name: string;
}

const CustomErrorMessage = ({ errors, name }: ErrorMessageProps) => {
  const classes = useStyles();
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className={classes.errorMessage}>{message}</p>
      )}
    />
  );
};

export default CustomErrorMessage;

const useStyles = makeStyles({
  errorMessage: {
    position: 'absolute',
    fontSize: '10px',
    marginTop: '2px',
    color: COLOR_RED_60,
  },
});
