import React from 'react';
import { Route } from 'react-router-dom';
import Ad from '../components/Ad';
import Calculate from '../components/Calculate';
import CommunityManagement from '../components/CommunityManagement';
import MarketingTool from '../components/MarketingTool';
import ShopManagementProducts from './ShopManagementProducts';
import ShopManagementEvent from './ShopManagementEvent';
import ShopManagementReservaiton from './ShopManagementReservaiton';
import ShopManagementReview from './ShopManagementReview';
import ShopManagementShopOperation from './ShopManagementShopOperation';
import ShopManagementMembers from './ShopManagementMembers';
import ShopManagementSales from './ShopManagementSales';
import ShopManagementQna from './ShopManagementQna';
import SalesManagement from '../components/SalesManagement';
import ShopManagementSetting from './ShopManagementSetting';
import ShopManagementService from './ShopManagementService';
import ServiceCenter from '../components/ServiceCenter';

const ShopManagement = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={ShopManagementShopOperation} />
      <Route path={`${match.path}/sales`} component={ShopManagementSales} />
      <Route
        path={`${match.path}/shopoperation`}
        component={ShopManagementShopOperation}
      />
      <Route
        path={`${match.path}/reservation`}
        component={ShopManagementReservaiton}
      />
      <Route path={`${match.path}/members`} component={ShopManagementMembers} />
      <Route
        path={`${match.path}/products`}
        component={ShopManagementProducts}
      />
      <Route path={`${match.path}/event`} component={ShopManagementEvent} />
      <Route path={`${match.path}/review`} component={ShopManagementReview} />
      <Route path={`${match.path}/qna`} component={ShopManagementQna} />
      <Route path={`${match.path}/calculate`} component={Calculate} />
      <Route path={`${match.path}/ad`} component={Ad} />
      <Route
        path={`${match.path}/shopsetting`}
        component={ShopManagementSetting}
      />
      <Route path={`${match.path}/marketingtool`} component={MarketingTool} />
      <Route
        path={`${match.path}/servicemanagement`}
        component={ShopManagementService}
      />
      <Route
        path={`${match.path}/communitymanagement`}
        component={CommunityManagement}
      />
      <Route
        path={`${match.path}/salesmanagement`}
        component={SalesManagement}
      />
      <Route path={`${match.path}/servicecenter`} component={ServiceCenter} />
    </>
  );
};
export default ShopManagement;
