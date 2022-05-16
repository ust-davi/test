import { useHistory } from 'react-router-dom';
import { Grid, Box, Typography, Pagination, Chip, Theme } from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_50,
  COLOR_MINT_80,
  COLOR_RED_60,
  COLOR_VIOLET_100,
  COLOR_WHITE,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP } from '../../common/styles/Shadow';
import EventImage from '../../assets/event-img.jpg';

const eventItems = [
  {
    id: 1,
    imgSrc: EventImage,
    title: '페이스 왁싱  12월 연말 할인 이벤트',
    pay: 50000,
    sales: 100000,
    salesPercent: '50%',
    date: '2021. 08. 04. ~ 2021. 12. 31.',
  },
  {
    id: 2,
    imgSrc: EventImage,
    title: '페이스 왁싱  12월 연말 할인 이벤트',
    pay: 50000,
    sales: 100000,
    salesPercent: '50%',
    date: '2021. 08. 04. ~ 2021. 12. 31.',
  },
  {
    id: 3,
    imgSrc: EventImage,
    title: '페이스 왁싱  12월 연말 할인 이벤트',
    pay: 50000,
    sales: 100000,
    salesPercent: '50%',
    date: '2021. 08. 04. ~ 2021. 12. 31.',
  },
  {
    id: 4,
    imgSrc: EventImage,
    title: '페이스 왁싱  12월 연말 할인 이벤트',
    pay: 50000,
    sales: 100000,
    salesPercent: '50%',
    date: '2021. 08. 04. ~ 2021. 12. 31.',
  },
];

const EventEndCon = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Grid
        container
        width={1105}
        maxWidth={1105}
        columnSpacing={12.75}
        rowSpacing={12.75}
        justifyContent="center"
        mt={15}
        mx="auto"
      >
        {eventItems.map((item) => (
          <Grid
            item
            key={item.id}
            xs={6}
            textAlign="center"
            sx={{ opacity: 0.5 }}
          >
            <Box
              position="relative"
              overflow="hidden"
              borderRadius={1}
              boxShadow={GREY_SHADOW_2DP}
            >
              <Chip label="D-7" size="medium" className={classes.statusChip} />
              <img src={item.imgSrc} alt={item.title} />
              <div className={classes.textWrap}>
                <Typography variant="h4">{item.title}</Typography>
                <div className={classes.payBox}>
                  <Typography variant="h4" color={COLOR_VIOLET_100}>
                    {item.pay.toLocaleString()}원
                  </Typography>
                  <Typography
                    variant="h5"
                    mx={5}
                    fontWeight={400}
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {item.sales.toLocaleString()}
                  </Typography>
                  <Typography variant="h4" color={COLOR_RED_60}>
                    {item.salesPercent}↓
                  </Typography>
                </div>
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  color={COLOR_GREY_50}
                >
                  {item.date}
                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={10}
        shape="rounded"
        color="primary"
        className={classes.pagination}
      />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  statusSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  textWrap: {
    padding: theme.spacing(7.5, 15),
  },
  payBox: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  statusChip: {
    '&&': {
      position: 'absolute',
      minWidth: 54,
      height: 'auto',
      minHeight: 30,
      top: 10,
      left: 10,
      padding: '3px 10px',
      fontSize: 20,
      lineHeight: '120%',
      fontWeight: 700,
      background: COLOR_MINT_80,
    },
    '& .MuiChip-label': {
      padding: 0,
      color: COLOR_WHITE,
    },
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
}));

export default EventEndCon;
