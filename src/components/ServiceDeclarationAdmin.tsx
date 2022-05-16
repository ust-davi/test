import {
  Box,
  Grid,
  Button,
  TableContainer,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_60,
  COLOR_UST_70,
} from '../common/styles/Color';

const memberInfoItems = [
  {
    id: 1,
    label: '회원분류',
    value: '고객',
  },
  {
    id: 2,
    label: '신고 접수자명',
    value: '홍길동',
    button: '회원 정보',
  },
  {
    id: 3,
    label: '휴대폰 번호',
    value: '010-1234-5678',
  },
  {
    id: 4,
    label: '가입일 / 최근 로그인',
    value: 'YYYY-MM-DD HH:MM / YYYY-MM-DD HH:MM',
  },
];

const receiptInfoItems = [
  {
    id: 1,
    label: '메뉴',
    value: '샵',
  },
  {
    id: 2,
    label: '신고한 샵이름 / 회원명',
    value: '랑스스킨앤바디',
    button: '샵 정보',
  },
  {
    id: 3,
    label: '휴대폰 번호',
    value: '010-1234-5678',
  },
  {
    id: 4,
    label: '신고 접수일',
    value: 'YYYY-MM-DD HH:MM',
  },
  {
    id: 5,
    label: '가입일 / 최근 로그인',
    value: 'YYYY-MM-DD HH:MM / YYYY-MM-DD HH:MM',
  },
  {
    id: 6,
    label: '신고접수이력',
    value: '신고사유 1 5',
  },
];

const contentItems = [
  {
    id: 1,
    label: '신고 사유',
    value: '부적절한 언어 사용',
  },
  {
    id: 2,
    label: '신고 내용',
    value: '반말로 고객 대응을 했습니다.',
  },
  {
    id: 3,
    label: '관리자 메모',
  },
  {
    id: 4,
    label: '변경 히스토리',
    value:
      '홍길동 / YYYY-MM-DD HH:MM / 관리자 메모 입력 \n 홍길동 / YYYY-MM-DD HH:MM / 관리자 메모 입력',
  },
];

interface IProps {
  onClose: () => void;
}

const ServiceDeclarationAdmin = ({ onClose }: IProps) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Typography variant="h6">신고 접수 고객 정보</Typography>
      <Table className={classes.table}>
        <TableBody>
          {memberInfoItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                {item.label}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid container alignItems="center">
                  {item.value}
                  {item.button && (
                    <Button
                      variant="contained"
                      className={classes.memberInfoBtn}
                    >
                      {item.button}
                    </Button>
                  )}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6">신고 접수 정보</Typography>
      <Table className={classes.table}>
        <TableBody>
          {receiptInfoItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                {item.label}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid container alignItems="center">
                  {item.value}

                  {item.button && (
                    <Button
                      variant="contained"
                      className={classes.memberInfoBtn}
                    >
                      {item.button}
                    </Button>
                  )}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6">신고 내용</Typography>
      <Table className={classes.table}>
        <TableBody>
          {contentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                {item.label}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid container alignItems="center">
                  <span
                    style={
                      item.label === '신고 사유'
                        ? { fontWeight: 700 }
                        : { fontWeight: 400 }
                    }
                  >
                    {item.value}
                  </span>
                  {item.label === '관리자 메모' && (
                    <TextField fullWidth className={classes.textFieldInput} />
                  )}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box width="100%" display="flex" justifyContent="center">
        <Button
          variant="contained"
          className={classes.listBtn}
          onClick={onClose}
        >
          목록
        </Button>
        <Button variant="contained" className={classes.submitBtn}>
          등록
        </Button>
      </Box>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme: any) => ({
  tableContainer: {
    margin: '9px 0',
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
  textFieldInput: {
    '&&': {
      '& .MuiOutlinedInput-root': {
        height: 40,
      },
      '& input': {
        padding: '10px 12px',
        fontWeight: 400,
      },
    },
  },
  pointSelect: {
    '&&': {
      width: 150,
      height: 40,
      marginRight: 15,
      '& .MuiSelect-select': {
        fontWeight: 400,
      },
    },
  },
  memberPointSelect: {
    '&&': {
      width: 150,
      height: 40,
      margin: '0 10px',
      '& .MuiSelect-select': {
        fontWeight: 400,
      },
    },
  },
  statusMenuItem: {
    '&.MuiMenuItem-root': {
      fontWeight: 400,
    },
  },
  linkText: {
    '&&': {
      fontWeight: 700,
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_70,
    },
  },
  memberInfoBtn: {
    '&&': {
      minWidth: 'auto',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '20.02px',
      margin: '0 10px',
      padding: '3.5px 12px',
      color: COLOR_GREY_0,
      background: COLOR_GREY_60,
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  listBtn: {
    '&&': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '12px 16px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  submitBtn: {
    '&&': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '12px 16px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
}));

export default ServiceDeclarationAdmin;
