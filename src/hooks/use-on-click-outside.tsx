import { useEffect } from 'react';

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (event.target.id === 'burger') {
        return;
      }
      if ((event.target && !ref.current) || ref.current.contains(event.target) || event.target.id === 'burger') {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
