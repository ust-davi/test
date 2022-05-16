import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
} from '../common/styles/Color';

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

const reviewImage = [
  {
    id: 1,
    imgSrc: 'https://mendlemendle.com/images/renewal_mdmd/review-img-01.jpg',
  },
  {
    id: 2,
    imgSrc: 'https://mendlemendle.com/images/renewal_mdmd/review-img-02.jpg',
  },
  {
    id: 3,
    imgSrc: 'https://mendlemendle.com/images/renewal_mdmd/review-img-03.jpg',
  },
];

const DetailTabReviewCon = () => {
  const classes = useStyles();
  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.logTable}>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                이용일자
              </TableCell>
              <TableCell className={classes.tableCell}>YYYY-MM-DD</TableCell>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                상호
              </TableCell>
              <TableCell className={classes.tableCell}>
                맨들맨들 동탄호수공원점
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                별점
              </TableCell>
              <TableCell className={classes.tableCell}>4.9</TableCell>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                추천여부
              </TableCell>
              <TableCell className={classes.tableCell}>추천</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                이용상품
              </TableCell>
              <TableCell colSpan={3} className={classes.tableCell}>
                [왁싱/여성/바디왁싱] 다리하프
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                이미지
              </TableCell>
              <TableCell colSpan={3} className={classes.tableCell}>
                {reviewImage.map((item) => (
                  <img
                    key={item.id}
                    src={item.imgSrc}
                    className={classes.reviewImage}
                    alt=""
                  />
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                리뷰
              </TableCell>
              <TableCell colSpan={3} className={classes.tableCell}>
                리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이
                표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰
                내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이
                표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className={classes.logTable}>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                이용일자
              </TableCell>
              <TableCell className={classes.tableCell}>YYYY-MM-DD</TableCell>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                상호
              </TableCell>
              <TableCell className={classes.tableCell}>
                맨들맨들 동탄호수공원점
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                별점
              </TableCell>
              <TableCell className={classes.tableCell}>4.9</TableCell>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                추천여부
              </TableCell>
              <TableCell className={classes.tableCell}>추천</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                이용상품
              </TableCell>
              <TableCell colSpan={3} className={classes.tableCell}>
                [왁싱/여성/바디왁싱] 다리하프
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                이미지
              </TableCell>
              <TableCell colSpan={3} className={classes.tableCell}>
                {reviewImage.map((item) => (
                  <img
                    key={item.id}
                    src={item.imgSrc}
                    className={classes.reviewImage}
                    alt=""
                  />
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={clsx(classes.tableHead, classes.tableCell)}
              >
                리뷰
              </TableCell>
              <TableCell colSpan={3} className={classes.tableCell}>
                리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이
                표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰
                내용이 표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이
                표시됩니다. 리뷰 내용이 표시됩니다. 리뷰 내용이 표시됩니다.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
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
    '&&': {
      width: 'calc( 100% - 200px )',
      height: 50,
      lineHeight: '50px',
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
      backgroundColor: COLOR_GREY_5,
      fontWeight: 700,
    },
  },
  errorText: {
    color: COLOR_RED_60,
    fontWeight: 900,
  },
  tableCellText: {
    '&&': {
      fontWeight: 400,
    },
  },
  reviewImage: {
    margin: '10px 5px',
    verticalAlign: 'middle',
    borderRadius: 8,
  },
}));

export default DetailTabReviewCon;
