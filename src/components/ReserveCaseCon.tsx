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
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { ReserveCaseData } from './ReserveData';

const ReserveCaseCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickAdminButton = (id: number) => {
    history.push(`/shopManagement/reservation/case/detail/${id}`);
  };

  return (
    <>
      <Typography fontWeight={400} py={10}>
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
                예약일자
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
              <TableCell
                align="center"
                className={clsx(classes.tableCell, classes.ellipsis)}
              >
                예약요청 일시
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ReserveCaseData.map((row) => (
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
                    className={clsx(classes.linkText, classes.tableCellText)}
                  >
                    {row.name}
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
                      !(row.price > 0) && classes.errorText,
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
                      !(row.price > 0) && classes.errorText,
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
                <TableCell
                  align="center"
                  className={clsx(
                    classes.tableCell,
                    classes.reservationDateCell,
                  )}
                >
                  <Typography className={classes.tableCellText}>
                    {row.reservationDate}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={() => onClickAdminButton(row.id)}
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
    '&.MuiTableHead-root': {
      backgroundColor: COLOR_GREY_5,
      '& th': {
        padding: theme.spacing(8),
        fontSize: 16,
        fontWeight: 700,
      },
    },
  },
  tableCell: {
    '&.MuiTableCell-root': {
      wordBreak: 'keep-all',
      padding: 0,
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  reservationDateCell: {
    '&.MuiTableCell-root': {
      width: 185,
      maxWidth: 185,
      height: 101,
      minHeight: 101,
      padding: 0,
      verticalAlign: 'middle',
      '& .MuiTypography-root': {
        position: 'relative',
        lineHeight: '1.2em',
        maxHeight: '3.6em',
        margin: 'auto',
        overflow: 'hidden',
        '&::before': {
          content: '"..."',
          position: 'absolute',
          right: 3,
          bottom: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          right: 1,
          width: '1em',
          height: '1em',
          background: 'white',
        },
      },
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

export default ReserveCaseCon;
