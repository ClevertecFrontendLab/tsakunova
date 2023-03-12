import React, { FC } from 'react';
import { userAvatar } from 'assets/images';
import { AvatarImg } from 'components/avatar-img';
import { UserAPI } from 'types/types';

import { UserMenu } from '../user-menu';

import { AuthorizationContainer, Subtitle } from './header-authorisation.style';

type HeaderAuthorizationProps = {
  user: UserAPI;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({
  user: { firstName, avatarLink = userAvatar },
  isOpen,
  setIsOpen,
}) => (
  <React.Fragment>
    <AuthorizationContainer onClick={() => setIsOpen(!isOpen)}>
      <Subtitle>Привет, {firstName}!</Subtitle>

      <AvatarImg size='58px' bgImage={avatarLink} />
    </AuthorizationContainer>
    <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} />
  </React.Fragment>
);
