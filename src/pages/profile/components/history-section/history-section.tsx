import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';

import { ProfileSectionTitle } from '../profile-section-title';

import { Container } from './history-section.style';

export const HistorySection: FC = () => (
  <Container>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.history} />
  </Container>
);
