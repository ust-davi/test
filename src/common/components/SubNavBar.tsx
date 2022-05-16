import React from 'react';
import { AppBar, Toolbar, Typography, TypographyVariant } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface ISubNavBar {
  title: string;
  fontType: TypographyVariant;
  marginTop?: 'admin' | 'client';
}

const SubNavBar = (props: ISubNavBar) => {
  const { title, fontType, marginTop = 'client' } = props;
  const classes = useStyles(marginTop);

  return (
    <AppBar className={classes.navbarWrap} elevation={0} position="static">
      <Toolbar>
        <div className={classes.title}>
          <Typography variant={fontType}>{title}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SubNavBar;

const useStyles = makeStyles((marginTop) => ({
  navbarWrap: {
    height: '80px',
    borderRadius: '0',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'none',
    marginTop: marginTop === 'admin' ? '150px' : '150px',
  },
  title: {
    position: 'relative',
    margin: '0 auto',
  },
}));
