import ShortTextKey from '../ShortTextKey';
import LongTextKey from '../LongTextKey';
import { LeftSideContainer } from './styled';
import { KeyboardRow } from '../../common/styledCommon';
import { useTypedSelector } from '../../store';

const KeyboardLeftSideCenter = ({ keyboardData }: { keyboardData: string[][] }): JSX.Element => {
  const shiftPressed = useTypedSelector((state) => {
    return state.keyboard.shiftPressed;
  });
  const CapsLockEnabled = useTypedSelector((state) => {
    return state.keyboard.capsLockEnabled;
  });
  const getRowIndex = (index: number): number => {
    return index + ((+shiftPressed + +CapsLockEnabled) % 2);
  };

  return (
    <LeftSideContainer>
      <KeyboardRow>
        {keyboardData[getRowIndex(1)].map((keyName) => {
          return <ShortTextKey key={keyName}>{keyName}</ShortTextKey>;
        })}
        <LongTextKey $width="90px" $rightPosition>
          delete
        </LongTextKey>
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="90px" $leftPosition>
          tab
        </LongTextKey>
        {keyboardData[getRowIndex(3)].map((keyName) => {
          return <ShortTextKey key={keyName}>{keyName}</ShortTextKey>;
        })}
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="105px" $leftPosition>
          caps lock
        </LongTextKey>
        {keyboardData[getRowIndex(5)].map((keyName) => {
          return <ShortTextKey key={keyName}>{keyName}</ShortTextKey>;
        })}
        <LongTextKey $width="105px" $rightPosition>
          return
        </LongTextKey>
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="135px" $leftPosition>
          shift
        </LongTextKey>
        {keyboardData[getRowIndex(7)].map((keyName) => {
          return <ShortTextKey key={keyName}>{keyName}</ShortTextKey>;
        })}
        <LongTextKey $width="135px" $rightPosition>
          shift
        </LongTextKey>
      </KeyboardRow>
    </LeftSideContainer>
  );
};
export default KeyboardLeftSideCenter;
