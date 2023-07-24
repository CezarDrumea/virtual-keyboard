import ShortTextKey from '../ShortTextKey';
import LongTextKey from '../LongTextKey';
import { LeftSideContainer } from './styled';
import { KeyboardRow } from '../../common/styledCommon';
import { useTypedSelector } from '../../store';

const KeyboardLeftSideCenter = ({
  keyboardLayout,
}: {
  keyboardLayout: string[][];
}): JSX.Element => {
  const shiftPressed = useTypedSelector((state) => state.keyboard.shiftPressed);
  const capsLockEnabled = useTypedSelector((state) => state.keyboard.capsLockEnabled);
  // the function uses the xor operator (^), it does the same thing as (... + ...) % 2
  const getRowIndex = (index: number): number => index + (+shiftPressed ^ +capsLockEnabled);
  const getNoCapsRowIndex = (index: number): number => index + +shiftPressed;

  return (
    <LeftSideContainer>
      <KeyboardRow>
        {keyboardLayout[getNoCapsRowIndex(1)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
        <LongTextKey $width="90px" $rightPosition>
          delete
        </LongTextKey>
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="90px" $leftPosition>
          tab
        </LongTextKey>
        {keyboardLayout[getRowIndex(3)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
        {keyboardLayout[getNoCapsRowIndex(5)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="105px" $leftPosition>
          caps lock
        </LongTextKey>
        {keyboardLayout[getRowIndex(7)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
        {keyboardLayout[getNoCapsRowIndex(9)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
        <LongTextKey $width="105px" $rightPosition>
          return
        </LongTextKey>
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="135px" $leftPosition>
          shift
        </LongTextKey>
        {keyboardLayout[getRowIndex(11)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
        {keyboardLayout[getNoCapsRowIndex(13)].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
        <LongTextKey $width="135px" $rightPosition>
          shift
        </LongTextKey>
      </KeyboardRow>
    </LeftSideContainer>
  );
};
export default KeyboardLeftSideCenter;
