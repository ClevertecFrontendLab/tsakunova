import { FC } from 'react';
import { Wrapper } from 'index.style';

import { SocialList } from './components/social-list';
import { CopyrightText, FooterContainer } from './footer.style';

export const Footer: FC = () => (
  <Wrapper>
    <FooterContainer>
      <CopyrightText>© 2020-2023 Cleverland. Все права защищены.</CopyrightText>
      <SocialList />
    </FooterContainer>
  </Wrapper>
);
