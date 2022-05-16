import React from 'react';
import { makeStyles } from '@mui/styles';

import NavBar from '../../components/NavBar';
import theme from '../theme';
import useTabletWidth from '../hooks/useTabletWidth';
import Footer from '../components/Footer';

const Main = ({ children, sub, searchInput }: any) => {
  const classes = useStyles();
  const TabletWidth = useTabletWidth();

  return (
    <div className={classes.wrap}>
      {/* {TabletWidth ? <NavBar searchInput={searchInput} /> : <MobileNavbar />} */}
      <NavBar searchInput={searchInput} />

      {children}

      {!sub && <Footer />}
    </div>
  );
};

const useStyles = makeStyles({
  wrap: {
    background: '#fff',
    width: '100%',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      overflowY: 'auto',
      height: '100vh',
    },
  },
});

export default Main;
