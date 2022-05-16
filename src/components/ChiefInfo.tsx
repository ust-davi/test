import { Box, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_20,
  COLOR_GREY_50,
  COLOR_GREY_60,
  COLOR_VIOLET_0,
} from '../common/styles/Color';

const chiefItems = [
  {
    id: 1,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/nail-img.png',
    label: '네일아트',
  },
  {
    id: 2,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/skin-img.png',
    label: '피부관리',
  },
  {
    id: 3,
    imgSrc:
      'https://www.mendlemendle.com/images/renewal_mdmd/eyelashes-img.png',
    label: '속눈썹',
  },
  {
    id: 4,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/tanning-img.png',
    label: '태닝',
  },
  {
    id: 5,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/waxing-img.png',
    label: '왁싱',
  },
  {
    id: 6,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/massage-img.png',
    label: '마사지',
  },
  {
    id: 7,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/foot-img.png',
    label: '발관리',
  },
  {
    id: 8,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/form-img.png',
    label: '체형관리',
  },
  {
    id: 9,
    imgSrc: 'https://www.mendlemendle.com/images/renewal_mdmd/eyebrow-img.png',
    label: '아이브로우',
  },
];

const ChiefInfo = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.wrap}>
        <Typography variant="h2" color={COLOR_DARK_GREY}>
          다양한 원장님들이 함께하고 있습니다.
        </Typography>
        <Typography
          fontSize={20}
          fontWeight={400}
          color={COLOR_GREY_60}
          pt={5}
          pb={25}
        >
          초기 등록으로 집중 노출 1년간 앱 결제금액 210배+ 증가 조회수 100만+
          기록
        </Typography>
        <Grid container spacing={19.5} justifyContent="center">
          {chiefItems.map((item) => (
            <Grid item textAlign="center" key={item.id}>
              <Box
                width={200}
                height={200}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                border={1}
                borderColor={COLOR_GREY_20}
                borderRadius={1}
              >
                <img src={item.imgSrc} alt={item.label} />
                <Typography
                  variant="h4"
                  color={COLOR_GREY_50}
                  className={classes.label}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: 755,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(75),
    background: COLOR_VIOLET_0,
  },
  wrap: {
    width: '100%',
    maxWidth: 1156,
    margin: '0 auto',
  },
  label: {
    paddingTop: theme.spacing(10),
    whiteSpace: 'pre-line',
  },
}));

export default ChiefInfo;
