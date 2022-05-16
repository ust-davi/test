import React from 'react';
import { StoreCounselingResponse, StoreCounselingRequest } from '../type/index';
import { useMutation } from 'react-query';
import { postStoreCounseling } from '../api';
import { ApiResponse } from '../common/type';

const useShopCounseling = () => {
  return useMutation('postStoreCounseling', (request: StoreCounselingRequest) =>
    postStoreCounseling(request).then((res) => {
      const response: ApiResponse<StoreCounselingResponse> = {
        message: res.statusText,
        status: res.status,
        data: res.data,
      };
      return response;
    }),
  );
};

export default useShopCounseling;
