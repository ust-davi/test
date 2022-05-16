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
} from '@mui/material';

import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { SalesMemberShopData } from './SalesData';

const SalesMemberShopCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickDetailButton = () => {
    history.push('/shopManagement/sales/member/shop/detail');
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
                순위
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상호
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
                판매중상품
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                매출건수
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                매출금액
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                신용카드
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                가상계좌
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                금액권
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                정기권
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                평균단가
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
            {SalesMemberShopData.map((row) => (
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
                    {row.name}
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
                    {row.salesPd}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.salesCase}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.price.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
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
                    {row.certificate.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.seasonTicket.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.averagePrice.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(
                      classes.tableCellText,
                      row.cancelPrice && classes.errorText,
                    )}
                  >
                    {row.cancel}
                    {row.cancelPrice && `(${row.cancelPrice.toLocaleString()})`}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={onClickDetailButton}
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

export default SalesMemberShopCon;
