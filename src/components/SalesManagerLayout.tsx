import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode, useEffect, useState } from 'react';
import useTabletWidth from '../common/hooks/useTabletWidth';
import { COLOR_PRIMARY } from '../common/styles/Color';
import theme from '../common/theme';

interface SalesManagerLayoutProp {
  children: ReactNode;
  subTitle: string;
  isShowSubTitle?: boolean;
}

const SalesManagerLayout = ({
  children,
  subTitle,
  isShowSubTitle,
}: SalesManagerLayoutProp) => {
  const classes = useStyles({ isShowSubTitle });
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  return (
    <>
      <header className={classes.header}>
        <section className={classes.logo}>
          <img
            src="https://mendlemendle.com/images/renewal_mdmd/assets/logo-web-admin.svg"
            width={272}
            height={50}
            alt="logo"
            className={classes.logoImage}
          />
        </section>
        <section className={classes.subTitle}>
          <Typography variant="h4">{subTitle}</Typography>
        </section>
      </header>
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default SalesManagerLayout;

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down(769)]: {},

    [theme.breakpoints.down(361)]: {},
  },
  logo: ({ isShowSubTitle }: { isShowSubTitle?: boolean }) => ({
    width: '100%',
    height: '150px',
    [theme.breakpoints.down(769)]: {
      display: isShowSubTitle ? 'none' : 'block',
      textAlign: 'center',
      height: '100px',
    },
  }),
  logoImage: {
    height: '100%',
    marginLeft: '20%',

    [theme.breakpoints.down(769)]: {
      margin: '0 auto',
      marginTop: '60px',
      width: '271px',
      height: '60px',
    },
  },
  subTitle: ({ isShowSubTitle }: { isShowSubTitle?: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80px',
    backgroundColor: COLOR_PRIMARY,
    color: 'white',

    [theme.breakpoints.down(769)]: {
      display: isShowSubTitle ? 'flex' : 'none',
      height: '56px',
      '& > h4': {
        fontSize: '20px',
      },
    },

    [theme.breakpoints.down(361)]: {
      height: '56px',
      '& > h4': {
        fontSize: '20px',
      },
    },
  }),
  main: ({ isShowSubTitle }: { isShowSubTitle?: boolean }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down(769)]: {},
  }),
});
