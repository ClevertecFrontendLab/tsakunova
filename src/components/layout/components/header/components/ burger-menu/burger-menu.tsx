import { FC } from 'react';

import { BurgerLine, BurgerMenuContainer } from './burger-menu.style';

type BurgerMenuProps = {
  isOpen: boolean;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen }) => (
  <BurgerMenuContainer data-test-id='button-burger'>
    <BurgerLine isOpen={isOpen} id='burger' />
  </BurgerMenuContainer>
);
