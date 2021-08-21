import { useEffect, useState } from 'react';

type statusType = 'idle' | 'pending' | 'success' | 'error';
const useAsync = <T>(asyncFun: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<statusType>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus('pending');
    setData(null);
    setError(null);
    asyncFun()
      .then((res) => {
        setData(res);
        setStatus('success');
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
        setData(null);
      });
  }, []);
  return {
    data,
    error,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};

export default useAsync;
