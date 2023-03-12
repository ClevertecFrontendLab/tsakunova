import { FC } from 'react';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Modal } from 'components/modal';
import { BlockMessage, BlockTitle } from 'pages/auth/auth.style';
import { ButtonType, FormButtonType } from 'types/enum';

import { Container } from './status.style';

type Props = {
  onClickHandler: () => void;
  buttonText: string;
  title: string;
  text: string;
  withButton?: boolean;
};

export const ModalStatusWithHandler: FC<Props> = ({ onClickHandler, text, buttonText, title, withButton = true }) => (
  <Modal>
    <Container data-test-id='status-block'>
      <BlockTitle>{title}</BlockTitle>
      <BlockMessage>{text}</BlockMessage>
      {withButton && (
        <PrimaryButton
          onClick={onClickHandler}
          handlerType={FormButtonType.button}
          title={buttonText}
          stylesClass={ButtonType.primaryButton}
        />
      )}
    </Container>
  </Modal>
);
