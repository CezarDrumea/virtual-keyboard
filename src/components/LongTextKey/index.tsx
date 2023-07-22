import { KeyContainer } from '../../common/styledCommon';
import { LongContent } from './styled';

const LongTextKey = ({
  children,
  $height,
  $width,
  $bgColor,
  $color,
  $rightPosition,
  $leftPosition,
  $centered,
  $topSticked
}: keyboardKeyInterface) => {
  return (
    <KeyContainer $height={$height} $width={$width} $bgColor={$bgColor} $color={$color}>
      <LongContent $rightPosition={$rightPosition} $leftPosition={$leftPosition} $centered={$centered} $topSticked={$topSticked}>
        {children}
      </LongContent>
    </KeyContainer>
  );
};
export default LongTextKey;
