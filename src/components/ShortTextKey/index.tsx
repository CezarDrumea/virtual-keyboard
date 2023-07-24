import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { KeyContainer } from '../../common/styledCommon';
import { ShortContent } from './styled';
import { useTypedSelector } from '../../store';
import { setPressedKeys, setReleasedKeys } from '../../store/keyboardSlice';

const ShortTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, ...properties } = props;

  const dispatch = useDispatch();
  const pressedKeys = useTypedSelector((state) => state.keyboard.pressedKeys);
  const releasedKeys = useTypedSelector((state) => state.keyboard.releasedKeys);
  const released = Boolean(releasedKeys[children as string]);
  const pressed = Boolean(pressedKeys[children as string]);
  const timeoutPressRef = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent): void => {
      if (e.key !== children) return;
      clearTimeout(timeoutPressRef.current as number);
      if (pressedKeys[children] === children) return;
      dispatch(setPressedKeys({ keyName: children, keyEventName: e.key }));
    };
    const handleKeyReleased = (e: KeyboardEvent): void => {
      if (e.key !== children) return;
      const setReleasedKeysDelayed = (): void => {
        dispatch(setReleasedKeys({ keyName: children, keyEventName: e.key }));
      };
      timeoutPressRef.current = setTimeout(setReleasedKeysDelayed, 3000);
    };
    window.addEventListener('keydown', handleKeyPressed);
    window.addEventListener('keyup', handleKeyReleased);
    return () => {
      window.removeEventListener('keydown', handleKeyPressed);
      window.removeEventListener('keyup', handleKeyReleased);
    };
  }, [dispatch, children, pressedKeys]);

  const timeoutClickRef = useRef<number | null>(null);
  const handleKeyClicked = (): void => {
    dispatch(
      setPressedKeys({
        keyName: children as string,
        keyEventName: children as string,
      })
    );

    if (timeoutClickRef.current !== null) {
      clearTimeout(timeoutClickRef.current);
    }

    const setReleasedKeysDelayed = (): void => {
      dispatch(
        setReleasedKeys({
          keyName: children as string,
          keyEventName: children as string,
        })
      );
    };

    timeoutClickRef.current = setTimeout(setReleasedKeysDelayed, 3000);
  };

  return (
    <KeyContainer
      {...properties}
      $pressed={pressed}
      $released={released}
      onClick={handleKeyClicked}
    >
      <ShortContent>{children}</ShortContent>
    </KeyContainer>
  );
};
export default ShortTextKey;
