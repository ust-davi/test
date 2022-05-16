import Layout from '../../pages/Layout';
import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { COLOR_VIOLET_60 } from '../../common/styles/Color';
import { GREY_SHADOW_2DP, VIOLET_SHADOW_2DP } from '../../common/styles/Shadow';

import ProductsCon from './ProductsCon';

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

const Products = () => {
  const classes = useStyles();

  return (
    <Layout shopManagement>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontSize={36}>
          상품
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
        <ProductsCon />
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    '&&': {
      position: 'relative',
      width: '100%',
      padding: '41px 0 38px 30px',
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
