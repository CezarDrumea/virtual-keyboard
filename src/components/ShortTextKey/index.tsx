import { KeyContainer } from '../../common/styledCommon';
import { ShortContent } from './styled';

const ShortTextKey = ({ children, $height, $width, $bgColor, $color }: keyboardKeyInterface) => {
  return (
    <KeyContainer $height={$height} $width={$width} $bgColor={$bgColor} $color={$color}>
      <ShortContent>{children}</ShortContent>
    </KeyContainer>
  );
};
export default ShortTextKey;
