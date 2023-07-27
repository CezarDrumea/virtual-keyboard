import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setKeysToRepeat, setTrigeredKeys } from '../store/keyboardSlice';

const useKeyClickTimeout = (keyComputedName: string): VoidFunction => {
  const dispatch = useDispatch();
  const timeoutClickRef = useRef<number | null>(null);
  const handleKeyClicked = (): void => {
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
