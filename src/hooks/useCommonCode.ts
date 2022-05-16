import React from 'react';
import { GetCommonCodeResponse, GetCommonCodeRequest } from '../type/index';
import { getCommonCode } from '../api/index';
import { useQuery } from 'react-query';
import { ApiResponse } from '../common/type';

const useCommonCode = (request: GetCommonCodeRequest) => {
  return useQuery('commonCode', () =>
    getCommonCode(request).then((res) => {
      const response: ApiResponse<GetCommonCodeResponse[]> = {
        data: res.data.data,
        message: res.statusText,
        status: res.status,
      };
      return response;
    }),
  );
};

export default useCommonCode;
