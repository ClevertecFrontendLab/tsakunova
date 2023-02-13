import { FC } from 'react';
import { COPYRIGHT_TEXT } from 'consts';
import { Wrapper } from 'index.style';

import { SocialList } from './components/social-list';
import { CopyrightText, FooterContainer } from './footer.style';

export const Footer: FC = () => (
  <Wrapper>
    <FooterContainer>
      <CopyrightText>{COPYRIGHT_TEXT}</CopyrightText>
      <SocialList />
    </FooterContainer>
  </Wrapper>
);
