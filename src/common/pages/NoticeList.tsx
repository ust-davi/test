import { useEffect, useState } from 'react';
import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  Icon,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { COLOR_GREY_50, COLOR_RED_60 } from '../styles/Color';
import useCommonNoticeStyles from '../styles/tempNoticeStyles';
import useCommonUserStyles from '../styles/tempUserStyles';

import NoticeListBox from './NoticeListBox';
import NavBar from '../../components/NavBar';
import { NoticeListRequest, Notice as INotice } from '../type';
import useNoticeList from '../hooks/useNoticeList';
import Footer from '../components/Footer';
import Pagination from '@mui/material/Pagination';

const NoticeList = () => {
  const noticeClasses = useCommonNoticeStyles();
  const userClasses = useCommonUserStyles();
  const classes = useStyles();
  const [expandedId, setExpandedId] = useState<number>(-1);

  const [noticeListRequest, setNoticeListRequest] = useState<NoticeListRequest>(
    {
      direction: 'DESC',
      orderType: 'REG_DATE',
      page: 0,
      size: 10,
    },
  );

  const { data: noticeArrayResponse, refetch } =
    useNoticeList(noticeListRequest);
  const [noticeArray, setNoticeArray] = useState<INotice[]>([]);

  useEffect(() => {
    if (
      noticeArrayResponse?.data?.content?.length !== undefined &&
      noticeArrayResponse?.data?.content?.length > 0
    ) {
      setNoticeArray(noticeArrayResponse.data.content as INotice[]);
    }
  }, [noticeArrayResponse]);

  const onChangePageNumber = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setNoticeListRequest({
      direction: 'DESC',
      orderType: 'REG_DATE',
      page: page - 1,
      size: 10,
    });
    refetch();
  };

  const onClickExpand = (id: number) => {
    setExpandedId((prev) => (id === prev ? -1 : id));
  };

  return (
    <div className={noticeClasses.container}>
      <NavBar />
      <div className={noticeClasses.wrap}>
        <Typography variant="h2" my={15}>
          공지사항
        </Typography>
        <div className={classes.searchWrap}>
          <div className={classes.searchBar}>
            <TextField
              className={userClasses.textfield}
              type="text"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon
                      baseClassName="material-icons-round"
                      className={classes.searchIcon}
                    >
                      search
                    </Icon>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" className={classes.searchBtn}>
              검색
            </Button>
          </div>
          <div className={classes.searchResultWrap}>
            총 <span>{noticeArrayResponse?.data?.totalElements}</span>건의
            공지사항이 있습니다.
          </div>
        </div>
        <ul className={classes.listWrap}>
          {noticeArray?.map((item: any) => {
            return (
              <NoticeListBox
                key={item.id}
                item={item}
                expanded={expandedId === item.id}
                onClick={onClickExpand}
              />
            );
          })}
        </ul>
        <Pagination
          shape="rounded"
          color="primary"
          className={classes.pagination}
          onChange={onChangePageNumber}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NoticeList;

const useStyles = makeStyles((theme: Theme) => ({
  searchWrap: {
    marginBottom: theme.spacing(12.5),
  },
  searchBar: {
    width: '100%',
    display: 'flex',
    '& > div': {
      width: '333px',
    },
    '& > div > input': {
      background: '#f7f7fa',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
  searchResultWrap: {
    marginTop: theme.spacing(17.5),
    '& > span': {
      color: COLOR_RED_60,
    },
  },
  listWrap: {
    borderTop: `1px solid ${COLOR_GREY_50}`,
  },
  searchBtn: {
    marginLeft: '6px !important',
    height: '40px',
    [theme.breakpoints.down('md')]: {
      margin: '20px 6px 0 0 !important',
      height: '40px',
    },
  },
  searchIcon: {
    margin: '15px 12px',
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
}));
