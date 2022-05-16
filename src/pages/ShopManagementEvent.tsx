import React from 'react';
import { Route } from 'react-router-dom';
import Event from '../components/Event';
import EventDetail from '../components/EventDetail';
import ShopMemberEvent from './ShopMemberEvent';

const ShopManagementEvent = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Event} />
      <Route path={`${match.path}/shopmember`} component={ShopMemberEvent} />
      <Route path={`${match.path}/detail`} component={EventDetail} />
    </>
  );
};

export default ShopManagementEvent;
