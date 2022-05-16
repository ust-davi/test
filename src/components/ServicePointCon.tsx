import Layout from '../pages/Layout';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import {
  Box,
  Grid,
  Button,
  TableContainer,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
} from '../common/styles/Color';
import SelectInput from '../common/components/SelectInput';

const servicePointItems = [
  {
    id: 1,
    label: '신규 회원 가입',
    detail: [{ id: 1, value: 1000 }],
    desc: '포인트 지급',
  },
  {
    id: 2,
    label: '매일 첫 로그인 시',
    detail: [{ id: 1, value: 10 }],
    desc: '포인트 지급',
  },
  {
    id: 3,
    label: '생일',
    detail: [{ id: 1, value: 1000 }],
    desc: '포인트 지급',
  },
  // {
  //   id: 4,
  //   label: '친구추천',
  //   detail: [{ id: 1, value: 1000 }],
  //   desc: '포인트 지급',
  // },
];

const memberPointItems = [
  {
    id: 1,
    value: 1000000,
  },
];

const vipPointItems = [
  {
    id: 1,
    value: 2500000,
  },
];

const paymentNum = [
  {
    id: 1,
    value: 5,
  },
];

const vipPaymentNum = [
  {
    id: 1,
    value: 15,
  },
];

const totalPaymentsItems = [
  {
    id: 1,
    label: '누적 지급 포인트',
    point: 67890000,
  },
  {
    id: 2,
    label: '첫결제',
    point: 57890000,
  },
  {
    id: 3,
    label: '잔여 포인트',
    point: 10000000,
  },
  {
    id: 4,
    label: '유효기간',
    detail: [
      { id: 1, value: '1개월' },
      { id: 2, value: '3개월' },
      { id: 3, value: '6개월' },
      { id: 4, value: '12개월' },
      { id: 5, value: '1년' },
      { id: 6, value: '2년' },
    ],
  },
];

const ServicePointCon = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Typography variant="h6">자동 지급</Typography>
      <Table className={classes.table}>
        <TableBody>
          {servicePointItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                {item.label}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid container alignItems="center">
                  <SelectInput
                    useCommaNumber
                    defaultValue={item.detail[0].value}
                    menuItems={item.detail}
                    className={classes.pointSelect}
                    menuItmesClassName={classes.statusMenuItem}
                  />
                  {item.desc}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6">회원 등급</Typography>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              패밀리
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container alignItems="center">
                회원가입 즉시
              </Grid>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container alignItems="center">
                포인트 적립률
                <TextField className={classes.textFieldInput} />
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              스페셜
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container alignItems="center">
                누적 결제 금액
                <SelectInput
                  useCommaNumber
                  defaultValue={memberPointItems[0].value}
                  menuItems={memberPointItems}
                  className={classes.memberPointSelect}
                  menuItmesClassName={classes.statusMenuItem}
                />
                이상이거나 누적 결제 횟수
                <SelectInput
                  useCommaNumber
                  defaultValue={paymentNum[0].value}
                  menuItems={paymentNum}
                  className={classes.memberPointSelect}
                  menuItmesClassName={classes.statusMenuItem}
                />
                회 이상 될 경우
              </Grid>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container alignItems="center">
                포인트 적립률
                <TextField className={classes.textFieldInput} />
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              VIP
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container alignItems="center">
                누적 결제 금액
                <SelectInput
                  useCommaNumber
                  defaultValue={vipPointItems[0].value}
                  menuItems={vipPointItems}
                  className={classes.memberPointSelect}
                  menuItmesClassName={classes.statusMenuItem}
                />
                이상이거나 누적 결제 횟수
                <SelectInput
                  useCommaNumber
                  defaultValue={vipPaymentNum[0].value}
                  menuItems={vipPaymentNum}
                  className={classes.memberPointSelect}
                  menuItmesClassName={classes.statusMenuItem}
                />
                회 이상 될 경우
              </Grid>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container alignItems="center">
                포인트 적립률
                <TextField className={classes.textFieldInput} />
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6">총 지급 현황</Typography>
      <Table className={classes.table}>
        <TableBody>
          {totalPaymentsItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                {item.label}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid container alignItems="center">
                  {item.detail?.[0].value && (
                    <SelectInput
                      useCommaNumber
                      defaultValue="기간"
                      menuItems={item.detail}
                      className={classes.pointSelect}
                      menuItmesClassName={classes.statusMenuItem}
                    />
                  )}
                  {item.point?.toLocaleString()}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box width="100%" display="flex" justifyContent="center">
        <Button variant="contained" className={classes.submitBtn}>
          저장
        </Button>
      </Box>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme: any) => ({
  tableContainer: {
    margin: '9px 0',
  },
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&&': {
      position: 'relative',
      width: 'calc( 100% - 200px )',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      padding: '0 11px',
      fontWeight: 400,
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
  textFieldInput: {
    '&&': {
      '& .MuiOutlinedInput-root': {
        height: 40,
        marginLeft: 15,
      },
      '& input': {
        padding: '10px 12px',
        fontWeight: 400,
      },
    },
  },
  pointSelect: {
    '&&': {
      width: 150,
      height: 40,
      marginRight: 15,
      '& .MuiSelect-select': {
        fontWeight: 400,
      },
    },
  },
  memberPointSelect: {
    '&&': {
      width: 150,
      height: 40,
      margin: '0 10px',
      '& .MuiSelect-select': {
        fontWeight: 400,
      },
    },
  },
  statusMenuItem: {
    '&.MuiMenuItem-root': {
      fontWeight: 400,
    },
  },
  linkText: {
    '&&': {
      fontWeight: 700,
      textDecoration: 'underline',
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
  cancelBtn: {
    '&&': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '12px 16px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  submitBtn: {
    '&&': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '12px 16px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
}));

export default ServicePointCon;
