import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';

import { ProfileSectionTitle } from '../profile-section-title';

import { Container } from './contract-section.style';

export const ContractSection: FC = () => (
  <Container>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.contract} />
  </Container>
);
