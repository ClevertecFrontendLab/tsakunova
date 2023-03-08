import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/layout/components/loader';
import { TitleVariant } from 'types/enum';

import { Container, Title } from './auth.style';

export const Auth: FC = () => (
  <Container data-test-id='auth'>
    <Loader />
    <Title>{TitleVariant.cleverland}</Title>
    <Outlet />
  </Container>
);
