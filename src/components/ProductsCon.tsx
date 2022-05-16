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

import { ProductsConData } from '../components/ProductsData';

const ProductsCon = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickAdminButton = (id: number) => {
    history.push(`/shopManagement/products/detail/${id}`);
  };

  return (
    <>
      <Typography fontWeight={400} pt={9.32} pb={14}>
        총{' '}
        <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
          99
        </Typography>{' '}
        곳
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
                상품수
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                네일아트
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                피부관리
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                속눈썹
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                태닝
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                왁싱
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                아이브로우
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                발관리
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                체형관리
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                마사지
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
            {ProductsConData.map((row) => (
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
                    {row.grade}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(classes.ellipsis, classes.tableCellText)}
                  >
                    {row.pdNum}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={clsx(classes.tableCellText)}>
                    {row.nail}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.skincare}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.eyelashes}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.tanning}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.waxing}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.eyebrow}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.footcare}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.bodyshape}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.massage}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(
                      classes.tableCellText,
                      !(row.cancelNum === 0) && classes.errorText,
                    )}
                  >
                    {row.cancelNum}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={() => onClickAdminButton(row.id)}
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
  numberCell: {
    width: 53,
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

export default ProductsCon;
