import { KeyboardRow } from "../../common/styledCommon";
import ArrowKeys from "../ArrowKeys";
import LongTextKey from "../LongTextKey";

const KeyboardLowerRow = () => {
  return (
    <KeyboardRow>
      <LongTextKey $height="68px" $bgColor="gray" $color="white" $leftPosition>
        fn
      </LongTextKey>
      <LongTextKey $height="68px">control</LongTextKey>
      <LongTextKey $height="68px">option</LongTextKey>
      <LongTextKey $height="68px" $width="75px">
        command
      </LongTextKey>
      <LongTextKey $height="68px" $width="322px">
        {' '}
      </LongTextKey>
      <LongTextKey $height="68px" $width="75px">
        command
      </LongTextKey>
      <LongTextKey $height="68px">option</LongTextKey>
      <ArrowKeys />
    </KeyboardRow>
  );
}
export default KeyboardLowerRow