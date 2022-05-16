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
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import QnaData from '../components/QnaData';
import clsx from 'clsx';
import SubLayout from '../pages/SubLayout';
import DateRangePicker from '../common/components/DateRangePicker';
import SelectInput from '../common/components/SelectInput';

import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
  COLOR_VIOLET_60,
} from '../common/styles/Color';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
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

const QnaShopDetail = () => {
  const classes = useStyles();
  const history = useHistory();

  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

  const onClickAdminButton = (id: number) => {
    history.push(`/shopManagement/qna/case/detail/${id}`);
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
            1:1문의 상세_ 맨들맨들1
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
            <SelectInput
              size="small"
              placeholder="상태"
              menuItems={statusMenu}
              className={classes.statusSelect}
            />
            <TextField
              size="small"
              placeholder="검색어"
              className={classes.textField}
            />
            <Button
              size="small"
              variant="contained"
              className={classes.searchBtn}
            >
              검색
            </Button>
          </Grid>
          <Box className={classes.rightBox}>
            <SelectInput
              size="small"
              placeholder="25개씩"
              menuItems={listBox}
              className={classes.listSelect}
            />
          </Box>
          <Typography fontWeight={400} py={10}>
            총{' '}
            <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
              {QnaData.length}
            </Typography>{' '}
            건
          </Typography>
          <TableContainer>
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
                    이름
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    문의일자
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
                        className={clsx(
                          classes.linkText,
                          classes.TableCellText,
                        )}
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
      marginTop: theme.spacing(15),
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  content: {
    position: 'relative',
    padding: theme.spacing(25, 15),
  },
  tableHead: {
    '&.MuiTableCell-root': {
      minWidth: 200,
      backgroundColor: COLOR_GREY_0,
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
  statusSelect: {
    '&&': {
      width: 100,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  textField: {
    '&&': {
      height: 30,
      '& input': {
        padding: '5.5px 8px',
      },
    },
  },
  searchBtn: {
    '&.MuiButton-root': {
      minWidth: 58,
      height: 30,
      margin: '0 15px',
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 100,
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
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
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
}));

export default QnaShopDetail;
