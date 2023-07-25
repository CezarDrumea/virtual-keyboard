import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useTypedSelector } from '../store';
import { emptyReleasedKeys } from '../store/keyboardSlice';

const useDefaultKeyState = (): void => {
  const dispatch = useDispatch();
  const pressedKeys = useTypedSelector((state) => state.keyboard.pressedKeys);
  const releasedKeys = useTypedSelector((state) => state.keyboard.releasedKeys);
  const pressedKeysLenght = Object.keys(pressedKeys).length;
  const releasedKeysLenght = Object.keys(releasedKeys).length;
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    clearTimeout(timeoutRef.current as number);
    if (pressedKeysLenght !== 0) return;
    timeoutRef.current = setTimeout(() => {
      dispatch(emptyReleasedKeys());
    }, 60000);
  }, [dispatch, pressedKeysLenght, releasedKeysLenght]);
};

export default useDefaultKeyState;
