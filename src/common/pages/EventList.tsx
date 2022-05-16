import React from 'react';
import { Typography } from '@mui/material';

import NavBar from '../../components/NavBar';
import Footer from '../components/Footer';
import EventListItem from '../components/EventLIstItem';
import useCommonEventStyle from '../styles/tempEventStyle';
import useMendleEvent from '../hooks/useMendleEvent';
import { COLOR_DARK_GREY } from '../styles/Color';

// const events: Event[] = [
//   {
//     id: 1,
//     title: '신규 입점 9월 이벤트 | 선착순 10분께 드리는 혜택',
//     imgSrc:
//       'https://mendlemendle.com/images/renewal_mdmd/assets/summer-event.png',
//     alt: '썸머이벤트',
//     status: '진행중',
//     date: '2021.09.01 ~ 2021.09.30',
//   },
//   {
//     id: 2,
//     title: '신규 입점 9월 이벤트 | 선착순 10분께 드리는 혜택',
//     imgSrc:
//       'https://mendlemendle.com/images/renewal_mdmd/assets/summer-event2.png',
//     alt: '여름준비 이벤트',
//     status: '진행중',
//     date: '2021.09.01 ~ 2021.09.30',
//   },
//   {
//     id: 3,
//     title: '신규 입점 9월 이벤트 | 선착순 10분께 드리는 혜택',
//     imgSrc:
//       'https://mendlemendle.com/images/renewal_mdmd/assets/familymonth-event.png',
//     alt: '가정의 달 이벤트',
//     status: '진행중',
//     date: '2021.09.01 ~ 2021.09.30',
//   },
//   {
//     id: 4,
//     title: '신규 입점 9월 이벤트 | 선착순 10분께 드리는 혜택',
//     imgSrc:
//       'https://mendlemendle.com/images/renewal_mdmd/assets/winning-event.png',
//     alt: '100% 당첨 이벤트',
//     status: '진행중',
//     date: '2021.09.01 ~ 2021.09.30',
//   },
//   {
//     id: 5,
//     title: '신규 입점 9월 이벤트 | 선착순 10분께 드리는 혜택',
//     imgSrc:
//       'https://mendlemendle.com/images/renewal_mdmd/assets/nail-event.png',
//     alt: '봄맞이 네일 이벤트',
//     status: '진행중',
//     date: '2021.09.01 ~ 2021.09.30',
//   },
// ];

const EventList = () => {
  const eventClasses = useCommonEventStyle();

  const { data } = useMendleEvent({
    direction: 'DESC',
    orderType: 'REG_DATE',
    page: 0,
    size: 10,
  });

  return (
    <>
      <div className={eventClasses.container}>
        <NavBar />
        <div className={eventClasses.wrap}>
          <Typography variant="h2" pb={28} color={COLOR_DARK_GREY}>
            이벤트/혜택
          </Typography>
          <ul className={eventClasses.list}>
            <EventListItem
              eventArray={data?.data?.content}
              count={data?.data?.content.length}
            />
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EventList;
