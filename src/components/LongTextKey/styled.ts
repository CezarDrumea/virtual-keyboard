import styled from 'styled-components';

export const LongContent = styled.div<{ $rightPosition?: boolean; $leftPosition?: boolean; $centered?: boolean; $topSticked?: boolean }>`
  position: absolute;
  bottom: ${({ $centered }) => ($centered ? 'auto' : '12px')};
  top: ${({ $topSticked }) => ($topSticked ? '12px' : 'auto')};
  right: ${({ $rightPosition }) => ($rightPosition ? '4px' : 'auto')};
  left: ${({ $leftPosition }) => ($leftPosition ? '4px' : 'auto')};
  padding: 0 4px;
  font-size: 15px;
`;
