import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { userAvatar } from 'assets/images';
import { AvatarImg } from 'components/avatar-img';
import { RouteNames } from 'types/enum';
import { UserAPI, UserDTO } from 'types/types';

import { UserMenu } from '../user-menu';

import { AuthorizationContainer, Subtitle } from './header-authorisation.style';

type HeaderAuthorizationProps = {
  user: UserAPI;
};

export const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({
  user: { firstName = '', avatarLink = userAvatar },
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <AuthorizationContainer onClick={() => setIsOpen(!isOpen)}>
        <Subtitle>Привет, {firstName && firstName}!</Subtitle>

        <AvatarImg size='58px' bgImage={avatarLink} />
      </AuthorizationContainer>
      <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};
