import { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  TableSortLabel,
  IconButton,
  Icon,
  Button,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_GREY_60,
  COLOR_RED_60,
  COLOR_UST_60,
  COLOR_VIOLET_70,
} from '../common/styles/Color';
import clsx from 'clsx';

import { ServiceEventData } from './ServiceManagementData';
import SelectInput from '../common/components/SelectInput';

interface IProps {
  onClickRegister: () => void;
}

const ServiceEventCon = ({ onClickRegister }: IProps) => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(ServiceEventData[0].status[0].value);

  return (
    <>
      <Button
        variant="contained"
        onClick={onClickRegister}
        // onClick={onClickAdminButton}
        className={classes.rightBox}
      >
        이벤트 등록
      </Button>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                번호
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableCell}
                sx={{ minWidth: 302 }}
              >
                <TableSortLabel
                  active
                  className={classes.tableSortLabel}
                  IconComponent={(props) => (
                    <Icon {...props}>keyboard_arrow_down</Icon>
                  )}
                >
                  제목
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                이미지
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                게시기간
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableCell}
                sx={{ width: 130 }}
              >
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
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ServiceEventData.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className={classes.tableCell}>
                  {row.id}
                </TableCell>
                <TableCell align="left" className={classes.tableCell}>
                  {row.title}
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableCell, classes.imgCell)}
                >
                  <img src={row.imgSrc} alt="" />
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.term}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <SelectInput
                    placeholder={row.status[0].value}
                    menuItems={row.status}
                    className={clsx(
                      classes.statusSelect,
                      tabValue === '진행' ? classes.violetText : undefined,
                    )}
                    onChange={setTabValue}
                    menuItmesClassName={classes.statusMenuItem}
                  />
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {row.date}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
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
      fontSize: 16,
      wordBreak: 'keep-all',
      padding: '14px 15px',
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 16,
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
  violetText: {
    '& .MuiSelect-select': {
      color: COLOR_VIOLET_70,
    },
  },
  errorText: {
    color: COLOR_RED_60,
  },
}));

export default ServiceEventCon;
