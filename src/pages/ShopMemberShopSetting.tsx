import React from 'react';
import { Route } from 'react-router-dom';
import ShopSetting from '../components/shopmember/ShopSetting';

const ShopMemberShopSetting = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={ShopSetting} />
    </>
  );
};

export default ShopMemberShopSetting;
