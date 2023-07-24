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
  const CapsLockEnabled = useTypedSelector((state) => state.keyboard.capsLockEnabled);

  const getRowIndex = (index: number): number => index + (+shiftPressed ^ +CapsLockEnabled);

  return (
    <LeftSideContainer>
      <KeyboardRow>
        {keyboardLayout[getRowIndex(1)].map((keyName) => (
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
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="105px" $leftPosition>
          caps lock
        </LongTextKey>
        {keyboardLayout[getRowIndex(5)].map((keyName) => (
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
        {keyboardLayout[getRowIndex(7)].map((keyName) => (
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
