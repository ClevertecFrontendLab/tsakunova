import React, { FC, useCallback, useState } from 'react';
import { CloseSVG, SearchSVG } from 'assets/icons';
import { CircleButton } from 'components/buttons/circle-button';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { setSearchString } from 'store/utils/utils-slice';
import { TitleVariant, ViewVariant } from 'types/enum';

import { CloseButton, SearchInputContainer, VisibleMobile } from './search-input.style';

type SearchInputProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ isOpen, setIsOpen }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [blur, setBlur] = useState(true);
  const dispatch = useAppDispatch();

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event?.target?.value);
    dispatch(setSearchString(event?.target?.value.toLocaleLowerCase()));
  };

  const onCloseClick = useCallback(() => {
    setBlur(true);
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <React.Fragment>
      <VisibleMobile data-test-id='button-search-open'>
        {!isOpen && (
          <CircleButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type={ViewVariant.search}
            icon={SearchSVG}
            isActive={false}
          />
        )}
      </VisibleMobile>
      <SearchInputContainer isOpen={isOpen}>
        <input
          data-test-id='input-search'
          onChange={changeText}
          value={currentValue}
          type='text'
          onFocus={() => setBlur(false)}
          onBlur={() => {
            setIsOpen(false);
          }}
          placeholder={TitleVariant.searchPlaceholder}
        />
        <SearchSVG className='searchIcon' />
        <CloseButton data-test-id='button-search-close' isBlur={blur} onClick={onCloseClick}>
          <CloseSVG className='searchCancelIcon' />
        </CloseButton>
      </SearchInputContainer>
    </React.Fragment>
  );
};
