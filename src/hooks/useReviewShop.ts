import React, { useEffect } from 'react';
import { getReviewShop } from '../api/index';
import { ApiResponse } from '../common/type/index';
import { useQuery } from 'react-query';
import { GetReviewShopRequest, GetReviewShopResponse } from '../type';

const useReviewShop = (request: GetReviewShopRequest) => {
  return useQuery(
    'reviewShop',
    () =>
      getReviewShop(request).then((res) => {
        const response: ApiResponse<GetReviewShopResponse> = {
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

export default useReviewShop;
