import { FC } from 'react';
import { PROFILE_SECTION_TITLES } from 'consts';

import { ProfileSectionTitle } from '../profile-section-title';

import { Container } from './reserved-books-section.style';

export const ReservedBooksSection: FC = () => (
  <Container>
    <ProfileSectionTitle text={PROFILE_SECTION_TITLES.reserved} />
  </Container>
);
