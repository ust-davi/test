import React, { useEffect } from 'react';
import { Button, Chip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import NavBar from '../../components/NavBar';
import EventListItem from '../components/EventLIstItem';
import Footer from '../components/Footer';
import useCommonEventStyle from '../styles/tempEventStyle';
import useMendleEvent from '../hooks/useMendleEvent';
import { COLOR_DARK_GREY } from '../styles/Color';
import { VIOLET_SHADOW_2DP } from '../styles/Shadow';

const EventDetail = () => {
  const classes = useStyles();
  const eventClasses = useCommonEventStyle();

  const { data } = useMendleEvent({
    direction: 'DESC',
    orderType: 'REG_DATE',
    page: 0,
    size: 10,
  });

  return (
    <div className={eventClasses.container}>
      <NavBar />
      <main className={eventClasses.wrap}>
        <Typography variant="h2" pb={28} color={COLOR_DARK_GREY}>
          이벤트/혜택
        </Typography>
        <div className={classes.titleWrap}>
          <Typography variant="h3" fontSize={36}>
            신규 입점 9월 이벤트 | 선착순 10분께 드리는 혜택
          </Typography>
          <div className={eventClasses.infoWrap}>
            <Chip
              label="진행중"
              size="medium"
              className={eventClasses.status}
            />
            <Typography fontSize={20} fontWeight={400} color={COLOR_DARK_GREY}>
              2021.09.01 ~ 2021.09.30
            </Typography>
          </div>
        </div>
        <div className={classes.contents}>
          <img
            src="https://mendlemendle.com/images/renewal_mdmd/assets/evnet-detaill.jpg" // TODO : 컨텐츠 수정 할수 있는 PUT 메서드 요청
            alt="썸머이벤트"
          />
        </div>
        <Typography variant="h2" pb={28} color={COLOR_DARK_GREY}>
          이벤트/혜택
        </Typography>
        <ul className={eventClasses.list}>
          <EventListItem eventArray={data?.data?.content} count={4} />
        </ul>
        <Button variant="contained" className={classes.listButton}>
          목록보기
        </Button>
      </main>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles({
  titleWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
    '& > h3': {
      margin: '0',
    },
  },
  contents: {
    width: '100%',
    height: 'auto',
    margin: '7px 0',
    paddingBottom: 50,
    '& > img': {
      width: '100%',
    },
  },
  listButton: {
    '&&': {
      fontSize: 14,
      padding: '12px 16px',
      lineHeight: '14px',
      float: 'right',
      boxShadow: VIOLET_SHADOW_2DP,
    },
  },
});

export default EventDetail;
