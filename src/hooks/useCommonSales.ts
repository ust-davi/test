import { useHistory } from 'react-router-dom';
import React from 'react';
import { postCommonSales } from '../api/index';
import { PostCommonSalesRequest } from '../type/index';
import { useMutation } from 'react-query';
import { ApiResponse } from '../common/type';

const useCommonSales = () => {
  const history = useHistory();

  return useMutation(
    'commonSales',
    (request: PostCommonSalesRequest) =>
      postCommonSales(request).then((res) => {
        const response: ApiResponse<null> = {
          status: res.status,
          message: res.statusText,
        };
        return response;
      }),
    {
      onSuccess: () => history.go(0),
    },
  );
};

export default useCommonSales;
