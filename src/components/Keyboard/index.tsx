import keyboardData from '../../assets/keyboardData';
import KeyboardLeftSideCenter from '../KeyboardLeftSideCenter';
import KeyboardLowerRow from '../KeyboardLowerRow';
import KeyboardRightSideCenter from '../KeyboardRightSideCenter';
import KeyboardUpperRow from '../KeyboardUpperRow';
import { CenterContainer, KeyboardContainer } from './styled';

const Keyboard = () => {
  return (
    <KeyboardContainer>
      <KeyboardUpperRow upperRow={keyboardData[0]} />
      <CenterContainer>
        <KeyboardLeftSideCenter keyboardData={keyboardData} />
        <KeyboardRightSideCenter rightSideKeys={keyboardData[9]} />
      </CenterContainer>
      <KeyboardLowerRow />
    </KeyboardContainer>
  );
};
export default Keyboard;
