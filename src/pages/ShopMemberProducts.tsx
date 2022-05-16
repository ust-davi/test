import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../components/shopmember/Products';

const ShopMemberProducts = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Products} />
    </>
  );
};

export default ShopMemberProducts;
