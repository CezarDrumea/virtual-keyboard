import ShortTextKey from '../ShortTextKey';
import LongTextKey from '../LongTextKey';
import { LeftSideContainer } from './styled';
import { KeyboardRow } from '../../common/styledCommon';
import { useTypedSelector } from '../../store';

const KeyboardLeftSideCenter = ({ keyboardData }: { keyboardData: string[][] }): JSX.Element => {
  const shiftPressed = useTypedSelector((state) => {
    return state.keyboard.shiftPressed;
  });

  return (
    <LeftSideContainer>
      <KeyboardRow>
        {keyboardData[1 + Number(shiftPressed)].map((keyName) => {
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
        {keyboardData[3 + Number(shiftPressed)].map((keyName) => {
          return <ShortTextKey key={keyName}>{keyName}</ShortTextKey>;
        })}
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="105px" $leftPosition>
          caps lock
        </LongTextKey>
        {keyboardData[5 + Number(shiftPressed)].map((keyName) => {
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
        {keyboardData[7 + Number(shiftPressed)].map((keyName) => {
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
