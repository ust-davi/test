import SubLayout from '../pages/SubLayout';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  Button,
  TextField,
} from '@mui/material';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_VIOLET_60,
  COLOR_UST_60,
  COLOR_RED_60,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { SalesShopDetailData } from './SalesData';
import SelectInput from '../common/components/SelectInput';
import DateRangePicker from '../common/components/DateRangePicker';

import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import moment from 'moment';

const listBox = [
  {
    id: 1,
    value: '5개씩',
  },
  {
    id: 2,
    value: '10개씩',
  },
  {
    id: 3,
    value: '15개씩',
  },
  {
    id: 4,
    value: '20개씩',
  },
  {
    id: 5,
    value: '25개씩',
  },
];

const headTabMenu = [
  {
    id: 1,
    value: '회원매출',
    label: '회원매출',
  },
  {
    id: 2,
    value: '샵 매출',
    label: '샵 매출',
  },
];

interface MatchParams {
  id: string;
}

const SalesShopDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

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
            매출 상세_ 맨들맨들1
          </Typography>
        </Box>

        <TableContainer className={classes.tableContainer}>
          <Grid container alignItems="center">
            <DateRangePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            <TextField
              size="small"
              placeholder="검색어"
              className={classes.textField}
            />
            <Button
              variant="contained"
              size="small"
              className={classes.searchBtn}
            >
              검색
            </Button>
          </Grid>
          <Box className={classes.rightBox}>
            <SelectInput
              menuItems={listBox}
              className={classes.listSelect}
              size="small"
              placeholder="25개씩"
            />
          </Box>

          <Typography width="100%" fontWeight={400} pt={9.32} pb={14}>
            총{' '}
            <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
              99
            </Typography>
            건{' '}
            <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
              9,699,000
            </Typography>
            원
          </Typography>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell align="center" className={classes.tableCell}>
                  번호
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  일자
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  구분
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  항목
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  수량
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  결제번호
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  결제금액
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  신용카드
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  가상계좌
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  캐시
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  취소
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SalesShopDetailData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.id}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.date}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.type}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.item}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.amount}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography
                      className={clsx(classes.linkText, classes.tableCellText)}
                    >
                      {row.paymentNum}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography
                      className={clsx(
                        classes.tableCellText,
                        row.payment < 0 && classes.errorText,
                      )}
                    >
                      {row.payment.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography
                      className={clsx(
                        classes.tableCellText,
                        row.credit < 0 && classes.errorText,
                      )}
                    >
                      {row.credit.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.virtual.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography className={classes.tableCellText}>
                      {row.cash.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Typography
                      className={clsx(
                        classes.tableCellText,
                        row.cancel < 0 && classes.errorText,
                      )}
                    >
                      {row.cancel.toLocaleString()}
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
  textField: {
    '&&': {
      height: 30,
      '& input': {
        padding: '5.5px 8px',
      },
    },
  },
  searchBtn: {
    '&.MuiButton-root': {
      minWidth: 58,
      height: 30,
      margin: '0 15px',
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 67,
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginTop: 10.41,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  tableContainer: {
    position: 'relative',
    padding: 30,
  },
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_0,
    },
    '&& th': {
      fontWeight: 700,
    },
  },
  tableCell: {
    '&&': {
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      wordBreak: 'keep-all',
    },
  },
  tableCellText: {
    '&&': {
      fontWeight: 400,
    },
  },
  linkText: {
    '&&': {
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
  errorText: {
    color: COLOR_RED_60,
    fontWeight: 900,
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
}));

export default SalesShopDetail;
