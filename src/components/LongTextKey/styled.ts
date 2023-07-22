import styled from 'styled-components';

export const LongContent = styled.div<{ $rightPosition?: boolean; $leftPosition?: boolean; $centered?: boolean }>`
  position: absolute;
  bottom: ${({ $centered }) => ($centered ? 'auto' : '12px')};
  right: ${({ $rightPosition }) => ($rightPosition ? '4px' : 'auto')};
  left: ${({ $leftPosition }) => ($leftPosition ? '4px' : 'auto')};
  padding: 0 4px;
  font-size: 15px;
`;
