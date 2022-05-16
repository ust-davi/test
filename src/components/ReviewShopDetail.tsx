import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  Container,
  Paper,
  Box,
  Button,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import ReviewData from '../components/ReviewData';
import clsx from 'clsx';
import SubLayout from '../pages/SubLayout';
import DateRangePicker from '../common/components/DateRangePicker';
import SelectInput from '../common/components/SelectInput';

import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
  COLOR_VIOLET_60,
} from '../common/styles/Color';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import useReviewShopDetail from '../hooks/useReviewShopDetail';
import useUrlParam from '../hooks/useUrlParams';
import { useEffect, useState } from 'react';
import moment from 'moment';

const statusMenu = [
  {
    id: 1,
    value: '상태',
  },
];

const listBox = [
  {
    id: 1,
    value: '5개씩',
  },
  {
    id: 2,
    value: '10개씩',
  },
  {
    id: 3,
    value: '15개씩',
  },
  {
    id: 4,
    value: '20개씩',
  },
  {
    id: 5,
    value: '25개씩',
  },
];

interface MatchParams {
  id: string;
}

const ReviewShopDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();
  const urlParamPage = Number(useUrlParam('page'));
  const urlParamSize = Number(useUrlParam('size'));
  const urlParamStartDate = useUrlParam('startDate');
  const urlParamEndDate = useUrlParam('endDate');

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: urlParamStartDate,
      endDate: urlParamEndDate,
    });

  const [page, setPage] = useState<number>(urlParamPage);
  const [size, setSize] = useState<number>(urlParamSize);
  const storeUuid = match.params.id as string;
  const { data: reviewData, refetch } = useReviewShopDetail({
    storeUuid,
    startDate,
    endDate,
    page: page - 1,
    size,
  });

  useEffect(() => {
    if (urlParamPage) setPage(urlParamPage);
    if (urlParamSize) setSize(urlParamSize);

    if (page && size) refetch();
  }, [urlParamPage, urlParamSize, urlParamStartDate, urlParamEndDate]);

  useEffect(() => {
    console.log(reviewData);
  }, [reviewData]);

  const onClickAdminButton = (id: string) => {
    history.go(-1);
  };

  return (
    <SubLayout>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Box
          bgcolor={COLOR_VIOLET_60}
          display="flex"
          justifyContent="center"
          py={10.25}
          boxShadow={GREY_SHADOW_2DP}
        >
          <Typography variant="h4" color="white">
            리뷰 상세_ 맨들맨들1
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Grid container alignItems="center">
            <DateRangePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            <Box className={classes.statusBox}>
              <SelectInput
                menuItems={statusMenu}
                size="small"
                placeholder="상태"
              />
            </Box>
            <Box className={classes.searchBox}>
              <SelectInput size="small" placeholder="검색어" />
            </Box>
            <Box>
              <Button variant="contained" size="small">
                검색
              </Button>
            </Box>
          </Grid>
          <Box className={classes.rightBox}>
            <Box className={classes.listBox}>
              <SelectInput
                menuItems={listBox}
                size="small"
                placeholder="25개씩"
              />
            </Box>
          </Box>
          <Typography fontWeight={400} py={10}>
            총{' '}
            <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
              {reviewData?.data?.totalElements}
            </Typography>{' '}
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
                {reviewData?.data?.content.map((row, index) => (
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
                        {moment(row.regDate).format('YYYY-MM-DD hh:mm')}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" className={classes.tableCell}>
                      <Typography
                        className={clsx(
                          classes.linkText,
                          classes.TableCellText,
                        )}
                      >
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
                        {row.productName}
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
                        onClick={() => onClickAdminButton(row.storeUuid)}
                        className={clsx(
                          classes.linkText,
                          classes.TableCellText,
                        )}
                      >
                        상세
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
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '0',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  content: {
    position: 'relative',
    padding: theme.spacing(25, 15),
  },
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
  statusBox: {
    '&&': {
      width: 100,
      margin: '0 7.5px',
    },
    '&& .MuiSelect-select': {
      padding: '6.5px 10px',
    },
    '& .MuiMenuItem-root': {
      fontWeight: '400 !important',
    },
  },
  searchBox: {
    '&&': {
      width: 150,
      margin: '0 7.5px',
    },
    '&& .MuiSelect-select': {
      padding: '6.5px 10px',
    },
  },
  listBox: {
    '&&': {
      width: 100,
      margin: '10px 0',
    },
    '&& .MuiSelect-select': {
      padding: '6.5px 10px',
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 60,
      top: 93,
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

export default ReviewShopDetail;
