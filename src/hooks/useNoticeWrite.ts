import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { postNoticeWrite } from '../api';
import { NoticeWriteRequest } from '../type';

const useNoticeWrite = () => {
  const history = useHistory();

  return useMutation(
    'writeNotice',
    (request: NoticeWriteRequest) =>
      postNoticeWrite(request).then((res) => res),
    {
      onSuccess: (data: any) => {
        if (data.data.status === 'OK') {
          console.log(data);
          history.push('/notice');
        }
      },
    },
  );
};

export default useNoticeWrite;
