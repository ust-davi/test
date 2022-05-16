import SubLayout from '../pages/SubLayout';
import { useMemo, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Container,
  Button,
  Typography,
  Theme,
} from '@mui/material';

import { GREY_SHADOW_2DP } from '../common/styles/Shadow';
import {
  COLOR_VIOLET_60,
  COLOR_DARK_GREY,
  COLOR_GREY_70,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';

import DefaultTab from '../common/components/DefaultTab';
import ProductsDetailNailCon from './ProductsDetailNailCon';
import ProductsDetailMoneyTicketCon from './ProductsDetailMoneyTicketCon';
import ProductsDetailSeasonTicketCon from './ProductsDetailSeasonTicketCon';

import * as ProductsData from '../components/ProductsData';

interface MatchParams {
  id: string;
}

const headTabMenu = [
  {
    id: 1,
    value: '네일아트',
    label: '네일아트',
  },
  {
    id: 2,
    value: '피부관리',
    label: '피부관리',
    disabled: true,
  },
  {
    id: 3,
    value: '왁싱',
    label: '왁싱',
    disabled: true,
  },
  {
    id: 4,
    value: '속눈썹',
    label: '속눈썹',
    disabled: true,
  },
  {
    id: 5,
    value: '금액권',
    label: '금액권',
  },
  {
    id: 6,
    value: '정기권',
    label: '정기권',
  },
];

const statusItems = [
  {
    id: 1,
    label: '전체',
    value: 10,
  },
  {
    id: 2,
    label: '판매 대기',
    value: 1,
  },
  {
    id: 3,
    label: '판매 중',
    value: 18,
  },
  {
    id: 4,
    label: '판매 종료',
    value: 1,
  },
];

const ProductsDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const classes = useStyles();

  // 선택된 Products Tab Value
  const [headTabValue, setHeadTabValue] = useState<string>(
    headTabMenu[0].value,
  );

  const getStatusValues = useMemo(() => {
    const {
      ProductsDetailData,
      ProductsDetailMoneyTicketData,
      ProductsDetailSeasonTicketData,
    } = ProductsData;

    let selectedList: any[] = [];

    switch (headTabValue) {
      case '네일아트':
        selectedList = ProductsDetailData;
        break;
      case '금액권':
        selectedList = ProductsDetailMoneyTicketData;
        break;
      case '정기권':
        selectedList = ProductsDetailSeasonTicketData;
        break;
      default:
        break;
    }

    return statusItems.map((status) => {
      let value = 0;

      switch (status.id) {
        // 전체
        case 1:
          value = selectedList.length;
          break;
        // 판매대기
        case 2:
          value = selectedList.filter(
            (data) => data.status[0].value === '판매대기',
          ).length;
          break;
        // 판매중
        case 3:
          value = selectedList.filter(
            (data) => data.status[0].value === '판매중',
          ).length;
          break;
        // 판매종료
        case 4:
          value = selectedList.filter(
            (data) => data.status[0].value === '판매종료',
          ).length;
          break;
        default:
          break;
      }
      return {
        ...status,
        value,
      };
    });
  }, [headTabValue]);

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
            상품정보 상세_맨들맨들1
          </Typography>
        </Box>
        <Grid container className={classes.content}>
          <Typography variant="h6" fontWeight={500} width="100%">
            등록 상품 정보
          </Typography>
          <div className={classes.headTabBox}>
            <DefaultTab
              tabmenu={headTabMenu}
              defaultValue={headTabMenu[0].value}
              className={classes.headTab}
              onChange={setHeadTabValue}
            />
          </div>
          <div className={classes.rightBox}>
            {getStatusValues.map((item) => (
              <Button
                key={item.id}
                color="default"
                className={classes.statusBtn}
              >
                {item.label} ({item.value})
              </Button>
            ))}
          </div>
          {headTabValue === headTabMenu[0].value && <ProductsDetailNailCon />}
          {headTabValue === headTabMenu[4].value && (
            <ProductsDetailMoneyTicketCon />
          )}
          {headTabValue === headTabMenu[5].value && (
            <ProductsDetailSeasonTicketCon />
          )}
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
    padding: 30,
  },
  headTabBox: {
    marginTop: 15,
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
  rightBox: {
    '&&': {
      display: 'flex',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 20,
      top: 108,
    },
  },
  statusBtn: {
    '&.MuiButton-root': {
      fontSize: 16,
      fontWeight: 900,
      padding: theme.spacing(3, 7.5),
    },
  },
}));

export default ProductsDetail;
