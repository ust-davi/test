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

import SelectInput from '../common/components/SelectInput';
import ProductsCon from '../components/ProductsCon';

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

const Products = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickListButton = () => {
    history.push('/shopManagement/products/shopmember');
  };

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          상품
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
        <Grid container alignItems="center">
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
        <Box className={classes.rightBox}>
          <SelectInput
            menuItems={listBox}
            size="small"
            className={classes.listSelect}
            placeholder="25개씩"
          />
        </Box>
        <ProductsCon />
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

export default Products;
