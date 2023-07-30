import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setKeysToRepeat, setTrigeredKeys } from '../store/keyboardSlice';
import triggerKeyboardEvent from '../helpers/triggerKeyboardEvent';
import { useTypedSelector } from '../store';

const useKeyClickTimeout = (keyComputedName: string): VoidFunction => {
  const dispatch = useDispatch();
  const timeoutClickRef = useRef<number | null>(null);
  const capsLockEnabled = useTypedSelector((state) => state.keyboard.capsLockEnabled);
  const handleKeyClicked = (): void => {
    if (keyComputedName === 'CapsLock')
      triggerKeyboardEvent('keydown', 'modifierCapsLock', !capsLockEnabled);
    if (keyComputedName === 'Shift') triggerKeyboardEvent('keydown', 'shiftKey', true);
    dispatch(setKeysToRepeat(keyComputedName));
    dispatch(
      setTrigeredKeys({
        stateProp: 'pressedKeys',
        keyName: keyComputedName,
        keyEventName: keyComputedName,
      })
    );

    if (timeoutClickRef.current !== null) {
      clearTimeout(timeoutClickRef.current);
    }

    const setReleasedKeysDelayed = (): void => {
      if (keyComputedName === 'Shift') triggerKeyboardEvent('keyup', 'shiftKey', false);
      dispatch(
        setTrigeredKeys({
          stateProp: 'releasedKeys',
          keyName: keyComputedName,
          keyEventName: keyComputedName,
        })
      );
    };

    timeoutClickRef.current = setTimeout(setReleasedKeysDelayed, 3000);
  };

  return handleKeyClicked;
};

export default useKeyClickTimeout;
