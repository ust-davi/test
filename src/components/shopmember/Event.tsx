import Layout from '../../pages/Layout';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import {
  Grid,
  Box,
  Paper,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  IconButton,
  Icon,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_WHITE,
  COLOR_DARK_GREY,
  COLOR_GREY_10,
  COLOR_GREY_60,
  COLOR_VIOLET_60,
  COLOR_RED_60,
  COLOR_GREY_50,
  COLOR_GREY_0,
  COLOR_GREY_70,
} from '../../common/styles/Color';
import {
  GREY_SHADOW_2DP,
  VIOLET_SHADOW_2DP,
  GREY_SHADOW_4DP,
} from '../../common/styles/Shadow';
import DefaultTab from '../../common/components/DefaultTab';
import clsx from 'clsx';

import UploadImageButton from '../UploadImageButton';
import DefaultDatePicker from '../../common/components/DefaultDatePicker';
import SelectInput from '../../common/components/SelectInput';
import EventProceedingCon from './EventProceedingCon';
import EventRegisterCon from './EventRegisterCon';
import EventEndCon from './EventEndCon';

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

const quickMenuItems = [
  {
    id: 1,
    label: '회원등록',
  },
  {
    id: 2,
    label: '예약',
  },
  {
    id: 3,
    label: '상품판매',
  },
  {
    id: 4,
    label: 'SMS발송',
  },
];

const headTabMenu = [
  {
    id: 1,
    value: '진행중',
    label: '진행중',
  },
  {
    id: 2,
    value: '등록',
    label: '등록',
  },
  {
    id: 3,
    value: '종료',
    label: '종료',
  },
];

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

const onSubmit: SubmitHandler<IStoreInquiryForm> = async (data) => {
  const { shopImages } = data;
};

export interface IStoreInquiryForm {
  shopImages: string[];
}

const Event = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [num, setNum] = useState('');
  const [saleNum, setSaleNum] = useState('');

  const [shopImageIndex, setShopImageIndex] = useState(0);
  const [shopImages, setShopImages] = useState<(FileList | null)[]>([
    null,
    null,
    null,
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          이벤트
        </Typography>
        <div>
          {quickMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="contained"
              color="primary"
              className={classes.quickMenuBtn}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Box>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <DefaultTab
          className={classes.headTab}
          tabmenu={headTabMenu}
          onChange={setTabValue}
          defaultValue={headTabMenu[0].value}
        />
        {tabValue === headTabMenu[0].value && <EventProceedingCon />}
        {tabValue === headTabMenu[1].value && (
          <>
            <div className={classes.rightBox}>
              <Button
                variant="contained"
                color="default"
                className={classes.registerBtn}
                onClick={handleClickOpen}
              >
                등록
              </Button>
            </div>
            <Dialog
              open={open}
              sx={{
                '&& .MuiDialog-paper': {
                  width: 960,
                  minWidth: 960,
                  borderRadius: 4,
                },
              }}
              maxWidth={undefined}
            >
              <DialogTitle sx={{ p: '0 0 30px 0' }}>
                <Box
                  minHeight={75}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor={COLOR_VIOLET_60}
                  boxShadow={GREY_SHADOW_2DP}
                >
                  <Typography variant="h4" color="white">
                    이벤트 등록
                  </Typography>
                  <IconButton
                    className={classes.closeBtn}
                    onClick={handleClose}
                  >
                    <Icon>close</Icon>
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent sx={{ p: '30px 33px' }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        component="th"
                        align="center"
                        className={clsx(classes.tableHead, classes.tableCell)}
                      >
                        카테고리
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <SelectInput
                          placeholder="카테고리"
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
                      <TableCell className={classes.tableCell}>
                        <Grid container alignItems="center">
                          <TextField
                            sx={{ width: 465 }}
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
                          onChange={(e) =>
                            setNum(inputPriceFormat(e.target.value))
                          }
                          className={classes.textField}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
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
                          <Typography
                            ml={5}
                            color={COLOR_RED_60}
                            fontWeight={400}
                          >
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
                      <TableCell className={classes.tableCell}>
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
                      <TableCell className={classes.tableCell}>
                        <Grid
                          container
                          columnSpacing={5}
                          rowSpacing={10}
                          py={13}
                        >
                          <Grid item display="flex" flexDirection="column">
                            <Typography
                              variant="caption"
                              fontWeight={400}
                              pb={5}
                            >
                              1. 썸네일 이미지 권장 1000*1000 <br />/ 상세
                              이미지 권장 1000*1000 로 텍스트 수정
                            </Typography>
                            <UploadImageButton
                              id="shop-image-1"
                              value={shopImages[1]}
                              width={300}
                              height={226}
                              className={classes.imageBtn}
                              onChange={(e) => onChangeImageFile(e, 1)}
                            />
                          </Grid>
                          <Grid item display="flex" flexDirection="column">
                            <Typography
                              variant="caption"
                              fontWeight={400}
                              pb={5}
                            >
                              1. 썸네일 이미지 권장 1000*1000 <br />/ 상세
                              이미지 권장 1000*1000 로 텍스트 수정
                            </Typography>
                            <UploadImageButton
                              id="shop-image-2"
                              value={shopImages[2]}
                              width={300}
                              height={226}
                              className={classes.imageBtn}
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
                        이벤트 상태
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <SelectInput
                          placeholder="이벤트 상태"
                          menuItems={eventStatusItems}
                          className={classes.eventStatusSelect}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </DialogContent>

              <DialogActions
                sx={{ justifyContent: 'center', padding: '0 0 37px 0' }}
              >
                <Button
                  onClick={handleClose}
                  autoFocus
                  size="small"
                  variant="contained"
                  color="default"
                  className={classes.confirmBtn}
                >
                  저장
                </Button>
              </DialogActions>
            </Dialog>
            <EventRegisterCon />
          </>
        )}
        {tabValue === headTabMenu[2].value && <EventEndCon />}
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: theme.spacing(9.5, 15),
      marginTop: theme.spacing(15),
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  quickMenuBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      minHeight: 33,
      fontSize: 14,
      borderRadius: 99,
      marginLeft: 17,
      padding: '6px 10px',
      background: COLOR_VIOLET_60,
      boxShadow: VIOLET_SHADOW_2DP,
    },
  },
  headTab: {
    '& .MuiTab-root': {
      minWidth: 'auto',
      padding: '5px 12px',
      color: COLOR_GREY_70,
      fontWeight: 700,
      '&.Mui-selected': {
        color: COLOR_DARK_GREY,
        zIndex: 1,
      },
    },
    '& .MuiTabs-indicator': {
      height: 4,
      borderRadius: 4,
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
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 24,
    },
  },
  registerBtn: {
    '&&': {
      minWidth: 58,
      minHeight: 30,
      fontSize: 14,
      padding: 0,
      background: COLOR_GREY_60,
    },
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
  confirmBtn: {
    '&&': {
      width: 83,
      height: 40,
    },
  },
  closeBtn: {
    '&&': {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: 0,
      margin: 25,
      color: COLOR_WHITE,
    },
  },
  imageBtn: {
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
}));

export default Event;
