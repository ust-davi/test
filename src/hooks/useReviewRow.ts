import React, { useEffect } from 'react';
import { ApiResponse } from '../common/type/index';
import { useQuery } from 'react-query';
import { getReviewRow } from '../api';
import { GetReviewRowRequest, GetReviewRowResponse } from '../type';

const useReviewRow = (request: GetReviewRowRequest) => {
  return useQuery(
    'reviewRow',
    () =>
      getReviewRow(request).then((res) => {
        const response: ApiResponse<GetReviewRowResponse> = {
          data: res.data.data,
          message: res.statusText,
          status: res.status,
        };
        return response;
      }),
    {
      enabled: false,
    },
  );
};

export default useReviewRow;
