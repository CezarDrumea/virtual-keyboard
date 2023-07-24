import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { keyboardLayout } from '../../assets/keyboardData';
import KeyboardLeftSideCenter from '../KeyboardLeftSideCenter';
import KeyboardLowerRow from '../KeyboardLowerRow';
import KeyboardRightSideCenter from '../KeyboardRightSideCenter';
import KeyboardUpperRow from '../KeyboardUpperRow';
import { CenterContainer, KeyboardContainer } from './styled';
import { setCapsLockClicked, setShiftPressed } from '../../store/keyboardSlice';
import { useTypedSelector } from '../../store';

const Keyboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const shiftStatus = useTypedSelector((state) => state.keyboard.shiftPressed);
  const capsLockStatus = useTypedSelector((state) => state.keyboard.capsLockEnabled);

  useEffect(() => {
    const handleShiftPress = (e: KeyboardEvent): void => {
      if (shiftStatus === e.getModifierState('Shift')) return;
      dispatch(setShiftPressed(e.getModifierState('Shift')));
    };
    window.addEventListener('keydown', handleShiftPress);
    window.addEventListener('keyup', handleShiftPress);
    return () => {
      window.removeEventListener('keydown', handleShiftPress);
      window.removeEventListener('keyup', handleShiftPress);
    };
  }, [dispatch, shiftStatus]);

  useEffect(() => {
    const handleCapsLockClick = (e: KeyboardEvent): void => {
      if (capsLockStatus === e.getModifierState('CapsLock')) return;
      dispatch(setCapsLockClicked(e.getModifierState('CapsLock')));
    };
    window.addEventListener('keydown', handleCapsLockClick);
    return () => window.removeEventListener('keydown', handleCapsLockClick);
  }, [dispatch, capsLockStatus]);

  return (
    <KeyboardContainer>
      <KeyboardUpperRow upperRow={keyboardLayout[0]} />
      <CenterContainer>
        <KeyboardLeftSideCenter keyboardLayout={keyboardLayout} />
        <KeyboardRightSideCenter rightSideKeys={keyboardLayout[15]} />
      </CenterContainer>
      <KeyboardLowerRow />
    </KeyboardContainer>
  );
};
export default Keyboard;
