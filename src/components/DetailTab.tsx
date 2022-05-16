import { useState } from 'react';

import { COLOR_DARK_GREY, COLOR_VIOLET_100 } from '../common/styles/Color';
import { makeStyles } from '@mui/styles';

import DefaultTab from '../common/components/DefaultTab';
import DetailTabQnaCon from './DetailTabQnaCon';
import DetailTabReviewCon from './DetailTabReviewCon';
import DetailTabAdminLogCon from './DetailTabAdminLogCon';
import DetailTabSeasonTicketsCon from './DetailTabSeasonTicketsCon';
import DetailTabMoneyTicketsCon from './DetailTabMoneyTicketsCon';
import DetailTabPaymentListCon from './DetailTabPaymentListCon';
import DetailTabReservationListCon from './DetailTabReservationListCon';
import DetailTabPointCon from './DetailTabPointCon';

const tabs = [
  {
    id: 1,
    value: '1',
    label: '관리자 로그',
    component: <DetailTabAdminLogCon />,
  },
  {
    id: 2,
    value: '2',
    label: '결제내역',
    component: <DetailTabPaymentListCon />,
  },
  {
    id: 3,
    value: '3',
    label: '예약내역',
    component: <DetailTabReservationListCon />,
  },
  {
    id: 4,
    value: '4',
    label: '정기권',
    component: <DetailTabSeasonTicketsCon />,
  },
  {
    id: 5,
    value: '5',
    label: '금액권',
    component: <DetailTabMoneyTicketsCon />,
  },
  {
    id: 6,
    value: '6',
    label: '리뷰',
    component: <DetailTabReviewCon />,
  },
  {
    id: 7,
    value: '7',
    label: '1:1 문의',
    component: <DetailTabQnaCon />,
  },
  {
    id: 8,
    value: '8',
    label: '포인트',
    component: <DetailTabPointCon />,
  },
];

interface DetailTabProps {
  defaultValue: string;
}

const DetailTab = ({ defaultValue }: DetailTabProps) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(defaultValue);

  return (
    <div className={classes.detailTabWrap}>
      <DefaultTab
        tabmenu={tabs}
        defaultValue={defaultValue}
        className={classes.tab}
        onChange={setTabValue}
      />
      {tabs.map(
        (item) =>
          item.value === tabValue && <div key={item.id}>{item.component}</div>,
      )}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  detailTabWrap: {
    width: '100%',
  },
  tab: {
    '& .MuiButtonBase-root': {
      color: COLOR_DARK_GREY,
    },
    '& .Mui-selected': {
      color: `${COLOR_VIOLET_100} !important`,
    },
    '& .MuiTabs-indicator': {
      height: 4,
      borderRadius: 4,
    },
  },
}));

export default DetailTab;
