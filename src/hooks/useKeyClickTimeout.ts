import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPressedKeys, setReleasedKeys } from '../store/keyboardSlice';

const useKeyClickTimeout = (keyComputedName: string): VoidFunction => {
  const dispatch = useDispatch();
  const timeoutClickRef = useRef<number | null>(null);
  const handleKeyClicked = (): void => {
    dispatch(
      setPressedKeys({
        keyName: keyComputedName,
        keyEventName: keyComputedName,
      })
    );

    if (timeoutClickRef.current !== null) {
      clearTimeout(timeoutClickRef.current);
    }

    const setReleasedKeysDelayed = (): void => {
      dispatch(
        setReleasedKeys({
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
