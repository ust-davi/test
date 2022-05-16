import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chip, Typography } from '@mui/material';
import useCommonEventStyle from '../styles/tempEventStyle';
import { makeStyles } from '@mui/styles';
import { COLOR_BLACK, COLOR_DARK_GREY } from '../styles/Color';
import theme from '../theme';
import { Event } from '../type';

interface EventListItemProps {
  eventArray?: Event[];
  count?: number;
}

const EventListItem = ({ eventArray, count }: EventListItemProps) => {
  const classes = useStyles();
  const eventClasses = useCommonEventStyle();

  const [countedEventList, setCountEventArr] = useState<Event[]>([]);

  useEffect(() => {
    if (eventArray && count) {
      const tempArr =
        count !== undefined || count < 10
          ? eventArray.slice(0, count)
          : eventArray.slice(0, 10);

      setCountEventArr(tempArr);
    }
  }, [eventArray]);
  return (
    <>
      {countedEventList.map((item) => {
        return (
          <li key={item.eventUuid} className={classes.listItem}>
            <div className={classes.imgWrap}>
              <Link to={`/event/${item.eventUuid}`}>
                <img
                  className={classes.images}
                  // src={item.eventThumImg} // TODO : 이미지 경로 변경 가능한 PUT 메서드 요청
                  src="https://mendlemendle.com/images/renewal_mdmd/assets/summer-event.png"
                  alt={item.eventTitle}
                  width="100%"
                  height="100%"
                />
              </Link>
            </div>
            <div className={classes.textArea}>
              <Typography variant="h4">{item.eventTitle}</Typography>
              <div className={eventClasses.infoWrap}>
                {/* <Button view="filled" color="secondary" text={item.status} /> */}
                {/* <span className={eventClasses.status}>
                  {item.eventStatus === 'Y' ? '진행중' : '종료'}
                </span> */}
                <Chip
                  label={item.eventStatus === 'Y' ? '진행중' : '종료'}
                  size="medium"
                  className={eventClasses.status}
                />
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  color={COLOR_DARK_GREY}
                >
                  {`${item.eventStartDate} ~ ${item.eventEndDate}`}
                </Typography>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default EventListItem;

const useStyles = makeStyles({
  listItem: {
    width: '49.5%',
    position: 'relative',
    height: 'inherit',
  },
  imgWrap: {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down(1158)]: {
      height: 'auto',
    },
  },
  images: {
    width: '100%',
    margin: 'auto',
    verticalAlign: 'middle',
  },
  textArea: {
    color: COLOR_BLACK,
    margin: '10px 0 27px 0',
  },
});
