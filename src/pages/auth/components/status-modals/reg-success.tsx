import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockMessage, BlockSubtitle, BlockTitle } from 'pages/auth/auth.style';
import { logout } from 'store/login/login-slice';
import { ButtonType, ErrorsMessages, FormButtonType, RouteNames, TitleVariant } from 'types/enum';

export const RegSuccess: FC = () => {
  const navigate = useNavigate();
  const loginHandler = useCallback(() => {
    navigate(RouteNames.auth);
  }, [navigate]);

  return (
    <Modal data-test-id='status-block'>
      <BlockTitle>{TitleVariant.regSuccessTitle}</BlockTitle>
      <BlockMessage>{TitleVariant.regSuccessText}</BlockMessage>

      <PrimaryButton
        onClick={loginHandler}
        handlerType={FormButtonType.button}
        title={TitleVariant.loginAfterRegistration}
        stylesClass={ButtonType.primaryButton}
      />
    </Modal>
  );
};
