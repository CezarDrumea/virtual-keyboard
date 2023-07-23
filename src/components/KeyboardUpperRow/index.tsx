import { KeyContainer, KeyboardRow } from '../../common/styledCommon';
import EjectSVG from '../../assets/EjectSVG';
import LongTextKey from '../LongTextKey';

const KeyboardUpperRow = ({ upperRow }: { upperRow: string[] }): JSX.Element => {
  return (
    <KeyboardRow>
      {upperRow.map((keyName) => {
        return (
          <LongTextKey key={keyName} $height="30px" $width="62px" $centered>
            {keyName}
          </LongTextKey>
        );
      })}
      <KeyContainer $height="30px" $width="62px" $bgColor="gray">
        <EjectSVG fill="white" />
      </KeyContainer>
    </KeyboardRow>
  );
};
export default KeyboardUpperRow;
