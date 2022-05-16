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

import { EventData } from './EventData';

const EventCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickButton = (id: number) => {
    history.push(`/shopManagement/shopsetting/detail/${id}`);
  };

  const onClickAdminButton = () => {
    history.push(`/shopManagement/event/detail`);
  };

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              등록일시
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
              카테고리
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              이벤트
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              가격
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              할인가격
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              기간
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              상태
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              상세
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {EventData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography
                  onClick={() => onClickButton(row.id)}
                  className={clsx(classes.tableCellText, classes.linkText)}
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
                  {row.category}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.event}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.price}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.sales}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.terms}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.status}
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
      wordBreak: 'keep-all',
      padding: '14px 15px',
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  checkBox: {
    '&&': {
      padding: 0,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 16,
      fontWeight: 400,
      whiteSpace: 'pre-line',
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

export default EventCon;
