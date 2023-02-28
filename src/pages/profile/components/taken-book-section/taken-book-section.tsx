import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';

import { ProfileSectionTitle } from '../profile-section-title';

import { Container } from './taken-book-section.style';

export const TakenBookSection: FC = () => (
  <Container>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.taken} />
  </Container>
);
