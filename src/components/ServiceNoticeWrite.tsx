import Layout from '../pages/Layout';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import {
  TableContainer,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_VIOLET_70,
  COLOR_GREY_60,
  COLOR_UST_70,
  COLOR_WHITE,
  COLOR_GREY_70,
} from '../common/styles/Color';
import { GREY_SHADOW_2DP, GREY_SHADOW_4DP } from '../common/styles/Shadow';
import clsx from 'clsx';

import UploadImageButton from './UploadImageButton';
import DateRangePicker from '../common/components/DateRangePicker';
import useDateRangePickerDefaultValue from '../hooks/useDateRangePickerDefaultValue';
import moment from 'moment';

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

const onSubmit: SubmitHandler<IStoreInquiryForm> = async (data) => {
  const { shopImages } = data;
};

export interface IStoreInquiryForm {
  shopImages: string[];
}

interface IProps {
  onClose: () => void;
}

const ServiceNoticeWrite = ({ onClose }: IProps) => {
  const classes = useStyles();
  const [shopImageIndex, setShopImageIndex] = useState(0);
  const { startDate, setStartDate, endDate, setEndDate } =
    useDateRangePickerDefaultValue({
      startDate: moment().subtract(1, 'year').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    });

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
  return (
    <TableContainer className={classes.tableContainer}>
      <Typography variant="h6">공지사항 등록</Typography>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              중요
            </TableCell>
            <TableCell className={classes.tableCell}>
              <FormControlLabel
                label="중요 공지로 등록"
                control={<Checkbox color="default" />}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              align="center"
              className={clsx(classes.tableHead, classes.tableCell)}
            >
              제목
            </TableCell>
            <TableCell className={classes.tableCell}>
              <TextField fullWidth className={classes.textFieldInput} />
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
              <TextField
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    minHeight: 590,
                    height: 'auto',
                  },
                }}
                className={classes.textFieldInput}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box width="100%" display="flex" justifyContent="center">
        <Button
          variant="contained"
          className={classes.cancelBtn}
          onClick={onClose}
        >
          취소
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
    margin: '20px 30px',
  },
  headTabBox: {
    marginBottom: 11,
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
    width: 560,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: GREY_SHADOW_4DP,
    backgroundColor: COLOR_WHITE,
    color: COLOR_GREY_60,
    borderRadius: 8,
    cursor: 'pointer',
  },
  cancelBtn: {
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

export default ServiceNoticeWrite;
