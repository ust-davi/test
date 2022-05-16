import React from 'react';
import { Route } from 'react-router-dom';
import Members from '../components/Members';
import MembersShopDetail from '../components/MembersShopDetail';
import MembersGeneralDetail from '../components/MembersGeneralDetail';
import ShopMemberMembers from './ShopMemberMembers';

const ShopManagementMembers = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Members} />
      <Route path={`${match.path}/shopmember`} component={ShopMemberMembers} />
      <Route path={`${match.path}/shop/detail`} component={MembersShopDetail} />
      <Route
        path={`${match.path}/general/detail`}
        component={MembersGeneralDetail}
      />
    </>
  );
};

export default ShopManagementMembers;
