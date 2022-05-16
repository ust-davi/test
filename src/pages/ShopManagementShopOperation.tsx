import React from 'react';
import { Route } from 'react-router-dom';
import ShopOperation from '../components/ShopOperation';
import ShopMemberOperation from '../components/shopmember/ShopOperation';

const ShopManagementShopOperation = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={ShopOperation} />
      <Route
        path={`${match.path}/shopmember`}
        component={ShopMemberOperation}
      />
    </>
  );
};

export default ShopManagementShopOperation;
