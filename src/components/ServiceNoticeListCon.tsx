import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

import {
  COLOR_RED_60,
  COLOR_VIOLET_100,
  COLOR_VIOLET_70,
  COLOR_WHITE,
} from '../common/styles/Color';

import { NoticeListRequest, Notice as INotice } from '../common/type';
import theme from '../common/theme';
import NoticeListBox from '../common/pages/NoticeListBox';
import useNoticeList from '../common/hooks/useNoticeList';

interface IProps {
  onClickRegister: () => void;
}

const ServiceNoticeListCon = ({ onClickRegister }: IProps) => {
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

  const onChangePageNumber = (event: ChangeEvent<unknown>, page: number) => {
    setNoticeListRequest({
      direction: 'DESC',
      orderType: 'REG_DATE',
      page: page - 1,
      size: 10,
    });
    refetch();
  };

  const handleClick = (id: number) => {
    setExpandedId((prev) => (id === prev ? -1 : id));
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={onClickRegister}
        // onClick={onClickAdminButton}
        className={classes.rightBox}
      >
        공지사항 등록
      </Button>
      {noticeArray?.map((item: any) => {
        return (
          <NoticeListBox
            onClick={handleClick}
            expanded={expandedId === item.id}
            item={item}
            key={item.seq}
          />
        );
      })}
      <div className={classes.paginationWrap}>
        <Pagination shape="rounded" onChange={onChangePageNumber} />
      </div>
    </>
  );
};

const useStyles = makeStyles({
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
  searchResult: {
    marginTop: '13px',
    '& > span': {
      color: COLOR_RED_60,
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 20,
    },
  },
  buttonWrap: {
    display: 'flex',
  },
  button: {
    marginLeft: '6px !important',
    height: '40px',
    [theme.breakpoints.down('md')]: {
      margin: '20px 6px 0 0 !important',
      height: '40px',
    },
  },
  paginationWrap: {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px 0',
    '& > button .Mui-selected': {
      background: COLOR_VIOLET_70,
      color: COLOR_WHITE,
      '& ::hover': {
        background: COLOR_VIOLET_70,
      },
    },
    '& > button .MuiPaginationItem-previousNext': {
      color: COLOR_VIOLET_100,
    },
  },
});

export default ServiceNoticeListCon;
