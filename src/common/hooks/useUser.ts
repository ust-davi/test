import { ApiResponse } from '../type/index';
import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../api';
import { GetUserRequest, GetUserResponse } from '../type';

const useUser = (request: GetUserRequest) => {
  return useQuery('user', () =>
    getUser(request).then((res) => {
      const response: ApiResponse<GetUserResponse> = {
        status: res.status,
        message: res.statusText,
        data: res.data.data,
      };
      return response;
    }),
  );
};

export default useUser;
