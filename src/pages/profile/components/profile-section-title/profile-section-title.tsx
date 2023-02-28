import { FC } from 'react';

import { Container, Subtitle, Title } from './profile-section-title.style';

type SectionTitleProps = {
  text: {
    title: string;
    subtitle: string;
  };
};

export const ProfileSectionTitle: FC<SectionTitleProps> = ({ text: { title, subtitle } }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);
