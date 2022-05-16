import {
  Grid,
  Box,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableContainer,
  TableSortLabel,
  Icon,
  TextField,
  Theme,
} from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_20,
  COLOR_GREY_40,
  COLOR_GREY_5,
  COLOR_GREY_60,
  COLOR_RED_60,
  COLOR_UST_60,
  COLOR_WHITE,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { ServiceCouponData } from './ServiceManagementData';
import DefaultDatePicker from '../common/components/DefaultDatePicker';
import SelectInput from '../common/components/SelectInput';

const shapeItems = [
  {
    id: 1,
    value: '대상형',
  },
];

const IssuedItems = [
  {
    id: 1,
    value: '모든 상품',
  },
];

const ServiceCouponCon = () => {
  const classes = useStyles();
  const history = useHistory();

  // const onClickAdminButton = () => {
  //   history.push(`/shopManagement/servicemanagement/register`);
  // };

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Typography variant="h6" pb={7.5}>
          쿠폰발급정보
        </Typography>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  쿠폰이름
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  금액
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  형태
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                세부
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  발급수
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  사용수
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  등록일자
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  상태
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ServiceCouponData.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className={classes.tableCell}>
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableCell, classes.imgCell)}
                >
                  {row.pay.toLocaleString()}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.shape}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.detail}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.IssuedNum.toLocaleString()}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.usedNum.toLocaleString()}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.date}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <SelectInput
                    size="small"
                    placeholder={row.status[0].value}
                    menuItems={row.status}
                    className={classes.statusSelect}
                    menuItmesClassName={classes.statusMenuItem}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.couponBox}>
        <Typography variant="h6" pb={16.75}>
          쿠폰 등록
        </Typography>
        <Grid container columnSpacing={37.5} rowSpacing={15}>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              쿠폰이름
            </Typography>
            <SelectInput
              size="small"
              placeholder="선택"
              className={classes.couponSelect}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              금액
            </Typography>
            <SelectInput
              size="small"
              placeholder="선택"
              className={classes.couponSelect}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              쿠폰발급형태
            </Typography>
            <SelectInput
              size="small"
              defaultValue={shapeItems[0].value}
              menuItems={shapeItems}
              className={classes.couponShapeSelect}
              menuItmesClassName={classes.couponMenuItem}
            />
            <SelectInput
              size="small"
              defaultValue={IssuedItems[0].value}
              menuItems={IssuedItems}
              className={classes.couponShapeSelect}
              menuItmesClassName={classes.couponMenuItem}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              발급수
            </Typography>
            <SelectInput
              size="small"
              placeholder="선택"
              className={classes.couponSelect}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} minWidth={100} mr={10}>
              사용기간
            </Typography>
            <Grid container alignItems="center">
              <DefaultDatePicker
                className={clsx(classes.textField, classes.datePickerTextField)}
              />
              <Typography mx={5} fontWeight={400}>
                ~
              </Typography>
              <DefaultDatePicker
                className={clsx(classes.textField, classes.datePickerTextField)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="flex-end"
          spacing={3}
          mt={15}
        >
          <Grid item>
            <Button variant="contained" color="default">
              새로입력
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              disabled
              className={classes.deleteBtn}
              disableElevation
            >
              삭제
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              disabled
              className={classes.saveBtn}
              disableElevation
            >
              저장
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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
      fontSize: 16,
      wordBreak: 'keep-all',
      padding: '14px 15px',
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 14,
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  imgCell: {
    width: 300,
    padding: '0 !important',
    '& img': {
      verticalAlign: 'middle',
    },
  },
  tableSortLabel: {
    '&.MuiTableSortLabel-root': {
      width: '100%',
      position: 'relative',
      justifyContent: 'center',
    },
    '& .MuiTableSortLabel-icon': {
      position: 'absolute',
      right: 0,
      fontSize: '1.5rem',
    },
  },
  arrowIcon: {
    color: COLOR_GREY_60,
  },
  datePickerTextField: {
    width: 198,
  },
  textField: {
    '&&': {
      background: COLOR_WHITE,
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
  couponBox: {
    width: '100%',
    minHeight: 300,
    background: COLOR_GREY_0,
    marginTop: 69,
    padding: '32.5px 30px',
    border: `0.5px solid ${COLOR_GREY_20} `,
  },
  couponSelect: {
    '&&': {
      width: 199,
      height: 40,
      background: COLOR_WHITE,
      '& .MuiSelect-select': {
        fontWeight: 400,
      },
    },
  },
  couponShapeSelect: {
    '&&': {
      width: 198,
      height: 40,
      background: COLOR_WHITE,
      marginRight: 21,
      '& .MuiSelect-select': {
        fontWeight: 400,
      },
      '& .MuiSelect-icon': {
        right: 0,
      },
    },
  },
  couponMenuItem: {
    '&.MuiMenuItem-root': {
      fontWeight: 400,
    },
  },
  statusSelect: {
    '& .MuiSelect-select': {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 400,
      padding: '0 !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-icon': {
      right: 0,
    },
  },
  statusMenuItem: {
    '&.MuiMenuItem-root': {
      fontWeight: 400,
    },
  },
  pdNameInput: {
    '&&': {
      width: 593,
      height: 40,
      background: COLOR_WHITE,
    },
  },
  priceInput: {
    '&&': {
      width: 199,
      height: 40,
      background: COLOR_WHITE,
    },
  },
  deleteBtn: {
    '&&': {
      background: COLOR_GREY_5,
      color: COLOR_GREY_40,
    },
  },
  saveBtn: {
    '&&': {
      background: COLOR_GREY_5,
      color: COLOR_GREY_40,
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
}));

export default ServiceCouponCon;
