import LongTextKey from '../LongTextKey';
import IconKey from '../IconKey';
import { KeyboardRow } from '../../common/styledCommon';
import EjectIcon from '../../assets/icons/EjectIcon';

const KeyboardUpperRow = ({ upperRow }: { upperRow: string[] }): JSX.Element => (
  <KeyboardRow>
    {upperRow.map((keyName) => (
      <LongTextKey key={keyName} $height="30px" $width="62px" $centered>
        {keyName}
      </LongTextKey>
    ))}
    <IconKey id="Eject" $height="30px" $width="62px" $bgGray $whiteIcon>
      <EjectIcon />
    </IconKey>
  </KeyboardRow>
);
export default KeyboardUpperRow;
