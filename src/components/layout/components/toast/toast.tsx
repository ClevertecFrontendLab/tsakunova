import { FC } from 'react';
import { CloseSVG, ToastNegativeSVG } from 'assets/icons';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { selectErrors } from 'store/utils';
import { ErrorMessages } from 'types/enum';

import { Container, ToastInfo, WrapperToast } from './toast.style';

export const Toast: FC = () => {
  const isError = useTypedSelector(selectErrors);

  return (
    <Container isError={isError}>
      <WrapperToast data-test-id='error'>
        <ToastInfo>
          <ToastNegativeSVG />
          <p>{ErrorMessages.main}</p>
        </ToastInfo>
        <CloseSVG />
      </WrapperToast>
    </Container>
  );
};
