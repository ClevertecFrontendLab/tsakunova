import styled from 'styled-components';

export const InputContainer = styled.div<{ isIntroLabel: boolean }>`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.isIntroLabel ? '6px 12px 11px 12px' : '19px 12px')};
  font: ${(props) => props.theme.fonts.infoLarge};
  background-color: ${(props) => props.theme.color.grey.black5};
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  outline: none;
`;

export const InputLine = styled.div<{ isError: boolean | undefined }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.isError ? props.theme.color.main.accent : props.theme.color.grey.black20)};
`;

export const TextInput = styled.input`
  width: 100%;
  background-color: transparent;
  font: ${(props) => props.theme.fonts.bodySmall};
  border: none;
  outline: none;
`;

export const InputLabel = styled.p<{ isError: boolean }>`
  margin-left: 12px;
  margin-bottom: ${(props) => `${props.theme.size.default}px`};
  font: ${(props) => props.theme.fonts.infoLarge};
  color: ${(props) => (props.isError ? props.theme.color.main.error : props.theme.color.grey.black40)};
`;

export const LabelIntroInput = styled.p`
  font: ${(props) => props.theme.fonts.infoLarge};
  color: ${(props) => props.theme.color.grey.black40};
`;

export const InputWithDynamicalLabel = styled.div`
  width: 100%;
`;

export const EyeToggler = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
