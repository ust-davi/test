import React from 'react';
import {
  GetCategoryTermsResponse,
  GetCategoryTermsRequest,
} from '../type/index';
import { ApiResponse } from '../common/type/index';
import { getCategoryTerms } from '../api/index';
import { useQuery } from 'react-query';

const useCategoryTerm = () => {
  return useQuery(['categoryTerm'], () =>
    getCategoryTerms({ direction: 'DESC' }).then((res) => {
      const response: ApiResponse<GetCategoryTermsResponse[]> = {
        data: res.data.data.content,
        message: res.statusText,
        status: res.status,
      };
      return response;
    }),
  );
};

export default useCategoryTerm;
