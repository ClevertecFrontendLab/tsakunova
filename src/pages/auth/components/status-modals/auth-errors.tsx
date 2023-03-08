import { FC } from 'react';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { BlockMessage, BlockSubtitle, BlockTitle } from 'pages/auth/auth.style';
import { logout } from 'store/login/login-slice';
import { ButtonType, FormButtonType, TitleVariant } from 'types/enum';

export const AuthErrors: FC = () => {
  const dispatch = useAppDispatch();
  const redirectToAuth = () => {
    dispatch(logout());
  };

  return (
    <Modal data-test-id='status-block'>
      <BlockTitle>{TitleVariant.loginErrorTitle}</BlockTitle>
      <BlockMessage>{TitleVariant.loginErrorText}</BlockMessage>

      <PrimaryButton
        onClick={redirectToAuth}
        handlerType={FormButtonType.button}
        title={TitleVariant.repeat}
        stylesClass={ButtonType.primaryButton}
      />
    </Modal>
  );
};
