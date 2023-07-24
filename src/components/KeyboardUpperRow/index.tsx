import LongTextKey from '../LongTextKey';
import IconKey from '../IconKey';
import { KeyboardRow } from '../../common/styledCommon';
import { ejectSvg } from '../../assets/svgStringCode';

const KeyboardUpperRow = ({ upperRow }: { upperRow: string[] }): JSX.Element => (
  <KeyboardRow>
    {upperRow.map((keyName) => (
      <LongTextKey key={keyName} $height="30px" $width="62px" $centered>
        {keyName}
      </LongTextKey>
    ))}
    <IconKey id="Eject" svg={ejectSvg} $height="30px" $width="62px" $bgGray $whiteIcon />
  </KeyboardRow>
);
export default KeyboardUpperRow;
