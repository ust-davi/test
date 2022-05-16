import { ApiResponse, AuthLoginResponse, AuthLoginRequest } from '../type';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { postAuthLogin } from '../api';

const useLogin = () => {
  const cookies = new Cookies();
  const history = useHistory();

  return useMutation(
    'login',
    (user: AuthLoginRequest) =>
      postAuthLogin(user).then((res) => {
        const response: ApiResponse<AuthLoginResponse> = {
          status: res.status,
          message: res.statusText,
          data: res.data.data,
        };
        return response;
      }),
    {
      onSuccess: (data: ApiResponse<AuthLoginResponse>) => {
        if (
          data?.data?.result === '0000' &&
          data?.data?.resultMessage === '성공'
        ) {
          const { jwt, refreshToken } = data.data;
          axios.defaults.headers.common['X-AUTH-TOKEN'] = jwt;
          cookies.set('refreshToken', refreshToken);
          cookies.set('accessToken', jwt);
          if (data.data.resultMessage === '성공') history.goBack();
        }
      },
    },
  );
};

export default useLogin;
