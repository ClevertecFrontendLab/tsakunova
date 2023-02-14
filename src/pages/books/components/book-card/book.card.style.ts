import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: ${(props) => props.theme.color.shadow.card};
  border-radius: 10px;
  padding: 8px 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookImage = styled.div`
  background-color: ${(props) => props.theme.color.grey.black5};
  border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 100%;
  }
`;
