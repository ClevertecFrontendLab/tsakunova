import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AvatarImg } from 'components/avatar-img';
import { RouteNames } from 'types/enum';
import { UserDTO } from 'types/types';

import { AuthorizationContainer, Subtitle } from './header-authorisation.style';

type HeaderAuthorizationProps = {
  user: UserDTO;
};

export const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({ user: { name, avatarLink = '' } }) => (
  <AuthorizationContainer>
    <Subtitle>Привет, {name}!</Subtitle>
    <Link to={`/${RouteNames.profile}`}>
      <AvatarImg size='58px' bgImage={avatarLink} />
    </Link>
  </AuthorizationContainer>
);
