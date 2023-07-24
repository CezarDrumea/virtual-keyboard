import { KeyContainer, KeyboardRow } from '../../common/styledCommon';
import EjectSVG from '../../assets/EjectSVG';
import LongTextKey from '../LongTextKey';

const KeyboardUpperRow = ({ upperRow }: { upperRow: string[] }): JSX.Element => (
  <KeyboardRow>
    {upperRow.map((keyName) => (
      <LongTextKey key={keyName} $height="30px" $width="62px" $centered>
        {keyName}
      </LongTextKey>
    ))}
    <KeyContainer $height="30px" $width="62px" $bgColor="gray" id="eject">
      <EjectSVG fill="white" />
    </KeyContainer>
  </KeyboardRow>
);
export default KeyboardUpperRow;
