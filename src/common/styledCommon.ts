import styled, { css } from 'styled-components';

interface KeyContainerInterface {
  $height?: string;
  $width?: string;
  $bgColor?: string;
  $color?: string;
  $pressed?: boolean;
  $released?: boolean;
}

export const KeyContainer = styled.div<KeyContainerInterface>`
  position: relative;
  width: ${({ $width }): string => $width ?? '60px'};
  height: ${({ $height }): string => $height ?? '60px'};
  background-color: ${({ $bgColor }): string => $bgColor ?? 'white'};
  color: ${({ $color }): string => $color ?? 'gray'};
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  fill: gray;
  ${({ $pressed }): string | undefined => {
    if ($pressed) {
      return `
        color: white;
        fill: white;
        background-color: cornflowerblue;
      `;
    }
  }}
  ${({ $released }): string | undefined => {
    if ($released) {
      return `
        color: white;
        fill: white;
        background-color: forestgreen;
      `;
    }
  }}
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
