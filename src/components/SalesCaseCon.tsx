import { useHistory } from 'react-router-dom';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
} from '@mui/material';

import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { SalesCaseData } from './SalesData';

const SalesCaseCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickAdminButton = () => {
    history.push('/shopManagement/sales/case/detail');
  };

  return (
    <>
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
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                번호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                결제일시
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                대표자
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                지역
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                등급
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                구분
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                항목
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                기간
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
              <TableCell align="center" className={classes.tableCell}>
                상세
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SalesCaseData.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.id}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(classes.linkText, classes.tableCellText)}
                  >
                    {row.company}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.owner}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.area}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.grade}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.ellipsis, classes.tableCell)}
                >
                  <Typography
                    className={clsx(classes.ellipsis, classes.tableCellText)}
                  >
                    {row.item}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.term}
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
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={onClickAdminButton}
                    className={clsx(classes.linkText, classes.tableCellText)}
                  >
                    {row.detail}
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
      fontWeight: 700,
    },
  },
  tableCell: {
    '&&': {
      fontSize: 16,
      wordBreak: 'keep-all',
      border: `1px solid ${COLOR_GREY_10}`,
      padding: '14px 15px',
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
  errorText: {
    color: COLOR_RED_60,
    fontWeight: 900,
  },
  ellipsis: {
    maxWidth: 211,
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
}));

export default SalesCaseCon;
