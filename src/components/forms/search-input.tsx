import React, { FC, useEffect, useRef, useState } from 'react';
import { CloseSVG, SearchSVG } from 'assets/icons';
import { CircleButton } from 'components/buttons/circle-button';
import { devices } from 'consts';
import styled from 'styled-components';
import { TitleVariant, ViewVariant } from 'types/enum';

const SearchInputContainer = styled.div<{ isOpen: boolean }>`
  width: 350px;
  padding: 10px 16px;
  position: relative;
  border-radius: ${(props) => props.theme.size.button.borderRadius};
  box-shadow: ${(props) => props.theme.color.shadow.card};
  @media ${devices.tablet} {
    width: 274px;
  }
  @media ${devices.mobile} {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    padding: 7px 16px;
    width: 284px;
  }
  & input {
    width: 100%;
    height: 100%;
    outline: none;
    font: ${(props) => props.theme.fonts.bodySmall};
    letter-spacing: 0, 1px;
    border: none;
    padding-left: 25px;
    @media ${devices.mobile} {
      padding-left: 0;
    }
    &:focus {
      & ~ .searchIcon {
        path {
          fill: ${(props) => props.theme.color.main.accent};
        }
      }
    }
  }
  & .searchIcon {
    position: absolute;
    top: 10px;
    left: ${(props) => `${props.theme.size.default}px`};
    width: ${(props) => `${props.theme.size.default}px`};
    height: ${(props) => `${props.theme.size.default}px`};
    path {
      fill: ${(props) => props.theme.color.grey.black40};
    }
    @media ${devices.mobile} {
      display: none;
    }
  }
  & .searchCancelIcon {
    position: absolute;
    top: 10px;
    right: ${(props) => `${props.theme.size.default}px`};
    width: ${(props) => `${props.theme.size.default}px`};
    height: ${(props) => `${props.theme.size.default}px`};
    @media ${devices.mobile} {
      top: 6px;
      right: 12px;
    }

    path {
      fill: ${(props) => props.theme.color.main.accent};
    }
  }
  &:hover {
    border: ${(props) => `1px solid ${props.theme.color.main.hover}`};
    box-shadow: ${(props) => props.theme.color.shadow.button};
  }
`;

const VisibleMobile = styled.div`
  display: none;
  @media ${devices.mobile} {
    display: flex;
  }
`;

const CloseButton = styled.span<{ isBlur: boolean }>`
  display: ${(props) => (props.isBlur ? 'none' : 'block')};
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  right: 0;
  width: ${(props) => `${props.theme.size.default}px`};
  height: ${(props) => `${props.theme.size.default}px`};

  path {
    fill: ${(props) => props.theme.color.main.accent};
  }
`;

type SearchInputProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ isOpen, setIsOpen }) => {
  const [currentValue, setCurrentValue] = useState('');
  const searchInputRef = useRef<any>(null);
  const [blur, setBlur] = useState(true);

  const changeText = (event: any) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (isOpen) searchInputRef.current.focus();
  });

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
      <SearchInputContainer isOpen={isOpen} data-test-id='input-search'>
        <input
          onChange={changeText}
          ref={searchInputRef}
          value={currentValue}
          type='text'
          onFocus={() => setBlur(false)}
          onBlur={() => {
            setIsOpen(false);
            setBlur(true);
          }}
          placeholder={TitleVariant.searchPlaceholder}
        />
        <SearchSVG className='searchIcon' />
        <CloseButton data-test-id='button-search-close' isBlur={blur}>
          <CloseSVG
            className='searchCancelIcon'
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </CloseButton>
      </SearchInputContainer>
    </React.Fragment>
  );
};
