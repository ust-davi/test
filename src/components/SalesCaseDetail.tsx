import SubLayout from '../pages/SubLayout';
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
} from '@mui/material';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_VIOLET_60,
  COLOR_GREY_60,
  COLOR_UST_60,
  COLOR_VIOLET_70,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

interface MatchParams {
  id: string;
}

const SalesCaseDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickListButton = () => {
    history.push('/shopManagement/sales');
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
            샵 매출 상세
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Typography variant="h6">샵 정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상호
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  랑스스킨앤바디
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  담당자 이름
                </TableCell>
                <TableCell className={classes.tableCell}>정우성</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  전화번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  010-1234-5678
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  주소
                </TableCell>
                <TableCell className={classes.tableCell}>
                  강원도 강릉시 분목동 99-1번지
                </TableCell>
              </TableRow>
              <TableRow>
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
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  최근 로그인
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">매출 정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제번호
                </TableCell>
                <TableCell className={classes.tableCell}>1905m0001</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  구분
                </TableCell>
                <TableCell className={classes.tableCell}>광고구매</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  항목
                </TableCell>
                <TableCell className={classes.tableCell}>메인추천</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  기간
                </TableCell>
                <TableCell className={classes.tableCell}>
                  2022-01-01 ~ 2022-02-28 (59일)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제수단
                </TableCell>
                <TableCell className={classes.tableCell}>
                  신용카드 : KB국민카드 <br />
                  카드번호 : 557042*********5 <br />
                  승인번호 : 12345678 <br />
                  승인시각 : 202012 07190701
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제상태
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.violetBold)}
                >
                  결제완료 YYYY-MM-DD HH:MM:SS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제금액
                </TableCell>
                <TableCell className={classes.tableCell}>99,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제정보 상세
                </TableCell>
                <TableCell className={classes.tableCell}>
                  쿠폰할인 : -10.000원 (쿠폰명)
                  <br />
                  포인트 사용 : -3,000원 <br />
                  적립 포인트 : 200원
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Box width="100%" display="flex" justifyContent="center" my={23.5}>
            <Button
              variant="contained"
              className={classes.listBtn}
              onClick={onClickListButton}
            >
              목록
            </Button>
          </Box>
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: any) => ({
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
    padding: '30px 60px',
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
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  listBtn: {
    '&&': {
      minWidth: 83,
      minHeight: 40,
      fontWeight: 700,
      background: COLOR_GREY_60,
      padding: '6px 16px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  linkText: {
    '&&': {
      fontWeight: 'bold',
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
  boldText: {
    '&&': {
      fontWeight: 'bold',
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

export default SalesCaseDetail;
