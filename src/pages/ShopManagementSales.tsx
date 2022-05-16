import React from 'react';
import { Route } from 'react-router-dom';
import Sales from '../components/Sales';
import SalesShopDetail from '../components/SalesShopDetail';
import SalesCaseDetail from '../components/SalesCaseDetail';
import SalesMemberShopDetail from '../components/SalesMemberShopDetail';
import SalesMemberCaseDetail from '../components/SalesMemberCaseDetail';
import ShopMemberSales from './ShopMemberSales';

const ShopManagementSales = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Sales} />
      <Route path={`${match.path}/shopmember`} component={ShopMemberSales} />
      <Route
        path={`${match.path}/member/shop/detail`}
        component={SalesMemberShopDetail}
      />
      <Route
        path={`${match.path}/member/case/detail`}
        component={SalesMemberCaseDetail}
      />
      <Route path={`${match.path}/shop/detail`} component={SalesShopDetail} />
      <Route path={`${match.path}/case/detail`} component={SalesCaseDetail} />
    </>
  );
};

export default ShopManagementSales;
