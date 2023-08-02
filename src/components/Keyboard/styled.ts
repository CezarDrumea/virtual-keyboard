import styled from 'styled-components';

export const KeyboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1290px;
  height: 450px;
  background-color: #e6e6e9;
  padding: 22px;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: gray;
`;

export const TitleContainer = styled.div`
  width: 1290px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const RepeatBtn = styled.button<{ $disabled?: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  color: gray;
  border: 2px solid gray;
  background-color: white;

  &:hover {
    color: white;
    background-color: gray;
  }

  ${({ $disabled }): string | undefined => {
    if ($disabled)
      return `
    color: lightgray;
    border-color: lightgray;

    &:hover {
      color: lightgray;
      border-color: lightgray;
      background-color: white;
    }
    `;
  }}
`;
