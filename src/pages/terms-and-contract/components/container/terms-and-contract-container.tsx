import { FC, ReactNode } from 'react';

import { Container, RuleContainer } from './terms-and-contract-container.style';

type Props = {
  children?: ReactNode;
};

export const TermsAndContractContainer: FC<Props> = ({ children = null }) => (
  <Container>
    <RuleContainer>{children}</RuleContainer>
  </Container>
);
