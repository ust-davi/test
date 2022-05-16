import React from 'react';
import { Route } from 'react-router-dom';
import Members from '../components/shopmember/Members';
import MembersDetail from '../components/shopmember/MembersDetail';

const ShopMemberMembers = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Members} />
      <Route path={`${match.path}/detail`} component={MembersDetail} />
    </>
  );
};

export default ShopMemberMembers;
