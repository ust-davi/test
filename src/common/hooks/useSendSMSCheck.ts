import React from 'react';
import { useMutation } from 'react-query';
import { postCommonSmsSendAuthCheck } from '../api';
import {
  ApiResponse,
  CommonSmsSendAuthCheckRequest,
  CommonSmsSendAuthCheckResponse,
} from '../type';

const useSendSMSCheck = () => {
  return useMutation(
    'postSendSMSCheck',
    (request: CommonSmsSendAuthCheckRequest) =>
      postCommonSmsSendAuthCheck(request).then((res) => {
        const response: ApiResponse<CommonSmsSendAuthCheckResponse> = {
          status: res.status,
          message: res.statusText,
          data: res.data,
        };
        return response;
      }),
  );
};

export default useSendSMSCheck;
