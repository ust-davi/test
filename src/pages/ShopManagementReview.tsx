import React from 'react';
import { Route } from 'react-router-dom';
import Review from '../components/Review';
import ShopMemberReview from './ShopMemberReview';
import ReviewCaseDetail from '../components/ReviewCaseDetail';
import ReviewShopDetail from '../components/ReviewShopDetail';

const ShopManagementReview = ({ match }: any) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={Review} />
      <Route path={`${match.path}/shopmember`} component={ShopMemberReview} />
      <Route
        exact
        path={`${match.path}/case/detail/:id`}
        component={ReviewCaseDetail}
      />
      <Route
        exact
        path={`${match.path}/shop/detail/:id`}
        component={ReviewShopDetail}
      />
    </>
  );
};

export default ShopManagementReview;
