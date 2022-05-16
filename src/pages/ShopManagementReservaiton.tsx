import React from 'react';
import { Route } from 'react-router-dom';
import Reservation from '../components/Reservation';
import ShopMemberReservation from './ShopMemberReservation';
import ReserveCaseDetail from '../components/ReserveCaseDetail';
import ReserveHistoryCaseDetail from '../components/ReserveHistoryCaseDetail';
import ReserveHistoryShopDetail from '../components/ReserveHistoryShopDetail';
import ReserveShopDetail from '../components/ReserveShopDetail';

const ShopManagementReservation = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Reservation} />
      <Route
        path={`${match.path}/shopmember`}
        component={ShopMemberReservation}
      />
      <Route
        path={`${match.path}/case/detail/:id`}
        component={ReserveCaseDetail}
      />
      <Route
        path={`${match.path}/shop/detail/:id`}
        component={ReserveShopDetail}
      />
      <Route
        path={`${match.path}/history/case/detail/:id`}
        component={ReserveHistoryCaseDetail}
      />
      <Route
        path={`${match.path}/history/shop/detail/:id`}
        component={ReserveHistoryShopDetail}
      />
    </>
  );
};

export default ShopManagementReservation;
