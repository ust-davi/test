import React from 'react';
import { Route } from 'react-router-dom';
import Sales from '../components/shopmember/Sales';
import SalesDetail from '../components/shopmember/SalesDetail';

const ShopMemberSales = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Sales} />
      <Route path={`${match.path}/detail`} component={SalesDetail} />
    </>
  );
};

export default ShopMemberSales;
