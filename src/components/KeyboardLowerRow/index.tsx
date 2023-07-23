import { KeyboardRow } from '../../common/styledCommon';
import ArrowKeys from '../ArrowKeys';
import LongTextKey from '../LongTextKey';

const KeyboardLowerRow = (): JSX.Element => {
  const keyHeight = '68px';

  return (
    <KeyboardRow>
      <LongTextKey $height={keyHeight} $bgColor="gray" $color="white" $leftPosition>
        fn
      </LongTextKey>
      <LongTextKey $height={keyHeight}>control</LongTextKey>
      <LongTextKey $height={keyHeight}>option</LongTextKey>
      <LongTextKey $height={keyHeight} $width="75px">
        command
      </LongTextKey>
      <LongTextKey $height={keyHeight} $width="322px">
        {' '}
      </LongTextKey>
      <LongTextKey $height={keyHeight} $width="75px">
        command
      </LongTextKey>
      <LongTextKey $height={keyHeight}>option</LongTextKey>
      <ArrowKeys />
    </KeyboardRow>
  );
};
export default KeyboardLowerRow;
