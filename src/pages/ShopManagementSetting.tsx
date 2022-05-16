import React from 'react';
import { Route } from 'react-router-dom';
import ShopSettingDetail from '../components/ShopSettingDetail';
import ShopSetting from '../components/ShopSetting';
import ShopMemberShopSetting from './ShopMemberShopSetting';

const ShopManagementQna = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={ShopSetting} />
      <Route
        path={`${match.path}/shopmember`}
        component={ShopMemberShopSetting}
      />
      <Route path={`${match.path}/detail/:id`} component={ShopSettingDetail} />
    </>
  );
};

export default ShopManagementQna;
