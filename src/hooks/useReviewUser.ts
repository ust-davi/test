import React from 'react';
import { useQuery } from 'react-query';
import { getReviewUser } from '../api';
import { ApiResponse } from '../common/type';
import { GetReviewUserRequest, GetReviewUserResponse } from '../type';

const useReviewUser = (request: GetReviewUserRequest) => {
  return useQuery(['reviewUser', request], () =>
    getReviewUser(request).then((res) => {
      const response: ApiResponse<GetReviewUserResponse[]> = {
        status: res.status,
        message: res.statusText,
        data: res.data.data,
      };
      return response;
    }),
  );
};

export default useReviewUser;
