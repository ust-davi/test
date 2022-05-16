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

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../common/styles/Color';
import clsx from 'clsx';

import QnaData from '../components/QnaData';

const QnaCaseCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickAdminButton = (id: number) => {
    history.push(`/shopManagement/qna/case/detail/${id}`);
  };

  return (
    <>
      <Typography fontWeight={400} py={10}>
        총{' '}
        <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
          99
        </Typography>
        건
      </Typography>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell
                align="center"
                className={clsx(classes.tableCell, classes.numberCell)}
              >
                번호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                문의일자
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                이름
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                문의유형
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                답변
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                답변일자
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상세
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {QnaData.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.id}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.date}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(classes.linkText, classes.TableCellText)}
                  >
                    {row.company}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.code}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.answer}
                  </Typography>
                </TableCell>

                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.answerDate}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={() => onClickAdminButton(row.id)}
                    className={clsx(classes.linkText, classes.TableCellText)}
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
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      wordBreak: 'keep-all',
    },
  },
  numberCell: {
    width: 53,
  },
  TableCellText: {
    '&&': {
      fontWeight: 400,
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
}));

export default QnaCaseCon;
