import styled from 'styled-components';

export const LongContent = styled.div<{
  $rightPosition?: boolean;
  $leftPosition?: boolean;
  $centered?: boolean;
  $topSticked?: boolean;
}>`
  position: absolute;
  bottom: ${({ $centered }): string => {
    return $centered ? 'auto' : '12px';
  }};
  top: ${({ $topSticked }): string => {
    return $topSticked ? '12px' : 'auto';
  }};
  right: ${({ $rightPosition }): string => {
    return $rightPosition ? '4px' : 'auto';
  }};
  left: ${({ $leftPosition }): string => {
    return $leftPosition ? '4px' : 'auto';
  }};
  padding: 0 4px;
  font-size: 15px;
`;
