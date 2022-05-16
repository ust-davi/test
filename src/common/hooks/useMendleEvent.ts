import React from 'react';
import {
  ApiResponse,
  EventMendleRequest,
  EventMendleResponse,
} from '../type/index';
import { useQuery } from 'react-query';
import { getEventMendle } from '../api';

const useMendleEvent = (request: EventMendleRequest) => {
  return useQuery('mendleEvent', () =>
    getEventMendle(request).then((res) => {
      const response: ApiResponse<EventMendleResponse> = {
        status: res.data.status,
        message: res.data.message,
        data: res.data.data,
      };
      return response;
    }),
  );
};

export default useMendleEvent;
