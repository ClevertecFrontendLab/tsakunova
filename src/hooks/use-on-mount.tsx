import { useEffect } from 'react';

export const useOnMount = (func: () => void) => {
  useEffect(() => {
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
