import { FC } from 'react';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { BlockMessage, BlockSubtitle, BlockTitle } from 'pages/auth/auth.style';
import { logout } from 'store/login/login-slice';
import { ButtonType, ErrorsMessages, FormButtonType, TitleVariant } from 'types/enum';

export const RegErrors: FC = () => {
  const errorMessage = useTypedSelector(({ registration }) => registration.errorMessage);
  const isUserExists = errorMessage === ErrorsMessages.nameTaken;
  const textMessage = isUserExists ? TitleVariant.regNotUniqueErrorText : TitleVariant.regErrorMessage;

  console.log(errorMessage);

  return (
    <Modal data-test-id='status-block'>
      <BlockTitle>{TitleVariant.regErrorTitle}</BlockTitle>
      <BlockMessage>{textMessage}</BlockMessage>

      <PrimaryButton
        handlerType={FormButtonType.button}
        title={TitleVariant.repeatRegistration}
        stylesClass={ButtonType.primaryButton}
      />
    </Modal>
  );
};
