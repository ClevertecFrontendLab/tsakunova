import { FC, useState } from 'react';
import { MenuSVG, SortAscendingSVG, SquareFourSVG } from 'assets/icons';
import { CircleButton } from 'components/buttons/circle-button';
import { WithIconButton } from 'components/buttons/with-icon-button';
import { SearchInput } from 'components/forms/search-input/search-input';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { selectErrors } from 'store/selectors';
import { TitleVariant, ViewVariant } from 'types/enum';

import { ButtonContainer, Container, DefaultButtonContainer } from './filter-list.style';

type FilterListProps = {
  onViewClick: (type: ViewVariant) => void;
  typeView: ViewVariant;
};

export const FilterList: FC<FilterListProps> = ({ onViewClick, typeView }) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const isError = useTypedSelector(selectErrors);

  if (isError) return null;

  return (
    <Container>
      <ButtonContainer isSearchOpen={isSearchOpen}>
        <SearchInput isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        <WithIconButton title={TitleVariant.rating} isOpen={isSearchOpen} icon={SortAscendingSVG} />
      </ButtonContainer>
      <DefaultButtonContainer isSearchOpen={isSearchOpen}>
        <CircleButton
          onClick={onViewClick}
          type={ViewVariant.window}
          icon={SquareFourSVG}
          isActive={typeView === ViewVariant.window}
          testId='button-menu-view-window'
        />
        <CircleButton
          onClick={onViewClick}
          type={ViewVariant.list}
          isActive={typeView === ViewVariant.list}
          icon={MenuSVG}
          testId='button-menu-view-list'
        />
      </DefaultButtonContainer>
    </Container>
  );
};
