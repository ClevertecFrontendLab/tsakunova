import { FC, ReactNode } from 'react';

import { Container } from './modal.style';

export const Modal: FC<{ children: ReactNode }> = ({ children }) => <Container>{children}</Container>;
