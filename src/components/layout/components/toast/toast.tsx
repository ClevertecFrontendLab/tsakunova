import { FC, useCallback } from 'react';
import { CloseSVG } from 'assets/icons';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useOnMount } from 'hooks/use-on-mount';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { hideToast } from 'store/utils/utils-slice';

import { CloseButton, Container, ToastInfo } from './toast.style';
import { getToastStyles } from './toast.utils';

export const Toast: FC = () => {
  const toast = useTypedSelector(({ utils }) => utils.toast);
  const dispatch = useAppDispatch();
  const { icon: Icon, styledComponent: Component } = getToastStyles(toast?.toastType);

  useOnMount(() => {
    setTimeout(() => {
      dispatch(hideToast());
    }, 10000);
  });

  const closeToast = useCallback(() => {
    dispatch(hideToast());
  }, [dispatch]);

  return (
    <Container isActive={!!toast}>
      <Component data-test-id='error'>
        <ToastInfo>
          <Icon />
          <p>{toast?.toastMessage}</p>
        </ToastInfo>
        <CloseButton onClick={closeToast}>
          <CloseSVG />
        </CloseButton>
      </Component>
    </Container>
  );
};
