import Layout from '../pages/Layout';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { COLOR_VIOLET_60 } from '../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../common/styles/Shadow';

import EventCon from './EventCon';
import SelectInput from '../common/components/SelectInput';

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

const statusMenu = [
  {
    id: 1,
    value: '등록',
  },
  {
    id: 2,
    value: '심사',
  },
  {
    id: 3,
    value: '진행',
  },
  {
    id: 4,
    value: '승인불가',
  },
];

const Event = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickListButton = () => {
    history.push('/shopManagement/event/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          이벤트
        </Typography>
        <Button
          variant="contained"
          size="small"
          disableElevation
          sx={{ mb: 5 }}
          onClick={onClickListButton}
        >
          샵멤버
        </Button>
      </Box>
      <Container
        maxWidth={false}
        component={Paper}
        className={classes.container}
      >
        <Grid container alignItems="center" pb={10}>
          <SelectInput
            size="small"
            placeholder="카테고리"
            menuItems={cateMenu}
            className={classes.cateSelect}
          />
          <SelectInput
            size="small"
            placeholder="상태"
            menuItems={statusMenu}
            className={classes.statusSelect}
          />
          <TextField
            size="small"
            placeholder="검색어"
            className={classes.textField}
          />
          <Button
            variant="contained"
            size="small"
            className={classes.searchBtn}
          >
            검색
          </Button>
        </Grid>
        <EventCon />
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
      marginTop: 30,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: GREY_SHADOW_2DP,
    },
  },
  cateSelect: {
    '&&': {
      width: 100,
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
    '&&': {
      width: 150,
      height: 30,
      '& .MuiOutlinedInput-root': {
        height: 30,
      },
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
  listSelect: {
    '&&': {
      width: 100,
      height: 30,
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
      top: 57,
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

export default Event;
