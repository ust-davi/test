import SubLayout from '../../pages/SubLayout';
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
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';
import {
  COLOR_GREY_5,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_WHITE,
} from '../../common/styles/Color';
import clsx from 'clsx';

interface MatchParams {
  id: string;
}

const QnaCaseDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickListButton = () => {
    history.push('/shopManagement/qna');
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
            문의 상세
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
                <TableCell className={classes.tableCell}>정우성</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  생년월일/성별
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD (37세) / 남자
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
                  010-1111-2222
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가입일
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
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
                  휴대폰 번호 가입
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
                  유형
                </TableCell>
                <TableCell className={classes.tableCell}>시술 문의</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이미지
                </TableCell>
                <TableCell
                  className={clsx(classes.linkText, classes.tableCell)}
                >
                  <Button size="small" variant="contained" color="default">
                    파일 선택
                  </Button>
                  <Typography
                    display="inline-block"
                    fontSize={14}
                    fontWeight={400}
                    ml={5}
                    color={COLOR_UST_70}
                  >
                    이벤트 썸네일_001_JPG
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  문의내용
                </TableCell>
                <TableCell className={classes.tableCell}>
                  문의 내용이 표시됩니다. 문의 내용이 표시됩니다. 문의 내용이
                  표시됩니다. 문의 내용이 표시됩니다. 문의 내용이 표시됩니다.
                  문의 내용이 표시됩니다. 문의 내용이 표시됩니다. 문의 내용이
                  표시됩니다. 문의 내용이 표시됩니다. 문의 내용이 표시됩니다.
                  문의 내용이 표시됩니다. 문의 내용이 표시됩니다. 문의 내용이
                  표시됩니다. 문의 내용이 표시됩니다. 문의 내용이 표시됩니다.
                  문의 내용이 표시됩니다. 문의 내용이 표시됩니다. 문의 내용이
                  표시됩니다. 문의 내용이 표시됩니다. 문의 내용이 표시됩니다.
                  문의 내용이 표시됩니다. 문의 내용이 표시됩니다. 문의 내용이
                  표시됩니다.
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
                  sx={{ color: COLOR_GREY_30 }}
                  className={classes.tableCell}
                >
                  이미지상으로 보니 전체적으로 케어가 필요해 보입니다
                  <br />
                  이미지상으로 보니 전체적으로 케어가 필요해 보입니다
                  <br />
                  이미지상으로 보니 전체적으로 케어가 필요해 보입니다
                  <br />
                  이미지상으로 보니 전체적으로 케어가 필요해 보입니다
                  <br />
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
            <Button variant="contained" className={classes.submitBtn}>
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
    padding: theme.spacing(15, 30),
  },
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&.MuiTableCell-root': {
      position: 'relative',
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
  smBtn: {
    '&&': {
      height: 28,
      margin: '11px 0',
      float: 'right',
    },
  },
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
      fontSize: 17,
      color: COLOR_VIOLET_70,
      fontWeight: 700,
    },
  },
}));

export default QnaCaseDetail;
