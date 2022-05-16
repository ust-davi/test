import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../components/Products';
import ShopMemberProducts from './ShopMemberProducts';
import ProductsDetail from '../components/ProductsDetail';

const ShopManagementProducts = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Products} />
      <Route path={`${match.path}/shopmember`} component={ShopMemberProducts} />
      <Route path={`${match.path}/detail/:id`} component={ProductsDetail} />
    </>
  );
};

export default ShopManagementProducts;
