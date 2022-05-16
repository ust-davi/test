import React from 'react';
import { useQuery } from 'react-query';
import { getSubBannerList } from '../api';

const useSubBanner = () => {
  return useQuery('getSubBanners', () =>
    getSubBannerList().then((res) => res.data.data),
  );
};

export default useSubBanner;
