import React, { memo, ReactNode } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { Paper, Container, Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { COLOR_GREY_10 } from '../common/styles/Color';
import Footer from '../common/components/Footer';

interface LayoutProp {
  children: ReactNode;
  shopManagement: boolean;
}

const Layout = ({ children, shopManagement = false }: LayoutProp) => {
  const classes = useStyles();

  return (
    <>
      {shopManagement ? (
        <Container maxWidth={false} className={classes.container}>
          <NavBar />
          <Paper elevation={0} className={classes.paper}>
            <Sidebar />
            <div className={classes.content}>{children}</div>
          </Paper>
          <Footer />
        </Container>
      ) : (
        <Container maxWidth={false} className={classes.container}>
          <NavBar />
          <div>{children}</div>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default memo(Layout);

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      width: '100%',
      minWidth: 1920,
      padding: 0,
      borderRadius: 0,
      marginTop: theme.spacing(75),
    },
  },
  paper: {
    '&&': {
      display: 'flex',
      padding: 0,
      background: COLOR_GREY_10,
    },
  },
  content: {
    width: 'calc( 100% - 250px )',
    padding: '50px 25px 32px 25px',
    background: COLOR_GREY_10,
  },
}));
