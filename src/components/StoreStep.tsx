import { Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { COLOR_DARK_GREY } from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import clsx from 'clsx';

const StoreStep = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Typography variant="h2" color={COLOR_DARK_GREY} pb={15.5}>
        입점 절차
      </Typography>
      <Grid container spacing={14.5}>
        <Grid item xs={4} textAlign="center">
          <div className={clsx(classes.imgWrap, classes.signUpBg)}>
            <img
              src="https://www.mendlemendle.com/images/renewal_mdmd/sign-up-img.png"
              alt="회원 가입"
              width="80%"
            />
            <Typography
              variant="h4"
              color={COLOR_DARK_GREY}
              className={classes.label}
            >
              회원 가입
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <div className={clsx(classes.imgWrap, classes.coalitionBg)}>
            <img
              src="https://www.mendlemendle.com/images/renewal_mdmd/coalition-img.png"
              alt="회원 가입"
              width="80%"
            />
            <Typography
              variant="h4"
              color={COLOR_DARK_GREY}
              className={classes.label}
            >
              맨들맨들 <br /> 제휴샵 승인
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <div className={clsx(classes.imgWrap, classes.serviceGuideBg)}>
            <img
              src="https://www.mendlemendle.com/images/renewal_mdmd/service-guide-img.png"
              alt="회원 가입"
              width="80%"
            />
            <Typography
              variant="h4"
              color={COLOR_DARK_GREY}
              className={classes.label}
            >
              맨들맨들 <br /> 모든 서비스 이용하기
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    maxWidth: 1156,
    margin: theme.spacing(33, 'auto', 75, 'auto'),
  },
  imgWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: GREY_SHADOW_2DP,
    '& img': {
      paddingTop: theme.spacing(13),
    },
    '& h4': {
      minHeight: 68,
      display: 'flex',
      alignItems: 'center',
      paddingBottom: theme.spacing(7.5),
    },
  },
  label: {
    wordBreak: 'keep-all',
    whiteSpace: 'pre-line',
  },
  signUpBg: {
    background:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336',
  },
  coalitionBg: {
    background: '#EDE3FF',
  },
  serviceGuideBg: {
    background: '#EDC3BE',
  },
}));

export default StoreStep;
