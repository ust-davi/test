import React from 'react';
import { useMutation } from 'react-query';
import { postCommonSmsSendAuth } from '../api';
import { ApiResponse, SendSMSRequest, SendSMSResponse } from '../type';

const useSendSMS = () => {
  return useMutation('sendSMS', (request: SendSMSRequest) =>
    postCommonSmsSendAuth(request).then((res) => {
      const response: ApiResponse<SendSMSResponse> = {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
      return response;
    }),
  );
};

export default useSendSMS;
