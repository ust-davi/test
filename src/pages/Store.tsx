import React from 'react';
import { Route } from 'react-router-dom';
import StoreInquiry from './StoreInquiry';
import StoreMain from './StoreMain';

const Store = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={StoreInquiry} />
      <Route path={`${match.path}/form`} component={StoreInquiry} />
    </>
  );
};

export default Store;
