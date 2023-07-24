import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { KeyContainer } from '../../common/styledCommon';
import { LongContent } from './styled';
import { useTypedSelector } from '../../store';
import { setPressedKeys, setReleasedKeys } from '../../store/keyboardSlice';

interface keyObjectInterface {
  esc: string;
  [key: string]: string;
}
const keyObject: keyObjectInterface = {
  esc: 'Escape',
  control: 'Control',
  shift: 'Shift',
  'caps lock': 'CapsLock',
  return: 'Enter',
  delete: 'Backspace',
  option: 'Alt',
  'print screen': 'PrintScreen',
  'scroll lock': 'ScrollLock',
  pause: 'Pause',
  insert: 'Insert',
  home: 'GoHome',
  'page up': 'PageUp',
  'page down': 'PageDown',
  end: 'End',
  ' ': ' ',
};

const LongTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, $height, $width, $bgColor, $color, ...contentProps } = props;
  const stringKeyEventName = keyObject[children as string];
  const containerProps = { $height, $width, $bgColor, $color };
  const dispatch = useDispatch();
  const pressedKeys = useTypedSelector((state) => state.keyboard.pressedKeys);
  const releasedKeys = useTypedSelector((state) => state.keyboard.releasedKeys);
  const released = Boolean(releasedKeys[stringKeyEventName]);
  const pressed = Boolean(pressedKeys[stringKeyEventName]);
  const timeoutPressRef = useRef<number | null>(null);
  useEffect(() => {
    const handleKeyPressed = (e: KeyboardEvent): void => {
      if (e.key !== stringKeyEventName) return;
      clearTimeout(timeoutPressRef.current as number);
      if (pressedKeys[stringKeyEventName] === stringKeyEventName) return;
      dispatch(setPressedKeys({ keyName: stringKeyEventName, keyEventName: e.key }));
    };
    const handleKeyReleased = (e: KeyboardEvent): void => {
      if (e.key !== stringKeyEventName) return;
      const setReleasedKeysDelayed = (): void => {
        dispatch(setReleasedKeys({ keyName: stringKeyEventName, keyEventName: e.key }));
      };
      timeoutPressRef.current = setTimeout(setReleasedKeysDelayed, 3000);
    };
    window.addEventListener('keydown', handleKeyPressed);
    window.addEventListener('keyup', handleKeyReleased);
    return () => {
      window.removeEventListener('keydown', handleKeyPressed);
      window.removeEventListener('keyup', handleKeyReleased);
    };
  }, [dispatch, children, pressedKeys, stringKeyEventName]);

  const timeoutClickRef = useRef<number | null>(null);
  const handleKeyClicked = (): void => {
    dispatch(
      setPressedKeys({
        keyName: stringKeyEventName,
        keyEventName: stringKeyEventName,
      })
    );

    if (timeoutClickRef.current !== null) {
      clearTimeout(timeoutClickRef.current);
    }

    const setReleasedKeysDelayed = (): void => {
      dispatch(
        setReleasedKeys({
          keyName: stringKeyEventName,
          keyEventName: stringKeyEventName,
        })
      );
    };

    timeoutClickRef.current = setTimeout(setReleasedKeysDelayed, 3000);
  };

  return (
    <KeyContainer
      {...containerProps}
      $pressed={pressed}
      $released={released}
      onClick={handleKeyClicked}
    >
      <LongContent {...contentProps}>{children}</LongContent>
    </KeyContainer>
  );
};
export default LongTextKey;
