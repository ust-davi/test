import Cookie from 'universal-cookie';
import { getUserInfo } from '../api/index';
import React from 'react';
import { useQuery } from 'react-query';
import { ApiResponse, UserInfoResponse } from '../type';

const useUserInfo = () => {
  const cookies = new Cookie();

  return useQuery(
    'userInfo',
    () =>
      getUserInfo().then((res) => {
        const response: ApiResponse<UserInfoResponse> = {
          status: res.status,
          message: res.statusText,
          data: res.data.data,
        };
        return response;
      }),
    {
      enabled: !!cookies.get('accessToken') && !!cookies.get('refreshToken'),
      retry: false,
    },
  );
};

export default useUserInfo;
