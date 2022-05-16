import SubLayout from '../pages/SubLayout';
import { ChangeEvent, useState } from 'react';
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
  FormControlLabel,
  Switch,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import clsx from 'clsx';

import DetailTab from './DetailTab';
import Confirm from '../common/components/Confirm';

const switchs = [
  {
    id: 1,
    label: '푸시',
  },
  {
    id: 2,
    label: '카카오알림톡/SMS',
  },
  {
    id: 3,
    label: '이메일',
  },
];

interface MatchParams {
  id: string;
}

const MembersGeneralDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlePwConfirm = () => {
    setOpen(false);
  };

  const handlePwClose = () => {
    setOpen(false);
  };

  const onClickListButton = () => {
    history.push('/shopManagement/members');
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
            회원 정보 상세
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Typography variant="h6">기본정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이름
                </TableCell>
                <TableCell className={classes.tableCell}>정우성</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  생년월일/성별
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD (37세) / 남자
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  휴대폰번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  010-1111-2222
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가입일
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  가입채널
                </TableCell>
                <TableCell className={classes.tableCell}>
                  휴대폰 번호 가입
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  최근 로그인
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                    onClick={handleClickOpen}
                  >
                    비밀번호 초기화
                  </Button>
                  <Confirm
                    isOpen={open}
                    message="초기화 된 비밀번호(6자리)가 고객의 휴대폰 알림톡 (또는 SMS)으로 발송됩니다. 초기화 하겠습니까?"
                    okFunction={handlePwConfirm}
                    onClose={handlePwClose}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이메일
                </TableCell>
                <TableCell className={classes.tableCell}>-</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  마케팅동의
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {switchs.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      control={<Switch defaultChecked />}
                      label={item.label}
                      labelPlacement="start"
                      className={classes.switchs}
                    />
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">서비스 이용정보</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  예약건
                </TableCell>
                <TableCell className={classes.tableCell}>22건</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제금액
                </TableCell>
                <TableCell className={classes.tableCell}>1,078,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  단골샵
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  맨들맨들 뷰티샵
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  지역
                </TableCell>
                <TableCell className={classes.tableCell}>
                  서울시 강남구
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  보유중인 정기권
                </TableCell>
                <TableCell className={classes.tableCell}>
                  -
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                  >
                    목록
                  </Button>
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  보유중인 금액권
                </TableCell>
                <TableCell className={classes.tableCell}>
                  -
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                  >
                    목록
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  잔여포인트
                </TableCell>
                <TableCell className={classes.tableCell}>
                  3,200
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                  >
                    CS
                  </Button>
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  할인쿠폰
                </TableCell>
                <TableCell className={classes.tableCell}>
                  5장
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                  >
                    CS
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">최근 이용 내역</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  샵 이름
                </TableCell>
                <TableCell
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  크리스탈 네일아트
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  지역
                </TableCell>
                <TableCell className={classes.tableCell}>
                  경기도 수원시
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상품
                </TableCell>
                <TableCell className={classes.tableCell}>
                  네일_손_기본네일 20회
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제금액
                </TableCell>
                <TableCell className={classes.tableCell}>200,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제수단
                </TableCell>
                <TableCell className={classes.tableCell}>신용카드</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  결제일시
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  예약상태
                </TableCell>
                <TableCell className={classes.tableCell}>예약요청</TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  예약일시
                </TableCell>
                <TableCell className={classes.tableCell}>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">상세내역</Typography>
          <DetailTab defaultValue="1" />

          <Box width="100%" display="flex" justifyContent="center" mt={15}>
            <Button
              variant="contained"
              className={classes.listBtn}
              onClick={onClickListButton}
            >
              목록
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
  logTableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_0,
      fontWeight: 700,
    },
  },
  areaSelect: {
    '&&': {
      width: 152,
      height: 40,
      marginRight: 20,
      '& .MuiSelect-select': {
        padding: 10,
      },
    },
  },
  tagInput: {
    '&&': {
      maxWidth: 1000,
      '& .MuiOutlinedInput-root': {
        height: 40,
      },
      '& input': {
        padding: '10px 12px',
        fontWeight: 400,
      },
    },
  },
  radioGroup: {
    '&&': {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  listBtn: {
    '&&': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
    },
    '&&:hover': {
      background: COLOR_GREY_60,
    },
  },
  switchs: {
    '&&': {
      margin: 0,
    },
    '& .MuiFormControlLabel-label': {
      fontWeight: 400,
      paddingRight: 8,
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

export default MembersGeneralDetail;
