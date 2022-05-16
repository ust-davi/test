import React from 'react';
import { getCommonCorpValidate } from '../api/index';
import {
  GetCommonCorpValidateRequest,
  GetCommonCorpValidateResponse,
} from '../type/index';
import { useMutation } from 'react-query';
import { ApiResponse } from '../common/type';

const useCorpValidation = () => {
  return useMutation(
    'commonCorpValidate',
    (request: GetCommonCorpValidateRequest) =>
      getCommonCorpValidate(request).then((res) => {
        const response: ApiResponse<GetCommonCorpValidateResponse> = {
          data: res.data.data,
          message: res.statusText,
          status: res.status,
        };
        return response;
      }),
  );
};

export default useCorpValidation;
