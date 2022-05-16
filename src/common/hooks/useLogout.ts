import React from 'react';

import Cookies from 'universal-cookie';
import { useMutation } from 'react-query';
import { postAuthLogout } from '../api';
import { ApiResponse, UserLogoutResponse } from '../type';

const cookie = new Cookies();

const useLogout = () => {
  return useMutation(
    'logout',
    () =>
      postAuthLogout().then((res) => {
        const response: ApiResponse<UserLogoutResponse> = {
          status: res.status,
          message: res.statusText,
          data: res.data,
        };
        return response;
      }),
    {
      onSuccess: (data) => {
        if (
          data?.data?.resultMessage === '성공' &&
          data.data.result === '0000'
        ) {
          cookie.remove('refreshToken');
          cookie.remove('accessToken');
        }
      },
    },
  );
};

export default useLogout;
