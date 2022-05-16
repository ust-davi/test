import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/common/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { ReactQueryDevtools } from 'react-query/devtools';

const cookies = new Cookies();

axios.defaults.baseURL = 'http://3.34.48.153:9090/mendle/v1';
axios.defaults.headers.common['X-AUTH-TOKEN'] = cookies.get('accessToken');

const queryClient = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
