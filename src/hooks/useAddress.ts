import React from 'react';
import { useQuery } from 'react-query';
import { getCommonAddressList } from '../api';
import { ApiResponse } from '../common/type';
import { CommonAddressListResponse } from '../type';

const useAddress = () => {
  return useQuery('getAddress', () =>
    getCommonAddressList().then((res) => {
      const response: ApiResponse<CommonAddressListResponse> = {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
      return response;
    }),
  );
};

export default useAddress;
