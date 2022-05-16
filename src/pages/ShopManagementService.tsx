import React from 'react';
import { Route } from 'react-router-dom';
import ServiceMainBannerWrite from '../components/ServiceMainBannerWrite';
import ServiceManagement from '../components/ServiceManagement';

const ShopManagementService = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={ServiceManagement} />
      <Route
        path={`${match.path}/register`}
        component={ServiceMainBannerWrite}
      />
    </>
  );
};

export default ShopManagementService;
