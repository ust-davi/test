import { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Notice as INotice, NoticeListRequest } from '../type';
import { Divider, Icon, Paper, Theme, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_30,
  COLOR_GREY_5,
  COLOR_GREY_60,
} from '../styles/Color';

import useNoticeList from '../hooks/useNoticeList';

const test = [
  {
    id: 1,
    content: `test`,
    reg_DATE: '2021-12-01',
    seq: 1,
    title: '[전체] 서비스 이용 약관 변경 안내 (2021년 10월 15일 부 변경 안)',
  },
  {
    id: 2,
    content: `test`,
    reg_DATE: '2021-12-01',
    seq: 2,
    title: '[전체] 서비스 이용 약관 변경 안내 (2021년 10월 15일 부 변경 안)',
  },
  {
    id: 3,
    content: `test`,
    reg_DATE: '2021-12-01',
    seq: 3,
    title: '[전체] 서비스 이용 약관 변경 안내 (2021년 10월 15일 부 변경 안)',
  },
  {
    id: 4,
    content: `test`,
    reg_DATE: '2021-12-01',
    seq: 4,
    title: '[전체] 서비스 이용 약관 변경 안내 (2021년 10월 15일 부 변경 안)',
  },
];

const Notice = () => {
  const history = useHistory();
  const classes = useStyles();

  const [noticeListRequest, setNoticeListRequest] = useState<NoticeListRequest>(
    {
      direction: 'DESC',
      orderType: 'REG_DATE',
      page: 0,
      size: 5,
    },
  );

  const { data: noticeArrayResponse } = useNoticeList(noticeListRequest);
  const [noticeArray, setNoticeArray] = useState<INotice[]>([]);

  useEffect(() => {
    if (
      noticeArrayResponse?.data?.content?.length !== undefined &&
      noticeArrayResponse?.data?.content?.length > 0
    ) {
      setNoticeArray(noticeArrayResponse.data.content as INotice[]);
    }
  }, [noticeArrayResponse]);

  return (
    <section className={classes.container}>
      <Typography variant="h2" mb={7.5} color={COLOR_DARK_GREY}>
        공지사항
        <Icon className={classes.moreIcon}>more_horiz</Icon>
      </Typography>
      <Paper
        component="ul"
        color="default"
        elevation={0}
        sx={{ borderRadius: 2, border: `1px solid ${COLOR_GREY_5}` }}
      >
        {/* noticeArray */}
        {test.map((item: any) => (
          <Fragment key={item.seq}>
            <li className={classes.list}>
              <Link
                to={`/notice?idx=${item.seq}`}
                style={{ color: COLOR_DARK_GREY }}
              >
                <Typography variant="h4" display="inline-block">
                  {item.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ float: 'right', color: COLOR_GREY_30 }}
                >
                  {item.reg_DATE.substring(0, 10)}
                </Typography>
              </Link>
            </li>
            <Divider sx={{ p: 0 }} />
          </Fragment>
        ))}
      </Paper>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    maxWidth: 1156,
    margin: theme.spacing(0, 'auto', 125, 'auto'),
    '& button': {
      boxShadow: 'none',
    },
  },
  list: {
    height: 'inherit',
    padding: theme.spacing(33.25, 18.25),
    listStyle: 'none',
    '& > a': {
      height: 133,
      minHeight: 133,
    },
  },
  moreIcon: {
    float: 'right',
    fontSize: 'xx-large',
    color: COLOR_GREY_60,
    margin: theme.spacing(12, 0, 9, 0),
  },
}));

// mui 이전 스타일드 컴포넌트 작업
// const ContainerWrap = styled.div`
//   max-width: 1156px;
//   width: 100%;
//   margin: 0 auto;
//   margin-top: 150px;
//   margin-botton: 250px;

//   button {
//     box-shadow: none !important;
//   }
// `;

// const List = styled.div`
//   // margin-bottom: 48px;
// `;

// const H2 = styled.h2`
//   font-weight: 700;
//   font-size: 42px;
//   line-height: 120%;
//   letter-spacing: -0.025em;
//   margin: 15px 0px;
// `;

// const H4 = styled.h4`
//   font-weight: 700;
//   font-size: 28px;
//   margin: 54px 0px;
//   line-height: 128%;
//   letter-spacing: -0.035em;
// `;

export default Notice;
