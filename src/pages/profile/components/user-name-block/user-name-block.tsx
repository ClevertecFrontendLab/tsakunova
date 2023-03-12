import { FC } from 'react';
import { avatar } from 'assets/images';

import { Container, ImageContainer, NameContainer } from './user-name-block.style';

export const UserNameBlock: FC = () => (
  <Container>
    <ImageContainer src={avatar} />
    <NameContainer>
      <h3>Иванов</h3>
      <h3>Иван</h3>
    </NameContainer>
  </Container>
);
