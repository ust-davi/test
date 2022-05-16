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
import ReviewData from '../components/ReviewData';
import clsx from 'clsx';
import { useQueryClient } from 'react-query';
import { GetReviewShopResponse } from '../type';
import { ApiResponse } from '../common/type';
import { ChangeEvent, useEffect } from 'react';
import moment from 'moment';

const ReviewShopCon = () => {
  const classes = useStyles();
  const history = useHistory();
  const queryClient = useQueryClient();

  const reviewData = queryClient.getQueryData('reviewShop') as
    | ApiResponse<GetReviewShopResponse>
    | undefined;

  const onClickAdminButton = (uuid: string) => {
    const startDate = moment().subtract(1, 'year').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    history.push(
      `/shopManagement/review/shop/detail/${uuid}?startDate=${startDate}&endDate=${endDate}&page=1&size=25`,
    );
  };

  const onChangePagination = (event: ChangeEvent<unknown>, page: number) => {
    // const url = `/shopManagement/review?tab=row&page=${page}&startDate=${sDate}&endDate=${eDate}`;
    // history.push(url);
  };

  return (
    <>
      {reviewData?.data && (
        <Typography fontWeight={400}>
          총{' '}
          <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
            {reviewData?.data?.totalElements}
          </Typography>{' '}
          곳 평점{' '}
          <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
            {/* TODO : 페이지 갯수와 상관없이 전체 별점을 가져올 수 있는 쿼리문 필요 */}
            {(
              reviewData?.data?.content?.reduce(
                (prev, current) => current.reviewAvg + prev,
                0,
              ) / reviewData?.data?.numberOfElements
            ).toFixed(1)}
          </Typography>
        </Typography>
      )}
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
                예약건수
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                리뷰수
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                평점
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                추천수
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                답변수
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상세
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewData?.data?.content?.map((row, index) => (
              <TableRow key={row.storeUuid}>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {reviewData?.data?.number !== undefined &&
                    reviewData?.data?.size !== undefined
                      ? reviewData?.data?.number * reviewData?.data?.size +
                        (index + 1)
                      : 0}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    className={clsx(classes.linkText, classes.TableCellText)}
                  >
                    {row.storeName}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.mngName}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {/* TODO: 예약 건 수 요청 */}0
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.reviewCnt}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.reviewAvg}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.recomCnt}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.answerCnt}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={() => onClickAdminButton(row.storeUuid)}
                    className={clsx(classes.linkText, classes.TableCellText)}
                  >
                    상세
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={reviewData?.data?.totalPages}
          // page={Number(page2)}
          shape="rounded"
          color="primary"
          className={classes.pagination}
          onChange={onChangePagination}
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

export default ReviewShopCon;
