import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {
  Box,
  Grid,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  TextField,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_WHITE,
} from '../../common/styles/Color';
import {
  GREY_SHADOW_2DP,
  GREY_SHADOW_4DP,
  VIOLET_SHADOW_2DP,
} from '../../common/styles/Shadow';
import clsx from 'clsx';

import SelectInput from '../../common/components/SelectInput';
import UploadImageButton from '../UploadImageButton';

const accountItems = [
  {
    id: 1,
    value: 'KB국민은행',
  },
  {
    id: 2,
    value: '신한은행',
  },
  {
    id: 3,
    value: '하나은행',
  },
  {
    id: 4,
    value: '우리은행',
  },
  {
    id: 5,
    value: 'IBK은행',
  },
  {
    id: 6,
    value: 'NH농협은행',
  },
  {
    id: 7,
    value: 'KDB산업은행',
  },
  {
    id: 8,
    value: 'SC제일은행',
  },
  {
    id: 9,
    value: 'BNK부산은행',
  },
  {
    id: 10,
    value: '한국씨티은행',
  },
  {
    id: 11,
    value: 'DGB대구은행',
  },
  {
    id: 12,
    value: 'BNK경남은행',
  },
  {
    id: 13,
    value: 'Sh수협은행',
  },
  {
    id: 14,
    value: 'JB광주은행',
  },
  {
    id: 15,
    value: 'JB전북은행',
  },
  {
    id: 16,
    value: '제주은행',
  },
  {
    id: 17,
    value: '우체국은행',
  },
  {
    id: 18,
    value: '새마을금고',
  },
  {
    id: 19,
    value: '신협은행',
  },
  {
    id: 20,
    value: 'SBI저축은행',
  },
  {
    id: 21,
    value: 'SB저축은행',
  },
  {
    id: 22,
    value: '카카오뱅크',
  },
  {
    id: 23,
    value: '케이뱅크',
  },
  {
    id: 24,
    value: '토스뱅크',
  },
];

const cateItems = [
  {
    id: 1,
    label: '네일아트',
  },
  {
    id: 2,
    label: '피부관리',
  },
  {
    id: 3,
    label: '속눈썹',
  },
  {
    id: 4,
    label: '태닝',
  },
  {
    id: 5,
    label: '왁싱',
  },
  {
    id: 6,
    label: '아이브로우',
  },
  {
    id: 7,
    label: '발관리',
  },
  {
    id: 8,
    label: '체형관리',
  },
  {
    id: 9,
    label: '맛사지',
  },
];

const tradingAreaItems = [
  {
    id: 1,
    label: '대학가',
  },
  {
    id: 2,
    label: '주택가',
  },
  {
    id: 3,
    label: '역세권',
  },
  {
    id: 4,
    label: '상가밀집',
  },
  {
    id: 5,
    label: '기타',
  },
];

const serviceItems = [
  {
    id: 1,
    label: '예약필수',
  },
  {
    id: 2,
    label: '24시간영업',
  },
  {
    id: 3,
    label: '무료주차',
  },
  {
    id: 4,
    label: '주차가능',
  },
  {
    id: 5,
    label: '커플',
  },
  {
    id: 6,
    label: '개인실',
  },
  {
    id: 7,
    label: 'WIFI',
  },
  {
    id: 8,
    label: '샤워시설',
  },
  {
    id: 9,
    label: '여성전용',
  },
  {
    id: 11,
    label: '남성전용',
  },
  {
    id: 12,
    label: '남여화장실구분',
  },
  {
    id: 13,
    label: '반려동물동반',
  },
];

const areaMenu = [
  {
    id: 1,
    value: '전국',
  },
  {
    id: 2,
    value: '서울',
  },
  {
    id: 3,
    value: '경기',
  },
  {
    id: 4,
    value: '인천',
  },
  {
    id: 5,
    value: '강원',
  },
  {
    id: 6,
    value: '제주',
  },
  {
    id: 7,
    value: '대전',
  },
  {
    id: 8,
    value: '충북',
  },
  {
    id: 9,
    value: '충남/세종',
  },
  {
    id: 10,
    value: '부산',
  },
  {
    id: 11,
    value: '울산',
  },
  {
    id: 12,
    value: '경남',
  },
  {
    id: 13,
    value: '대구',
  },
  {
    id: 14,
    value: '경북',
  },
  {
    id: 15,
    value: '광주',
  },
  {
    id: 16,
    value: '전남',
  },
  {
    id: 17,
    value: '전주/전북',
  },
];

const cityMenu = [
  {
    id: 1,
    value: '중구',
  },
  {
    id: 2,
    value: '종로구',
  },
  {
    id: 3,
    value: '서대문구',
  },
  {
    id: 4,
    value: '마포구',
  },
  {
    id: 5,
    value: '은평구',
  },
  {
    id: 6,
    value: '동대문구',
  },
  {
    id: 7,
    value: '종로구',
  },
  {
    id: 8,
    value: '도봉구',
  },
  {
    id: 9,
    value: '성동구',
  },
  {
    id: 10,
    value: '강동구',
  },
  {
    id: 11,
    value: '강남구',
  },
  {
    id: 13,
    value: '성북구',
  },
  {
    id: 14,
    value: '서초구',
  },
  {
    id: 15,
    value: '송파구',
  },
  {
    id: 16,
    value: '노원구',
  },
  {
    id: 17,
    value: '용산구',
  },
  {
    id: 18,
    value: '강북구',
  },
  {
    id: 19,
    value: '광진구',
  },
  {
    id: 20,
    value: '영등포구',
  },
  {
    id: 21,
    value: '관악구',
  },
  {
    id: 22,
    value: '구로구',
  },
  {
    id: 23,
    value: '금천구',
  },
  {
    id: 24,
    value: '동작구',
  },
  {
    id: 25,
    value: '강서구',
  },
  {
    id: 26,
    value: '양천구',
  },
];

const onSubmit: SubmitHandler<IStoreInquiryForm> = async (data) => {
  const { shopImages } = data;
};

export interface IStoreInquiryForm {
  shopImages: string[];
}

const ShopInfoCon = () => {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(true);
  const [shopImageIndex, setShopImageIndex] = useState(0);
  const [shopImages, setShopImages] = useState<(FileList | null)[]>([
    null,
    null,
    null,
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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

  const onClickListButton = () => {
    history.push('/shopManagement/shopsetting');
  };

  return (
    <>
      <Typography variant="h6">가맹정보</Typography>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              대표자
            </TableCell>
            <TableCell className={classes.tableCell}>정우성</TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              생년월일
            </TableCell>
            <TableCell className={classes.tableCell}>YYYY-MM-DD</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              상호
            </TableCell>
            <TableCell className={classes.tableCell}>UST</TableCell>
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
            <TableCell className={classes.tableCell}>010-5555-9999</TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              샵 전화번호
            </TableCell>
            <TableCell className={classes.tableCell}>031-5555-9999</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *주소
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Button
                variant="contained"
                size="small"
                className={classes.rightBtn}
              >
                주소 찾기
              </Button>
            </TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *이메일
            </TableCell>
            <TableCell className={classes.tableCell}>
              ust@ust.co
              <Button
                variant="contained"
                size="small"
                className={classes.rightBtn}
              >
                변경
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *사업자 번호
            </TableCell>
            <TableCell className={classes.tableCell}>123-45-67890</TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              등록일
            </TableCell>
            <TableCell className={classes.tableCell}>등록중</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              정산계좌
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Box display="flex" alignItems="center">
                <SelectInput
                  size="small"
                  placeholder="은행"
                  menuItems={accountItems}
                  className={classes.accountSelect}
                />
                <TextField fullWidth className={classes.textField} />
                <TextField
                  sx={{ '&.MuiTextField-root': { minWidth: 104, ml: 7 } }}
                  className={classes.textField}
                />
              </Box>
            </TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              최근 접속일자
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
              광고
            </TableCell>
            <TableCell className={classes.tableCell}>
              -
              <Button
                variant="contained"
                size="small"
                disabled
                className={classes.rightBtn}
              >
                구매
              </Button>
            </TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              잔여 캐시
            </TableCell>
            <TableCell className={classes.tableCell}>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              쿠폰
            </TableCell>
            <TableCell className={classes.tableCell}>
              -
              <Button
                variant="contained"
                size="small"
                disabled
                className={classes.rightBtn}
              >
                구매
              </Button>
            </TableCell>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              뷰티매니저
            </TableCell>
            <TableCell className={classes.tableCell}>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="h6">샵 정보</Typography>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *샵 이미지
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container columnSpacing={5} rowSpacing={10} py={13}>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    1. 대표 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-1"
                    value={shopImages[0]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 0)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    2. 샵 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-2"
                    value={shopImages[1]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 1)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography
                    component="span"
                    variant="caption"
                    fontWeight={400}
                    pb={5}
                  >
                    3. 샵 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-3"
                    value={shopImages[2]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 2)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    4. 샵 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-4"
                    value={shopImages[3]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 3)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    5. 샵 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-5"
                    value={shopImages[4]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 4)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    6. 시술 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-6"
                    value={shopImages[5]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 5)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    7. 시술 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-7"
                    value={shopImages[6]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 6)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    8. 시술 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-8"
                    value={shopImages[7]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 7)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    9. 시술 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-9"
                    value={shopImages[8]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 8)}
                  />
                </Grid>
                <Grid item display="flex" flexDirection="column">
                  <Typography variant="caption" fontWeight={400} pb={5}>
                    10. 시술 이미지 권장 1200*900
                  </Typography>
                  <UploadImageButton
                    id="shop-image-10"
                    value={shopImages[9]}
                    width={200}
                    height={150}
                    className={classes.imageButton}
                    onChange={(e) => onChangeImageFile(e, 9)}
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
              *카테고리
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container>
                {cateItems.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    label={item.label}
                    control={
                      <Checkbox color="default" onChange={handleChange} />
                    }
                  />
                ))}
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *지역
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container>
                <SelectInput
                  placeholder={areaMenu[0].value}
                  menuItems={areaMenu}
                  className={classes.areaSelect}
                />
                <SelectInput
                  placeholder={cityMenu[0].value}
                  menuItems={cityMenu}
                  className={classes.areaSelect}
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
              *상권
            </TableCell>
            <TableCell className={classes.tableCell}>
              <RadioGroup defaultValue={tradingAreaItems[0].label}>
                <Grid container>
                  {tradingAreaItems.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      label={item.label}
                      control={<Radio color="default" value={item.label} />}
                    />
                  ))}
                </Grid>
              </RadioGroup>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *시술태그
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TextField fullWidth className={classes.textField} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *서비스
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Grid container>
                {serviceItems.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    label={item.label}
                    control={
                      <Checkbox color="default" onChange={handleChange} />
                    }
                  />
                ))}
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *소개글
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TextField fullWidth className={classes.textField} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              *사이트
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TextField fullWidth className={classes.textField} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box width="100%" display="flex" justifyContent="center" mt={15}>
        <Button
          variant="contained"
          className={classes.listBtn}
          onClick={onClickListButton}
        >
          목록
        </Button>
        <Button variant="contained" className={classes.submitBtn}>
          저장
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&.MuiTableCell-root': {
      position: 'relative',
      width: 'calc( 100% - 200px )',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      fontWeight: 400,
      padding: theme.spacing(0, 5),
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
    '&.MuiInputBase-root': {
      width: 152,
      height: 40,
      marginRight: 20,
      '& .MuiSelect-select': {
        padding: 10,
      },
    },
  },
  accountSelect: {
    '&.MuiInputBase-root': {
      width: 150,
      minWidth: 150,
      height: 40,
      marginRight: theme.spacing(7.5),
      fontSize: 16,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
    },
  },
  textField: {
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
  rightBtn: {
    '&&': {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translate(0, -50%)',
      '&.Mui-disabled': {
        background: COLOR_VIOLET_5,
        color: COLOR_VIOLET_40,
      },
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
  violetBold: {
    '&&': {
      fontSize: 17,
      color: COLOR_VIOLET_70,
      fontWeight: 700,
    },
  },
  imageButton: {
    width: 200,
    height: 150,
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
    '&.MuiButton-root': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
      '&:hover': {
        background: COLOR_GREY_60,
      },
    },
  },
  submitBtn: {
    '&.MuiButton-root': {
      minWidth: 'auto',
      lineHeight: '16px',
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
      '&:hover': {
        background: COLOR_GREY_60,
      },
    },
  },
}));

export default ShopInfoCon;
