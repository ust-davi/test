import React from 'react';
import { useQuery } from 'react-query';
import { getNoticeList } from '../api';
import { ApiResponse, NoticeListRequest, NoticeListResponse } from '../type';

const useNoticeList = (request: NoticeListRequest) => {
  return useQuery(
    ['getNoticeList', request],
    () =>
      getNoticeList(request).then((res) => {
        const response: ApiResponse<NoticeListResponse> = {
          status: res.status,
          message: res.data.message,
          data: res.data.data,
        };
        return response;
      }),
    {
      keepPreviousData: true,
    },
  );
};

export default useNoticeList;
