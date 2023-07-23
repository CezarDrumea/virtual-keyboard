import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import keyboardData from '../../assets/keyboardData';
import KeyboardLeftSideCenter from '../KeyboardLeftSideCenter';
import KeyboardLowerRow from '../KeyboardLowerRow';
import KeyboardRightSideCenter from '../KeyboardRightSideCenter';
import KeyboardUpperRow from '../KeyboardUpperRow';
import { CenterContainer, KeyboardContainer } from './styled';
import { setCapsLockClicked, setShiftPressed } from '../../store/keyboardSlice';
import { useTypedSelector } from '../../store';

const Keyboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const shiftStatus = useTypedSelector((state) => {
    return state.keyboard.shiftPressed;
  });
  const capsLockStatus = useTypedSelector((state) => {
    return state.keyboard.capsLockEnabled;
  });

  useEffect(() => {
    const handleShiftPress = (e: KeyboardEvent): void => {
      if (shiftStatus === e.shiftKey) return;
      dispatch(setShiftPressed(e.shiftKey));
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
    return () => {
      return window.removeEventListener('keydown', handleCapsLockClick);
    };
  }, [dispatch, capsLockStatus]);

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
