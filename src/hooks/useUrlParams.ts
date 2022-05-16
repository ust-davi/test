import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useUrlParam = (keyword: string) => {
  const location = useLocation();
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const param = (params.get(keyword) ? params.get(keyword) : '') as string;
    setQuery(param as string);
  }, [location]);

  return query;
};

export default useUrlParam;
