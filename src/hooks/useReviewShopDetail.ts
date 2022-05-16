import React, { useEffect } from 'react';
import { ApiResponse } from '../common/type/index';
import {
  GetReviewShopDetailResponse,
  GetReviewShopDetailRequest,
} from '../type/index';
import { getReviewShopDetail } from '../api/index';
import { useQuery } from 'react-query';

const useReviewShopDetail = (request: GetReviewShopDetailRequest) => {
  return useQuery(['reviewShopDetail', request], () =>
    getReviewShopDetail(request).then((res) => {
      const response: ApiResponse<GetReviewShopDetailResponse> = {
        status: res.status,
        message: res.statusText,
        data: res.data.data,
      };
      return response;
    }),
  );
};

export default useReviewShopDetail;
