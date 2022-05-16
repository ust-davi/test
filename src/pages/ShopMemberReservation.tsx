import React from 'react';
import { Route } from 'react-router-dom';
import Reservation from '../components/shopmember/Reservation';
import ReserveShopDetail from '../components/shopmember/ReserveShopDetail';

const ShopMemberReservation = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Reservation} />
      <Route path={`${match.path}/shop/detail`} component={ReserveShopDetail} />
    </>
  );
};

export default ShopMemberReservation;
