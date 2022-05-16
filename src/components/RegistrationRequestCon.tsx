import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  Theme,
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

import RegistrationRequestData from './ShopSettingData';

const RegistrationRequestCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickAdminButton = (id: number) => {
    history.push(`/shopManagement/shopsetting/detail/${id}`);
  };

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              번호
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
              휴대폰 번호
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              카테고리
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              가입일
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              등록 요청일
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              담당자
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              관리
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RegistrationRequestData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.id}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography
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
                  {row.phone}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.category}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.signUpDate}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.registrationRequestDate}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.manager}
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
      wordBreak: 'keep-all',
      padding: theme.spacing(7, 7.5),
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
  ellipsis: {
    maxWidth: 211,
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default RegistrationRequestCon;
