import { getMainBannerList } from '../api/index';
import React from 'react';
import { useQuery } from 'react-query';
import { ApiResponse } from '../common/type';
import { BannerMainResponse } from '../type';

const useMainBanner = () => {
  return useQuery('getMainBanners', () =>
    getMainBannerList().then((res) => {
      const response: ApiResponse<BannerMainResponse> = {
        message: res.statusText,
        status: res.status,
        data: res.data,
      };
      return response;
    }),
  );
};

export default useMainBanner;
