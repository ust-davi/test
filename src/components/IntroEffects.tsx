import { Box, Grid, Icon, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_0,
  COLOR_GREY_50,
  COLOR_GREY_60,
} from '../common/styles/Color';
import { VIOLET_SHADOW_24DP } from '../common/styles/Shadow';

const effectItems = [
  {
    id: 1,
    label: '토탈 솔루션',
    desc: '직관적인 UI로 예약부터 디테일한 샵관리까지 한 번에! 매달 나가는 이용료 없이 무료!',
  },
  {
    id: 2,
    label: '마케팅 도구 제공',
    desc: '맨들맨들로 적극 마케팅하세요! 고객이 재방문할수 있도록 다양한 도구를 제공해요',
  },
  {
    id: 3,
    label: '자동 문자와 알림톡',
    desc: '자동 알림 발송으로 고객에게는 뷰티샵에 대한 신뢰도를, 샵에서는 No-Show 방지 효과',
  },
  {
    id: 4,
    label: '다양한 이벤트',
    desc: '고객을 위한! 원장님을 위한! 풍성한 이벤트와 프로모션을 제공해요!',
  },
  {
    id: 5,
    label: '유연한 맞춤예약',
    desc: '우리샵 스타일에 맞게 오늘 예약, 실시간 예약, 예약 승인제 운영',
  },
  {
    id: 6,
    label: '통합 예약관리',
    desc: '현장 및 모바일예약은 물론 네이버예약 연동으로 한 눈에 보는 간편한 예약 관리',
  },
  {
    id: 7,
    label: '충성고객 확보',
    desc: '금액권, 정기권 등 다양한 요금제로 주기적으로 방문할 충성고객을 확보하세요!',
  },
  {
    id: 8,
    label: '뷰티샵 매니저',
    desc: '24시간 문의에 빠르고 신속하게 소통하고 뷰티샵의 성장을 같이 고민해요',
  },
];

const IntroEffects = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.wrap}>
        <Typography variant="h2" color={COLOR_DARK_GREY}>
          맨들맨들 도입효과
        </Typography>
        <Typography
          fontSize={20}
          fontWeight={400}
          color={COLOR_GREY_60}
          pt={5}
          pb={47.5}
        >
          초기 등록으로 집중 노출 1년간 앱 결제금액 210배+ 증가 조회수 100만+
          기록
        </Typography>
        <Grid container spacing={10}>
          {effectItems.map((item) => (
            <Grid item xs={3} textAlign="center" key={item.id}>
              <div className={classes.box}>
                <div className={classes.boxItems}>
                  <Icon color="primary" className={classes.icon}>
                    add_task
                  </Icon>
                  <Typography variant="h4" color={COLOR_DARK_GREY} pb={22.5}>
                    {item.label}
                  </Typography>
                  <Typography
                    fontSize={20}
                    fontWeight={400}
                    lineHeight="30px"
                    color={COLOR_GREY_50}
                    className={classes.desc}
                  >
                    {item.desc}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 1065,
    display: 'flex',
    alignItems: 'center',
    background: COLOR_GREY_0,
  },
  wrap: {
    width: '100%',
    maxWidth: 1153,
    margin: '0 auto',
    padding: '20px',
  },
  box: {
    position: 'relative',
    width: '100%',
    minHeight: 300,
    boxShadow: VIOLET_SHADOW_24DP,
    borderRadius: 12,
    '&&::before': {
      content: '""',
      display: 'block',
      paddingTop: '100%',
    },
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 21,
    fontSize: '27px !important',
  },
  boxItems: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 21px',
  },
  desc: {
    wordBreak: 'keep-all',
  },
});

export default IntroEffects;
