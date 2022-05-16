import React from 'react';

import { ApiResponse, UserJoinRequest } from '../type/index';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postUserJoin } from '../api';

const useJoin = () => {
  const history = useHistory();

  return useMutation(
    'join',
    (user: UserJoinRequest) =>
      postUserJoin(user).then((res) => {
        const response: ApiResponse<any> = {
          status: res.status,
          message: res.statusText,
        };
        return response;
      }),
    {
      onSuccess: () => history.push('/'),
    },
  );
};

export default useJoin;
