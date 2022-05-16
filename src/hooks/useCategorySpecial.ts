import { useQuery } from 'react-query';
import React from 'react';
import { ApiResponse } from '../common/type';
import { GetCategorySpecialResponse } from '../type';
import { getCategorySpecial } from '../api';

const useCategorySpecial = () => {
  return useQuery('categorySpecial', () =>
    getCategorySpecial({ direction: 'DESC' }).then((res) => {
      const response: ApiResponse<GetCategorySpecialResponse[]> = {
        data: res.data.data.content,
        message: res.statusText,
        status: res.status,
      };
      return response;
    }),
  );
};

export default useCategorySpecial;
