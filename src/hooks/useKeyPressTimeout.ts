import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setKeysToRepeat, setTrigeredKeys } from '../store/keyboardSlice';
import { useTypedSelector } from '../store';

const useKeyPressTimeout = (keyComputedName: string, otherKeyName = keyComputedName): boolean[] => {
  const dispatch = useDispatch();
  const pressedKeys = useTypedSelector((state) => state.keyboard.pressedKeys);
  const releasedKeys = useTypedSelector((state) => state.keyboard.releasedKeys);
  // returned values
  const released = Boolean(releasedKeys[otherKeyName]);
  const pressed = Boolean(pressedKeys[otherKeyName]);
  const timeoutPressRef = useRef<number | null>(null);
  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent): void => {
      if (e.key !== keyComputedName) return;
      clearTimeout(timeoutPressRef.current as number);
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
      timeoutPressRef.current = setTimeout(setReleasedKeysDelayed, 3000);
    };
    window.addEventListener('keydown', handleKeyPressed);
    window.addEventListener('keyup', handleKeyReleased);
    return (): void => {
      window.removeEventListener('keydown', handleKeyPressed);
      window.removeEventListener('keyup', handleKeyReleased);
    };
  }, [dispatch, pressedKeys, keyComputedName]);
  return [pressed, released];
};

export default useKeyPressTimeout;
