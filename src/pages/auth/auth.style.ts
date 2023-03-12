import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.button.hover};
`;

export const Title = styled.h1`
  font: ${(props) => props.theme.fonts.h3};
  color: ${(props) => props.theme.color.main.white};
  margin-bottom: 46px;
`;

export const BlockTitle = styled.h4`
  font: ${(props) => props.theme.fonts.h4};
  color: ${(props) => props.theme.color.main.dark};
  margin-bottom: ${(props) => `${props.theme.size.default / 2}px`};
`;
export const BlockSubtitle = styled.p`
  font: ${(props) => props.theme.fonts.subtitleSmall};
  color: ${(props) => props.theme.color.main.dark};
  margin-bottom: ${(props) => `${props.theme.size.default * 2}px`};
`;

export const BlockMessage = styled.p`
  font: ${(props) => props.theme.fonts.bodyLarge};
  color: ${(props) => props.theme.color.main.dark};
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media ${devices.mobile} {
    gap: 10px;
  }
`;

export const HasProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => `${props.theme.size.default}px`};
  margin-top: ${(props) => `${props.theme.size.default}px`};
  font: ${(props) => props.theme.fonts.bodyLarge};
  color: ${(props) => props.theme.color.grey.black70};
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => `${props.theme.size.default}px`};
    text-decoration: none;
    text-transform: uppercase;
    margin-left: ${(props) => `${props.theme.size.default}px`};
    font: ${(props) => props.theme.fonts.buttonSmall};
    color: ${(props) => props.theme.color.main.dark};
    @media ${devices.mobile} {
      margin-left: 0;
    }
  }
  @media ${devices.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const HintErrorSpan = styled.span<{ isError?: boolean }>`
  color: ${(props) => (props.isError ? props.theme.color.main.error : props.theme.color.grey.black40)};
`;

export const ContainerInputWithLabel = styled.div`
  min-height: 72px;
  gap: 2px;
`;
