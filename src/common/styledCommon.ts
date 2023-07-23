import styled, { css } from 'styled-components';

interface KeyContainerInterface {
  $height?: string;
  $width?: string;
  $bgColor?: string;
  $color?: string;
}

export const KeyContainer = styled.div<KeyContainerInterface>`
  position: relative;
  width: ${({ $width }): string => {
    return $width ?? '60px';
  }};
  height: ${({ $height }): string => {
    return $height ?? '60px';
  }};
  background-color: ${({ $bgColor }): string => {
    return $bgColor ?? 'white';
  }};
  color: ${({ $color }): string => {
    return $color ?? 'gray';
  }};
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const IconCommon = css`
  height: 12px;
  fill: white;
`;

export const KeyboardRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 968px;
`;
