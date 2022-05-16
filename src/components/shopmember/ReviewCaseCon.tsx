import React, { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
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
} from '../../common/styles/Color';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { GetReviewRowResponse } from '../../type';
import { ApiResponse } from '../../common/type';
import useUrlParam from '../../hooks/useUrlParams';

const ReviewCaseCon = () => {
  const classes = useStyles();
  const history = useHistory();
  const queryClient = useQueryClient();

  const reviewData = queryClient.getQueryData('reviewRow') as
    | ApiResponse<GetReviewRowResponse>
    | undefined;

  const onClickAdminButton = (uuid: string) => {
    history.push(`/shopManagement/review/case/detail/${uuid}`);
  };

  const tab = useUrlParam('tab');
  const page2 = useUrlParam('page');
  const sDate = useUrlParam('startDate');
  const eDate = useUrlParam('endDate');

  const onChangePagination = (event: ChangeEvent<unknown>, page: number) => {
    const url = `/shopManagement/review?tab=row&page=${page}&startDate=${sDate}&endDate=${eDate}`;
    history.push(url);
  };

  return (
    <>
      {reviewData?.data && (
        <Typography fontWeight={400} py={10}>
          총{' '}
          <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
            {reviewData?.data?.numberOfElements}
          </Typography>
          건 평점{' '}
          <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
            {/* TODO : 페이지 갯수와 상관없이 전체 별점을 가져올 수 있는 쿼리문 필요 */}
            {(
              reviewData?.data?.content?.reduce(
                (prev, current) => current.starScore + prev,
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
                일자
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                이름
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                카테고리
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상품
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                별점
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                추천
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                답변
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                상세
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewData?.data?.content?.map((row, index) => (
              <TableRow key={row.reviewUuid}>
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
                  <Typography className={classes.TableCellText}>
                    {row.regDate.substring(0, 10)}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.categoryMainName}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.categorySubName}
                  </Typography>
                </TableCell>

                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.starScore}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.recommend === 'Y' ? '추천' : '추천안함'}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.TableCellText}>
                    {row.answer ? '답변완료' : '미답변'}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography
                    onClick={() => onClickAdminButton(row.userUuid)}
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
          page={Number(page2)}
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
  ellipsis: {
    maxWidth: 211,
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default ReviewCaseCon;
