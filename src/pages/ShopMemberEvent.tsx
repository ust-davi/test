import React from 'react';
import { Route } from 'react-router-dom';
import Event from '../components/shopmember/Event';
import EventDetail from '../components/shopmember/EventDetail';

const ShopMemberEvent = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Event} />
      <Route path={`${match.path}/detail`} component={EventDetail} />
    </>
  );
};

export default ShopMemberEvent;
