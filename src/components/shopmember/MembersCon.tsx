import { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../../common/styles/Color';
import clsx from 'clsx';

import { ShopMemberData } from '../MembersData';

const MembersCon = () => {
  const classes = useStyles();
  const history = useHistory();
  const [checkedList, setCheckedList] = useState<boolean[]>([]);

  const allChecked = useMemo(
    () =>
      checkedList.filter((checked) => checked).length === checkedList.length,
    [checkedList],
  );

  // ShopMemberData 배열의 길이만큼 false로 초기화
  const initCheckList = () => {
    setCheckedList(ShopMemberData.map((_) => false));
  };

  const handleChange = (index: number) => {
    const prevState = [...checkedList];
    const newState: boolean[] = [];

    prevState.forEach((checked, _index) => {
      newState.push(index === _index ? !checked : checked);
    });

    setCheckedList(newState);

    // setCheckedList((prev) =>
    //   prev.map((checked, _index) => (index === _index ? !checked : checked)),
    // );
  };

  const handleAll = (checked: boolean) => {
    // 변경전 체크리스트
    // const prevCheckedList = [...checkedList];
    // setCheckedList(prevCheckedList.map((_) => checked));

    // -> 위와 똑같은 코드
    setCheckedList((prevCheckedList) => prevCheckedList.map((_) => checked));
  };

  const onClickAdminButton = () => {
    history.push(`/shopManagement/members/shopmember/detail`);
  };

  useEffect(() => {
    initCheckList();
  }, []);

  return (
    <>
      <Typography fontWeight={400} py={10}>
        총{' '}
        <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
          99
        </Typography>
        명
      </Typography>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                <FormControlLabel
                  label=""
                  control={
                    <Checkbox
                      color="default"
                      checked={allChecked}
                      onChange={() => handleAll(!allChecked)}
                      className={classes.checkBox}
                    />
                  }
                />
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                이름
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                닉네임
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                가입채널
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                등급
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                휴대폰 번호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                생년월일
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                나이
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                성별
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                예약건
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                결제금액
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                잔여포인트
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                가입일
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                최근로그인
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkedList &&
              ShopMemberData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center" className={classes.tableCell}>
                    <FormControlLabel
                      label=""
                      control={
                        <Checkbox
                          color="default"
                          checked={checkedList[index] || false}
                          defaultChecked={false}
                          onChange={() => handleChange(index)}
                          className={classes.checkBox}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.nickname}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.channel}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.grade}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.phone}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.dateOfBirth}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    className={clsx(classes.ellipsis, classes.tableCell)}
                  >
                    <Typography
                      className={clsx(classes.ellipsis, classes.tableCellText)}
                    >
                      {row.age}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.sex}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.reservationCase}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.payment}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.point}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.signUpDate}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.recentLogin}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography
                      onClick={onClickAdminButton}
                      className={clsx(classes.linkText, classes.tableCellText)}
                    >
                      {row.admin}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          count={10}
          shape="rounded"
          color="primary"
          className={classes.pagination}
        />
      </TableContainer>
    </>
  );
};

const useStyles = makeStyles((theme: any) => ({
  tableContainer: {
    margin: '9px 0',
  },
  tableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_5,
    },
    '&& th': {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  tableCell: {
    '&&': {
      wordBreak: 'keep-all',
      padding: '14px 15px',
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  checkBox: {
    '&&': {
      padding: 0,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 16,
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
  linkText: {
    '&&': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
  errorText: {
    color: COLOR_RED_60,
  },
  ellipsis: {
    maxWidth: 211,
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default MembersCon;
