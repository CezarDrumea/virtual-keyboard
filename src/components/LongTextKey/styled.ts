import styled from 'styled-components';

export const LongContent = styled.div<{
  $rightPosition?: boolean;
  $leftPosition?: boolean;
  $centered?: boolean;
  $topCentered?: boolean;
}>`
  position: absolute;
  bottom: ${({ $centered }): string => ($centered ? 'auto' : '12px')};
  ${({ $topCentered }): string | undefined => {
    if ($topCentered) {
      return `
        bottom: auto;
        top: 12px;
      `;
    }
  }}
  right: ${({ $rightPosition }): string => ($rightPosition ? '4px' : 'auto')};
  left: ${({ $leftPosition }): string => ($leftPosition ? '4px' : 'auto')};
  padding: 0 4px;
  font-size: 15px;
`;
