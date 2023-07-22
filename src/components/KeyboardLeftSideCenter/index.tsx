import ShortTextKey from '../ShortTextKey';
import LongTextKey from '../LongTextKey';
import { LeftSideContainer } from './styled';
import { KeyboardRow } from '../../common/styledCommon';

const KeyboardLeftSideCenter = ({keyboardData}: {keyboardData: string[][]}) => {
  return (
    <LeftSideContainer>
      <KeyboardRow>
        {keyboardData[1].map((keyName) => (
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
        {keyboardData[3].map((keyName) => (
          <ShortTextKey key={keyName}>{keyName}</ShortTextKey>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        <LongTextKey $width="105px" $leftPosition>
          caps lock
        </LongTextKey>
        {keyboardData[5].map((keyName) => (
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
        {keyboardData[7].map((keyName) => (
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
