import React, { FC, useCallback } from 'react';
import { devices } from 'consts';
import styled from 'styled-components';
import { ViewVariant } from 'types/enum';

type Props = {
  type: ViewVariant;
  icon: FC;
  testId?: string;
  onClick: (type: ViewVariant) => void;
  isActive: boolean;
};

const CircleButtonContainer = styled.button<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.size.button.icon};
  height: ${(props) => props.theme.size.button.icon};
  filter: ${(props) => props.theme.color.shadow.buttonFilter};
  border-radius: 100%;
  cursor: pointer;
  background: ${(props) => (props.isActive ? props.theme.color.button.hover : props.theme.color.main.white)};
  border: none;
  @media ${devices.mobile} {
    width: ${(props) => `${props.theme.size.default * 2}px`};
    height: ${(props) => `${props.theme.size.default * 2}px`};
  }
  & svg {
    width: 19px;
    height: 19px;
    & path {
      fill: ${(props) => (props.isActive ? props.theme.color.main.white : props.theme.color.grey.black40)};
    }
  }
  &:hover {
    border: ${(props) => props.isActive && `1px solid ${props.theme.color.main.hover}`};
    box-shadow: ${(props) => (props.isActive ? props.theme.color.shadow.button : props.theme.color.shadow.button)};
  }
  &:active {
    border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
    box-shadow: ${(props) => props.theme.color.shadow.pressed};
  }
  &:disabled {
    border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
    background: ${(props) => (props.isActive ? props.theme.color.grey.black10 : props.theme.color.grey.black5)};
    &:hover {
      box-shadow: none;
      border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
      background: ${(props) => props.theme.color.grey.black5};
    }
  }
`;

export const CircleButton: FC<Props> = React.memo(({ type, icon: Icon, testId, onClick, isActive }) => {
  const setActive = useCallback(() => {
    onClick(type);
  }, [onClick, type]);

  return (
    <CircleButtonContainer onClick={setActive} data-test-id={testId} isActive={isActive}>
      <Icon />
    </CircleButtonContainer>
  );
});
