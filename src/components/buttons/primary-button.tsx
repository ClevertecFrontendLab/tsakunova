import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonType, FormButtonType } from 'types/enum';

type Props = {
  title: string;
  type?: ButtonType;
  disabled?: boolean;
  stylesClass?: string;
  handlerType?: FormButtonType;
  onClick?: () => void;
};

const PrimaryButtonContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.size.button.padding};
  border-radius: ${(props) => props.theme.size.button.borderRadius};
  cursor: pointer;
  & p {
    font: ${(props) => props.theme.fonts.buttonSmall};
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
  &.primaryButton {
    background: ${(props) => props.theme.color.button.hover};
    border: none;
    & p {
      color: ${(props) => props.theme.color.main.white};
    }
    &:hover {
      border: ${(props) => `1px solid ${props.theme.color.main.hover}`};
      box-shadow: ${(props) => props.theme.color.shadow.button};
    }
    &:active {
      box-shadow: ${(props) => props.theme.color.shadow.pressed};
    }
    &:disabled {
      background: ${(props) => props.theme.color.grey.black10};
      cursor: not-allowed;
    }
  }
  &.secondaryButton {
    background: ${(props) => props.theme.color.main.white};
    border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
    & p {
      color: ${(props) => props.theme.color.main.dark};
    }
    &:hover {
      border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
      box-shadow: ${(props) => props.theme.color.shadow.button};
    }
    &:active {
      border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
      box-shadow: ${(props) => props.theme.color.shadow.pressed};
    }
    &:disabled {
      border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
      background: ${(props) => props.theme.color.grey.black5};
      cursor: not-allowed;
      p {
        color: ${(props) => `${props.theme.color.grey.black40}`};
      }
      &:hover {
        box-shadow: none;
        border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
        background: ${(props) => props.theme.color.grey.black5};
      }
    }
  }
`;

export const PrimaryButton: FC<Props> = React.memo(
  ({ title, type, disabled, stylesClass, handlerType = FormButtonType.button, onClick }) => (
    <PrimaryButtonContainer
      onClick={onClick}
      type={handlerType}
      disabled={disabled}
      className={`${type} ${stylesClass}`}
    >
      <p>{title}</p>
    </PrimaryButtonContainer>
  )
);
