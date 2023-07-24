import LongTextKey from '../LongTextKey';
import { RightSideContainer } from './styled';

const KeyboardRightSideCenter = ({ rightSideKeys }: { rightSideKeys: string[] }): JSX.Element => (
  <RightSideContainer>
    {rightSideKeys.map((keyName) => (
      <LongTextKey key={keyName} $topCentered>
        {keyName}
      </LongTextKey>
    ))}
  </RightSideContainer>
);
export default KeyboardRightSideCenter;
