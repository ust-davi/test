import React from 'react';
import { Route } from 'react-router-dom';
import Qna from '../components/shopmember/Qna';
import QnaCaseDetail from '../components/shopmember/QnaCaseDetail';

const ShopMemberQna = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={Qna} />
      <Route path={`${match.path}/case/detail/:id`} component={QnaCaseDetail} />
    </>
  );
};

export default ShopMemberQna;
