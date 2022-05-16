import SubLayout from '../../pages/SubLayout';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';
import {
  COLOR_GREY_5,
  COLOR_GREY_10,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_WHITE,
} from '../../common/styles/Color';
import clsx from 'clsx';

import useReviewUser from '../../hooks/useReviewUser';
import useUser from '../../common/hooks/useUser';
import SelectInput from '../../common/components/SelectInput';

const giftItems = [
  {
    id: 1,
    value: '포인트 지급',
  },
  {
    id: 2,
    value: '할인쿠폰 지급',
  },
];

interface MatchParams {
  id: string;
}

const ReviewCaseDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();

  const [giftTab, setGiftTab] = useState<string>(giftItems[0].value);

  const userUuid = match.params.id as string;
  const { data: reviewUserData } = useReviewUser({ userUuid });
  const { data: userData } = useUser({ userUuid });

  useEffect(() => {
    console.log(reviewUserData, userData);
  }, [reviewUserData, userData]);

  const onClickListButton = () => {
    history.go(-1);
  };

  return (
    <SubLayout>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Box
          bgcolor={COLOR_VIOLET_60}
          display="flex"
          justifyContent="center"
          py={10.25}
          boxShadow={GREY_SHADOW_2DP}
        >
          <Typography variant="h4" color="white">
            리뷰 상세
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Typography variant="h6">기본정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이름
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {userData?.data?.name}
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  생년월일/성별
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD (37세) / 남자 {/* TODO: 생년월일 prop필요  */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  휴대폰번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {userData?.data?.phone}
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가입일
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {userData?.data?.reg_DATE}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가입채널
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {userData?.data?.join_TYPE}
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  최근 로그인
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                  {/* <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={clsx(classes.resetBtn, classes.smBtn)}
                  >
                    비밀번호 초기화
                  </Button> */}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h6">리뷰 정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  별점
                </TableCell>
                <TableCell className={classes.tableCell}>5</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  추천
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.violetBold)}
                >
                  추천
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이용상품
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  [왁싱/여성/바디왁싱] 다리하프
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  리뷰
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이
                  표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">샵 답변</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  답변
                </TableCell>
                <TableCell
                  className={clsx(classes.linkText, classes.tableCell)}
                >
                  <TextField
                    fullWidth
                    placeholder="이용해 주셔서 감사합니다"
                    className={classes.textField}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  감사 선물
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <SelectInput
                    size="small"
                    placeholder={giftItems[0].value}
                    menuItems={giftItems}
                    onChange={setGiftTab}
                    className={classes.pointSelect}
                  />

                  <Typography
                    display="inline-block"
                    className={classes.violetBold}
                  >
                    (
                    {giftTab === giftItems[0].value ? (
                      <>잔여포인트 70,000</>
                    ) : (
                      <>잔여쿠폰 105장</>
                    )}
                    )
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.chargingBtn}
                    >
                      충전
                    </Button>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Box width="100%" display="flex" justifyContent="flex-end" mt={15}>
            <Button
              variant="contained"
              className={classes.listBtn}
              onClick={onClickListButton}
            >
              목록
            </Button>
            <Button
              variant="contained"
              className={classes.submitBtn}
              onClick={onClickListButton}
            >
              저장
            </Button>
          </Box>
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '0',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  content: {
    padding: theme.spacing(15, 30, 50, 30),
  },
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&&': {
      width: 'calc( 100% - 200px )',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      fontWeight: 400,
      padding: theme.spacing(7.75, 5),
      whiteSpace: 'pre-line',
    },
  },
  tableHead: {
    '&&': {
      width: 200,
      backgroundColor: COLOR_GREY_5,
      fontWeight: 700,
    },
  },
  pointSelect: {
    '&&': {
      width: 198,
      height: 40,
      marginRight: theme.spacing(5),
      fontSize: 16,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  textField: {
    '&&': {
      height: 40,
      '& .MuiOutlinedInput-root': {
        height: 40,
      },
      '& input': {
        padding: '5.5px 8px',
        fontWeight: 400,
      },
    },
  },
  chargingBtn: {
    '&.MuiButton-root': {
      width: 51,
      minWidth: 51,
      height: 28,
      fontSize: 14,
      fontWeight: 500,
      background: COLOR_GREY_60,
      marginLeft: theme.spacing(5),
      padding: theme.spacing(0),
    },
  },
  // smBtn: {
  //   '&&': {
  //     height: 28,
  //     margin: '11px 0',
  //     float: 'right',
  //   },
  // },
  resetBtn: {
    '&&': {
      background: COLOR_VIOLET_60,
      color: COLOR_WHITE,
      boxShadow: VIOLET_SHADOW_2DP,
    },
    '&&:hover': {
      background: COLOR_VIOLET_60,
      color: COLOR_WHITE,
      boxShadow: VIOLET_SHADOW_2DP,
    },
  },
  pointBtn: {
    '&&': {
      minWidth: 55,
      padding: 0,
      lineHeight: '21px',
    },
  },
  listBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_VIOLET_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
      '&:hover': {
        background: COLOR_VIOLET_60,
      },
    },
  },
  submitBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_VIOLET_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
      '&:hover': {
        background: COLOR_VIOLET_60,
      },
    },
  },
  linkText: {
    '&&': {
      fontWeight: 700,
      // textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_70,
    },
  },
  violetBold: {
    '&&': {
      fontSize: 16,
      color: COLOR_VIOLET_70,
      fontWeight: 700,
    },
  },
}));

export default ReviewCaseDetail;
