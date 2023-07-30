import { keyboardLayout } from '../../assets/keyboardData';
import KeyboardLeftSideCenter from '../KeyboardLeftSideCenter';
import KeyboardLowerRow from '../KeyboardLowerRow';
import KeyboardRightSideCenter from '../KeyboardRightSideCenter';
import KeyboardUpperRow from '../KeyboardUpperRow';
import { CenterContainer, KeyboardContainer, RepeatBtn, Title, TitleContainer } from './styled';
import useShiftAndCapsLock from '../../hooks/useShiftAndCapsLock';
import useDefaultKeyState from '../../hooks/useDefaultKeyState';

const Keyboard = (): JSX.Element => {
  useShiftAndCapsLock();
  useDefaultKeyState();

  return (
    <>
      <TitleContainer>
        <Title>Virtual Keyboard</Title>
        <RepeatBtn type="button" $disabled>
          Repeat
          <div style={{ fontSize: '11px' }}>coming soon</div>
        </RepeatBtn>
      </TitleContainer>
      <KeyboardContainer>
        <KeyboardUpperRow upperRow={keyboardLayout[0]} />
        <CenterContainer>
          <KeyboardLeftSideCenter keyboardLayout={keyboardLayout} />
          <KeyboardRightSideCenter rightSideKeys={keyboardLayout[15]} />
        </CenterContainer>
        <KeyboardLowerRow />
      </KeyboardContainer>
    </>
  );
};
export default Keyboard;
