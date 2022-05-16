import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { postAuthRefreshToken } from '../api';
import { AuthRefreshTokenRequest } from '../type';

const useLoginRefresh = () => {
  // TODO : 토큰 시간 나오면 response 작업 시작
  return useMutation('userRefresh', (request: AuthRefreshTokenRequest) =>
    postAuthRefreshToken(request),
  );
};

export default useLoginRefresh;
