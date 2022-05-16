import { useQuery } from 'react-query';
import React from 'react';
import { getCommonSalesCorp } from '../api';
import { ApiResponse } from '../common/type';
import { GetCommonSalesCorpResponse } from '../type';

const useSalesCorp = () => {
  return useQuery('salesCorp', () =>
    getCommonSalesCorp().then((res) => {
      const response: ApiResponse<GetCommonSalesCorpResponse[]> = {
        data: res.data.data,
        message: res.statusText,
        status: res.status,
      };
      return response;
    }),
  );
};

export default useSalesCorp;
