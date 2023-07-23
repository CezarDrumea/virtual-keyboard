import { KeyContainer } from '../../common/styledCommon';
import { LongContent } from './styled';

const LongTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, $height, $width, $bgColor, $color, ...contentProps } = props;
  const containerProps = { $height, $width, $bgColor, $color };

  return (
    <KeyContainer {...containerProps}>
      <LongContent {...contentProps}>{children}</LongContent>
    </KeyContainer>
  );
};
export default LongTextKey;
