import Layout from '../../pages/Layout';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
  Theme,
  Hidden,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {
  COLOR_DARK_GREY,
  COLOR_GREY_70,
  COLOR_VIOLET_60,
} from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import SelectInput from '../../common/components/SelectInput';
import MembersCon from './MembersCon';

const gradeMenu = [
  {
    id: 1,
    value: '일반',
  },
  {
    id: 2,
    value: '파트너',
  },
  {
    id: 3,
    value: 'FC',
  },
  {
    id: 4,
    value: '직영',
  },
];

const statusMenu = [
  {
    id: 1,
    value: '상태',
  },
];

const listBox = [
  {
    id: 1,
    value: '5개씩',
  },
  {
    id: 2,
    value: '10개씩',
  },
  {
    id: 3,
    value: '15개씩',
  },
  {
    id: 4,
    value: '20개씩',
  },
  {
    id: 5,
    value: '25개씩',
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

const Members = () => {
  const classes = useStyles();

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          회원
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
        <Grid container alignItems="center">
          <TextField
            size="small"
            placeholder="회원이름, 전화번호"
            className={classes.textField}
          />
          <Button
            variant="contained"
            size="small"
            className={classes.searchBtn}
          >
            검색
          </Button>
          <SelectInput
            menuItems={gradeMenu}
            className={classes.gradeSelect}
            size="small"
            placeholder="회원 멤버십"
          />
          <SelectInput
            menuItems={statusMenu}
            className={classes.statusSelect}
            size="small"
            placeholder="상태"
          />
        </Grid>
        <Box className={classes.rightBox}>
          <Button
            variant="contained"
            size="small"
            color="default"
            className={classes.submitBtn}
          >
            등록
          </Button>
          <Button
            variant="contained"
            size="small"
            color="default"
            className={classes.submitBtn}
          >
            수신그룹등록
          </Button>
          <SelectInput
            menuItems={listBox}
            className={classes.listSelect}
            size="small"
            placeholder="25개씩"
          />
        </Box>
        <MembersCon />
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '19px 30px',
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  gradeSelect: {
    '&&': {
      width: 150,
      height: 30,
      marginRight: 15,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
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
  textField: {
    '& .MuiInputBase-root': {
      height: 30,
      '& input': {
        padding: '5.5px 8px',
      },
    },
  },
  searchBtn: {
    '&.MuiButton-root': {
      minWidth: 58,
      height: 30,
      margin: '0 15px',
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 80.2,
    },
  },
  submitBtn: {
    '&.MuiButton-root': {
      minWidth: 58,
      height: 30,
      padding: '4.5px 16px',
      marginRight: theme.spacing(7.5),
    },
  },
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
      '& .MuiSelect-select': {
        padding: '5.5px 10px',
      },
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
}));

export default Members;
