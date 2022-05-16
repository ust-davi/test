import SubLayout from '../pages/SubLayout';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
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
  Radio,
  RadioGroup,
  TableHead,
  Checkbox,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { GREY_SHADOW_2DP, GREY_SHADOW_4DP } from '../common/styles/Shadow';
import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_30,
  COLOR_VIOLET_60,
  COLOR_GREY_60,
  COLOR_VIOLET_5,
  COLOR_VIOLET_40,
  COLOR_WHITE,
} from '../common/styles/Color';
import clsx from 'clsx';

import SelectInput from '../common/components/SelectInput';
import UploadImageButton from './UploadImageButton';
import Confirm from '../common/components/Confirm';

const radioItems = [
  {
    id: 1,
    value: '일반',
    label: '일반',
  },
  {
    id: 2,
    value: '제휴(파트너)',
    label: '제휴(파트너)',
  },
  {
    id: 3,
    value: 'FC',
    label: 'FC',
  },
  {
    id: 4,
    value: '직영',
    label: '직영',
  },
];

const rows = [
  {
    id: 1,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김나래',
    type: '샵정보',
    detail: '주소변경',
  },
  {
    id: 2,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김나래',
    type: '기본정보',
    detail: '서비스취소',
  },
  {
    id: 3,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김나래',
    type: '기본정보',
    detail: '입점취소',
  },
  {
    id: 4,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '김수정',
    type: '기본정보',
    detail: '서비스 승인',
  },
  {
    id: 5,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '박실',
    type: '가맹점보',
    detail: '입점승인',
  },
  {
    id: 6,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '염보영',
    type: '가맹점보',
    detail: '모바일 예약 활성화',
  },
  {
    id: 7,
    date: 'YYYY.MM.DD HH:MM ',
    owner: '염보영',
    type: '가맹점보',
    detail: '뷰티매니저 무료 기간 제공',
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
    id: 10,
    label: '남성전용',
  },
  {
    id: 11,
    label: '남여화장실구분',
  },
  {
    id: 12,
    label: '반려동물동반',
  },
];

const onSubmit: SubmitHandler<IStoreInquiryForm> = async (data) => {
  const { shopImages } = data;
};

interface MatchParams {
  id: string;
}

export interface IStoreInquiryForm {
  shopImages: string[];
}
const MembersShopDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [pwAlertOpen, setPwAlertOpen] = useState<boolean>(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlePwConfirm = () => {
    setOpen(false);
  };

  const handlePwClose = () => {
    setOpen(false);
  };

  const handleApproveConfirm = () => {
    setOpen(false);
  };

  const handleApproveClose = () => {
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
            샵 회원 정보 상세
          </Typography>
        </Box>
        <Grid container className={classes.content}>
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
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                  >
                    변경
                  </Button>
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
                  주소
                </TableCell>
                <TableCell className={classes.tableCell}>
                  경기도 화성시 동탄산단 4길 9-16 UST
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
                  이메일
                </TableCell>
                <TableCell className={classes.tableCell}>ust@ust.co</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  사업자 번호
                </TableCell>
                <TableCell className={classes.tableCell}>
                  123-45-67890
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
                  등록일자
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <RadioGroup
                    className={classes.radioGroup}
                    defaultValue={radioItems[0].value}
                  >
                    {radioItems.map((item) => (
                      <FormControlLabel
                        key={item.id}
                        value={item.value}
                        label={item.label}
                        control={<Radio color="default" />}
                      />
                    ))}
                  </RadioGroup>
                </TableCell>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  서비스
                </TableCell>
                <TableCell className={classes.tableCell}>
                  대기
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.rightBtn}
                    onClick={handleClickOpen}
                  >
                    승인
                  </Button>
                  <Confirm
                    isOpen={open}
                    message="입점을 승인하면 샵관리를 통해 샵 정보 등록 및
                    서비스 승인 신청을 할 수 있습니다.
                    입점을 승인하겠습니까?"
                    okFunction={handleApproveConfirm}
                    onClose={handleApproveClose}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  등급
                </TableCell>
                <TableCell className={classes.tableCell}>
                  YYYY-MM-DD HH:MM
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
                <TableCell className={classes.tableCell}>92300</TableCell>
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
                <TableCell className={classes.tableCell}>
                  Basic 무료 기간 YYYY-MM-DD HH:MM
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
                  <Grid
                    container
                    columnSpacing={5}
                    rowSpacing={10}
                    py={13}
                    width={1050}
                  >
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
                      <Typography variant="caption" fontWeight={400} pb={5}>
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
                        6. 샵 이미지 권장 1200*900
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
                        7. 샵 이미지 권장 1200*900
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
                        8. 샵 이미지 권장 1200*900
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
                        9. 샵 이미지 권장 1200*900
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
                        10. 샵 이미지 권장 1200*900
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
                      className={classes.areaSelect}
                      placeholder="서울"
                    />
                    <SelectInput
                      className={classes.areaSelect}
                      placeholder="강남구"
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
                  <TextField fullWidth className={classes.tagInput} />
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
                  <TextField fullWidth className={classes.tagInput} />
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
                  <TextField fullWidth className={classes.tagInput} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h6">관리자 로그</Typography>
          <Table className={classes.table} sx={{ tableLayout: 'auto' }}>
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
                  관리자
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  구분
                </TableCell>
                <TableCell
                  className={clsx(classes.tableHead, classes.tableCell)}
                >
                  상세
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.owner}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.type}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {row.detail}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box width="100%" display="flex" justifyContent="center">
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
    '&.MuiButton-root': {
      minWidth: 'auto',
      fontSize: 14,
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
      fontSize: 14,
      fontWeight: 400,
      background: COLOR_GREY_60,
      padding: '10.5px 26px',
      margin: '0 7.5px',
      '&:hover': {
        background: COLOR_GREY_60,
      },
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
}));

export default MembersShopDetail;
