import React from 'react';
import { Route } from 'react-router-dom';
import Review from '../components/shopmember/Review';
import ReviewCaseDetail from '../components/shopmember/ReviewCaseDetail';
import ReviewShopDetail from '../components/shopmember/ReviewShopDetail';

const ShopMemberReview = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Review} />
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

export default ShopMemberReview;
