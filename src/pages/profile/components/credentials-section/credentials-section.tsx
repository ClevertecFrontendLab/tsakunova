import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';

import { ProfileSectionTitle } from '../profile-section-title';

import { Container } from './credentials-section.style';

export const CredentialsSection: FC = () => (
  <Container>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.credentials} />
  </Container>
);
