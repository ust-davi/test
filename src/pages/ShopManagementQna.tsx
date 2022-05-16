import React from 'react';
import { Route } from 'react-router-dom';
import Qna from '../components/Qna';
import QnaCaseDetail from '../components/QnaCaseDetail';
import QnaShopDetail from '../components/QnaShopDetail';
import ShopMemberQna from './ShopMemberQna';

const ShopManagementQna = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Qna} />
      <Route path={`${match.path}/shopmember`} component={ShopMemberQna} />
      <Route path={`${match.path}/case/detail/:id`} component={QnaCaseDetail} />
      <Route path={`${match.path}/shop/detail/:id`} component={QnaShopDetail} />
    </>
  );
};

export default ShopManagementQna;
