import React from 'react';
import { makeStyles } from '@mui/styles';
import SalesManagerLayout from '../components/SalesManagerLayout';
import Login from '../common/components/Login';
import theme from '../common/theme';

const SalesManagerLogin = () => {
  const classes = useStyles();

  return (
    <SalesManagerLayout subTitle="세일즈 매니저 입력">
      <section className={classes.loginWrap}>
        <Login />
      </section>
    </SalesManagerLayout>
  );
};

export default SalesManagerLogin;

const useStyles = makeStyles({
  loginWrap: {
    marginTop: '270px',

    [theme.breakpoints.down(769)]: {
      marginTop: '144px',
    },
  },
});
