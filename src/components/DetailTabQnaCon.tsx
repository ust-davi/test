import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Typography,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_RED_60,
} from '../common/styles/Color';
import clsx from 'clsx';

const tabQnaData = [
  {
    id: 1,
    date: 'YYYY.MM.DD HH:MM',
    company: '크리스탈 네일아트',
    question:
      '제가 월요일에 이용하려고 하는데요  손톱을 미리 자르고 가야되나요?  한 번도 안 받아봐서 잘 몰라서요. ',
    answer: '미답변',
  },
  {
    id: 2,
    date: 'YYYY.MM.DD HH:MM',
    company: '맨들맨들 아트파이브',
    question:
      '제가 월요일에 이용하려고 하는데요  손톱을 미리 자르고 가야되나요?  한 번도 안 받아봐서 잘 몰라서요. ',
    answer: '안녕하세요. 정우성님 ^^  그냥 오시면 돼요~  그럼 월요일에 뵈어요!',
  },
  {
    id: 3,
    date: 'YYYY.MM.DD HH:MM',
    company: '랑스스킨케어',
    question:
      '제가 월요일에 이용하려고 하는데요  손톱을 미리 자르고 가야되나요?  한 번도 안 받아봐서 잘 몰라서요. ',
    answer: '그냥 오세요!!!!!!',
  },
];

const DetailTabQnaCon = () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.logTable}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              일시
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              상호
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              문의
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              샵 답변
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabQnaData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.company}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.question}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography
                  className={
                    row.answer === '미답변'
                      ? classes.errorText
                      : classes.tableCellText
                  }
                >
                  {row.answer}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  tableContainer: {
    width: '100%',
  },
  logTable: {
    marginTop: theme.spacing(14),
  },
  tableCell: {
    '&.MuiTableCell-root': {
      position: 'relative',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      padding: 10,
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  tableHead: {
    '&.MuiTableCell-root': {
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  tableCellText: {
    '&&': {
      fontWeight: 400,
    },
  },
  errorText: {
    color: COLOR_RED_60,
    fontWeight: 900,
  },
}));

export default DetailTabQnaCon;
