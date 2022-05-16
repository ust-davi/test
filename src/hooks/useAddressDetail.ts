import React from 'react';
import {
  CommonAddressListDetailResponse,
  CommonAddressDetailRequest,
} from '../type/index';
import { useQuery } from 'react-query';
import { getCommonAddressDetailList } from '../api';
import { ApiResponse } from '../common/type';

const useAddressDetail = (request: CommonAddressDetailRequest) => {
  return useQuery('getAdressDetail', () =>
    getCommonAddressDetailList(request).then((res) => {
      const response: ApiResponse<CommonAddressListDetailResponse> = {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
      return response;
    }),
  );
};

export default useAddressDetail;
