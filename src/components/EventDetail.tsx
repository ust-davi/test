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
  TextField,
  DialogActions,
  Dialog,
  DialogTitle,
  Icon,
  DialogContent,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_20,
  COLOR_VIOLET_60,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_60,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_GREY_50,
  COLOR_RED_60,
  COLOR_WHITE,
  COLOR_DARK_GREY,
  COLOR_VIOLET_30,
  COLOR_UST_70,
  COLOR_UST_0,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, GREY_SHADOW_4DP } from '../common/styles/Shadow';

import SelectInput from '../common/components/SelectInput';
import DefaultDatePicker from '../common/components/DefaultDatePicker';
import UploadImageButton from './UploadImageButton';
import Confirm from '../common/components/Confirm';

const cateMenu = [
  {
    id: 1,
    value: '네일아트',
  },
  {
    id: 2,
    value: '피부관리',
  },
  {
    id: 3,
    value: '속눈썹',
  },
  {
    id: 4,
    value: '태닝',
  },
  {
    id: 5,
    value: '왁싱',
  },
  {
    id: 6,
    value: '아이브로우',
  },
  {
    id: 7,
    value: '발관리',
  },
  {
    id: 8,
    value: '체형관리',
  },
  {
    id: 9,
    value: '마사지',
  },
];

const eventChangeItems = [
  {
    id: 1,
    value: '심사',
  },
  {
    id: 2,
    value: '승인',
  },
  {
    id: 3,
    value: '승인불가',
  },
  {
    id: 4,
    value: '이벤트 종료',
  },
];

interface MatchParams {
  id: string;
}
export interface IStoreInquiryForm {
  shopImages: string[];
}

const MembersGeneralDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();

  const [num, setNum] = useState('');
  const [saleNum, setSaleNum] = useState('');
  const [open, setOpen] = useState(false);
  const [approveAlertOpen, setApproveAlertOpen] = useState<boolean>(false);

  const [disapproveAlertOpen, setDisapproveAlertOpen] =
    useState<boolean>(false);
  const [eventFlag, setEventFlag] = useState<string>();
  const [shopImageIndex, setShopImageIndex] = useState(0);
  const [shopImages, setShopImages] = useState<(FileList | null)[]>([
    null,
    null,
    null,
  ]);

  const onChangeImageFile = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setShopImageIndex(index);
    const file = e.target.files;
    const newShopImages = [...shopImages];
    newShopImages[index] = file;
    setShopImages(newShopImages);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    if (eventFlag === '승인') {
      setApproveAlertOpen(true);
    } else if (eventFlag === '승인불가') {
      setDisapproveAlertOpen(true);
    }
    handleClose();
  };

  const handleApproveConfirm = () => {
    setApproveAlertOpen(false);
  };

  const handleApproveClose = () => {
    setApproveAlertOpen(false);
  };

  const handleDisapproveConfirm = () => {
    setDisapproveAlertOpen(false);
  };

  const handleDisapproveClose = () => {
    setDisapproveAlertOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setEventFlag(undefined);
  };

  const onClickButton = () => {
    history.push('/shopManagement/event');
  };

  const onClickListButton = () => {
    history.push('/shopManagement/event');
  };

  const inputPriceFormat = (str: any) => {
    const comma = (str: any) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str: any) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  return (
    <SubLayout>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Box
          display="flex"
          justifyContent="center"
          py={10.25}
          bgcolor={COLOR_VIOLET_60}
          boxShadow={GREY_SHADOW_2DP}
        >
          <Typography variant="h4" color="white">
            이벤트 상세_맨들맨들뷰티샵
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
                  상호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  맨들맨들 뷰티샵
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
                  휴대폰번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  010-5555-9999
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  샵 전화번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  031-5555-9999
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  진행중인 이벤트
                </TableCell>
                <TableCell className={classes.tableCell}>
                  5건
                  <Button
                    variant="contained"
                    size="small"
                    color="default"
                    onClick={onClickButton}
                    className={classes.rightBtn}
                  >
                    보기
                  </Button>
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
                    color="default"
                    className={classes.rightBtn}
                  >
                    비밀번호 초기화
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">이벤트정보</Typography>
          <Table className={classes.table} sx={{ tableLayout: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  카테고리
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  <SelectInput
                    placeholder={cateMenu[0].value}
                    menuItems={cateMenu}
                    className={classes.cateSelect}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이벤트
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  <Grid container alignItems="center">
                    <TextField
                      sx={{ width: 812 }}
                      className={classes.textField}
                    />
                    <Typography
                      variant="caption"
                      color={COLOR_GREY_50}
                      ml={5}
                      fontWeight={400}
                    >
                      (18/20자)
                    </Typography>
                  </Grid>
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
                <TableCell className={classes.tableCell}>
                  <TextField
                    type="text"
                    sx={{ width: 220 }}
                    value={num}
                    onChange={(e) => setNum(inputPriceFormat(e.target.value))}
                    className={classes.textField}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  할인가격
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Grid container alignItems="center">
                    <TextField
                      value={saleNum}
                      onChange={(e) =>
                        setSaleNum(inputPriceFormat(e.target.value))
                      }
                      sx={{ width: 220 }}
                      className={classes.textField}
                    />
                    <Typography color={COLOR_RED_60} ml={5} fontWeight={400}>
                      약 35% 할인
                    </Typography>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  기간
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  <Grid container alignItems="center">
                    <DefaultDatePicker
                      className={clsx(
                        classes.textField,
                        classes.datePickerTextField,
                      )}
                    />
                    <Typography mx={5} fontWeight={400}>
                      ~
                    </Typography>
                    <DefaultDatePicker
                      className={clsx(
                        classes.textField,
                        classes.datePickerTextField,
                      )}
                    />
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  이벤트 이미지
                </TableCell>
                <TableCell colSpan={3} className={classes.tableCell}>
                  <Grid container columnSpacing={5} rowSpacing={10} py={13}>
                    <Grid item display="flex" flexDirection="column">
                      <Typography variant="caption" fontWeight={400} pb={5}>
                        1. 썸네일 이미지 권장 1000*1000 <br />/ 상세 이미지 권장
                        1000*1000 로 텍스트 수정
                      </Typography>
                      <UploadImageButton
                        id="shop-image-1"
                        value={shopImages[1]}
                        width={300}
                        height={246}
                        className={classes.imageButton}
                        onChange={(e) => onChangeImageFile(e, 1)}
                      />
                    </Grid>
                    <Grid item display="flex" flexDirection="column">
                      <Typography variant="caption" fontWeight={400} pb={5}>
                        2. 썸네일 이미지 권장 1000*1000 <br />/ 상세 이미지 권장
                        1000*1000 로 텍스트 수정
                      </Typography>
                      <UploadImageButton
                        id="shop-image-2"
                        value={shopImages[2]}
                        width={300}
                        height={246}
                        className={classes.imageButton}
                        onChange={(e) => onChangeImageFile(e, 2)}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상태
                </TableCell>
                <TableCell
                  colSpan={3}
                  onClick={handleClickOpen}
                  className={clsx(classes.tableCell, classes.linkText)}
                >
                  심사중
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* 이벤트 체인지 팝업창 시작 */}
          <Dialog
            open={open}
            onClose={handleClose}
            sx={{
              '&& .MuiDialog-paper': {
                width: 328,
                minWidth: 328,
                p: 8,
                borderRadius: 4,
              },
            }}
            maxWidth={undefined}
          >
            <DialogTitle className={classes.dialogTitle}>
              <Icon>info</Icon>
              이벤트 상태 변경
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
              <SelectInput
                size="small"
                placeholder="---------선택---------"
                menuItems={eventChangeItems}
                onChange={setEventFlag}
                className={classes.rootSelect}
              />
            </DialogContent>
            <DialogActions sx={{ padding: 0, justifyContent: 'space-between' }}>
              <Button
                size="small"
                onClick={handleClose}
                className={classes.cancelBtn}
              >
                취소
              </Button>
              <Button
                autoFocus
                disableElevation
                variant="contained"
                color="primary"
                size="small"
                onClick={handleConfirm}
                className={classes.confirmBtn}
              >
                확인
              </Button>
            </DialogActions>
          </Dialog>

          <Confirm
            isOpen={approveAlertOpen}
            message="이벤트 개제를 승인하겠습니까?"
            okFunction={handleApproveConfirm}
            onClose={handleApproveClose}
          />
          <Confirm
            isOpen={disapproveAlertOpen}
            message="이벤트 게재를 거부하겠습니까?"
            okFunction={handleDisapproveConfirm}
            onClose={handleDisapproveClose}
          />
          {/* 이벤트 체인지 팝업창 끝 */}

          <Box width="100%" display="flex" justifyContent="center" mt={15}>
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
    padding: theme.spacing(15, 30),
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
      fontWeight: 400,
      padding: '0 11px',
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
  cateSelect: {
    '&&': {
      width: 152,
      height: 40,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  rootSelect: {
    '& .MuiSelect-select': {
      fontSize: 16,
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px !important',
      borderColor: `${COLOR_GREY_20} !important`,
      boxShadow: GREY_SHADOW_2DP,
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
    overflow: 'hidden',
    boxShadow: GREY_SHADOW_4DP,
    backgroundColor: COLOR_WHITE,
    color: COLOR_GREY_60,
    borderRadius: 8,
    cursor: 'pointer',
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    color: COLOR_DARK_GREY,
    fontSize: '14px !important',
    padding: '0px !important',
    '& .MuiIcon-root': {
      color: COLOR_VIOLET_30,
      marginRight: theme.spacing(6),
    },
  },
  dialogContent: {
    padding: '24px 0 !important',
  },
  MuiAccordionroot: {
    '&:before': {
      display: 'none',
    },
  },
  accodionTitle: {
    '&&': {
      minHeight: '40px !important',
      marginTop: 20,
      padding: '6px 8px',
      borderRadius: 4,
      color: COLOR_UST_70,
      background: COLOR_UST_0,
      '& .MuiIcon-root': {
        marginRight: 7,
        color: COLOR_UST_70,
      },
    },
    '&& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  cancelBtn: {
    '&.MuiButton-root': {
      width: 50,
      minWidth: 50,
      height: 28,
      color: COLOR_GREY_60,
      '&:hover': {
        color: COLOR_GREY_60,
      },
    },
  },
  confirmBtn: {
    '&.MuiButton-root': {
      width: 50,
      minWidth: 50,
      height: 28,
      color: COLOR_VIOLET_70,
      background: COLOR_VIOLET_5,
      '&:hover': {
        color: COLOR_VIOLET_70,
        background: COLOR_VIOLET_5,
      },
    },
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

export default MembersGeneralDetail;
