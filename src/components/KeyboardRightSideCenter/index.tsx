import LongTextKey from '../LongTextKey';
import { RightSideContainer } from './styled';

const KeyboardRightSideCenter = ({ rightSideKeys }: { rightSideKeys: string[] }): JSX.Element => {
  return (
    <RightSideContainer>
      {rightSideKeys.map((keyName) => {
        return (
          <LongTextKey key={keyName} $centered $topSticked>
            {keyName}
          </LongTextKey>
        );
      })}
    </RightSideContainer>
  );
};
export default KeyboardRightSideCenter;
