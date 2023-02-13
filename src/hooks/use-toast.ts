import { useEffect, useMemo } from 'react';
import { AppToast, ToastType } from 'components/layout/components/toast/toast.enum';
import { setToast } from 'store/utils/utils-slice';

import { useAppDispatch } from './use-app-dispatch';

export const useToast = (toastType: ToastType, toastMessage: string, value: boolean) => {
  const dispatch = useAppDispatch();
  const toast: AppToast = useMemo(
    () => ({
      toastType,
      toastMessage,
    }),
    [toastMessage, toastType]
  );

  useEffect(() => {
    if (value) dispatch(setToast(toast));
  }, [dispatch, toast, value]);
};
