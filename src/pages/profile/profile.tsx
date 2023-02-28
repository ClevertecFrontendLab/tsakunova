import { FC } from 'react';
import { Wrapper } from 'index.style';

import { ContractSection } from './components/contract-section';
import { CredentialsSection } from './components/credentials-section';
import { HistorySection } from './components/history-section';
import { ReservedBooksSection } from './components/reserved-books-section';
import { TakenBookSection } from './components/taken-book-section';
import { UserNameBlock } from './components/user-name-block';
import { Container } from './profile.style';

export const Profile: FC = () => (
  <Container>
    <UserNameBlock />
    <CredentialsSection />
    <ContractSection />
    <ReservedBooksSection />
    <TakenBookSection />
    <HistorySection />
  </Container>
);
