import LongTextKey from "../LongTextKey";
import { RightSideContainer } from "./styled"

const KeyboardRightSideCenter = ({rightSideKeys}: {rightSideKeys: string[]}) => {
  return (
    <RightSideContainer>
      {rightSideKeys.map((keyName) => (
        <LongTextKey key={keyName} $centered>
          {keyName}
        </LongTextKey>
      ))}
    </RightSideContainer>
  );
}
export default KeyboardRightSideCenter