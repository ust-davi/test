import SubLayout from '../../pages/SubLayout';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_60,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_WHITE,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, GREY_SHADOW_4DP } from '../../common/styles/Shadow';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import SelectInput from '../../common/components/SelectInput';

import ex1 from '../../assets/ex_1.jpg';
import ex2 from '../../assets/ex_2.jpg';

interface MatchParams {
  id: string;
}

const eventStatusItems = [
  {
    id: 1,
    value: '진행중',
  },
  {
    id: 2,
    value: '종료',
  },
];

const EventDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickListButton = () => {
    history.push('/shopManagement/event');
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
            이벤트 상세
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Typography variant="h6">이벤트정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이벤트
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  오픈 기념 30% 이벤트
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가격
                </TableCell>
                <TableCell className={classes.tableCell}>50,000</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  할인가격
                </TableCell>
                <TableCell className={classes.tableCell}>35,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  기간
                </TableCell>
                <TableCell className={classes.tableCell}>
                  2021-11-01 ~ 2021-12-31
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  대표이미지
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  <img src={ex1} alt="대표이미지" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상세 이미지
                </TableCell>
                <TableCell
                  colSpan={3}
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  <img src={ex2} alt="상세 이미지" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이벤트 상태
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  <SelectInput
                    placeholder="이벤트 상태"
                    menuItems={eventStatusItems}
                    className={classes.eventStatusSelect}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box width="100%" display="flex" justifyContent="center" my={23.5}>
            <Button
              variant="contained"
              className={classes.listBtn}
              onClick={onClickListButton}
            >
              목록
            </Button>
            <Button variant="contained" className={classes.listBtn}>
              저장
            </Button>
          </Box>
        </Grid>
      </Container>
    </SubLayout>
  );
};

const useStyles = makeStyles((theme: any) => ({
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
  line: {
    '&&': {
      margin: '29px 0',
      borderColor: COLOR_GREY_30,
    },
  },
  content: {
    padding: '30px 60px',
  },
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&&': {
      position: 'relative',
      width: 'calc( 100% - 200px )',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      padding: '0 11px',
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  tableHead: {
    '&&': {
      width: 200,
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  eventStatusSelect: {
    '&&': {
      width: 152,
      height: 40,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  datePickerTextField: {
    width: 198,
  },
  textField: {
    '&&': {
      height: 40,
      '& .MuiOutlinedInput-root': {
        height: 40,
      },
      '& input': {
        padding: '5.5px 8px',
        fontWeight: 400,
      },
    },
  },
  imageButton: {
    width: 300,
    height: 226,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: GREY_SHADOW_4DP,
    backgroundColor: COLOR_WHITE,
    color: COLOR_GREY_60,
    borderRadius: 8,
    cursor: 'pointer',
  },
  listBtn: {
    '&&': {
      minWidth: 83,
      minHeight: 40,
      fontWeight: 700,
      background: COLOR_GREY_60,
      padding: '6px 16px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  linkText: {
    '&&': {
      fontWeight: 400,
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
  rightBtn: {
    '&&': {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translate(0, -50%)',
      '&.Mui-disabled': {
        background: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
    },
  },
  violetBold: {
    '&&': {
      fontSize: 17,
      color: COLOR_VIOLET_70,
      fontWeight: 700,
    },
  },
}));

export default EventDetail;
