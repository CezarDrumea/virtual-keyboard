import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTypedSelector } from '../store';
import { setKeyModifier } from '../store/keyboardSlice';

const useShiftAndCapsLock = (): void => {
  const dispatch = useDispatch();
  const shiftStatus = useTypedSelector((state) => state.keyboard.shiftPressed);
  const capsLockStatus = useTypedSelector((state) => state.keyboard.capsLockEnabled);
  useEffect(() => {
    const handleShiftPress = (e: KeyboardEvent): void => {
      if (shiftStatus === e.getModifierState('Shift')) return;
      dispatch(setKeyModifier({ stateProp: 'shiftPressed', type: e.getModifierState('Shift') }));
    };
    window.addEventListener('keydown', handleShiftPress);
    window.addEventListener('keyup', handleShiftPress);
    return (): void => {
      window.removeEventListener('keydown', handleShiftPress);
      window.removeEventListener('keyup', handleShiftPress);
    };
  }, [dispatch, shiftStatus]);

  useEffect(() => {
    const handleCapsLockPress = (e: KeyboardEvent): void => {
      if (capsLockStatus === e.getModifierState('CapsLock')) return;
      dispatch(
        setKeyModifier({ stateProp: 'capsLockEnabled', type: e.getModifierState('CapsLock') })
      );
    };
    window.addEventListener('keydown', handleCapsLockPress);
    return (): void => window.removeEventListener('keydown', handleCapsLockPress);
  }, [dispatch, capsLockStatus]);
};

export default useShiftAndCapsLock;
