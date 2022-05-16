import { useQuery } from 'react-query';
import React from 'react';
import { getCategorySub } from '../api';
import { ApiResponse } from '../common/type';
import { GetCategorySubResponse } from '../type';

const useCategorySub = () => {
  return useQuery('categorySub', () =>
    getCategorySub({ direction: 'DESC' }).then((res) => {
      const response: ApiResponse<GetCategorySubResponse[]> = {
        data: res.data.data.content,
        message: res.statusText,
        status: res.status,
      };
      return response;
    }),
  );
};

export default useCategorySub;
