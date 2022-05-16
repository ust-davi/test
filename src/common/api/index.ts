import {
  EventMendleRequest,
  AuthRefreshTokenRequest,
  CommonSmsSendAuthCheckRequest,
  NoticeListRequest,
  SendSMSRequest,
  User,
  GetUserRequest,
} from '../type/index';
import axios from 'axios';

export const postUserJoin = ({
  birthday,
  inviteCode,
  name,
  password,
  phone,
}: User) => {
  return axios.post('/user/join', {
    birthday,
    invite_CODE: inviteCode,
    name,
    password,
    phone,
  });
};

export const postAuthLogin = ({ userId, password }: User) => {
  return axios.post('/auth/login', {
    userId,
    password,
  });
};

export const postAuthLogout = () => {
  return axios.post('/auth/logout');
};

export const getUserInfo = () => {
  return axios.get('/user/userInfo');
};

export const postAuthRefreshToken = ({ refresh }: AuthRefreshTokenRequest) => {
  return axios.post('/auth/refresh-token', null, {
    params: {
      refresh,
    },
  });
};

export const getNoticeList = ({
  direction,
  orderType,
  page,
  size,
}: NoticeListRequest) => {
  return axios.get('/notice/list', {
    params: {
      direction,
      orderType,
      page,
      size,
    },
  });
};

export const postCommonSmsSendAuth = ({ phoneNumber }: SendSMSRequest) => {
  return axios.post('/common/sms/sendAuth', {
    phone_NUMBER: phoneNumber,
  });
};

export const postCommonSmsSendAuthCheck = ({
  authCode,
  seq,
}: CommonSmsSendAuthCheckRequest) => {
  return axios.post('/common/sms/sendAuth/check', {
    auth_CODE: authCode,
    seq,
  });
};

export const getEventMendle = ({
  direction,
  orderType,
  page,
  size,
}: EventMendleRequest) => {
  return axios.get('/event/mendle', {
    params: {
      direction,
      orderType,
      page,
      size,
    },
  });
};

export const getUser = ({ userUuid }: GetUserRequest) => {
  return axios.get(`/user/list/${userUuid}`);
};
