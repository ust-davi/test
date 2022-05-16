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

import { SalesMemberCaseData } from './SalesData';

const SalesMemberCaseCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickNameButton = () => {
    history.push('/shopManagement/members/general/detail');
  };

  const onClickCompanyButton = (id: number) => {
    history.push(`/shopManagement/shopsetting/detail/${id}`);
  };

  const onClickAdminButton = () => {
    history.push('/shopManagement/sales/member/case/detail');
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
                회원이름
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                결제번호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                구분
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상품
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                금액
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                할인금액
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                결제금액
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                결제수단
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                결제상태
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                예약일시
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SalesMemberCaseData.map((row) => (
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
                  <Typography
                    onClick={onClickNameButton}
                    className={clsx(classes.linkText, classes.tableCellText)}
                  >
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={() => onClickCompanyButton(row.id)}
                    className={clsx(classes.linkText, classes.tableCellText)}
                  >
                    {row.company}
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
                    {row.prodcut}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(
                      classes.tableCellText,
                      row.price < 0 && classes.errorText,
                    )}
                  >
                    {row.price.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.sale.toLocaleString()}
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
                  <Typography className={classes.tableCellText}>
                    {row.method}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(
                      classes.tableCellText,
                      row.status === '결제취소' && classes.errorText,
                    )}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.reservationDate}
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

export default SalesMemberCaseCon;
