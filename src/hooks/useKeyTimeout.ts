import { useEffect, useRef } from 'react';
import { setKeysToRepeat, setTrigeredKeys } from '../store/keyboardSlice';
import { useAppDispatch, useTypedSelector } from '../store';
import triggerKeyboardEvent from '../helpers/triggerKeyboardEvent';

const useKeyTimeout = (
  keyComputedName: string,
  otherKeyName = keyComputedName
): [boolean, boolean, () => void] => {
  const dispatch = useAppDispatch();
  const pressedKeys = useTypedSelector((state) => state.keyboard.pressedKeys);
  const releasedKeys = useTypedSelector((state) => state.keyboard.releasedKeys);
  const capsLockEnabled = useTypedSelector((state) => state.keyboard.capsLockEnabled);
  // returned values
  const released = Boolean(releasedKeys[otherKeyName]);
  const pressed = Boolean(pressedKeys[otherKeyName]);
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent): void => {
      if (e.key !== keyComputedName) return;
      clearTimeout(timeoutRef.current as number);
      if (pressedKeys[keyComputedName] === keyComputedName) return;
      dispatch(setKeysToRepeat(e.key));
      dispatch(
        setTrigeredKeys({ stateProp: 'pressedKeys', keyName: keyComputedName, keyEventName: e.key })
      );
    };
    const handleKeyReleased = (e: KeyboardEvent): void => {
      if (e.key !== keyComputedName) return;
      const setReleasedKeysDelayed = (): void => {
        dispatch(
          setTrigeredKeys({
            stateProp: 'releasedKeys',
            keyName: keyComputedName,
            keyEventName: e.key,
          })
        );
      };
      timeoutRef.current = setTimeout(setReleasedKeysDelayed, 3000);
    };
    window.addEventListener('keydown', handleKeyPressed);
    window.addEventListener('keyup', handleKeyReleased);
    return (): void => {
      window.removeEventListener('keydown', handleKeyPressed);
      window.removeEventListener('keyup', handleKeyReleased);
    };
  }, [dispatch, pressedKeys, keyComputedName]);

  const handleKeyClicked = (): void => {
    if (otherKeyName === 'CapsLock')
      triggerKeyboardEvent('keydown', 'modifierCapsLock', !capsLockEnabled);
    if (otherKeyName === 'Shift') triggerKeyboardEvent('keydown', 'shiftKey', true);
    dispatch(setKeysToRepeat(otherKeyName));
    dispatch(
      setTrigeredKeys({
        stateProp: 'pressedKeys',
        keyName: otherKeyName,
        keyEventName: otherKeyName,
      })
    );

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    const setReleasedKeysDelayed = (): void => {
      if (otherKeyName === 'Shift') triggerKeyboardEvent('keyup', 'shiftKey', false);
      dispatch(
        setTrigeredKeys({
          stateProp: 'releasedKeys',
          keyName: otherKeyName,
          keyEventName: otherKeyName,
        })
      );
    };

    timeoutRef.current = setTimeout(setReleasedKeysDelayed, 3000);
  };

  return [pressed, released, handleKeyClicked];
};

export default useKeyTimeout;
